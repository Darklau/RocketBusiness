require('./js/slider')
const {Slider} = require("./js/slider");
const {burger} = require("./js/burger");
const {modal} = require("./js/modal");


document.addEventListener("DOMContentLoaded", () => {
	let slider = new Slider()

	document.querySelector("button.offers__controller-button--next").addEventListener("click", () => {
		slider.toNextSlide()
	})
	document.querySelector(".offers__controller-button--prev").addEventListener("click", () => {
		slider.toPrevSlide()
	})

	burger()
	modal()
})



