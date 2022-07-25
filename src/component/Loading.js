import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ThreeDots}  from  'react-loader-spinner'

export const Loading = () => {

  const style = { position: "fixed", top: "10%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div style={style}>
    <ThreeDots color="#00BFFF" height={80} width={80}/>
    </div>
  )
}
