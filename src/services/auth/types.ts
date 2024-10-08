type SignUpResponse = {
  idToken: string
  email?: string
  refreshToken: string
  expiresIn: number
  localId: string
}

type LoginResponse = SignUpResponse & {
  registered?: boolean
}

type PasswordRecoveryRequest = {
  requestType: string
  email: string
}

type PasswordRecoveryResponse = {
  email: string
}

export { SignUpResponse, LoginResponse, PasswordRecoveryRequest, PasswordRecoveryResponse }
