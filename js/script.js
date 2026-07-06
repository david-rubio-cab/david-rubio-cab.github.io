function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error cargando " + file, error));
}

window.onload = () => {
  loadHTML("header", "html/header.html");
  loadHTML("init", "html/init.html");
  loadHTML("aboutme", "html/aboutme.html");
  loadHTML("skills", "html/skills.html");
  loadHTML("curriculum", "html/curriculum.html");
  loadHTML("portfolio", "html/portfolio.html");
  loadHTML("contact", "html/contact.html");
  loadHTML("footer", "html/footer.html");
};

// Header is injected asynchronously, so the mobile menu toggle is delegated
// on document instead of bound directly to #nav / .nav-responsive.
document.addEventListener("click", (event) => {
  const toggle = event.target.closest(".nav-responsive");
  const navLink = event.target.closest("#nav a");
  const nav = document.getElementById("nav");
  if (!nav) return;

  if (toggle) {
    nav.classList.toggle("responsive");
  } else if (navLink) {
    nav.classList.remove("responsive");
  }
});
