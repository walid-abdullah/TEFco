import React from 'react'

export const CustomLogo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="/Logo/the-editly-foundry-co-mark-tile.svg" alt="" width="32" height="32" style={{ display: 'block' }} />
      <span style={{ fontWeight: '700', fontSize: '15px', fontFamily: 'sans-serif' }}>
        The Editly Foundry Co.
      </span>
    </div>
  )
}
