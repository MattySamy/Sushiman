// import images as relative image path won't work with vite/vercel.
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});
const ul = document.querySelector(".trending__list");
const ul2 = document.querySelector(".trending__list-drinks");
const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

ul.innerHTML = trendingSushis
  .map(
    (sushi) => `
    <li class="trending__list-element">
        <div class="trending__icon flex-center">
            <img src="../assets/check.svg" alt="check">
        </div>
        <p>${sushi}</p>
    </li>`
  )
  .join("");

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

ul2.innerHTML = trendingDrinks
  .map(
    (drink) => `
    <li class="trending__list-element">
        <div class="trending__icon flex-center">
            <img src="../assets/check.svg" alt="check">
        </div>
        <p>${drink}</p>
    </li>`
  )
  .join("");

// const cards = [
//   {
//     imgSrc: sushi12,
//     alt: "sushi-12",
//     title: "Chezu Sushi",
//     rating: "4.8",
//     price: "$21.00",
//   },
//   {
//     imgSrc: sushi11,
//     alt: "sushi-11",
//     title: "Originale Sushi",
//     rating: "4.8",
//     price: "$21.00",
//     active: true,
//   },
//   {
//     imgSrc: sushi10,
//     alt: "sushi-10",
//     title: "Ramen Legendo",
//     rating: "4.8",
//     price: "$21.00",
//   },
// ];
