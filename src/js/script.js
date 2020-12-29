import SlideNav from "./components/slide.js";
import animarScroll from "./components/animarScroll.js";
import escrever from "./components/maquinaEscrever.js";
import scrollSuave from "./components/scrollSuave.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

window.addEventListener("scroll", animarScroll);

scrollSuave();
