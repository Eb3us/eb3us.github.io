//define elements
const loadingAnimation = document.querySelector(".loading")
const navbar = document.querySelector(".navbar")
const logo = document.querySelector("#logo")
const container = Array.from(document.querySelectorAll(".container"))
const introTag = document.querySelector(".intro-tag")
const links = Array.from(document.getElementsByClassName("navlinks"))
const worksLink = document.querySelector("#nav-works")
const aboutLink = document.querySelector("#nav-about")
const contactLink = document.querySelector("#nav-contact")
const worksDiv = document.querySelector("#mainCont")
const aboutDiv = document.querySelector("#about")
const english = document.querySelector("#english")
const spanish = document.querySelector("#spanish")
const works = Array.from(document.querySelectorAll(".works"))
const about = Array.from(document.querySelectorAll(".about"))
const subtitle = document.querySelector("#subtitle")
const sCRText = document.querySelector("#scr-text")
const rSAText = document.querySelector("#rsa-text")
let sticky = navbar.offsetTop

//on load function
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingAnimation.style.animationPlayState = "running"
    navbar.style.animationPlayState = "running"
    links.forEach(link => {
      link.children[0].style.animationPlayState = "running"
    })
    logo.style.animationPlayState = "running"
    logo.style.display = "block"
    container.forEach(c => {
      c.style.animationPlayState = "running"
    })
    introTag.style.animationPlayState = "running"
    document.querySelector("body").style.overflowY = "scroll"
  }, 1000)
  setTimeout(() => {
    loadingAnimation.style.display = "none"
  }, 1000)
  window.onscroll = () => {
    stickyFunction()
  }
})
//links go-to function
worksLink.addEventListener("click", () => {
  worksDiv.scrollIntoView({ behavior: "smooth" })
})
aboutLink.addEventListener("click", () => {
  aboutDiv.scrollIntoView({ behavior: "smooth" })
})

//English - Spanish
english.addEventListener("click", () => {
  works.forEach(element => {
    element.innerHTML = textLanguage.works[0]
  })
  about.forEach(element => {
    element.innerHTML = textLanguage.about[0]
  })
  contactLink.children[0].innerHTML = textLanguage.contact[0]
  subtitle.innerHTML = textLanguage.subtitle[0]
  sCRText.innerHTML = textLanguage.SCRText[0]
  rSAText.innerHTML = textLanguage.RSAText[0]
})

spanish.addEventListener("click", () => {
  works.forEach(element => {
    element.innerHTML = textLanguage.works[1]
  })
  about.forEach(element => {
    element.innerHTML = textLanguage.about[1]
  })
  contactLink.children[0].innerHTML = textLanguage.contact[1]
  subtitle.innerHTML = textLanguage.subtitle[1]
  sCRText.innerHTML = textLanguage.SCRText[1]
  rSAText.innerHTML = textLanguage.RSAText[1]
})

//Navbar sticky function
function stickyFunction() {
  if (window.pageYOffset - 40 >= sticky) {
    navbar.classList.add("sticky")
    introTag.classList.add("contMargin")
  } else {
    navbar.classList.remove("sticky")
    introTag.classList.remove("contMargin")
  }
}

//end NavBar
const textLanguage = {
  works: ["Works", "Proyectos"],
  about: ["About", "Equipo"],
  contact: ["Contact", "Contacto"],
  subtitle: [
    "Web design for times when normal is just not enough...",
    "Diseño web para tiempos donde lo normal no es suficiente...",
  ],
  SCRText: [
    "Review of Anthroposophy, fiction, education, science, current events, essays, book reviews, poetry",
    "Revista web con contenidos que abarcan antroposofia, ficción, educación, ciencia, sucesos actuales, ensayos, critica literaria, poesia, musica y más. (Bilingüe)",
  ],
  RSAText: [
    "With servers in virtually every country, the Rudolf Steiner Archive & e.Lib is truly a World-wide presence for the Anthroposophical Movement. Whether you're a seasoned follower of the philosophy of Rudolf Steiner or someone coming here for the first time, this site will challange your thinking and allow you to experience the world from a different point of view ... it's the same ... only different!",
    "Con servidores en casi todos los paises, el Rudolf Steriner Archive es una verdadera precesencia del movimiento atroposofico en la red.",
  ],
  aboutText: ["bla bla", "wada wada"],
}
