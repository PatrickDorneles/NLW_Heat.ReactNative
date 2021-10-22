import React, { useState } from 'react'
import { SendMessageFormContainer, SendMessageTextInput } from './styles'

import { Button } from '../Button'
import { COLORS } from '../../theme'

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)
  return (
    <SendMessageFormContainer>
      <SendMessageTextInput
        keyboardAppearance="dark"
        placeholder="Qual a sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        multiline
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
      />
    </SendMessageFormContainer>
  )
}