export const modal = () => {
	const secondButton = document.querySelector('.header__bottom__nav-button')
	const button = document.querySelector('.header__top__contacts__right-button')
	const close = document.querySelector('.modal__form-close')
	const form = document.querySelector('.modal__form')
	const modal = document.querySelector('.modal')


	const toggleModal = () =>{
		modal.classList.toggle('modal--active')
	}

	const lockBody = () => {
		document.body.classList.add('lock')
	}

	const unlockBody = () => {
		document.body.classList.remove('lock')
	}

	const closeBurger = () => {
		const burger = document.querySelector('.header__top__burger')
		burger.classList.remove('header__top__burger--active')
		const nav = document.querySelector('.header__bottom')
		nav.classList.remove('header__bottom--active')
	}


	button.addEventListener('click', (e) => {e.preventDefault(); lockBody(); toggleModal()})
	close.addEventListener('click', (e) => {e.preventDefault();unlockBody(); toggleModal(); console.log(document.body.classList)})
	form.addEventListener('submit', (e) => {e.preventDefault(); unlockBody(); toggleModal(); console.log('submitted')})
	secondButton.addEventListener('click', (e) => {e.preventDefault(); toggleModal(); closeBurger()})
}

