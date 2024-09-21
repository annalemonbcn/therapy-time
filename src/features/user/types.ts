import { User } from 'src/data/types'

interface IUserState {
  user: User
}

type SetUserBasicInfoRequest = {
  uuid: string
  email: string
  tokenId: string
}

type SetUserLocationRequest = {
  latitude: string
  longitude: string
  address: string
}

export { IUserState, SetUserBasicInfoRequest, SetUserLocationRequest }
