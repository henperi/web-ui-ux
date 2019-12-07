const section2 = document.querySelector(".s2");
const sections = document.querySelectorAll(".section");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.map(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("expand");
    } else {
      entry.target.classList.remove("expand");
    }
  });
}, options);

[...sections].map(section => {
  observer.observe(section);
});
