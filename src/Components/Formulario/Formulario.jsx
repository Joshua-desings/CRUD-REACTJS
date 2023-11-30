import React, { useEffect, useState } from "react";
import "./Formulario.css"; // Importa el archivo CSS para los estilos

const Formulario = ({ agregarEstudiante, editarData, editarEstudiante }) => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    Cedula: "",
    NombreCompleto: "",
    Correo: "",
    Ciudad: "",
    Telefono: "",
    Comentarios: "",
    id: null,
  });

  // Efecto para actualizar el formulario cuando se edita un estudiante
  useEffect(() => {
    if (editarData !== null) {
      setFormData(editarData);
    } else {
      setFormData({
        Cedula: "",
        NombreCompleto: "",
        Correo: "",
        Ciudad: "",
        Telefono: "",
        Comentarios: "",
        id: null,
      });
    }
  }, [editarData]);

  // Función para manejar la lógica de agregar o editar un estudiante
  const controlAñadir = (e) => {
    e.preventDefault();

    // Verifica que los campos obligatorios estén llenos
    if (
      formData.NombreCompleto !== "" &&
      formData.Cedula !== "" &&
      formData.Correo !== "" &&
      formData.Ciudad !== "" &&
      formData.Telefono !== ""
    ) {
      // Si está en modo de edición, edita el estudiante; de lo contrario, agrega uno nuevo
      if (editarData !== null) {
        editarEstudiante(formData);
      } else {
        formData.id = Date.now();
        agregarEstudiante(formData);
        setFormData({
          NombreCompleto: "",
          Cedula: "",
          Correo: "",
          Ciudad: "",
          Telefono: "",
          Comentarios: "",
          id: null,
        });
      }

      alert("Datos enviados correctamente");
    } else {
      alert("Rellena todos los campos obligatorios");
    }
  };

  // Función para manejar cambios en los campos del formulario
  const controlCambios = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para borrar todos los campos del formulario
  const controlBorrar = () => {
    setFormData({
      NombreCompleto: "",
      Cedula: "",
      Correo: "",
      Ciudad: "",
      Telefono: "",
      Comentarios: "",
      id: null,
    });
  };

  return (
    <>
      {/* Formulario con etiquetas y campos de entrada */}
      <form
        className="formulario"
        onSubmit={controlAñadir}
        onReset={controlBorrar}
      >
        <label htmlFor="NombreCompleto">Nombre Completo:</label>
        <input
          type="text"
          name="NombreCompleto"
          onChange={controlCambios}
          value={formData.NombreCompleto}
        ></input>

        <label htmlFor="Cedula">Cédula:</label>
        <input
          type="number"
          name="Cedula"
          onChange={controlCambios}
          value={formData.Cedula}
        ></input>

        <label htmlFor="Correo">Correo:</label>
        <input
          type="email"
          name="Correo"
          onChange={controlCambios}
          value={formData.Correo}
        ></input>

        <label htmlFor="Ciudad">Ciudad:</label>
        <input
          type="text"
          name="Ciudad"
          onChange={controlCambios}
          value={formData.Ciudad}
        ></input>

        <label htmlFor="Telefono">Teléfono:</label>
        <input
          type="number"
          name="Telefono"
          onChange={controlCambios}
          value={formData.Telefono}
        ></input>

        <label htmlFor="Comentarios">Comentarios:</label>
        <textarea
          name="Comentarios"
          onChange={controlCambios}
          value={formData.Comentarios}
        ></textarea>

        {/* Botones para enviar y borrar datos */}
        <button type="submit" name="enviar">
          Enviar Datos
        </button>
        <button type="reset">Borrar Datos</button>
      </form>
    </>
  );
};

export default Formulario;
