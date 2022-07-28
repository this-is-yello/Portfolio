const sections = document.getElementsByTagName("section");

const navBar = document.querySelector(".nav-bar-menu");

for (let i = 0; i < navBar.childElementCount; i++) {
  navBar.children[i].addEventListener("click", () => {
    window.scrollTo({top: sections[i].offsetTop, behavior: "smooth"});
  });
}