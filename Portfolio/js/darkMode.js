const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check local storage for mode
const savedMode = localStorage.getItem("darkMode");
if (savedMode && savedMode === "enabled") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const mode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
  localStorage.setItem("darkMode", mode);
});
