import React, { useState } from 'react'

function AdItem(props) {  

  if("placeholder" in props) {
    return(
      <div className="ad-item">
        <div className="poster anim placeholder" />
        <div className="title anim placeholder" />
        <div className="tagline anim placeholder" />
        <div className="ftr anim flex">
          <div className="location anim placeholder" />
          <div className="stamp anim placeholder" />
        </div>  
      </div>
    )
  }

  return(
    <div className="ad-item">
    </div>
  )
}

export default AdItem;