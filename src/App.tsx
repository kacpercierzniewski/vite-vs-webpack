import logo from './logo.svg';
import './App.css';
import Pixi from './pages/Pixi'
import {Group, Button} from '@mantine/core';
import GoJS from './pages/gojs';
import { useState } from 'react';
import Lodash from './pages/lodash';
import Monaco from './pages/monaco';
import Three from './pages/three';
import { HTML2Canvas } from './pages/html2canvas';

enum ComponentType {
  GoJS, Lodash, Moment, Monaco, Pixi,Three,HTML2Canvas, Default
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
    case ComponentType.Default:
      return <div>Select component</div>
    default:
      return <div>Select component</div>
   }

 }

 const [componentType, setComponentType]  = useState<ComponentType>(ComponentType.Default) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={300} />
        <Group>
  <Button onClick={() => setComponentType(ComponentType.GoJS)} variant="outline">GoJS</Button>
  <Button onClick={() => setComponentType(ComponentType.Lodash)} variant="outline">Lodash</Button>
  <Button onClick={() => setComponentType(ComponentType.Three)} variant="outline">Three</Button>
  <Button onClick={() => setComponentType(ComponentType.Monaco)} variant="outline">Monaco</Button>
  <Button onClick={() => setComponentType(ComponentType.Pixi)} variant="outline">Pixi</Button>
  <Button onClick={() => setComponentType(ComponentType.HTML2Canvas)} variant="outline">HTML2Canvas</Button>
  {renderComponent(componentType)}
  
</Group>
      </header>
      <Pixi />
  </div>

  );
}

export default App;
