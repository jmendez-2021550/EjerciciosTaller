import React from 'react'
import CursoCard from './CursoCard'

const CursosDisponibles = () => {
  const cursos = [
    {
      id: 1,
      nombre: 'Programación en React',
      docente: 'Ing. Oscar Cumatz',
      horario: 'Lunes y Miércoles 9:00 AM - 11:00 AM'
    },
    {
      id: 2,
      nombre: 'Bases de Datos',
      docente: 'Ing. Santigo Quesado',
      horario: 'Martes y Jueves 10:00 AM - 12:00 PM'
    },
    {
      id: 3,
      nombre: 'JavaScript Avanzado',
      docente: 'Ing. Hugo Samayoa',
      horario: 'Lunes, Miércoles y Viernes 3:00 PM - 5:00 PM'
    }
  ]

  return (
    <div style={styles.container}>
      <h2>Cursos Disponibles</h2>
      <div style={styles.cursosList}>
        {cursos.map(curso => (
          <CursoCard
            key={curso.id}
            nombre={curso.nombre}
            docente={curso.docente}
            horario={curso.horario}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    margin: '20px 0'
  },
  cursosList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
}

export default CursosDisponibles
