(function () {
	const fullTitle = document.querySelector("title").innerText;
	const title = fullTitle.replace(' - Moroccan Adventures', '')
	const navBar = document.querySelector(".navigation");
	const srOnly = '<span class="sr-only">(current)</span>';

	function addActive() {
		const navList = document.getElementsByClassName("navigation__list")[0].children;

		for (i = 0; i < navList.length; i++) {
			if (navList[i].innerHTML.includes(title)) {
				navList[i].innerHTML =
					'<a class="navigation__link" href="#">' + title + " " + srOnly + "</a>";
				navList[i].firstElementChild.classList.add("navigation__link--highlight");
			}
		}

		const dropdownNavList = document.getElementsByClassName("navigation__dropdown-list")[0].children;

		for (i = 0; i < dropdownNavList.length; i++) {
			if (dropdownNavList[i].innerHTML.includes(title)) {
				dropdownNavList[i].innerHTML =
					'<a class="navigation__dropdown-link" href="#">' + title + " " + srOnly + "</a>";
				dropdownNavList[i].firstElementChild.classList.add("navigation__dropdown-link--highlight");
			}
		}
	}

	navBar.innerHTML = `
	<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
	<nav class="navigation__dropdown-menu">
		<ul class="navigation__dropdown-list">
			<li class="navigation__dropdown-item">
				<a href="index.html" class="navigation__dropdown-link">Home</a>
			</li>
			<li class="navigation__dropdown-item">
				<a href="erg-chebbi.html" class="navigation__dropdown-link">Erg Chebbi</a>
			</li>
			<li class="navigation__dropdown-item">
				<a href="ait-benhaddou.html" class="navigation__dropdown-link">Aït Benhaddou</a>
			</li>
			<li class="navigation__dropdown-item">
				<a href="chefchaouen.html" class="navigation__dropdown-link">Chefchaouen</a>
			</li>
			<li class="navigation__dropdown-item">
				<a href="contact.html" class="navigation__dropdown-link">Contact</a>
			</li>
		</ul>
	</nav>
	<label for="navi-toggle" class="navigation__button" tabindex="1" aria-label="Toggle navigation">
		<span class="navigation__icon">&nbsp;</span>
	</label>
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
	`;

	addActive();
})();
