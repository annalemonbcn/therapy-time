import { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { theme } from 'theme'
import Text from '../customText'
import { Controller, useFormContext } from 'react-hook-form'
import { Icon, ICustomTextInputProps } from './types'
import { StyledButton, StyledInputWrapper, StyledInput, StyledInputContainer } from './styles'
import SearchIcon from 'src/components/icons/searchIcon'
import EmailIcon from 'src/components/icons/emailIcon'
import PasswordIcon from 'src/components/icons/passwordIcon'
import UserIcon from 'src/components/icons/userIcon'
import { showWarnNotification } from 'src/utils/notifications'

const ErrorText = ({ errorMessage }: { errorMessage: string }) => (
  <Text size="s2" color="darkRed" style={{ marginVertical: 8 }}>
    {errorMessage}
  </Text>
)

const iconMap = {
  email: EmailIcon,
  password: PasswordIcon,
  search: SearchIcon,
  user: UserIcon
}
const renderIcon = (icon: Icon) => {
  const IconComponent = iconMap[icon]
  return IconComponent ? <IconComponent color="b400" /> : null
}

const ControlledTextInput = ({
  fieldName,
  placeholderText,
  isRequired = true,
  isSecured = false,
  sendButton,
  icon,
  type,
  canWrite = true
}: ICustomTextInputProps) => {
  const [isVisible, setIsVisible] = useState(isSecured)

  const {
    control,
    formState: { errors, isDirty }
  } = useFormContext()

  const handleSendPress = () => {
    sendButton?.triggerAction()
  }

  return (
    <Controller
      control={control}
      rules={{
        required: isRequired ? 'This field is required' : undefined
      }}
      render={({ field: { value, onChange } }) => (
        <StyledInputContainer>
          <StyledInputWrapper type={type}>
            {icon && renderIcon(icon)}
            <StyledInput
              onPress={!canWrite ? () => showWarnNotification("Email can't be changed") : () => {}}
              editable={canWrite ? true : false}
              placeholder={placeholderText}
              placeholderTextColor={theme.colors.b400}
              onChangeText={onChange}
              value={value}
              secureTextEntry={isVisible}
              autoCapitalize="none"
              isTouched={isDirty}
              onSubmitEditing={handleSendPress}
            />
            {isSecured && (
              <TouchableWithoutFeedback onPress={() => setIsVisible((prevState) => !prevState)}>
                <Text size="s1" color="b500">
                  Show
                </Text>
              </TouchableWithoutFeedback>
            )}
          </StyledInputWrapper>
          {errors[fieldName] && <ErrorText errorMessage={errors[fieldName].message as string} />}
          {sendButton && (
            <StyledButton onPress={handleSendPress} isInside={sendButton.isInside} disabled={sendButton.isDisabled}>
              Send
            </StyledButton>
          )}
        </StyledInputContainer>
      )}
      name={fieldName}
    />
  )
}

export default ControlledTextInput
