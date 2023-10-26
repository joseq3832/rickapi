import { useLocations } from '@/hooks'

export const Locations = () => {
  const { data } = useLocations()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {data?.results.map((location) => (
        <div
          key={location.id}
          className="rounded flex flex-col bg-white shadow-sm"
        >
          <div className="p-2">
            <h5>{location.name}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}
