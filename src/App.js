import { useState } from 'react';

import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Header from './components/Header';
import ListView from './components/ListView';
import PdfViewer from './components/PdfViewer';

function App() {
  const [viewPop, setViewPop] = useState(false);
  const [content, setContent] = useState([]);
  const [file, setFile] = useState(null);

  return (
    <div className="App">
      {
        viewPop && <PdfViewer setViewPop={setViewPop} files={file} />
      }
      <Header setContent={setContent} />
      <div className="container" >
        <ListView setViewPop={setViewPop} content={content} setFile={setFile} />
      </div>
    </div>
  );
}

export default App;
