# Moroccan Adventures

> Welcome to Moroccan Adventures - a small glimpse into some of the magical wonders that await you in Morocco.


![home header preview](https://raw.githubusercontent.com/shard520/readme_resources/main/MoroccanAdventures/img/home_header_preview.jpg)


## Contents

- [Description](#Description)
- [Features](#Features)
- [Dependencies](#Dependencies)
- [License details](#License)


---


## Description

This site was built to showcase some of the pictures taken during my trips to Morocco and to practice various CSS techniques and static site optimisations.

The first version of the site was thrown together quite quickly using Bootstrap and with minimal thought to page load times, it's saved in the repo under the branch [site-v1](../tree/site-v1).

Version 2 contains a new set of images in webp and jpg format, optimised to various sizes using the ImageMagick CLI. 


---


## Features

The main features of the site are the image galleries, a landscape gallery using a responsive grid set with: 

```css
.landscape-gallery { 
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-template-rows: 1fr; 
}
```

![home page and image gallery demonstration](https://github.com/shard520/readme_resources/raw/main/MoroccanAdventures/gif/home_page_and_ait_img_gallery.gif)


Aspect ratios were handled using a pseudo element before each item:

```css
&::before {
	content: "";
	display: block;
	height: 0;
	width: 0;
	padding-bottom: calc(2/3 * 100%);
}
```


For a mixture of portrait and landscape images, a fixed position gallery was made to emulate a masonry style layout:

![mixed orientation gallery and mobile nav menu demonstration](https://github.com/shard520/readme_resources/raw/main/MoroccanAdventures/gif/chef_gallery_and_mobile_view.gif)


Mobile nav menu was implemented with the checkbox hack with some javascript allowing keyboard users to use the enter key to trigger open/close:

```javascript
// Toggle nav open or closed when pressing Enter key
    navBtn.addEventListener('keypress', ( (e) => {
        if (e.keyCode === 13 && (checkbox.checked)) {
            checkbox.checked = false;
        } else if (e.keyCode === 13 && (!checkbox.checked)) {
            checkbox.checked = true;
		};
		changeTabbableElements();
    }));
```

When the nav menu is open the nav links can be tabbed to and the page elements have their tab index removed, when the nav menu is closed this is reversed. The non-minified version of [insertNav.js](..dev/js/insertNav.js) is included in `dev/js/`


---


## Dependencies

The lightbox popups used in the image galleries use [Parvus](https://github.com/deoostfreese/Parvus) with some styling modifications, the SCSS partial is included in the [vendors](../tree/master/sass/vendors) folder. This was chosen because it's lightweight, accessible and has good cross browser compatibility.

Modifications include changing color variables to match the close button with the colors used in the rest of the site. Triggering the lightbox is done via the text link so the zoom indicator is set to `display: none`.

---

Webp support for background images is detected via [Modernizr](https://modernizr.com/) with separate classes and declaration blocks for webp and jpg fallbacks.


---


## License

Code is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Images are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Fonts are licensed under the [SIL Open Font License, Version 1.1](https://opensource.org/licenses/OFL-1.1)

[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
