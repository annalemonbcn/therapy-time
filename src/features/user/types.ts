import { User } from 'src/data/types'

interface IUserState {
  user: User
}

type SetUserBasicInfoRequest = {
  uuid: string
  email: string
  tokenId: string
}

export { IUserState, SetUserBasicInfoRequest }
