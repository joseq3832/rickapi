import { useCharacters } from '@/hooks'

export const Home = (): JSX.Element => {
  const { data } = useCharacters()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {data?.results.map((character) => (
        <div
          key={character.id}
          className="rounded flex flex-col bg-white shadow-sm"
        >
          <img src={character.image} alt={character.name} />
          <div className="p-2">
            <h5>{character.name}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}
