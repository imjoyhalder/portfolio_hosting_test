
// script.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about-link").addEventListener("click", function(event) {
      event.preventDefault();
      showContent("about");
    });
  
    document.getElementById("facebook-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.open("https://www.facebook.com/profile.php?id=100060320685351", "_blank");
    });
  
    document.getElementById("linkedin-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.open("https://www.linkedin.com/in/joy-halder-a337b1244/", "_blank");
    });
  
    document.getElementById("github-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.open("https://github.com/imjoyhalder", "_blank");
    });
  });
  
  function showContent(contentId) {
    var contents = document.querySelectorAll("main > section");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
  }
  