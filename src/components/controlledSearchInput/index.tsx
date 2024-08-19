import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { theme } from 'theme'
import { ISearchInputProps } from './types'
import { StyledInput, StyledInputContainer, StyledInputWrapper } from './styles'
import SearchIcon from '../icons/searchIcon'
import Button from '../custom/customButton'
import { Animated } from 'react-native'
import { useAnimated } from './hooks'

const ControlledSearchInput = ({ fieldName, placeholderText, type }: ISearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const { cancelButtonOpacity, fadeIn, fadeOut } = useAnimated()

  const {
    control,
    reset,
    formState: { isDirty }
  } = useFormContext()

  const handleFocus = () => {
    setIsFocused(true)
    fadeIn()
  }

  const handleBlur = () => {
    setIsFocused(false)
    fadeOut()
  }

  return (
    <Controller
      control={control}
      render={({ field: { value, onChange } }) => (
        <StyledInputContainer>
          <StyledInputWrapper type={type}>
            <SearchIcon />
            <StyledInput
              value={value}
              placeholder={placeholderText}
              placeholderTextColor={theme.colors.b400}
              onChangeText={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              isTouched={isDirty}
            />
          </StyledInputWrapper>
          {isFocused && (
            <Animated.View style={{ opacity: cancelButtonOpacity }}>
              <Button onPress={handleBlur}>Cancel</Button>
            </Animated.View>
          )}
        </StyledInputContainer>
      )}
      name={fieldName}
    />
  )
}

export default ControlledSearchInput
