header();
fadeIn();
copyToClipboard();
goToMain();
mainTitle();

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


function goToMain() {
  const goToMainBtn = document.querySelector(".go-to-main");
  const main = document.getElementById("main");
  
  goToMainBtn.addEventListener("click", () => {
    window.scrollTo({top: main.offsetTop, behavior: "smooth"});
  });

  const navBar = document.querySelector(".nav-bar");

  // if (window.scrollY < navBar.offsetTop) {
  //   goToMainBtn.style.opacity = 0;
  // } else {
  //   goToMainBtn.style.opacity = 1;
  // }
}


function mainTitle() {
  const main = document.getElementById("main");
  const mainTitle = document.querySelector(".main-title");

  let playIntreval = true;
  let mainTitleAnimation;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      mainTitle.classList.add("main-title-shadow");
    } else {
      mainTitle.classList.remove("main-title-shadow");
    }
    
    // console.log(`${window.scrollY} , ${main.clientHeight}`)
    if (window.scrollY > main.clientHeight) {
      // console.log('clearInterval');
      clearInterval(mainTitleAnimation);
      playIntreval=true;
    } 
    else if(playIntreval) {
      mainTitleSetInterval();
      playIntreval=false;
    }
  });

  function mainTitleSetInterval() {
    mainTitleAnimation = setInterval(() => {
      // console.log('setInterval');
      if(window.scrollY>=400){
        mainTitle.style.transform = `translateY(-50%) scale(${(window.scrollY-300)/100})`;
        mainTitle.style.opacity = `${(1-window.scrollY/(main.clientHeight-window.innerHeight))}`;
      }else {
        mainTitle.style.transform = `translateY(-50%) scale(1)`;
        mainTitle.style.opacity = 1;
      }
    }, 50);
  }
  setTimeout(() => {
    if (window.scrollY >= main.clientHeight) {
      mainTitle.style.opacity = 0;
    }
    else {
      mainTitle.style.opacity = 1;
    }
  }, 50)
}