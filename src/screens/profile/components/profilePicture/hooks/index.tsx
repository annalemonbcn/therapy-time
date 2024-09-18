import { useGetUuid } from 'src/hooks'
import { useGetProfilePictureQuery } from 'src/services/user'

const useGetProfilePicture = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetProfilePictureQuery({ uuid })

  if (isFetching || !isSuccess) return undefined

  return data.profilePicture
}

export { useGetProfilePicture }
