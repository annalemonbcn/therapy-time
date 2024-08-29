import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { IBasicModalProps, IHeaderProps } from './types'
import { theme } from 'theme'
import CloseIcon from '../icons/closeIcon'

const Header = ({ setModalVisible }: IHeaderProps) => (
  <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
    <View style={styles.header}>
      <CloseIcon />
    </View>
  </TouchableWithoutFeedback>
)

const BasicModal = ({ modalVisible, setModalVisible, showCloseButton = true, children }: IBasicModalProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.centeredView, styles.backdrop]}>
          <View style={[theme.borders.shadow.basicShadow, styles.modalView]}>
            {showCloseButton && <Header setModalVisible={setModalVisible} />}
            {children}
          </View>
        </View>
      </Modal>
    </View>
  )
}

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
    borderRadius: theme.borders.radius.xl,
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
