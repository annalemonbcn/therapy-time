import Text from 'src/components/custom/customText'
import { ICardNameProps } from './types'

const CardName = ({ name }: ICardNameProps) => <Text fontWeight="bold">{name}</Text>

export default CardName
