import React from "react";
import './styleSidebar.css'

import Perfil from '../../assets/perfil.png'

import { FiList } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";


export default function Sidebar(props) {

    if (props.tema == 'dark') {
        var cor = "containerSidebar-dark"
        var corIcone = "white"
    } else {
        var cor = "containerSidebar-light"
        var corIcone = "white"
    }
    return (
        <div className={cor}>
            <div className="contentSidebar">
                <div className="containerSidebarPerfil">
                    <img src={Perfil} alt="" />
                    <div className="infosPerfilSidebar">
                        <h id="cargoSidebar">Administrador</h>
                        <p id="nameSidebar">Geraldo Luiz</p>
                    </div>
                </div>

                <div className="containerSidebarButtons">
                    <button>
                        <ImHome3 size={25} id="iconSidebar" color={corIcone}/>
                        <p className="dep">Departamentos</p>
                    </button>
                    <button>
                        <FiList size={25} id="iconSidebar" color={corIcone} />
                        <p className="tab">Tabela de Itens</p>
                    </button>
                    <button>
                        <FaUsers size={25} id="iconSidebar" color={corIcone} />
                        <p className="usu">Usuários</p>
                    </button>
                </div>
            </div>
        </div>
    )
}