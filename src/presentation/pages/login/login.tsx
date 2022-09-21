import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email, state.password])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} action="">
          <h2>Login</h2>
          <Input type="email" name="email" placeholder='Digite seu email' />
          <Input type="password" name="password" placeholder='Digite sua senha' />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
