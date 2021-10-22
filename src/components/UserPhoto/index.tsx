import { Avatar, GradientContainer } from './styles'

import { Image } from 'react-native'
import React from 'react'
import avatarImg from '../../assets/avatar.png'

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28
  },
  MEDIUM: {
    containerSize: 48,
    avatarSize: 42
  },
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri

interface Props {
  imageUri?: string
  size?: keyof typeof SIZES
}

export function UserPhoto({ imageUri, size = 'MEDIUM' }: Props) {
  const { avatarSize, containerSize } = SIZES[size];

  return (
    <GradientContainer
      style={{
        height: containerSize,
        width: containerSize,
        borderRadius: containerSize/2 
      }}
    >
      <Avatar 
      source={{ uri: imageUri ?? AVATAR_DEFAULT }}
      style={{ width: avatarSize, height: avatarSize, borderRadius: avatarSize/2 }}
      />
    </GradientContainer>
  )
}