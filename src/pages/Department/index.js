import "./styleDrop.css";
import React, { useState } from "react";
import Select from "react-select";
import Porta from "../../assets/porta.png";
import Livro from "../../assets/livro.png";
import Pao from "../../assets/pao.png";
import Lab from "../../assets/tubo.png";
import Ferramenta from "../../assets/ferramenta.png";
import Header from "../../Components/Header";
import useLocalStorage from "use-local-storage";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);




export default function Departaments() {
  const salas = [
    {
      value: 1,
      text: "Sala 01",
      icon: (
        <>
          <img src={Porta} height='20' />
        </>
      ),
    },
    {
      value: 2,
      text: "Sala 02",
      icon:
        <>
          <img src={Porta} height='20' />
        </>
    },

  ];
  const laboratorios = [
    {
      value: 1,
      text: "Lab 01",
      icon: (
        <>
          <img src={Lab} height='20' />
        </>
      ),

    },
    {
      value: 2,
      text: "Lab 02",
      icon: (
        <>
          <img src={Lab} height='20' />
        </>
      ),

    },

  ]
  const oficinas = [
    {
      value: 1,
      text: "Oficina 01",
      icon: (
        <>
          <img src={Ferramenta} height='15' />
        </>
      ),

    },
    {
      value: 2,
      text: "Oficina 02",
      icon: (
        <>
          <img src={Ferramenta} height='15' />
        </>
      ),

    },

  ]
  const biblioteca = [
    {
      value: 1,
      text: "Biblioteca",
      icon: (
        <>
          <img src={Livro} height='20' />
        </>
      ),

    },

  ]
  const refeitorio = [
    {
      value: 1,
      text: "Refeitório",
      icon: (
        <>
          <img src={Pao} height='20' />
        </>
      ),

    },

  ]


  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);

  // handle onChange event of the dropdown
  const handleChange1 = (e) => {
    setSelectedOption1(e);
  };
  const handleChange2 = (e) => {
    setSelectedOption2(e);
  };
  const handleChange3 = (e) => {
    setSelectedOption3(e);
  };
  const handleChange4 = (e) => {
    setSelectedOption4(e);
  };
  const handleChange5 = (e) => {
    setSelectedOption5(e);
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header tema = {theme}/>
        <div className="tudo">
        <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <div className="drop-all">
            <Select
              placeholder="Selecione..."
              value={selectedOption1}
              options={salas}
              color="black"
              onChange={handleChange1}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center", height: 40 }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </div>
          <div className="drop-all">
            <Select
              placeholder="Selecione..."
              value={selectedOption2}
              // style={{backgroundColor: '#0000',}}
              options={laboratorios}
              onChange={handleChange2}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center", height: 40 }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </div>

          <div className="drop-all">
            <Select
              placeholder="Selecione..."
              value={selectedOption3}
              options={oficinas}
              onChange={handleChange3}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center", height: 40 }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </div>
          <div className="drop-all">
            <Select
              placeholder="Selecione..."
              value={selectedOption4}
              options={biblioteca}
              onChange={handleChange4}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center", height: 40 }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </div>
          <div className="drop-all">
            <Select
              placeholder="Selecione..."
              value={selectedOption5}
              options={refeitorio}
              onChange={handleChange5}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center", height: 40 }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </div>
        
          {/* <div className="theme-toggle">
            <h2>Light theme</h2>
            <FontAwesomeIcon icon={faToggleOn} />
          </div> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}