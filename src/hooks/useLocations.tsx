import LocationsService from '@/services/LocationsService'
import { useQuery } from '@tanstack/react-query'

const fetchLocations = async () => {
  const { data } = await LocationsService.get()
  return data
}

export const useLocations = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['locations'],
    queryFn: fetchLocations,
  })
  return { data, isError, isLoading }
}
