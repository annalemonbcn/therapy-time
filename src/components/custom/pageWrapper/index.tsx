import { StyledPageWrapper } from './styles'
import { IPageWrapperProps } from './types'

const PageWrapper = ({ children, ...props }: IPageWrapperProps) => {
  return <StyledPageWrapper {...props}>{children}</StyledPageWrapper>
}

export default PageWrapper
