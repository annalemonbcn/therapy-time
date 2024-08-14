import { Modal, StyleSheet, View } from 'react-native'
import { IBasicModalProps } from './types'
import { StyledModal } from './styles'
import { theme } from 'theme'
import ModalHeader from './components/header'
import { StyledPageWrapper } from '../custom/pageWrapper/styles'
import ModalBody from './components/body'

const BasicModal = ({ isOpen, closeModal, children }: IBasicModalProps) => (
  <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={() => closeModal()}>
    <StyledPageWrapper centerVertically style={styles.backgroundOpacity}>
      <StyledModal style={theme.borders.shadow.basicShadow}>
        <ModalHeader />
        <ModalBody>{children}</ModalBody>
      </StyledModal>
    </StyledPageWrapper>
  </Modal>
)

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
})

export default BasicModal
