var modal = document.getElementById("bookclubrego");
var submit = document.getElementById("submit");
var btn = document.getElementById("trigger-modal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
submit.onclick = function() {
	modal.style.display = "none";
}