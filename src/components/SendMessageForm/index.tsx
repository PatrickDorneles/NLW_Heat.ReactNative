import { Alert, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SendMessageFormContainer, SendMessageTextInput } from './styles'

import { Button } from '../Button'
import { COLORS } from '../../theme'
import { MessageModel } from '../../model/message'
import { api } from '../../services/api'

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleMessageSubmit() {
    const formattedMessage = message.trim()

    if(formattedMessage.length) {
      setSendingMessage(true)
      await api.post('message', { text: formattedMessage })
      
      setMessage('')
      Keyboard.dismiss()
      setSendingMessage(false)

      Alert.alert('Mensagem enviada com sucesso')
    } else {
      Alert.alert('Escreva a mensagem antes de enviar')
    }
  }
  
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
        onPress={handleMessageSubmit}
      />
    </SendMessageFormContainer>
  )
}