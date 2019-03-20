import React from "react"
import Parallax from "react-rellax"

// IMAGES ARE FROM LEFT TO RIGHT

const AlbumList = () => (
  <section className="album-list">
    {/* FIRST SECTION */}
    <div className="fullscreen-height">
      <div
        className="diamond"
        style={{ position: "absolute", top: "50%", left: "10%" }}
      />

      <div
        className="diamond medium"
        style={{ position: "absolute", top: "65%", left: "30%" }}
      />

      <Parallax
        speed={2}
        style={{ position: "absolute", top: "85%", left: "45%" }}
      >
        <div className="diamond small" />
      </Parallax>

      <div
        className="diamond medium"
        style={{ position: "absolute", top: "10%", left: "55%" }}
      />

      <Parallax speed={2} style={{ position: "absolute", top: "15%" }}>
        <img 
          alt="album"
          className="img-medium"
          src="http://albumdujour.com/wp-content/uploads/2012/04/blue-train-coltrane.jpeg"
        />
      </Parallax>

      <Parallax
        speed={3}
        style={{ position: "absolute", left: "30%", top: "50%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-small"
          src="https://img.discogs.com/8h4coE-sLP1PX1D9xG9_yFKaEJE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2506823-1401370770-3016.jpeg.jpg"
        />
      </Parallax>

      <Parallax
        speed={1}
        style={{ position: "absolute", right: "0", zIndex: "3" }}
      >
        <img 
          alt="album"
          className="img-large"
          src="http://aphelis.net/wp-content/uploads/2012/12/FUJITA_1959_Time_Out_Dave_Brubeck_Quartet.jpeg"
        />
      </Parallax>

      <Parallax
        speed={2}
        style={{
          position: "absolute",
          right: "30%",
          bottom: "-10%",
          zIndex: "3",
        }}
      >
        <img 
          alt="album"
          className="img-xsmall"
          src="http://2.bp.blogspot.com/_DLS2OBXiLC4/TUM6me8izRI/AAAAAAAAAAM/NIz_lWmnAn8/s1600/stan-getz-21.jpg"
        />
      </Parallax>
    </div>

    {/* SECOND SECTION */}
    <div className="fullscreen-height">
      <Parallax
        speed={2}
        style={{ position: "absolute", left: "5%", top: "50%" }}
      >
        <div className="diamond small" />
      </Parallax>

      <div
        className="diamond medium"
        style={{ position: "absolute", top: "30%", left: "20%" }}
      />

      <div
        className="diamond small"
        style={{ position: "absolute", top: "80%", left: "65%" }}
      />

      <div
        className="diamond medium"
        style={{ position: "absolute", bottom: "0%", left: "8%" }}
      />

      <Parallax
        speed={2}
        style={{ position: "absolute", right: "30%", bottom: "30%" }}
      >
        <div className="diamond medium" />
      </Parallax>

      <div
        className="diamond"
        style={{ position: "absolute", top: "35%", right: "8%" }}
      />

      <Parallax
        speed={4}
        style={{ position: "absolute", left: "15%", top: "60%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-xsmall"
          src="https://www.vinylrecords.sg/wp-content/uploads/2016/12/Charles-Mingus-%E2%80%8E%E2%80%93-Mingus-Ah-Um.jpg"
        />
      </Parallax>

      <Parallax
        speed={2}
        style={{ position: "absolute", right: "0", zIndex: "3" }}
      >
        <img 
          alt="album"
          className="img-medium"
          src="http://therevue.ca/wp-content/uploads/2015/06/Miles-Davis-Bitches-Brew.jpg"
        />
      </Parallax>

      <Parallax
        speed={3}
        style={{ position: "absolute", right: "40%", top: "50%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-small"
          src="https://cdn2.dustygroove.com/images/products/g/garner_erro_concertby_104b.jpg"
        />
      </Parallax>
    </div>

    {/* THIRD SECTION */}
    <div className="fullscreen-height">
      <div
        className="diamond"
        style={{ position: "absolute", top: "50%", left: "10%" }}
      />

      <div
        className="diamond medium"
        style={{ position: "absolute", top: "65%", left: "30%" }}
      />

      <Parallax
        speed={2}
        style={{ position: "absolute", top: "85%", left: "45%" }}
      >
        <div className="diamond small" />
      </Parallax>

      <div
        className="diamond"
        style={{ position: "absolute", top: "80%", left: "55%" }}
      />

      <Parallax speed={3} style={{ position: "absolute", top: "15%" }}>
        <img 
          alt="album"
          className="img-large"
          src="https://altrockchick.files.wordpress.com/2014/04/510aohwbs0l.jpg?w=620"
        />
      </Parallax>

      <Parallax
        speed={1}
        style={{ position: "absolute", right: "40%", top: "-30%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-small"
          src="https://www.formidablemag.com/wp-content/uploads/2014/08/jazz-at-massey-hall-400x403.jpg"
        />
      </Parallax>

      <Parallax
        speed={2}
        style={{ position: "absolute", right: "28%", top: "0%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-xsmall"
          src="https://www.universalmusic.it/dbcommon/file/cover/31533517261.jpg"
        />
      </Parallax>

      <Parallax
        speed={2}
        style={{ position: "absolute", right: "0%", top: "0%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-small"
          src="https://upload.wikimedia.org/wikipedia/en/4/4d/Mr_Scruff_Trouser_Jazz_album_cover.jpg"
        />
      </Parallax>
    </div>

    {/* FOURTH SECTION */}
    <div className="fullscreen-height" style={{ height: "100%" }}>
      <Parallax
        speed={2}
        style={{ position: "absolute", top: "15%", left: "5%" }}
      >
        <img 
          alt="album"
          className="img-xsmall"
          src="http://ecx.images-amazon.com/images/I/514yw9Xx7CL.jpg"
        />
      </Parallax>

      <Parallax
        speed={3}
        style={{ position: "absolute", left: "33%", top: "-10%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-full"
          src="https://3.bp.blogspot.com/-yYZbRjsr93s/WFPKjWh8ElI/AAAAAAAAIFk/lSo5gXamMgMdNTkGye5qE5C74gqSvodLgCLcB/s1600/cover.jpg"
        />
      </Parallax>
      <Parallax
        speed={1}
        style={{ position: "absolute", right: "15%", top: "-15%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-xsmall"
          src="https://cdn.pastemagazine.com/www/system/images/photo_albums/jazz-album-design/large/charlie-parker-with-strings-the-master-takes--album-artwork-.jpg?1384968217"
        />
      </Parallax>
      <Parallax
        speed={3}
        style={{ position: "absolute", right: "0%", top: "-30%", zIndex: "2" }}
      >
        <img 
          alt="album"
          className="img-small"
          src="http://www.koldobarroso.com/wp-content/uploads/2016/03/jazz-in-da-house-koldo-barroso-album-cover-web-1000.jpg"
        />
      </Parallax>
    </div>
  </section>
)

export default AlbumList
