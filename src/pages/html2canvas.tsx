import  html2canvas from 'html2canvas'
import React from 'react'



export const HTML2Canvas = () => {


  React.useEffect(() => {
    html2canvas(document.body).then((canvas) => {
      document.getElementById('html2canvas')?.appendChild(canvas)
    })
  })

  return <div id='html2canvas'/>
}