import { MessageContainer, MessageFooter, MessageText, UserName } from './styles'

import { MessageModel } from '../../model/message'
import React from 'react'
import { UserPhoto } from '../UserPhoto'

interface Props {
  data: MessageModel
}

export function Message({ data: message }: Props) {
  return (
    <MessageContainer>
      <MessageText>
        { message.text }
      </MessageText>

      <MessageFooter>
        <UserPhoto
          imageUri={message.user.avatar_url}
          size="SMALL"
        />

        <UserName> {message.user.name} </UserName>
      </MessageFooter>
    </MessageContainer>
  )
}