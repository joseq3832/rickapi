import { ILocationsResults, IResponse } from '@/core/interfaces'
import HttpClient from '@/lib/HttpClient'
import { AxiosResponse } from 'axios'

const LocationsService = {
  async get<T = IResponse<ILocationsResults[]>, R = AxiosResponse<T>>() {
    return await HttpClient.get<T, R>('location')
  },
}

export default LocationsService
