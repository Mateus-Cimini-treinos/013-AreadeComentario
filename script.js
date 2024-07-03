const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const today = new Date();
const monthNames = [
    "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",  
];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
    header.innerHTML =
    '<img src="https://homensquesecuidam.com/wp-content/uploads/2017/10/high-fade-d-homens-que-se-cuidam-por-juan-alves.jpg" alt="" />';
    title.innerHTML = "Corte pela ordem";
    excerpt.innerHTML = 
    " Corte foi muito rapido sem fila e de qualidade";

profile_img.innerHTML = 
'<img src="https://homensquesecuidam.com/wp-content/uploads/2019/11/cortes-de-cabelo-masculino-liso-para-2020-h-por-juan-alves-homens-que-se-cuidam.jpg" alt="" />';
name.innerHTML = "Mateus Cimini";
   date.innerHTML = `${
    monthNames[today.getMonth()]
} ${today.getDate()}, ${today.getFullYear()}`;
animated_bgs.forEach((background) =>
  background.classList.remove("animated-bg")
);
animated_bg_texts.forEach((background) =>
    background.classList.remove("animated-bg-text")
  );
};

setTimeout(getData, 2500)