import { HttpPostClient, HttpPostParams } from '../protocols/http/httpPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
