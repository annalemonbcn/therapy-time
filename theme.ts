// inspo: https://www.figma.com/design/192gQDmDun6PH6Ohd2gtC7/Doctor-Appointment-App-UI-Kit-(Community)?node-id=2-2&t=5dvgQBv3zoe4dVmB-0

const colors = {
  main: '#1C2A3A',
  b0: '#FFFFFF',
  b50: '#F9FAFB',
  b100: '#F3F4F6',
  b200: '#E5E7EB',
  b300: '#D1D5DB',
  b400: '#9CA3AF',
  b500: '#6B7280',
  b600: '#4B5563',
  b700: '#374151',
  b800: '#1F2A37',
  b900: '#111928',
  teal: '#4D9B91',
  deepTeal: '#014737',
  lightTeal: '#A4CFC3',
  green: '#93C19E',
  paleGreen: '#DEF7E4',
  darkRed: '#771D1D',
  toastRed: '#DF4232',
  pink: '#DEB6B5',
  deepPink: '#DC9497',
  lightPink: '#FDE8E8',
  purple: '#352261',
  lightPurple: '#ACA1CD',
  blue: '#1C64F2',
  paleBlue: '#89CCDB',
  orange: '#F5AD7E',
  gold: '#FEB052'
}

const typography = {
  fontSize: {
    s1: 10,
    s11: 12,
    s2: 14,
    s3: 16,
    s33: 18,
    s4: 20,
    s5: 24,
    s6: 32
  },
  fontWeight: {
    regular: 'Inter_400Regular',
    'semi-bold': 'Inter_600SemiBold',
    bold: 'Inter_700Bold'
  }
}

const space = {
  xs2: 2,
  xs: 4,
  sm2: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xl2: 40,
  xl3: 56,
  xl4: 80
}

const borders = {
  sizes: {
    sm: 1,
    md: 2,
    lg: 4,
    xl: 8
  },
  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 32,
    xl2: 64,
    circle: 100
  },
  shadow: {
    basicShadow: {
      shadowColor: colors.b400,
      shadowOffset: {
        width: 0,
        height: 12
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 15
    }
  }
}

const theme = {
  colors,
  typography,
  borders,
  space
}

export { theme }
