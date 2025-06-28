// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html";
      });
    });
  }

  // Add any shared interactivity here
});
