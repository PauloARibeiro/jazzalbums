import React from "react"

const AlbumList = () => (
  <section className="album-list">
    <h1>HOME</h1>
  </section>
)

const setLocalStorage = id => {
  localStorage.setItem("albumID", id)
}

export default AlbumList
