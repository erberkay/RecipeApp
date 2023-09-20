import React from 'react'
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()

function useAuth() {
  const [users, setUsers] = useMMKVStorage('users', MMKV, [])
  const [user, setUser] = useMMKVStorage('user', MMKV, {})

  const Login = (username, password) => {
    let loggedIn = false
    users.forEach(user => {
      if (user.username === username && user.password == password) {
        console.log('login')
        setUser(user)
        loggedIn = true
        return true
      }
    })
    if (!loggedIn) {
      console.log('loginout')
      setUser({})
      return false
    }
  }


  const Register = (username, email, password, passwordConfirm) => {
    if (password === passwordConfirm && username.length > 0 && email.length > 0 && password.length > 0) {
      setUsers([...users, { username: username, password: password, email: email }])
      return true
    } else {
      console.log('Password confirm not same or there are unfilled inputss')
      return false
    }
  }

  const isLoggedIn = () => {
    if (user?.username) {
      return true
    } else {
      return false
    }
  }

  const getUser = () => {
    return user
  }

  const SignOut = () => {
    setUser({})
  }

  return { Login, Register, isLoggedIn, getUser, SignOut }
}

export default useAuth