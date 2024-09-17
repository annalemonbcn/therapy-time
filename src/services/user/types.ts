import { UserBooking } from 'src/data/types'

type UUID = { uuid: string }

type SetNameRequest = UUID & { name: string }
type GetNameRequest = UUID

type SetEmailRequest = UUID & { email: string }
type GetEmailRequest = UUID

type SetProfilePictureRequest = UUID & { profilePicture: string }
type GetProfilePictureRequest = UUID

type SetBookingsRequest = UUID & { bookings: UserBooking[] }
type GetBookingsRequest = UUID

export {
  SetNameRequest,
  GetNameRequest,
  SetEmailRequest,
  GetEmailRequest,
  SetProfilePictureRequest,
  GetProfilePictureRequest,
  SetBookingsRequest,
  GetBookingsRequest
}
