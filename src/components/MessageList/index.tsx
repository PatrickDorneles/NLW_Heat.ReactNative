import { Message } from '../Message'
import { MessageListContainer } from './styles'
import React from 'react'

const TEST_MESSAGE = {
  id: '',
  text: 'MENSAGEM INDO AO ESPAÇO 🚀🚀🚀',
  user: {
    id: '',
    name: 'Joãozinho',
    avatar_url: 'https://randomuser.me/api/portraits/men/63.jpg',
    github_id: 0,
    login: ''
  }
}

export function MessageList() {
  return (
    <MessageListContainer
      contentContainerStyle={{
        paddingTop: 135,
        paddingBottom: 184
      }}
      keyboardShouldPersistTaps='never'
    >
      
      <Message data={TEST_MESSAGE} />

      <Message data={TEST_MESSAGE} />

      <Message data={TEST_MESSAGE} />

      <Message data={TEST_MESSAGE} />

      <Message data={TEST_MESSAGE} />
    </MessageListContainer>
  )
}