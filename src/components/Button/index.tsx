import { ActivityIndicator, ColorValue, TouchableOpacityProps } from 'react-native'
import { ButtonIcon, ButtonTitle, ButtonTouchable } from './styles'

import { AntDesign } from '@expo/vector-icons'
import React from 'react'

type Props = TouchableOpacityProps & {
  title: string
  color: ColorValue
  backgroundColor: ColorValue
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isLoading?: boolean
}

export function Button({ 
  title, 
  color, 
  backgroundColor, 
  icon, 
  isLoading = false, 
  ...rest 
}: Props) {
  return (
    <ButtonTouchable
      style={{ backgroundColor }}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
      >
      {
        isLoading ?
        <ActivityIndicator color={color} /> 
        :
        <>
          <ButtonIcon name={icon} style={{ color }} />
          <ButtonTitle style={{ color }}>
            {title}
          </ButtonTitle>
        </>
      }
    </ButtonTouchable>
  )
}