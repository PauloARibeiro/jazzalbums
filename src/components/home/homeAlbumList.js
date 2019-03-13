import React from "react"
import Parallax from "react-rellax"

const AlbumList = () => (
  <section className="album-list">
    {/* FIRST SECTION */}
    <div className="first-section fullscreen-height">
      <div className="square" />
      <Parallax speed={2} style={{ position: "absolute" }}>
        <img
          className="img-medium"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
        />
      </Parallax>

      <Parallax
        speed={3}
        style={{ position: "absolute", left: "30%", top: "50%", zIndex: '2'  }}
      >
        <img
          className="img-small"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
          // style={{ position: "absolute", left: "30%", top: "20%" }}
        />
      </Parallax>

      <Parallax 
        speed={5}
        style={{ position: "absolute", left: "35%", top: "80%", zIndex: '1' }}
      >
        <div className="square" />
      </Parallax>

      <Parallax speed={1} style={{ position: "absolute", right: "0"}}>
        <img
          className="img-large"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
          // style={{ position: "absolute", right: "0" }}
        />
      </Parallax>
    </div>
    {/* FIRST SECTION */}
    <div className="first-section fullscreen-height">
      <div className="square" />
      <Parallax speed={2} style={{ position: "absolute" }}>
        <img
          className="img-medium"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
        />
      </Parallax>

      <Parallax
        speed={3}
        style={{ position: "absolute", left: "30%", top: "50%", zIndex: '2'  }}
      >
        <img
          className="img-small"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
          // style={{ position: "absolute", left: "30%", top: "20%" }}
        />
      </Parallax>

      <Parallax 
        speed={5}
        style={{ position: "absolute", left: "35%", top: "80%", zIndex: '1' }}
      >
        <div className="square" />
      </Parallax>

      <Parallax speed={1} style={{ position: "absolute", right: "0"}}>
        <img
          className="img-large"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
          // style={{ position: "absolute", right: "0" }}
        />
      </Parallax>
    </div>
  </section>
)

export default AlbumList
