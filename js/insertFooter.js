(function(){
	const footer = document.querySelector('footer');
	const year = new Date().getFullYear();

	footer.innerHTML = `
	<p>Copyright &copy; ${year} Simon Hardacre</p>
	`
}());	
	