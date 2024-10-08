import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { IBasicModalProps, IHeaderProps } from './types'
import { theme } from 'theme'
import CloseIcon from '../icons/closeIcon'

const Header = ({ closeModal }: IHeaderProps) => (
  <TouchableWithoutFeedback onPress={() => closeModal()}>
    <View style={styles.header}>
      <CloseIcon />
    </View>
  </TouchableWithoutFeedback>
)

const BasicModal = ({
  isModalOpen,
  closeModal,
  showCloseButton = true,
  borderRadius = 'xl',
  alignContent = 'center',
  animationType = 'none',
  children
}: IBasicModalProps) => (
  <View style={styles.centeredView}>
    <Modal animationType={animationType} transparent={true} visible={isModalOpen} onRequestClose={() => closeModal()}>
      <View style={[styles.centeredView, styles.backdrop]}>
        <View
          style={[
            theme.borders.shadow.basicShadow,
            styles.modalView,
            { borderRadius: theme.borders.radius[borderRadius], alignItems: alignContent }
          ]}
        >
          {showCloseButton && <Header closeModal={closeModal} />}
          {children}
        </View>
      </View>
    </Modal>
  </View>
)

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView: {
    width: '90%',
    backgroundColor: theme.colors.b50,
    paddingVertical: theme.space.md,
    paddingHorizontal: theme.space.lg,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 10
  }
})

export default BasicModal
