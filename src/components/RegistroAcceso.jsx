import React from 'react'
import { useEffect } from 'react'

const RegistroAcceso = () => {
  useEffect(() => {
    const ahora = new Date()
    const mensaje = `[${ahora.toLocaleTimeString()}] Usuario accedió a la sección - Registro creado`
    console.log(mensaje)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <h2>Registro de Acceso al Sistema</h2>
        <p>✓ Acceso registrado en la consola del navegador</p>
        <p style={styles.instruccion}>
          (Abre la consola del navegador con F12 para ver el registro de acceso)
        </p>
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
    border: '1px solid #dc3545',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff5f5',
    maxWidth: '400px'
  },
  instruccion: {
    fontSize: '12px',
    color: '#666',
    fontStyle: 'italic',
    marginTop: '10px'
  }
}

export default RegistroAcceso
