
export class Slider{
	constructor(){
		this.activeClass = 'offers__list__item--current'
		this.nextClass = 'offers__list__item--next'
		this.prevClass = 'offers__list__item--prev'
		this.container = document.querySelector(".offers__list")
		this.slides = Array.from(document.querySelectorAll(".offers__list__item"))
		this.slides.forEach(slide => slide.classList.remove(this.activeClass))
		this.slides[0].classList.add(this.activeClass)
		this.currentSLide = 0
		this.previousSlide = this.slides.length - 1
		this.nextSlide = 1
		this.setTotalSlides(this.slides.length)
		this.setCurrentPage(this.currentSLide)
		this.setPrevSlide()
		this.setNextSlide()
	}

	setTotalSlides(length){
		// Определение количества слайдов
		document.querySelector('.offers__controller__pagination-value--total').innerHTML = length
	}


	setCurrentPage(slide){
		// Определение текущего слайда
		document.querySelector('.offers__controller__pagination-value--current').innerHTML = slide + 1
	}

	switchDirection(direction){
		// Переключение направления анимации
		if (direction === 'left'){
			this.container.classList.remove('offers__list--slide-right')
			this.container.classList.add('offers__list--slide-left')
		}
		if (direction === 'right'){
			this.container.classList.remove('offers__list--slide-left')
			this.container.classList.add('offers__list--slide-right')
		}
	}

	toNextSlide(){
		// Переключение на следующий слайд
		this.switchDirection('right')
		this.slides[this.currentSLide].classList.remove(this.activeClass)
		this.currentSLide++
		if (this.currentSLide === this.slides.length){
			this.currentSLide = 0
		}
		this.slides[this.currentSLide].classList.add(this.activeClass)
		this.setCurrentPage(this.currentSLide)
		this.setPrevSlide()
		this.setNextSlide()
	}

	toPrevSlide(){
		// Переключение на предыдущий слайд
		this.switchDirection('left')
		this.slides[this.currentSLide].classList.remove(this.activeClass)
		this.currentSLide--
		if (this.currentSLide < 0){
			this.currentSLide = this.slides.length - 1
		}
		this.slides[this.currentSLide].classList.add(this.activeClass)
		this.setCurrentPage(this.currentSLide)
		this.setPrevSlide()
		this.setNextSlide()
	}

	setPrevSlide(){
		// Определение предыдущего слайда
		this.slides[this.previousSlide].classList.remove(this.prevClass)
		this.previousSlide = this.currentSLide - 1
		if (this.previousSlide < 0){
			this.previousSlide = this.slides.length - 1
		}
		this.slides[this.previousSlide].classList.add(this.prevClass)
	}


	setNextSlide(){
		// Определение следующего слайда
		this.slides[this.nextSlide].classList.remove(this.nextClass)
		this.nextSlide = this.currentSLide + 1
		if (this.nextSlide === this.slides.length){
			this.nextSlide = 0
		}
		this.slides[this.nextSlide].classList.add(this.nextClass)
	}

}


