import Foto from "./components/Foto"
import "./App.css";

import img1 from "./assets/img/img1.jpeg"
import img2 from "./assets/img/img2.jpeg"
import img3 from "./assets/img/img3.jpeg"
import img4 from "./assets/img/img4.jpeg"
import { useState } from "react";
const App = () => {
  const [background, setBackground] = useState(true);
  const change_color = ()=>{
    const root = document.querySelector('#root');
    const btn = document.querySelector('#btn');
    const p = document.querySelector('.p');
    changeState();
    console.log(background);
    if(background){
      console.log('Activo')
      root.style.backgroundColor = "#f9b841";
      btn.style.backgroundColor = "white";
      btn.style.color = "#f9b841";
      p.style.color = "white";
      setBackground(false);
    }else{
      console.log('Inactivo')
      root.style.backgroundColor = "white";
      btn.style.backgroundColor = "#f9b841";
      btn.style.color = "white";
      p.style.color = "#f9b841";
      setBackground(true);
    }
    console.log(root);
    // root.computedStyleMap.backgroundColor = 'red';
  }
  const changeState = ()=>{
    setBackground(!background)
  }
  return (
    <div id="block_content">
        <button id="btn" onClick={change_color}>Change the theme</button>
        <div id="block_img">
          <div id="block_img1">
            <Foto img={img1} clase = 'f1'/> 
            <Foto img={img2} clase = 'f2'/> 
          </div>
          <div id="block_img2">
            <Foto img={img3} clase = 'f2'/> 
            <Foto img={img4} clase = 'f1'/> 
          </div>
        </div>
        <div id="content_text"><p className="p">Obleas<br/>Delights</p></div>
    </div>
  )
}

export default App