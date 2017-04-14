var modal = document.getElementsByClassName("modal-container")[0];
var closeSpan = document.getElementsByClassName("modal-close")[0];

setTimeout(function() {
	modal.style.display = "block";
}, 800);

closeSpan.addEventListener("click", closeModal);


document.addEventListener("keyup", function() {
	if (event.keyCode === 27) {
		closeModal();
	}
});

function closeModal() {
	modal.style.display = "none";
}