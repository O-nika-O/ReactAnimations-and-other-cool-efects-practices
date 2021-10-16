import './App.css';
import React from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="container">
      <article className="info">
        <header className="header">
          <span className="subtitle">React Animation</span>
          <h1 className="title">Reveal on Scroll-up</h1>
        </header>
      </article>
      <Actions />
    </div>
  );
}

function Actions() {

  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);

  React.useEffect(() => {

    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos]);

  return (
    <motion.div className="actions" 
    animate={{ opacity: shouldShowActions ? 1 : 0 }}
    initial={{ opacity: 0 }}
    transition={{ opacity: {duration: 0.2}}}
    >
      <button>
        <span className="fas fa-share-square" />
      </button>
      <button>
        <span className="fas fa-user" />
      </button>
      <button>
        <span className="fas fa-times" />
      </button>
    </motion.div>
  )
}

export default App;
