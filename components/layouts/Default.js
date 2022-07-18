import React from 'react'
import Navbar from "../Navbar"

const Default = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">{children}</div>
    </>
)
}

export default Default