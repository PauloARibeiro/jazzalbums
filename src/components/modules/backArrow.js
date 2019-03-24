import React from "react"
import { Link } from "gatsby"

const BackArrow = () => (
  <span className="arrow-container" onClick={() => goBack()}>
    <div className="arrow" />
  </span>
)

const goBack = () => {
  window.history.go(-1);
}

export default BackArrow
