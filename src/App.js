import { useState } from 'react';

import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Header from './components/Header';
import ListView from './components/ListView';
import PdfViewer from './components/PdfViewer';

function App() {
  const [viewPop, setViewPop] = useState(false);
  return (
    <div className="App">
      {
        viewPop && <PdfViewer setViewPop={setViewPop} />
      }
      <Header />
      <div className="container" >
        <ListView setViewPop={setViewPop} />
      </div>
    </div>
  );
}

export default App;
