import React from 'react'
import { useState } from 'react'

const RegistroInteracciones = () => {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const reiniciar = () => {
    setContador(0)
  }

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <h2>Registro de Interacciones</h2>
        <p style={styles.contador}>Contador: <strong>{contador}</strong></p>
        <div style={styles.buttonGroup}>
          <button onClick={incrementar} style={styles.buttonPrimary}>
            Incrementar
          </button>
          <button onClick={reiniciar} style={styles.buttonSecondary}>
            Reiniciar
          </button>
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
    border: '1px solid #28a745',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f0fff4',
    maxWidth: '400px'
  },
  contador: {
    fontSize: '18px',
    margin: '15px 0'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px'
  },
  buttonPrimary: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  buttonSecondary: {
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  }
}

export default RegistroInteracciones
