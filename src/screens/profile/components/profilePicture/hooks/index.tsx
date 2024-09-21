import { useGetProfilePictureQuery } from 'src/services/user'
import { useGetUuid } from 'src/utils/utils'

const useGetProfilePicture = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetProfilePictureQuery({ uuid })

  if (isFetching || !isSuccess) return undefined

  return data.profilePicture
}

export { useGetProfilePicture }
