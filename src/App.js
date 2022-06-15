import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light") // Whether Dark Mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Lights mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
    <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert={alert }/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyse" mode = {mode} showAlert = {showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
