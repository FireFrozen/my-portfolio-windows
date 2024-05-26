import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRef } from 'react'

import './App.css'
import IconItem from "../src/components/IconItem"

import CV from "./assets/documents/CV-Juan Mendoza.pdf"

import PDFicon from "./assets/icons/pdf.png"
import GitHubicon from "./assets/icons/github.png"
import FullScreenIcon from "./assets/icons/full-screen.png"
import FullScreenExitIcon from "./assets/icons/full-screen-exit.png"
import LinkedinIcon from "./assets/icons/linkedin.png"
import ProjectIcon from "./assets/icons/project-icon.png"

import WinLogo from "./assets/icons/win11_logo.png"

function App() {
  const [count, setCount] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);


  /* Get the documentElement (<html>) to display the page in fullscreen */
  var elem = document.documentElement;

  /* View in fullscreen */
  function openFullscreen(){
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  const h1 = useRef();
  const d1 = useRef();

  const ObtenerHora = () => {
    const fechahora = new Date();
    //const hoy = fechahora.toLocaleDateString();
    var hora = fechahora.getHours();
    var minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();


    if ((hora<10) && (minuto>=10)){
      return `0${hora}:${minuto}`;
    } 

    if ((hora<10) && (minuto<10)){
      return `0${hora}:0${minuto}`;
    } 

    if ((hora>=10) && (minuto>=10)){
      return `${hora}:${minuto}`;
    } 

    if ((hora>=10) && (minuto<10)){
      return `${hora}:0${minuto}`;
    } 

  };

  const ObtenerDia = () => {
    var optionsDia = { month: '2-digit', day: '2-digit', year: 'numeric'};
    const fechahora = new Date();
    const hoy = fechahora.toLocaleDateString("en-GB",optionsDia);
    return `${hoy}`;
  };

  
  useEffect(()=>{
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ObtenerHora()}`;
      d1.current.innerHTML = `${ObtenerDia()}`;
    }, 1000);

    return () => clearInterval(cl);
  })

  const winLogoInit = useRef();

  useEffect(()=>{
    const animInit = setInterval(() => {
      winLogoInit.current.style.display = 'none';
    }, 1100);

    return () => clearInterval(animInit);
  })

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div ref={winLogoInit} className='windows-logo-init'>
        <img src={WinLogo} alt="win11-logo" />
      </div>

      <div className='windows-container'>

        <div className='icons-containers'>

          <a href="https://firefrozen.github.io/my-portfolio/#/proyectos" target="_blank">
          <IconItem
            urlimg= {ProjectIcon}
            name= "Projectos"
          />
          </a>


          <a href={CV} target = "_blank">
            <IconItem
              urlimg= {PDFicon}
              name= "Curriculum Vitae"
            />
          </a>

          <a href="https://github.com/FireFrozen" target="_blank">
            <IconItem
              urlimg= {GitHubicon}
              name= "Github"
            />
          </a>

          {!isFullScreen &&
          <div onClick={()=>{
            openFullscreen();
            setIsFullScreen(true);
            }}>
            <IconItem
              urlimg= {FullScreenIcon}
              name= "Full Screen"

            />
          </div>}

          {isFullScreen &&
          <div onClick={()=>{
            closeFullscreen();
            setIsFullScreen(false);
            }}>
            <IconItem
              urlimg= {FullScreenExitIcon}
              name= "Full Screen Exit"

            />
          </div>}

          <a href="https://www.linkedin.com/in/juan-alejandro-mendoza-zapata-235613196/" target="_blank">
            <IconItem
              urlimg= {LinkedinIcon}
              name= "Linkedin"
            />
          </a>


        </div>

        <div className='msg-made-with'>
          <img className='logo-spinning' src={reactLogo} alt="react-logo" />
          <p>Hecho con <strong>React</strong></p>
        </div>

        <div className='win-taskbar'>
            <div className='date-and-lang'>
              <p>ESP</p>
              <div className='date-bar'>
                <div ref={h1}>{ObtenerHora()}</div>
                <div ref={d1}>{ObtenerDia()}</div>
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default App
