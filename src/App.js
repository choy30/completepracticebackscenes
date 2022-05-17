import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button'

function App() {
  const [showParagraph, setShowPragragh] = useState()

  const toggleParagraphHandler = () => {
    setShowPragragh(prevShowParagraph => !prevShowParagraph)
  }
  return (
    <div className="app">
      {showParagraph && <p>This is New</p>}
      <Button onClick={toggleParagraphHandler}>Show</Button>
    </div>
  );
}

export default App;
