(function(){
	const footer = document.querySelector('footer');
	const year = new Date().getFullYear();

	footer.innerHTML = `
	<p>Copyright &copy; ${year} <a href="https://github.com/shard520/MoroccanAdventures" class="footer__link">Simon Hardacre</a></p>
	`
}());	
	