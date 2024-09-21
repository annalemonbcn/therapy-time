import { useGetNameQuery } from 'src/services/user'
import { useGetUuid } from 'src/utils/utils'

const useGetName = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetNameQuery({ uuid })

  if (isFetching || !isSuccess) return undefined

  return data.name
}

export { useGetName }
