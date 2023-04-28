import { useState } from 'react';
import './App.scss';
import { Code } from './comps/base';
import Joke from './comps/joke';

function App() {

  const [isShown, setIsShown] = useState(null);
  const [text, setText] = useState(true);

  const addComp = _ =>{
    setIsShown(true);
    setText(false);

  }

  return (
    <Code>
      <div className="box">
        {
          text === false 
          ? isShown === true && <Joke /> 
          : <>
          <div className="container">
              <p>If you want a joke, click the button</p>
              <button type="button" className="btn btn-outline-secondary" onClick={addComp}>Click</button>
          </div>
          </>
        }
      </div>
    </Code>

  );
}

export default App;