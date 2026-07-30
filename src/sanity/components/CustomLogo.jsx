import React from 'react'

export const CustomLogo = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div 
        style={{
          background: 'linear-gradient(135deg, #1976D2, #F2994A)',
          color: 'white',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          letterSpacing: '1px',
          borderRadius: '6px'
        }}
      >
        EF
      </div>
      <span style={{ 
        fontWeight: '800', 
        fontSize: '16px', 
        letterSpacing: '1.5px',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase'
      }}>
        Editly Foundry
      </span>
    </div>
  )
}
