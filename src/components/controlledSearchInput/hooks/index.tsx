import { useState } from 'react'
import { Animated, Easing } from 'react-native'

const useAnimated = () => {
  const [cancelButtonOpacity] = useState(new Animated.Value(0))

  const fadeIn = () => {
    Animated.timing(cancelButtonOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(cancelButtonOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start()
  }

  return {
    cancelButtonOpacity,
    fadeIn,
    fadeOut
  }
}

export { useAnimated }
