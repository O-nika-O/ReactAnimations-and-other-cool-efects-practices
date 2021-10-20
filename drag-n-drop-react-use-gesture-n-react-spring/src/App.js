import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const SCREEN_HEIGHT = window.innerHeight - 30;


function App() {
  const logoPos = useSpring({x: 0, y: 0});
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  const pPos = useSpring({x: 0, y: 0});
  const bindPPos = useDrag((params) => {
    pPos.x.set(params.offset[0]);
    pPos.y.set(params.offset[1]);
  });

  const aPos = useSpring({x: 0, y: 0});
  const bindAPos = useDrag((params) => {
    aPos.x.set(params.offset[0]);
    aPos.y.set(params.offset[1]);
  });

  const handlePos = useSpring({y: 0});
  const bindHandlePos = useDrag((params) => {
    
    const y = params.xy[1]
    
    if(params.dragging) {
      
      if (y >= 0 && y <= SCREEN_HEIGHT) {
        handlePos.y.set(y);
      }
      } else {
        if(y > SCREEN_HEIGHT / 2){
          handlePos.y.start(SCREEN_HEIGHT)
        } else {
          handlePos.y.start(0)
        }
      }
  });

  return (
    <div className="App">
    <animated.div 
      {...bindHandlePos()} 
      style={{
            y: handlePos.y,
          }}
      className="App-handle-container">
        <div className="App-handle" ></div>
    </animated.div>
    <animated.div className="App-overlay"       
      style={{
            y: handlePos.y,
            opacity: handlePos.y.to([0, SCREEN_HEIGHT], [1, 0.8])
          }}/>
    <div className="App-bg" />
      <header className="App-header">
        <animated.div {...bindLogoPos()} style={{
          x: logoPos.x,
          y: logoPos.y,
        }}>
        <img src={logo} className="App-logo" alt="logo" />
        </animated.div>
        <animated.p {...bindPPos()}  style={{
          x: pPos.x,
          y: pPos.y,
        }}>
          Edit <code>src/App.js</code> and save to reload.
        </animated.p>
        <animated.a {...bindAPos()} 
        draggable="false"
        style={{
          x: aPos.x,
          y: aPos.y,
        }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </animated.a>
      </header>
    </div>
  );
}

export default App;
