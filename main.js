header();
fadeIn();
copyToClipboard();

function header() {
  const sections = document.getElementsByTagName("section");
  
  const navBar = document.querySelector(".nav-bar-menu");
  
  for (let i = 0; i < navBar.childElementCount; i++) {
    navBar.children[i].addEventListener("click", () => {
      window.scrollTo({top: sections[i].offsetTop, behavior: "smooth"});
      console.log(window.scrollY);
      console.log(sections[i].offsetTop);
    });
  }
}


function fadeIn() {
  const sections = document.getElementsByTagName("section");
  
  for (let i = 0; i < sections.length; i++) {
    window.addEventListener("scroll", () => {
      if (sections[i].getBoundingClientRect().top - (window.innerHeight/2*1) < 0) {
        sections[i].classList.add("fade-in");
      }
    });
  }
}


function copyToClipboard() {
  const eMail = document.querySelector(".e-mail");
  const eMailCopy = document.querySelector(".mail-copy");

  eMail.addEventListener("click", () => {
    navigator.clipboard.writeText(eMail.innerText);
    eMailCopy.classList.add("complete-copy");

    setTimeout(() => {
      eMailCopy.classList.remove("complete-copy");
    }, 3000)
  });
}