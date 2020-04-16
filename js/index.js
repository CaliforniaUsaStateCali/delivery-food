
const cartButton = document.querySelector("#cart-button"),
	modal = document.querySelector(".modal"),
	close = document.querySelector(".close");
	// let closBtn = document.querySelector("#close-btn");

cartButton.addEventListener("click", function (event) { 
	modal.classList.add("is-open");
});

close.addEventListener("click", function (event) { 
	modal.classList.remove("is-open");
});

// closBtn.addEventListener("click", function (event) { 
// 	modal.classList.remove("is-open");
// });


new WOW().init();