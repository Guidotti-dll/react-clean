import { AccountModel } from 'domain/models/account-models'

type AuthenticationParams = {
  email: string
  password: string
}

export interface Autentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
