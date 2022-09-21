/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{}

const Input: React.FC<Props> = (props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return error
  }

  const enableInput = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
