import { SessionType } from 'src/data/types'

interface IHeadingProps {
  setSessionType: React.Dispatch<React.SetStateAction<SessionType>>
}

interface IChooseSessionTypeProps {
  setSessionType: React.Dispatch<React.SetStateAction<SessionType>>
}

export { IHeadingProps, IChooseSessionTypeProps }
