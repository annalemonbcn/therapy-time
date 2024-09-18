import { useGetUuid } from 'src/hooks'
import { useGetNameQuery } from 'src/services/user'

const useGetName = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetNameQuery({ uuid })

  if (isFetching || !isSuccess) return undefined

  return data.name
}

export { useGetName }
