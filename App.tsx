import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'
import { HomeScreen } from './src/screens/Home';
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native';
import { useAuth } from './src/hooks/auth';
import { useFonts } from 'expo-font';

const AppContainer = styled.View`
  height: 100%;
  width: 100%;
`

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  const { AuthProvider } = useAuth();

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AppContainer>
      <AuthProvider>
        <StatusBar style="inverted" />
        <HomeScreen />
      </AuthProvider>
    </AppContainer>
  );
}