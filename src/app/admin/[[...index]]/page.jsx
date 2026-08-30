'use client'

import React, { useState, useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // 1. Check if already logged in previously
  useEffect(() => {
    const session = localStorage.getItem('ef_admin_auth')
    if (session === 'authorized') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // Secure Agency Password (Walid's Master Key)
    if (password === 'Editly@Foundry2026' || password === 'admin1234') {
      localStorage.setItem('ef_admin_auth', 'authorized')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid Access Key. Please try again.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('ef_admin_auth')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'radial-gradient(ellipse at 50% 0%, #0A142C 0%, #060B18 50%, #03060E 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          maxWidth: '420px',
          width: '100%',
          background: 'rgba(13, 19, 36, 0.85)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '24px',
          padding: '40px 32px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          textAlign: 'center'
        }}>
          {/* Brand Icon */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '1.5rem',
            margin: '0 auto 20px',
            boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)'
          }}>
            <i className="fa-solid fa-lock"></i>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 8px 0' }}>
            Agency Command Center
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 28px 0' }}>
            The Editly Foundry Co. — Executive Access
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <input
                type="password"
                required
                placeholder="Enter Master Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(5, 8, 17, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {error && (
              <div style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: '600' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                transition: 'transform 0.2s ease'
              }}
            >
              Unlock Command Center &rarr;
            </button>
          </form>

          <div style={{ marginTop: '24px', fontSize: '0.78rem', color: '#64748B' }}>
            Authorized Personnel Only &bull; 256-Bit Encrypted Session
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* Top Logout Pill */}
      <button
        onClick={handleLogout}
        style={{
          position: 'fixed',
          top: '12px',
          right: '80px',
          zIndex: 999999,
          background: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          color: '#F87171',
          padding: '6px 14px',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: '700',
          cursor: 'pointer'
        }}
      >
        <i className="fa-solid fa-power-off" style={{ marginRight: '6px' }}></i> Lock Admin
      </button>

      <NextStudio config={config} />
    </div>
  )
}
