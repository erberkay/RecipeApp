import React from 'react'
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()

function useAuth() {
  const [loggedIn, setLoggedIn] = useMMKVStorage('loggedIn', MMKV, false)
  const [users, setUsers] = useMMKVStorage('users', MMKV, [])

  const Login = (username, password) => {
    const [users, setUsers] = useMMKVStorage('users', MMKV, [])

    users.forEach(() => {
      if (users.username === username && users.password == password) {
        setLoggedIn(true)
        return true
      }
    })
    setLoggedIn(false)
    return false
  }


  const Register = (username, email, password, passwordConfirm) => {
    if (password === passwordConfirm) {
      setUsers([...users, { username: username, password: password, email: email }])
      return true
    } else {
      console.log('Password confirm not same')
      return false
    }
  }

  const isLoggedIn = () => {
    return loggedIn
  }

  return { Login, Register, isLoggedIn }
}

export default useAuth