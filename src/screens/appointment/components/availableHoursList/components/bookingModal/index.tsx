import BasicModal from 'src/components/modal'
import Text from 'src/components/custom/customText'
import { BookingFormShape } from 'src/screens/appointment/types'
import { useFormContext } from 'react-hook-form'

const BookingModal = ({
  modalVisible,
  setModalVisible
}: {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { getValues } = useFormContext<BookingFormShape>()

  // TODO: seguir
  return (
    <BasicModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Text size="s4">The selected day and time are:</Text>
      <Text>
        {getValues('day')} {getValues('hour')}
      </Text>
    </BasicModal>
  )
}

export default BookingModal
