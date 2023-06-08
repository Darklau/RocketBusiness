export const burger = () => {
		const burger = document.querySelector('.header__top__burger')
		const nav = document.querySelector('.header__bottom')
		burger.addEventListener('click', () => {
			burger.classList.toggle('header__top__burger--active')
			nav.classList.toggle('header__bottom--active')
			document.body.classList.toggle('lock')
		})
	}

