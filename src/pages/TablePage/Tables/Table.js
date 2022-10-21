import React, { useState } from "react";
import "../Styles/table.css";
import ModalInfo from "../../../Components/info modal";
import NewPatrimonioModal from '../../../Components/newpatrimoniomodal';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


import Categories from "./Categories";

function Tables() {
  const [data, setData] = useState(Categories);

  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.name === catItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="containerUp">

        {/* <div className="row">
          <table>
            <thead>
              <tr>
                <td>
                  <text className="textclass">Filter</text>
                </td>
              </tr>
            </thead>
            <tbody>

              <div className="col">
                <button className="checkbtn" onClick={() => setData(Categories)}>
                  All
                </button>
                <button
                  className="checkbtn"
                  onClick={() => filterResult("Cadeira")}
                >
                  Cadeira
                </button>
                <button className="checkbtn" onClick={() => filterResult("Mesa")}>
                  Mesa
                </button>
                <button
                  className="checkbtn"
                  onClick={() => filterResult("Computador")}
                >
                  Computador
                </button>
                <button
                  className="checkbtn"
                  onClick={() => filterResult("Teclado")}
                >
                  Teclado
                </button>
              </div>
            </tbody>
          </table>
        </div> */}

        <div className="tableContainer">
          <button className="btn-add-patrimonio">
            <NewPatrimonioModal/>
          </button>

          <div className="subContainer">
            <table className="table">
              <thead className="thead">
                <tr>
                  <td></td>
                  <td>N° de identificação</td>
                  <td>Nome/modelo</td>
                  <td>Local</td>
                  <td>Situação</td>
                 
                </tr>
              </thead>

              {data.map((values) => {
                const { id, name, local, situacao } = values;
                return (
                  <tbody>
                    <tr>
                    <td >
                        <div>
                            <button >
                              
                              <ModalInfo />
                            </button>
                        </div>
                      </td>
                      <td >
                        <div>
                          <div>
                            <p className="id-object">{id}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span >{name}</span>
                      </td>
                      <td>
                        <span>{local}</span>
                      </td>
                      <td >
                        <span >{situacao}</span>
                      </td>
                     
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>

          <div className="tabbleFooter">
            <div className="pagination">
              <span>mostrando 1 - 10 de 45</span>
              <nav>
                <ul>
                  <li className="arrows">
                    <FaChevronLeft size={20} />
                  </li>
                  <li className="numberSelected">1</li>
                  <li className="number">2</li>
                  <li className="number">3</li>
                  <li className="number">4</li>
                  <li className="number">5</li>
                  <li className="arrows">
                    <FaChevronRight size={20} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
