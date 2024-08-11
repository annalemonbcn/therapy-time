import { Modal, StyleSheet, View } from 'react-native'
import Text from '../custom/customText'
import { IBasicModalProps } from './types'
import Button from '../custom/customButton'

const BasicModal = ({ isOpen, closeModal, therapist }: IBasicModalProps) => (
  <Modal animationType="slide" transparent={true} visible={isOpen} onRequestClose={() => closeModal()}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{therapist?.basicInfo.name}</Text>
        <Button onPress={closeModal}>Close</Button>
      </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default BasicModal
