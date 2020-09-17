(function () {
	const fullTitle = document.querySelector("title").innerText;
	const title = fullTitle.replace(' - Moroccan Adventures', '')
	const navBar = document.querySelector(".navbar");
	const srOnly = '<span class="sr-only">(current)</span>';

	function addActive() {
		const navList = document.getElementsByClassName("navbar-nav")[0].children;

		for (i = 0; i < navList.length; i++) {
			if (navList[i].innerHTML.includes(title)) {
				navList[i].innerHTML =
					'<a class="nav-link" href="#">' + title + " " + srOnly + "</a>";
				navList[i].classList = "nav-item highlight";
			}
		}
	}

	navBar.innerHTML = `
	<button	
		class="navbar-toggler" 
		type="button" 
		data-toggle="collapse" 
		data-target="#navbarToggler" 
		aria-controls="navbarToggler" 
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon"></span>
	</button>
	<a class="navbar-brand" href="#">Moroccan Adventures</a>
	<div class="collapse navbar-collapse" id="navbarToggler">
		
		<ul class="navbar-nav mx-auto mr-auto mt-2 mt-lg-0">
			<li class="nav-item">
				<a class="nav-link black-text" href="index.html">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link black-text" href="erg-chebbi.html">Erg Chebbi</a>
			</li>
			<li class="nav-item">
				<a class="nav-link black-text" href="ait-benhaddou.html">Aït Benhaddou</a>
			</li>
			<li class="nav-item">
				<a class="nav-link black-text" href="chefchaouen.html">Chefchaouen</a>
			</li>
			<li class="nav-item">
			<a class="nav-link black-text" href="contact.html">Contact</a>
		</li>
		</ul>
	</div>
	`;

	addActive();
})();
