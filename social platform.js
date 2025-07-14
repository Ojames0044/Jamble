document.getElementsByClassName("compose").addEventListener("submit", function(event) {
  event.preventDefault();
  let confirmSubmit = confirm("Are you sure you want to post?");
  if (confirmSubmit) {
    alert("Done");
  }
}
)