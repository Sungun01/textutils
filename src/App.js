import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); 
  const[alert, setAlert] =useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1800);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='White'; 
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}
 
export default App;
