import { HttpPostParams } from '../protocols/http'
import faker from 'faker'

export const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
