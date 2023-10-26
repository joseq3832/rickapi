import { ICharacter, IResponse } from '@/core/interfaces'
import HttpClient from '@/lib/HttpClient'
import { AxiosResponse } from 'axios'

const CharacterService = {
  async get<T = IResponse<ICharacter[]>, R = AxiosResponse<T>>() {
    return await HttpClient.get<T, R>('character')
  },
}

export default CharacterService
