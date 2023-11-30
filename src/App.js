import React, { useState, useEffect } from "react";
import Formulario from "./Components/Formulario/Formulario";
import Tabla from "./Components/Tabla/Tabla";
import "./App.css";

const Crud = () => {
  // Estado para manejar la información de edición
  const [editarData, setEditarData] = useState(null);
  // Estado para manejar la lista de estudiantes
  const [listado, setListado] = useState(() => {
    // Obtener la información del local storage al iniciar la aplicación
    const guardardatos = window.localStorage.getItem("listadoData");
    return guardardatos ? JSON.parse(guardardatos) : [];
  });

  // Efecto para guardar cambios en el local storage cuando la lista cambia
  useEffect(() => {
    window.localStorage.setItem("listadoData", JSON.stringify(listado));
  }, [listado]);

  // Función para agregar un estudiante a la lista
  const agregarEstudiante = (estudiante) => {
    setListado([...listado, estudiante]);
  };

  // Función para editar los datos de un estudiante en la lista
  const editarEstudiante = (estudiante) => {
    const edicion = listado.map((el) =>
      el.id === estudiante.id ? estudiante : el
    );
    setListado(edicion);
    setEditarData(null);
  };

  // Función para eliminar un estudiante de la lista
  const eliminarEstudiante = (id) => {
    const borrar = window.confirm(
      `¿Desea borrar a este estudiante de la lista?`
    );
    if (borrar) {
      const edicion = listado.filter((el) => el.id !== id);
      setListado(edicion);
    }
  };

  return (
    <>
      <h2>Formulario para Estudiantes</h2>
      {/* Componente de formulario para agregar y editar estudiantes */}
      <Formulario
        agregarEstudiante={agregarEstudiante}
        editarEstudiante={editarEstudiante}
        editarData={editarData}
      />
      {/* Componente de tabla para mostrar la lista de estudiantes */}
      <Tabla
        listado={listado}
        setEditarData={setEditarData}
        eliminarEstudiante={eliminarEstudiante}
      />
    </>
  );
};

export default Crud;
