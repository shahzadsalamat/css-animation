var subscribe_button = document.querySelector(".subscribe-button");

subscribe_button.addEventListener('click', function() {
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing-active");
	subscribe_button.classList.add("subscribe-button-active");
	setTimeout(function() {
		login.classList.add("login-active");
	}, 1200);
	setTimeout(function() {
		thanks.classList.add("thanks-active");
	}, 1400);

	setTimeout(function() {
		thanks.classList.remove("thanks-active");
		login.classList.remove("login-active");
		subscribing.classList.remove("subscribing-active");
		subscribe_button.classList.remove("subscribe-button-active");
	}, 4000);
});