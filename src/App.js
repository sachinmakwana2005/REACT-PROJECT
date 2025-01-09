import './App.css';
import Frisrfuncomp from './Component/Funtioncomponent/Frisrfuncomp';
import Propsdemoinfun from './Component/Funtioncomponent/Propsdemoinfun';
import Form1 from './Component/Funtioncomponent/Form1';
import { CounterApp } from './Component/Funtioncomponent/CounterApp';
import ConditionalRendering from './Component/Funtioncomponent/ConditionalRendering';
import Eventdemoinfun from './Component/Funtioncomponent/Eventdemoinfun';
import Fristclasscomponent from './Component/Funtioncomponent/Fristclasscom';
import Statedemo from './Component/Funtioncomponent/Statedemo';
import StateDemo2 from './Component/Funtioncomponent/Statedemo2';
import ReactBootstrap from './Component/Funtioncomponent/ReactBootstrap';

function App() {
  return (
    <>
      <Frisrfuncomp/>
      <Propsdemoinfun username="Sachin" lastname="Makwana"/>
      <CounterApp/>
      {/* <Form1/> */}
      <ConditionalRendering username="Sachin"  isMarried={true}/>
      <Fristclasscomponent/>
      <Statedemo/>
      <StateDemo2/>
      {/* <ReactBootstrap/> */}
      <Eventdemoinfun/>
    </>
  );
}

export default App;
