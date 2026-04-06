import React from 'react'
import { useState } from 'react'

const BusquedaDinamica = () => {
  const [busqueda, setBusqueda] = useState('')

  const usuariosDisponibles = [
    'Juan Pérez',
    'María García',
    'Carlos López',
    'Ana Rodríguez',
    'Roberto Martínez',
    'Laura González'
  ]

  const usuariosFiltrados = usuariosDisponibles.filter(usuario =>
    usuario.toLowerCase().includes(busqueda.toLowerCase())
  )

  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <h2>Búsqueda Dinámica de Usuarios</h2>
        <input
          type="text"
          placeholder="Escribe el nombre de un usuario..."
          value={busqueda}
          onChange={handleChange}
          style={styles.input}
        />
        <div style={styles.resultados}>
          {busqueda && (
            <div>
              <p><strong>Resultados:</strong></p>
              {usuariosFiltrados.length > 0 ? (
                <ul style={styles.lista}>
                  {usuariosFiltrados.map((usuario, index) => (
                    <li key={index}>{usuario}</li>
                  ))}
                </ul>
              ) : (
                <p style={styles.noResultados}>No se encontraron usuarios</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    margin: '20px 0'
  },
  panel: {
    border: '1px solid #ffc107',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fffbf0',
    maxWidth: '400px'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ffc107',
    boxSizing: 'border-box',
    marginTop: '10px'
  },
  resultados: {
    marginTop: '15px'
  },
  lista: {
    listStyle: 'none',
    padding: '10px 0',
    margin: 0
  },
  noResultados: {
    color: '#999',
    fontStyle: 'italic'
  }
}

export default BusquedaDinamica
