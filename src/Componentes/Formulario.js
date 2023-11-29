import React, {useEffect, useState} from "react";

const Formulario = ({agregarEstudiante, editarData, editarEstudiante}) => {

    const [formData, setFormData] = useState ({
        Cedula:'',
        Nombre:'',
        Apellido:'',
        id: null
    })

    useEffect(() => {
        if (editarData !== null) {
            setFormData(editarData)
        }
        else{
            setFormData({
                Cedula:'',
                Nombre:'',
                Apellido:'',
                id: null
            })
        }
    }, [editarData])

    const controlAñadir = (e) => {
        e.preventDefault();

        if (formData.Cedula !== '' && formData.Nombre !== '' && formData.Apellido !== '') {
            if (editarData !== null){
                editarEstudiante(formData)
            }
            else{
                formData.id = Date.now()
                agregarEstudiante(formData)
                setFormData({
                    Cedula:'',
                    Nombre:'',
                    Apellido:'',
                    id:null
                })
            }
        }
        else{
            alert("Rellena todos los campos")
        }
    }

    const controlCambios = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return <>
        <form className="formulario" onSubmit={controlAñadir}>
            <label htmlFor="Cedula">Cédula:</label>
            <input  type="number" name="Cedula" onChange={controlCambios} value={formData.Cedula}></input>
            <label htmlFor="Nombre">Nombre:</label>
            <input  type="text" name="Nombre" onChange={controlCambios} value={formData.Nombre}></input>            
            <label htmlFor="Apellido">Apellido:</label>
            <input  type="text" name="Apellido" onChange={controlCambios} value={formData.Apellido}></input>
            <button type="submit" name="enviar">Enviar Datos</button>
            <button type="reset">Borrar Datos</button>
        
        </form>
    </>
}

export default Formulario;