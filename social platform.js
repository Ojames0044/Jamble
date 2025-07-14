document.getElementsByClassName("compose").addEventListener("submit", function(event) {
  event.preventDefault();
  let confirmSubmit = confirm("Are you sure you want to post?");
  if (confirmSubmit) {
    alert("Done");
  }
}
)

// Function to toggle the dropdown menu

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}