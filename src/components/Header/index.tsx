import { HeaderContainer, LogoutText, UserArea } from './styles'
import { Text, TouchableOpacity } from 'react-native'

import LogoSvg from '../../assets/logo.svg'
import React from 'react'
import { UserPhoto } from '../UserPhoto'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <HeaderContainer>
      <LogoSvg />

        <UserArea>
          {
            user && 
            <TouchableOpacity onPress={signOut}>
              <LogoutText>Sair</LogoutText>
            </TouchableOpacity>
            
          }
          <UserPhoto
            imageUri={user?.avatar_url}
          />
        </UserArea> 

    </HeaderContainer>
  )
}