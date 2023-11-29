import React, {useState, useEffect} from "react";
import Formulario from "./Componentes/Formulario";
import Tabla from "./Componentes/Tabla";
import './App.css';




const Crud = () => {
    const [editarData, setEditarData] = useState(null);
    const [listado, setListado] = useState(() => {

        //Solicitar la información al localstorage
        const guardardatos = window.localStorage.getItem("listadoData");
        if (guardardatos) {
            return JSON.parse(guardardatos);
        }
        else {
            return []
        }
    });

    
    //Enviar la informacion en formato JSON al localstorage
    useEffect(() => {
        window.localStorage.setItem("listadoData", JSON.stringify(listado))
    }, [listado])


    //Agregar un estudiante
    const agregarEstudiante = (estudiante) => {
        setListado([
            ...listado,
            estudiante
        ])
    };


    //Editar datos de un estudiante
    const editarEstudiante = (estudiante) => {
        const edicion = listado.map(el => el.id === estudiante.id ? estudiante: el)
        setListado(edicion)
        setEditarData(null)
    }


    //Eliminar un estudiante
    const eliminarEstudiante = id => {
        const borrar = window.confirm(`Desea borrar a este estudiante de la lista?`)

        if (borrar) {
            const edicion = listado.filter(el => el.id !== id)
            setListado(edicion);
        }
    }


    return <>
    <h2>crud</h2>

    <Formulario agregarEstudiante={agregarEstudiante} editarEstudiante={editarEstudiante} editarData={editarData}/>

    <Tabla listado={listado} setEditarData={setEditarData} eliminarEstudiante={eliminarEstudiante}/>
    </>
}

export default Crud;
