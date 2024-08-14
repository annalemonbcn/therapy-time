type Colors =
  | 'main'
  | 'b0'
  | 'b50'
  | 'b100'
  | 'b200'
  | 'b300'
  | 'b400'
  | 'b500'
  | 'b600'
  | 'b700'
  | 'b800'
  | 'b900'
  | 'teal'
  | 'deepTeal'
  | 'lightTeal'
  | 'green'
  | 'paleGreen'
  | 'darkRed'
  | 'pink'
  | 'deepPink'
  | 'lightPink'
  | 'purple'
  | 'lightPurple'
  | 'blue'
  | 'paleBlue'
  | 'orange'

type FontWeight = 'regular' | 'semi-bold' | 'bold'

type FontSize = 's1' | 's11' | 's2' | 's3' | 's4' | 's5' | 's6'

type Space = 'xs2' | 'xs' | 'sm2' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2'

type FlexCenter = 'center' | 'flex-start' | 'flex-end' | 'space-between'

export { Colors, FontSize, FontWeight, Space, FlexCenter }
