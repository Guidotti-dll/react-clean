import { AccountModel } from '../models/account-models'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Autentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
