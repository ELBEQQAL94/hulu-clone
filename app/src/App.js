import React, { useState } from 'react';

// requests
import {request} from './services';

// Components
import {
  Header,
  Navbar,
  Content,
} from './components';


// Styles
import "./App.scss";

function App() {
  const [selecetdOption, setSelecetdOption] = useState(request.fetchTrending)
  return (
    <div className="App">
      <Header />
      <Navbar setSelecetdOption={setSelecetdOption} selecetdOption={selecetdOption} />
      <Content selecetdOption={selecetdOption} />
    </div>
  );
}

export default App;
