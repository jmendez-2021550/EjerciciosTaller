import React from 'react'

const PerfilEstudiante = () => {
  const estudiante = {
    nombre: 'Jeremy',
    apellido: 'Mendez',
    carrera: 'Ingeniería en Sistemas',
    edad: 18,
    carne: '2021550'
  }

  return (
    <div style={styles.container}>
      <div style={styles.perfil}>
        <h2>Perfil de Estudiante</h2>
        <p><strong>Nombre:</strong> {estudiante.nombre} {estudiante.apellido}</p>
        <p><strong>Carrera:</strong> {estudiante.carrera}</p>
        <p><strong>Edad:</strong> {estudiante.edad} años</p>
        <p><strong>Número de Carné:</strong> {estudiante.carne}</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    margin: '20px 0'
  },
  perfil: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px'
  }
}

export default PerfilEstudiante
