// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navbarToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navbarToggle.addEventListener('click', function () {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
  console.log(links.getBoundingClientRect())
})
// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const navbarHeight = navbar.getBoundingClientRect().height

  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    //prevent default
    event.preventDefault()
    //navigate to specific spot
    const id = event.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    //calculate the heigths
    const navHeight = navbar.getBoundingClientRect().height
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight

    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + linksContainerHeight
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})
// select links
