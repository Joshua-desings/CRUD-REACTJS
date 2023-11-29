import React from 'react'

const Tabla = ({ listado, setEditarData, eliminarEstudiante}) => {

  return <>
    <h3>Listado actual</h3>
    <table className='table'>
      <thead>
        <tr>
          <td>Cédula</td>
          <td>Nombre</td>
          <td>Apellido</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      {
        listado.length === 0 ? <tr><td>No hay datos</td></tr>
        : listado.map((estudiante, index) => {
          return <tr key={index}>
                  <td>{estudiante.Cedula}</td>
                  <td>{estudiante.Nombre}</td>
                  <td>{estudiante.Apellido}</td>
                  <td>
                    <button
                    onClick={() => setEditarData(estudiante)}>Editar</button>
                    <button 
                    onClick={() => eliminarEstudiante(estudiante.id)}>Eliminar</button>
                  </td>
                </tr>
        })
      }
      </tbody>
    </table>
  </>
}

export default Tabla;