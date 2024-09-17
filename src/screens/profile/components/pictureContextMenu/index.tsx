import CameraIcon from 'src/components/icons/cameraIcon'
import { Option } from './types'
import ImageIcon from 'src/components/icons/imageIcon'
import { theme } from 'theme'
import { StyleSheet, View } from 'react-native'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import EditIcon from 'src/components/icons/editIcon'
import Text from 'src/components/custom/customText'
import { Fragment } from 'react'

const Divider = () => <View style={{ height: 1, backgroundColor: theme.colors.b200 }} />

const PictureContextMenu = ({ takePicture, openGallery }: { takePicture: () => void; openGallery: () => void }) => {
  const options: Option[] = [
    {
      id: 'takePicture',
      title: 'Take a picture',
      trigger: () => takePicture(),
      icon: <CameraIcon size={18} color="b700" />
    },
    {
      id: 'openGallery',
      title: 'Open the gallery',
      trigger: () => openGallery(),
      icon: <ImageIcon size={18} color="b700" />
    }
  ]

  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.iconContainer}>
          <EditIcon size={18} color="b0" />
        </View>
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.optionsContainer,
          optionWrapper: styles.optionStyles
        }}
      >
        {options.map((option, idx) => (
          <Fragment key={option.id}>
            <MenuOption onSelect={option.trigger}>
              <Text size="s3" color="b700">
                {option.title}
              </Text>
              {option.icon}
            </MenuOption>
            {idx === 0 && <Divider />}
          </Fragment>
        ))}
      </MenuOptions>
    </Menu>
  )
}

export default PictureContextMenu

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borders.radius.xs,
    backgroundColor: theme.colors.main,
    bottom: theme.space.sm,
    right: theme.space.sm,
    padding: theme.space.xs
  },
  optionsContainer: {
    borderRadius: theme.borders.radius.sm,
    gap: theme.space.md
  },
  optionStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.space.xl,
    paddingVertical: theme.space.sm2,
    paddingHorizontal: theme.space.sm
  }
})
