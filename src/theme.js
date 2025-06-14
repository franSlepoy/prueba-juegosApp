// src/theme.js
export default {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0d1b2a',
          surface: '#1b263b',
          primary: '#00b4d8',
          secondary: '#90e0ef',
          accent: '#0077b6',
          error: '#ef476f',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#f8f9fa',
          primary: '#0077b6',
          secondary: '#00b4d8',
          accent: '#90e0ef',
          error: '#d90429',
        },
      },
    },
  }
  