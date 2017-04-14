var modal = document.getElementsByClassName("modal-container")[0];
var overlay = document.getElementsByClassName("overlay")[0];
var closeSpan = document.getElementsByClassName("modal-close")[0];
var signUpBtn = document.getElementsByClassName("signup-button")[0];

setTimeout(function() {
	modal.style.display = "block";
	overlay.style.display = "block";
}, 600);

closeSpan.addEventListener("click", closeModal);
signUpBtn.addEventListener("click", closeModal);

document.addEventListener("keyup", function() {
	if (event.keyCode === 27) {
		closeModal();
	}
});

function closeModal() {
	modal.style.display = "none";
	overlay.style.display = "none";
}