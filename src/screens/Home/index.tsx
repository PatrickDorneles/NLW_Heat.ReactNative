import { Text, View } from "react-native";

import { Header } from "../../components/Header";
import { HomeScreenContainer } from "./styles";
import { MessageList } from "../../components/MessageList";
import React from 'react'
import { SendMessageForm } from "../../components/SendMessageForm";
import { SignInBox } from "../../components/SignInBox";
import { useAuth } from "../../hooks/auth";

export function HomeScreen() {
  const { user } = useAuth()

  return (
    <HomeScreenContainer>
      <Header />
      <MessageList />
      { !!user ? <SendMessageForm /> : <SignInBox /> }
    </HomeScreenContainer>
  )
}