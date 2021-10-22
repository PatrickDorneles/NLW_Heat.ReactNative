import { Button } from '../Button'
import { COLORS } from '../../theme'
import React from 'react'
import { SignInBoxContainer } from './styles'
import { useAuth } from '../../hooks/auth'

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth()

  return (
    <SignInBoxContainer>
      <Button
        title="Entrar com o GitHub"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </SignInBoxContainer>
  )
}