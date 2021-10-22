import * as AuthSessions from 'expo-auth-session'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants'
import { UserModel } from '../model/user'
import { api } from '../services/api';

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const SCOPE = 'read:user';
const USER_KEY = '@donlwheat/user'
const TOKEN_KEY = '@donlwheat/token'

type SignInResponseData = { token: string, user: UserModel }
    
type AuthorizationResponse = {
  params: { code?: string, error?: string }
  type?: string
}

type AuthContextData = {
  user: UserModel | null
  isSigningIn: boolean
  signIn(): Promise<void>
  signOut(): Promise<void>
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: { children: ReactNode }) {
  const [isSigningIn, setSigningIn] = useState(false)
  const [user, setUser] = useState<UserModel | null>(null)
  
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
  
  
  async function signIn() {
    setSigningIn(true)
    
    try {
      const authResponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse
  
      if(authResponse.type === 'success' && authResponse.params.error !== 'access_denied') {
        const { params } = authResponse
        const { data } = await api.post<SignInResponseData>('signin/authenticate', {
            code: params.code 
        })
        const { token, user } = data;
  
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
        await AsyncStorage.setItem(TOKEN_KEY, token)
      
        setUser(user)
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setSigningIn(false)
    }
  }


  async function signOut() {
    await AsyncStorage.removeItem(USER_KEY)
    await AsyncStorage.removeItem(TOKEN_KEY)
    
    api.defaults.headers.common['Authorization'] = ''
    
    setUser(null)
  }


  useEffect(() => {
    async function loadUserStorageData() {
      setSigningIn(true)
      const userOnStorage = await AsyncStorage.getItem(USER_KEY)
      const tokenOnStorage = await AsyncStorage.getItem(TOKEN_KEY)

      if(userOnStorage && tokenOnStorage) {
        api.defaults.headers.common['Authorization'] = `Bearer ${tokenOnStorage}`
        setUser(JSON.parse(userOnStorage) as UserModel)
      }
      setSigningIn(false)
    }

    loadUserStorageData()
  }, [])


  return (
    <AuthContext.Provider value={{
      user,
      isSigningIn,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const contextData = useContext(AuthContext)

  return {
    ...contextData,
    AuthProvider
  }
}