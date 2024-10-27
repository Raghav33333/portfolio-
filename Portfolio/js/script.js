// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
// Contact Form Validation
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (event) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!name || !email || !message) {
    alert("All fields are required.");
    event.preventDefault(); // Prevents form submission
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    alert("Please enter a valid email.");
    event.preventDefault();
  }
});
// Scroll Animation with Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll("section").forEach(section => {
    section.classList.add('hidden'); // Initially hide sections
    observer.observe(section);
  });
  