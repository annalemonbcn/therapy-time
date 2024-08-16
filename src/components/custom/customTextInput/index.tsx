import { Controller, useFormContext } from 'react-hook-form'
import Text from '../customText'
import { ICustomTextInputProps } from './types'
import { LocationFormModel } from 'src/screens/locationScreen/components/locationForm/types'
import { StyledButton, StyledInput, StyledInputWrapper } from './styles'

const ErrorText = ({ errorMessage }: { errorMessage: string }) => (
  <Text size="s2" color="darkRed" style={{ marginVertical: 8 }}>
    {errorMessage}
  </Text>
)

const CustomTextInput = ({
  fieldName,
  placeholderText,
  isRequired = true,
  isSecured = false,
  sendButton
}: ICustomTextInputProps) => {
  const {
    control,
    formState: { errors }
  } = useFormContext<LocationFormModel>()

  const errorMessage = errors[fieldName]?.message || ''

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
        <>
          <StyledInputWrapper>
            <StyledInput
              placeholder={placeholderText}
              onChangeText={onChange}
              value={value}
              secureTextEntry={isSecured}
            />
            {errorMessage && <ErrorText errorMessage={errorMessage} />}
            {sendButton && (
              <StyledButton onPress={handleSendPress} isInside={sendButton.isInside}>
                Send
              </StyledButton>
            )}
          </StyledInputWrapper>
        </>
      )}
      name={fieldName}
    />
  )
}

export default CustomTextInput
