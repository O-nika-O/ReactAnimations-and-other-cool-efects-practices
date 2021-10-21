import './App.css';
import { animated, useSpring } from "react-spring";
import { useState } from 'react'

const mouths = [
  "M166 209.5C168.356 205.198 161.71 174.794 127.663 174.5C90.2275 176.068 86.4267 212.104 92.0002 209.5C97.5736 206.896 110.208 201.941 128.5 203C151.709 200.585 162.996 212.391 166 209.5Z",
  "M185 177C186.003 168.219 165.967 170.318 127.5 170.5C89.28 172.123 74.3029 165.568 71.0001 177.5C67.8089 190.82 112.244 182.474 127.5 185C150.542 181.547 186.536 192.059 185 177Z",
  "M189.5 152C186.543 145.626 162.91 154.523 127.5 155.5C89.8719 156.008 67.0484 142.216 64.5 155.5C61.4102 200.358 110.89 214.519 132 213.5C154.107 215.836 204.348 182.193 189.5 152Z",
]

const leftEyes = [
  "M51.0001 145.5C57.9875 142.441 61.3457 136.355 77.1045 131.862C92.8633 127.37 101.116 132.496 108.5 131.5C115.884 130.504 98.5935 107.07 74.1045 110.362C52.3824 113.956 44.0126 148.559 51.0001 145.5Z",
  "M64.2436 114.022C61.7285 136.894 79.6102 142.892 83.3195 142C87.0289 141.108 100.95 138.056 99.7435 113.522C100.194 114.091 96.3233 92.3897 82.7439 92.0221C67.1929 93.3963 64.966 111.228 64.2436 114.022Z",
  "M15.662 26.077C-17.8578 57.49 18.4379 105.032 86.162 114.077C124.651 77.363 134.37 18.5864 99.662 4.07703C79.4506 -4.22037 63.7166 4.75512 54.662 25.077C39.4034 16.5537 30.8678 16.3399 15.662 26.077Z"
]

const rightEyes = [
  "M205 145.5C197.654 142.684 194.238 136.327 178.5 132C162.761 127.673 153.042 132.538 147 131.5C140.958 130.462 157.404 106.963 181.5 110.5C204.039 113.539 212.346 148.316 205 145.5Z",
  "M192 114.5C194.515 137.372 176.21 142.892 172.5 142C168.791 141.108 155.294 138.534 156.5 114C156.204 114.186 160.398 91.6774 173.5 92.5001C189.051 93.8743 191.278 111.706 192 114.5Z",
  "M240 26C273.52 57.413 237.224 104.955 169.5 114C129.41 72.1814 122.698 17.7245 156 4.00003C176.211 -4.29736 191.945 4.67812 201 25C216.259 16.4767 224.794 16.2629 240 26Z"
] 

const eyeColours = [
  "#664500",
  "#664500",
  "##DD2E44"
]

function App() {

  const [activeIndex, setActiveIndex] = useState((0));
  const animationProps = useSpring({
    mouth: mouths[activeIndex],
    leftEye: leftEyes[activeIndex],
    rightEye: rightEyes[activeIndex],
    eyeColour: eyeColours[activeIndex],
  })
  return (
    <div className="App">

      <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="128" fill="#FFCC4D" />
        <animated.path d={animationProps.mouth} fill="#664500" />
        <animated.path d={animationProps.leftEye} fill={animationProps.eyeColour} />
        <animated.path d={animationProps.rightEye} fill={animationProps.eyeColour} />
      </svg>
      <div>
        {["disappointed", "neutral", "excited"].map((text, index)=>(
          <button
            type="button"
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            style={{
              background: activeIndex === index ? "purple" : "white",
              color: activeIndex === index ? "white" : "purple",
            }}
          >{text}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
