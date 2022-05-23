import React from 'react'
import * as d3 from 'd3';

const D3 = () => {
    React.useEffect(() => {
      const svgElement = d3.select("svg")
      svgElement.append("circle")
        .attr("cx", 150)
        .attr("cy", 70)
        .attr("r",  50)
    }, [])
    return (
      <svg
      />
    )
  }
  
  export default D3