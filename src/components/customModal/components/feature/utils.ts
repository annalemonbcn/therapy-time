import { Children, ReactElement, isValidElement } from 'react'

const validateChildren = (keys: string[], children: ReactElement | ReactElement[], componentName: string) => {
  const notMatched = Children.toArray(children)
    .map((child) => {
      if (!isValidElement(child)) return typeof child

      if (typeof child.type !== 'function') return child.type

      return child.type.name
    })
    .filter((child) => !keys.includes(child))

  if (notMatched.length > 0) {
    throw new Error(
      `Children of type [${notMatched.join(', ')}] do not match allowed children definition at ${componentName}`
    )
  }
}

const getChildrenDisplayName = (children: JSX.Element | JSX.Element[], displayName: string) =>
  Children.map(children, (child: JSX.Element) => {
    if (!isValidElement(child) || typeof child.type !== 'function' || child.type.name !== displayName) {
      return null
    }

    return child
  })

export { validateChildren, getChildrenDisplayName }
