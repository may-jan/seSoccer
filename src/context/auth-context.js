import React, { useState, useCallback, useMemo } from 'react'

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  const values = useMemo(
    () => ({ isLoggedIn, login, logout }),
    [isLoggedIn, login, logout]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default function useAuth() {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error(
      'useAuth hook must be used with a MatchContextProvider component'
    )
  }

  return context
}
