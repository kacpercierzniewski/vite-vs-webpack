// @ts-nocheck
import { Stage, Sprite, Container } from '@inlet/react-pixi'

 const Pixi = () => (
  <Container>
        <Sprite image='../logo.svg' x={100} y={100} anchor={0.5} />
  </Container>
)

export default Pixi