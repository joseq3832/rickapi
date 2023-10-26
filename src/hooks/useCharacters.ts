import CharacterService from '@/services/CharactersService'
import { useQuery } from '@tanstack/react-query'

const fetchCharacters = async () => {
  const { data } = await CharacterService.get()
  return data
}

export const useCharacters = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  })
  return { data, isError, isLoading }
}
