import logo from './logo.svg';
import './App.css';
import Pixi from './pages/Pixi'
import {Group, Button, Container} from '@mantine/core';
import GoJS from './pages/gojs';
import { useState } from 'react';
import Lodash from './pages/lodash';
import Monaco from './pages/monaco';
import Three from './pages/three';
import { HTML2Canvas } from './pages/html2canvas';
import D3  from './pages/d3';
import styled from 'styled-components';
enum ComponentType {
  GoJS, Lodash, Moment, Monaco, Pixi,Three, HTML2Canvas, D3, Default
}

function App() {

 const renderComponent =(componentType: ComponentType) => {
   switch (componentType) {
     case ComponentType.GoJS:
       return <GoJS/>
    case ComponentType.Lodash:
      return <Lodash/>
    case ComponentType.Monaco:
      return <Monaco/>
    case ComponentType.Pixi:
      return <Pixi/>
    case ComponentType.Three:
      return <Three />
    case ComponentType.HTML2Canvas:
      return <HTML2Canvas />
    case ComponentType.D3:
      return <D3 />
    case ComponentType.Default:
      return <div>Select component</div>
    default:
      return <div>Select component</div>
   }

 }

 const [componentType, setComponentType]  = useState<ComponentType>(ComponentType.Default) 
 const Box = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`
  return (

    <div className="App">
      <header className="App-header">
    <Box >  
        <Group>
  <Button onClick={() => setComponentType(ComponentType.GoJS)} variant="outline">GoJS</Button>
  <Button onClick={() => setComponentType(ComponentType.Lodash)} variant="outline">Lodash</Button>
  <Button onClick={() => setComponentType(ComponentType.Three)} variant="outline">Three</Button>
  <Button onClick={() => setComponentType(ComponentType.Monaco)} variant="outline">Monaco</Button>
  <Button onClick={() => setComponentType(ComponentType.Pixi)} variant="outline">Pixi</Button>
  <Button onClick={() => setComponentType(ComponentType.HTML2Canvas)} variant="outline">HTML2Canvas</Button>
  <Button onClick={() => setComponentType(ComponentType.D3)} variant="outline">D3</Button>
</Group>
</Box>
<Box >  
  {renderComponent(componentType)}
  </Box>
      </header>
      <Pixi />
  </div>

  );
}

export default App;
