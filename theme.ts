// inspo: https://www.figma.com/design/192gQDmDun6PH6Ohd2gtC7/Doctor-Appointment-App-UI-Kit-(Community)?node-id=2-2&t=5dvgQBv3zoe4dVmB-0

const colors = {
  main: '#1C2A3A',
  base: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2A37',
    900: '#111928'
  },
  others: {
    teal: '#4D9B91',
    deepTeal: '#014737',
    lightTeal: '#A4CFC3',
    green: '#93C19E',
    paleGreen: '#DEF7E4',
    darkRed: '#771D1D',
    pink: '#DEB6B5',
    deepPink: '#DC9497',
    lightPink: '#FDE8E8',
    purple: '#352261',
    lightPurple: '#ACA1CD',
    blue: '#1C64F2',
    paleBlue: '#89CCDB',
    orange: '#F5AD7E'
  }
}

const typography = {
  fontSize: {
    s1: 14,
    s2: 16,
    s3: 18,
    s4: 20
  },
  fontWeight: {
    regular: '400',
    bold: '700'
  },
  fontFamily: 'Inter'
}

const borders = {
  sizes: {
    sm: 1,
    md: 2,
    lg: 4,
    xl: 8
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    circle: 'full'
  }
}

const space = {
  xs2: 2,
  xs: 4,
  sm2: 8,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  xl2: 40
}

const theme = {
  colors,
  typography,
  borders,
  space
}

export { theme }
