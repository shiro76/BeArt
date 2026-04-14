const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");

const card1img = document.querySelector(".card1 img");
const card2img = document.querySelector(".card2 img");
const card3img = document.querySelector(".card3 img");
const card4img = document.querySelector(".card4 img");
const card5img = document.querySelector(".card5 img");

const cardBox1 = document.querySelector(".card_box1");
const cardBox2 = document.querySelector(".card_box2");
const cardBox3 = document.querySelector(".card_box3");
const cardBox4 = document.querySelector(".card_box4");
const cardBox5 = document.querySelector(".card_box5");


// cardBox1.addEventListener("mouseenter", () => {
//   card1.style.height = "92%";
// });

// cardBox1.addEventListener("mouseleave", () => {
//   card1.style.height = "0%";
// });

const hText = ["US", "GraphiqueDesign", "Development", "Gaming", "Contact"]
const headerText1 = document.querySelector(".header_text1");
const headerText2 = document.querySelector(".header_text2");
const headerText3 = document.querySelector(".header_text3");
const headerText4 = document.querySelector(".header_text4");
const headerText5 = document.querySelector(".header_text5");

cardBox1.addEventListener("mouseenter", () => {
  card1.style.transform = "scaleY(1)";
  headerText1.style.border = "unset";
  headerText1.textContent = hText[0];
});
cardBox1.addEventListener("mouseleave", () => {
  card1.style.transform = "scaleY(0)";
  headerText1.style.border = "solid 1px #3f4761";
  headerText1.textContent = "";
});

cardBox2.addEventListener("mouseenter", () => {
  card2.style.transform = "scaleY(1)";
  headerText2.style.border = "unset";
  headerText2.textContent = hText[1];
});
cardBox2.addEventListener("mouseleave", () => {
  card2.style.transform = "scaleY(0)";
  headerText2.style.border = "solid 1px #3f4761";
  headerText2.textContent = "";
});

cardBox3.addEventListener("mouseenter", () => {
  card3.style.transform = "scaleY(1)";
  headerText3.style.border = "unset";
  headerText3.textContent = hText[2];
});
cardBox3.addEventListener("mouseleave", () => {
  card3.style.transform = "scaleY(0)";
  headerText3.style.border = "solid 1px #3f4761";
  headerText3.textContent = "";
});

cardBox4.addEventListener("mouseenter", () => {
  card4.style.transform = "scaleY(1)";
  headerText4.style.border = "unset";
  headerText4.textContent = hText[3];
});
cardBox4.addEventListener("mouseleave", () => {
  card4.style.transform = "scaleY(0)";
  headerText4.style.border = "solid 1px #3f4761";
  headerText4.textContent = "";
});

cardBox5.addEventListener("mouseenter", () => {
  card5.style.transform = "scaleY(1)";
  headerText5.style.border = "unset";
  headerText5.textContent = hText[4];
});
cardBox5.addEventListener("mouseleave", () => {
  card5.style.transform = "scaleY(0)";
  headerText5.style.border = "solid 1px #3f4761";
  headerText5.textContent = "";
});