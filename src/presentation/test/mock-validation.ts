import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fieldName: string, fieldValue: string): string | null {
    return this.errorMessage
  }
}
