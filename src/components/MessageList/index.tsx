import React, { useEffect, useState } from 'react'

import { MESSAGES_EXAMPLE } from '../../../utils/messages'
import { Message } from '../Message'
import { MessageListContainer } from './styles'
import { MessageModel } from '../../model/message'
import { api } from '../../services/api'
import { io } from 'socket.io-client'

const messageQueue: MessageModel[] = []

const socket = io(String(process.env.API_URL))
socket.on('new_message', (newMessage: MessageModel) => {
  console.log(newMessage);
  
  messageQueue.push(newMessage)
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageModel[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if(messageQueue.length) {
        setCurrentMessages((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1]
        ])

        messageQueue.shift()
      }

    }, 5000)
    
    return () => clearInterval(timer)
  },[])

  useEffect(() => {
    async function fetchLast3Messages() {
      const messageResponse = await api.get<MessageModel[]>('message/last3');

      setCurrentMessages(messageResponse.data)
    }

    fetchLast3Messages()
  }, [])

  return (
    <MessageListContainer
      contentContainerStyle={{
        paddingTop: 135,
        paddingBottom: 184
      }}
      keyboardShouldPersistTaps='never'
    >
      {
        currentMessages.map((message, index) =>
          <Message data={message} key={index} />
        )
      }
    </MessageListContainer>
  )
}