import React from "react"
import anime from "animejs"
import { Link } from "gatsby"
// import { func } from "prop-types"

//STORES MENU STATE
let menuIsOpen = false
//DURATION OF EACH STEP OF ANIAMTION
let duration = duration

//CHECKS IF MENU IS CLOSED OR OPEN
const onClick = () => {
  menuIsOpen ? animateOff() : animateOn()
}

//CLOSE MENU
const animateOff = () => {
  menuIsOpen = false

  setTimeout(() => {
    document.querySelector(".menu").style.display = "none"
  }, 3000)

  let timeLine = anime.timeline({
    easing: "easeInQuart",
    duration: 440,
  })

  timeLine.add({
    targets: ".hamburger",
    translateY: "-100",
    duration: 350,
    easing: "easeOutQuad",
  })

  timeLine.add({
    targets: ".artists",
    opacity: "0",
    marginTop: "5%",
    duration: duration,
  })

  timeLine.add({
    targets: ".menu > .img",
    width: "0",
    duration: duration,
  })

  timeLine.add({
    targets: ".side-background-fixed",
    width: "0vw",
    duration: duration,
    easing: "easeInQuad",
  })

  timeLine.add({
    targets: ".side-background-animate",
    width: "100vw",
    left: "0%",
    duration: duration,
  })

  timeLine.add({
    targets: ".side-background-animate",
    width: "0vw",
    left: "0%",
    duration: duration,
    easing: "easeOutQuad",
    delay: 150,
  })

  timeLine.add({
    targets: ".menu",
    opacity: "0",
    duration: duration,
    easing: "easeOutQuad",
  })

  timeLine.add({
    targets: ".hamburger",
    translateY: "0",
    duration: 350,
    easing: "easeOutQuad",
  })
}

// OPEN MENU
const animateOn = () => {
  menuIsOpen = true

  document.querySelector(".menu").style.display = "flex"

  let timeLine = anime.timeline({
    easing: "easeInQuart",
    duration: 440,
  })

  timeLine.add({
    targets: ".hamburger",
    translateY: "-100",
    duration: 350,
    easing: "easeOutQuad",
  })

  timeLine.add({
    targets: ".menu",
    opacity: "1",
    duration: duration,
    easing: "easeOutQuad",
  })

  timeLine.add({
    targets: ".side-background-animate",
    width: "100vw",
    duration: duration,
  })

  timeLine.add({
    targets: ".side-background-animate",
    width: "0vw",
    left: "100%",
    duration: duration,
    easing: "easeOutQuad",
    delay: 150,
  })

  timeLine.add({
    targets: ".side-background-fixed",
    width: "25vw",
    duration: duration,
    delay: 100,
    easing: "easeInQuad",
  })

  timeLine.add({
    targets: ".menu > .img",
    width: "500px",
    duration: duration,
    easing: "easeOutQuad",
  })

  timeLine.add({
    targets: ".artists",
    opacity: "1",
    marginTop: "0px",
    duration: duration,
    easing: "easeOutQuad",
  })

  timeLine.add({
    targets: ".hamburger",
    translateY: "0",
    duration: 350,
    easing: "easeInQuad",
  })
}

const artists = [
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "john doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
  {
    name: "John Doe",
    album: "Doe",
  },
]

const Header = () => (
  <header>
    <section className="hamburger" onClick={onClick}>
      <div className="dot-parent">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>

      <div className="dot-parent">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>

      <div className="dot-parent">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </section>

    <section className="menu">
      <div className="side-background-animate" />
      <div className="side-background-fixed" />

      <div className="img" />

      <div className="artists">
        <h1>Artists</h1>
        <div className="list">
          {artists.map((artist, key) => {
            return (
              <h4 key={key}>
                <Link>{artist.name}</Link>
              </h4>
            )
          })}
        </div>
      </div>
    </section>
  </header>
)

export default Header
