import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh, Vector3 } from 'three'

type Props = {
    position: Vector3 
}
const Box = (props:Props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
      if (ref?.current?.rotation?.x) 
      {
          ref.current.rotation.x += 0.01
      }
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref as any}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Three = () => 
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={new Vector3(-1.2,0,0)} />
    <Box position={new Vector3(-1.2,0,0)} />
  </Canvas>

export default Three