document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("segments");

  const nb = 52;

  const hueStart = 260;
  const hueEnd = 190;

  const segs = [];

  // création
  for (let i = 0; i < nb; i++) {
    const angle = (i * 360) / nb;

    const hue = hueStart + (i / (nb - 1)) * (hueEnd - hueStart);
    const color = `hsl(${hue}, 100%, 60%)`;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", 50);
    line.setAttribute("y1", 5);
    line.setAttribute("x2", 50);
    line.setAttribute("y2", 15);

    line.setAttribute("class", "seg");
    line.setAttribute("transform", `rotate(${angle} 50 50)`);

    //stock couleur
    line.dataset.color = color;

    container.appendChild(line);
    segs.push(line);
  }

  let i = 0;


  const interval = setInterval(() => {
    if (i < segs.length) {
      const seg = segs[i];

      seg.classList.add("on");
      seg.style.stroke = seg.dataset.color;

      i++;
    } else {
      clearInterval(interval); // STOP l'animation

      //pause avant changement de page (optionnel)
      setTimeout(() => {
        window.location.href = "../pages/home.html"; // 
      }, 500);
    }
  }, 120);
});

//   setInterval(() => {
//     if (i < segs.length) {
//       const seg = segs[i];

//       seg.classList.add("on");

//       // IMPORTANT : appliquer couleur seulement ici
//       seg.style.stroke = seg.dataset.color;

//       i++;
//     } else {
//       segs.forEach(s => {
//         s.classList.remove("on");
//         s.style.stroke = "rgba(255,255,255,0.15)";
//       });

//       i = 0;
//     }
//   }, 120);
// });


const messages = [
  "On charge… comme ton café du matin.",
  "Compilation en cours… ou en panique, on verra.",
  "99 bugs dans le code, 99 bugs…",
  "parce que rien ne marche du premier coup.",
  "On optimise tout… sauf le temps de chargement.",
  "Si ça charge lentement, c’est une feature.",
  "Design en cours… oui, on aligne encore un pixel.",
  "Attends… on débat sur le padding.",
  "Chargement des excuses du développeur…"
];

const messageEl = document.getElementById("message");

function changeMessage() {
  // hide avec animation
  messageEl.classList.add("message-hide");

  setTimeout(() => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    messageEl.textContent = random;

    // show avec animation
    messageEl.classList.remove("message-hide");
  }, 300);
}

// start
changeMessage();
setInterval(changeMessage, 2000);

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("segments");
//   const nb = 52;

//   const hueStart = 280; // violet
//   const hueEnd = 200;   // cyan

//   for (let i = 0; i < nb; i++) {
//     const angle = (i * 360) / nb;

//     const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

//     // couleur progressive violet -> cyan
//     const hue = hueStart + (i / (nb - 1)) * (hueEnd - hueStart);
//     const color = `hsl(${hue}, 100%, 55%)`;

//     line.setAttribute("stroke", color);

//     // position segment
//     line.setAttribute("x1", 50);
//     line.setAttribute("y1", 5);
//     line.setAttribute("x2", 50);
//     line.setAttribute("y2", 15);

//     line.setAttribute("class", "seg");
//     line.setAttribute("transform", `rotate(${angle} 50 50)`);

//     container.appendChild(line);
//   }

//   const segs = document.querySelectorAll(".seg");

//   let index = 0;

//   setInterval(() => {
//     if (index < segs.length) {
//       segs[index].classList.add("on");
//       index++;
//     } else {
//       segs.forEach(s => s.classList.remove("on"));
//       index = 0;
//     }
//   }, 30);
// });