import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Redirect } from "@reach/router"

import Arrow from "../components/backArrow"
import spotifyLogo from "../images/spotify.svg"
import amazonLogo from "../images/amazon.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

//REDIRECT TO SPOTIFY AND AMAZON
const redirectTo = link => {
  window.open(link, "_blank")
}

const backgroundDots = () => {
  let dots = []
  for (var i = 0; i < 33; i++) {
    dots.push(<div className="dots" key={i} />)
  }

  return dots
}

//ALBUM GRAPHQL JSON QUERY
const AlbumInfo = () => {
  const albumID = localStorage.getItem("albumID")

  if (albumID) {
    return (
      <StaticQuery
        query={graphql`
          query AlbumsQuery {
            allAlbumsJson {
              edges {
                node {
                  id
                  name
                  author
                  releaseDate
                  length
                  label
                  producer
                  spotify
                  amazon
                  tracks {
                    name
                    writer
                    length
                  }
                }
              }
            }
          }
        `}
        render={data =>
          ArtistAlbum(
            data.allAlbumsJson.edges.filter(item => item.node.id === albumID)
          )
        }
      />
    )
  } else {
    window.location = '/404';
    // return <Redirect to="/" />
  }
  // ArtistAlbum(data)
}

const ArtistAlbum = data => {
  const {
    author,
    label,
    length,
    name,
    producer,
    releaseDate,
    spotify,
    amazon,
    tracks,
  } = data[0].node

  return (
    <Layout>
      <Arrow />
      <SEO title={`${name}`} />
      <section className="album">
        <div className="name">
          <h1>
            {name}, <span className="author">{author}</span>
          </h1>
        </div>

        <div className="logos">
          <a href={spotify} target="_blank" rel="noopener noreferrer">
            <img className="logo" src={spotifyLogo} alt="spotify" />
          </a>
          <a href={amazon} target="_blank" rel="noopener noreferrer">
            <img className="logo" src={amazonLogo} alt="amazon" />
          </a>
        </div>

        <div className="info">
          <div className="middle">
            <div className="middle-info">
              <div className="left">
                <h3>
                  <b>Released</b>
                </h3>
                <h3>
                  <b>Length</b>
                </h3>
                <h3>
                  <b>Label</b>
                </h3>
                <h3>
                  <b>Producer</b>
                </h3>
              </div>

              <div className="right">
                <h3>
                  <span>{releaseDate}</span>
                </h3>
                <h3>
                  <span>{length}</span>
                </h3>
                <h3>
                  <span>{label}</span>
                </h3>
                <h3>
                  <span>{producer}</span>
                </h3>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>
                    <h3>Title</h3>
                  </th>
                  <th>
                    <h3>Writer(s)</h3>
                  </th>
                  <th>
                    <h3>Length</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track, key) => {
                  const { name, length, writer } = track
                  return (
                    <tr key={key} onClick={() => redirectTo(spotify)}>
                      <td>{name}</td>
                      <td>{writer}</td>
                      <td>{length}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="album-img">
            <div className="dots-parent">{backgroundDots()}</div>
            <a href={spotify} target="_blank" rel="noopener noreferrer">
              <img
                className="img"
                src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
                alt={name}
              />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AlbumInfo
