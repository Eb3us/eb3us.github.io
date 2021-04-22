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
const contactDiv = document.querySelector("#contact")
const english = document.querySelector("#english")
const spanish = document.querySelector("#spanish")
const works = Array.from(document.querySelectorAll(".works"))
const about = Array.from(document.querySelectorAll(".about"))
const subtitle = document.querySelector("#subtitle")
const sCRText = document.querySelector("#scr-text")
const sCRText2 = document.querySelector("#scr-text2")
const rSAText = document.querySelector("#rsa-text")
const aboutText = document.querySelector("#about-text")
const contactTitle = document.querySelector("#contact-title")
const emailText = document.querySelector("#email-text")
const messageText = document.querySelector("#message-text")
const contactForm = document.querySelector("#gform")
const submitButton = document.querySelector("#submit")
const alertBox = document.querySelector("#alert-box")
const alertText = document.querySelector("#alert-text")
const alertButton = document.querySelector("#alert-button")
let sticky = navbar.offsetTop

//on load function
window.scrollTo(0, 0)
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
contactLink.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" })
})
//English - Spanish
english.addEventListener("click", () => {
  englishSpanish(0)
})

spanish.addEventListener("click", () => {
  englishSpanish(1)
})

// english or spanish function. 0 for english 1 for spanish
function englishSpanish(number) {
  works.forEach(element => {
    element.innerHTML = textLanguage.works[number]
  })
  about.forEach(element => {
    element.innerHTML = textLanguage.about[number]
  })
  contactLink.children[0].innerHTML = textLanguage.contact[number]
  subtitle.innerHTML = textLanguage.subtitle[number]
  sCRText.innerHTML = textLanguage.SCRText[number]
  sCRText2.innerHTML = textLanguage.SCRText2[number]
  // rSAText.innerHTML = textLanguage.RSAText[number]
  aboutText.innerHTML = textLanguage.aboutText[number]
  contactTitle.innerHTML = textLanguage.contactTitle[number]
  emailText.innerHTML = textLanguage.email[number]
  messageText.innerHTML = textLanguage.message[number]
  submitButton.innerHTML = textLanguage.submit[number]
  alertText.innerHTML = textLanguage.alertBox[number]
}

contactForm.addEventListener("submit", () => {
  alertBox.style.display = "flex"
})
alertButton.addEventListener("click", () => {
  alertBox.style.display = "none"
})

//English - Spanish object
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
  SCRText2: ["Abnormal's first proyect!", "El primer proyecto de Abnormal!"],
  // RSAText: [
  //   "With servers in virtually every country, the Rudolf Steiner Archive & e.Lib is truly a World-wide presence for the Anthroposophical Movement. Whether you're a seasoned follower of the philosophy of Rudolf Steiner or someone coming here for the first time, this site will challange your thinking and allow you to experience the world from a different point of view ... it's the same ... only different!",
  //   "Con servidores en casi todos los paises, el Rudolf Steriner Archive es una verdadera precesencia del movimiento atroposofico en la red.",
  // ],
  aboutText: [
    "Abnormal Design is a small web-dev project based in Cordoba, Argentina. Founded by me (the guy who's face you see below), the main designer and developer, though helped by many along the way.",
    "Abnormal Design es una pequeña empresa de desarollo web de Córdoba, Argentina. Fundada por mi (el tipo que aparece abajo), hago la mayor parte del diseño y programación.",
  ],
  contactTitle: ["Contact Abnormal Design", "Contactate con nosotros"],
  email: ["Your e-mail address:", "Tu dirección de e-mail:"],
  message: ["Your message:", "Tu mensaje:"],
  submit: ["Send", "Enviar"],
  alertBox: [
    "Thank you for contacting Abnormal Design!<br>We will answer you as soon as possible.",
    "Gracias por contactarte con Abnormal Design!<br>Te responderemos a la brevedad.",
  ],
}
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
