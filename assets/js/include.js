function includeHTML() {
    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => {
      const id = el.id;
      const file = `sections/${id}.html`;
      fetch(file)
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw new Error(`Could not load ${file}`);
        })
        .then((html) => {
          el.innerHTML = html;
        })
        .catch((error) => console.error(error));
    });
  }
  
  includeHTML();

  // include.js
document.addEventListener("DOMContentLoaded", () => {
  // Include header
  const header = document.getElementById("header");
  header.innerHTML = `
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;

  // Include footer
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <footer>
      <p>&copy; 2025 Milind Dhawale. All rights reserved.</p>
    </footer>
  `;

  // Scroll-to-top button functionality
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

  