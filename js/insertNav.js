(function () {
	// Select page title
	const fullTitle = document.querySelector("title").innerText;
	// Remove site name from page title
	const title = fullTitle.replace(' - Moroccan Adventures', '')
	const navBar = document.querySelector(".navigation");
	const srOnly = '<span class="sr-only">(current)</span>';
	
	// Add active page highlight and screen reader element for current page
	function addActive() {
		const navList = document.getElementsByClassName("navigation__list")[0].children;

		for (i = 0; i < navList.length; i++) {
			if (navList[i].innerHTML.includes(title)) {
				navList[i].innerHTML =
					'<a class="navigation__link" href="#">' + title + " " + srOnly + "</a>";
				navList[i].firstElementChild.classList.add("navigation__link--highlight");
			}
		}
	}

	navBar.innerHTML = `
	<span class="navigation__title">Moroccan Adventures</span>
	<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
	<label for="navi-toggle" class="navigation__button" tabindex="1" aria-label="Toggle navigation menu">
		<span class="navigation__icon"></span>
	</label>
	<nav class="navigation__menu">
		<ul class="navigation__list">
			<li class="navigation__item">
				<a href="index.html" class="navigation__link navigation__link--highlight">Home</a>
			</li>
			<li class="navigation__item">
				<a href="erg-chebbi.html" class="navigation__link">Erg Chebbi</a>
			</li>
			<li class="navigation__item">
				<a href="ait-benhaddou.html" class="navigation__link">Aït Benhaddou</a>
			</li>
			<li class="navigation__item">
				<a href="chefchaouen.html" class="navigation__link">Chefchaouen</a>
			</li>
			<li class="navigation__item">
				<a href="contact.html" class="navigation__link">Contact</a>
			</li>
		</ul>
	</nav>
	`;

	const checkbox = document.querySelector('.navigation__checkbox');
	const navBtn = document.querySelector('.navigation__button');
	
	// Toggle nav open or closed when pressing Enter key
    navBtn.addEventListener('keypress', ( (e) => {
        if (e.keyCode === 13 && (checkbox.checked)) {
            checkbox.checked = false;
        } else if (e.keyCode === 13 && (!checkbox.checked)) {
            checkbox.checked = true;
		};
		changeTabbableElements();
    }));

	// Change which elements can get keyboard focus depending on if navigation is open or not
	// Set nav elements to be tabbable if mobile nav is not in use
    function changeTabbableElements() {
		// Select all links in navigation
		const navLinks = document.querySelectorAll('.navigation__link');
		// Select all tabbable elements
		const tabbableElements = document.querySelectorAll('.page-links__link, .footer__link');
		// Select current page nav link
		const highlighted = document.querySelector('.navigation__link--highlight')

        // if navigation is open, make nav links tabbable but not page elements
        if (checkbox.checked) {
            for (i = 0; i < tabbableElements.length; i++) {
                tabbableElements[i].setAttribute('tabindex', '-1');
            };
            for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].removeAttribute('tabindex'); 
            };
        // if navigation is closed, make page elements tabbable but not nav links
        } else {
            for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].setAttribute('tabindex', '-1');
            };
            for (i = 0; i < tabbableElements.length; i++) {
                tabbableElements[i].removeAttribute('tabindex');
            };
		};
		
		// if desktop nav is active set nav elements to be tabbable
		if (window.innerWidth >= 660) {
			for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].setAttribute('tabindex', '0');
            };
		}

		// Prevent current page link from being tabbable or clickable
		highlighted.setAttribute('tabindex', '-1')
		highlighted.addEventListener('click', (e) => {e.preventDefault()} );
    }

	checkbox.onchange = ( () => {changeTabbableElements()} );

	addActive();

    changeTabbableElements();

})();
