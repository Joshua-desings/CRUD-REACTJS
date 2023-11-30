import React from "react";
import "./Tabla.css"; // Importa el archivo CSS para los estilos

const Tabla = ({ listado, setEditarData, eliminarEstudiante }) => {
  return (
    <>
      {/* Encabezado y estilos para la tabla */}
      <h2>Listado actual</h2>
      <table className="table">
        <thead>
          {/* Encabezados de las columnas */}
          <tr>
            <td>Nombre Completo</td>
            <td>Cédula</td>
            <td>Correo</td>
            <td>Ciudad</td>
            <td>Teléfono</td>
            <td>Comentarios</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {/* Verifica si hay datos en la lista; si no, muestra un mensaje */}
          {listado.length === 0 ? (
            <tr>
              <td colSpan="8">No hay datos</td>
            </tr>
          ) : (
            // Mapea la lista de estudiantes y muestra la información en cada fila
            listado.map((estudiante, index) => {
              return (
                <tr key={index}>
                  {/* Muestra los datos de cada estudiante */}
                  <td>{estudiante.NombreCompleto}</td>
                  <td>{estudiante.Cedula}</td>
                  {/* Nuevos campos agregados */}
                  <td>{estudiante.Correo}</td>
                  <td>{estudiante.Ciudad}</td>
                  <td>{estudiante.Telefono}</td>
                  <td>{estudiante.Comentarios}</td>
                  {/* Botones para editar y eliminar estudiante */}
                  <td>
                    <button onClick={() => setEditarData(estudiante)}>
                      Editar
                    </button>
                    <button onClick={() => eliminarEstudiante(estudiante.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
