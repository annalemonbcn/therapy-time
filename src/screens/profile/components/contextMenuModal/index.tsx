import { StyleSheet, View } from 'react-native'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Text from 'src/components/custom/customText'
import BasicModal from 'src/components/modal'
import { useModalContext } from 'src/context/ModalProvider'
import MenuItem from './menuItem'
import { theme } from 'theme'
import { useContextMenuActions } from 'src/screens/profile/components/contextMenuModal/hooks'

const FlatListItemSeparator = () => (
  <View
    style={{
      height: 1,
      width: '100%',
      backgroundColor: theme.colors.b300,
      marginVertical: theme.space.sm
    }}
  />
)

const ContextMenuModal = () => {
  const { isOpen, closeModal } = useModalContext()

  const { contextMenuOptions } = useContextMenuActions()

  return (
    <BasicModal
      isModalOpen={isOpen}
      closeModal={closeModal}
      showCloseButton={false}
      borderRadius="md"
      alignContent="flex-start"
      animationType="fade"
    >
      <FlatList
        data={contextMenuOptions}
        renderItem={({ item }) => <MenuItem {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <Text size="s2" color="blue">
            Cancel
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </BasicModal>
  )
}

export default ContextMenuModal

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: theme.space.lg,
    alignItems: 'center',
    width: '100%'
  }
})
