import { StyledButton, StyledInput, StyledInputWrapper } from './styles'
import { ICustomInputProps } from './types'

const CustomInput = ({ defaultValue, setInputValue, placeholder, sendButton }: ICustomInputProps) => {
  const handleSendPress = () => {
    sendButton?.triggerAction()
  }

  return (
    <StyledInputWrapper>
      <StyledInput
        placeholder={placeholder}
        onChangeText={(newText) => setInputValue(newText)}
        defaultValue={defaultValue}
      />
      {sendButton && (
        <StyledButton onPress={handleSendPress} isInside={sendButton.isInside}>
          Send
        </StyledButton>
      )}
    </StyledInputWrapper>
  )
}

export default CustomInput
