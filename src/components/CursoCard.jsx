import React from 'react'

const CursoCard = ({ nombre, docente, horario }) => {
  return (
    <div style={styles.card}>
      <h3>{nombre}</h3>
      <p><strong>Docente:</strong> {docente}</p>
      <p><strong>Horario:</strong> {horario}</p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    backgroundColor: '#f0f7ff',
    minWidth: '250px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
}

export default CursoCard
