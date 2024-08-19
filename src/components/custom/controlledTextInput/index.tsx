import { Controller, useFormContext } from 'react-hook-form'
import Text from '../customText'
import { ICustomTextInputProps } from './types'
import { StyledButton, StyledInputWrapper, StyledInput, StyledInputContainer } from './styles'
import SearchIcon from 'src/components/icons/searchIcon'
import { theme } from 'theme'

const ErrorText = ({ errorMessage }: { errorMessage: string }) => (
  <Text size="s2" color="darkRed" style={{ marginVertical: 8 }}>
    {errorMessage}
  </Text>
)

const ControlledTextInput = ({
  fieldName,
  placeholderText,
  isRequired = true,
  isSecured = false,
  sendButton,
  iconType,
  type
}: ICustomTextInputProps) => {
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
            {iconType && <SearchIcon />}
            <StyledInput
              placeholder={placeholderText}
              placeholderTextColor={theme.colors.b400}
              onChangeText={onChange}
              value={value}
              secureTextEntry={isSecured}
              isTouched={isDirty}
            />
          </StyledInputWrapper>
          {errors[fieldName] && <ErrorText errorMessage={errors[fieldName].message as string} />}
          {sendButton && (
            <StyledButton onPress={handleSendPress} isInside={sendButton.isInside}>
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
