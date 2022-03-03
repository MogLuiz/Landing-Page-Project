// Packages
import React from 'react'

// Styles
import * as S from './styles'

type Props = {
  children: React.ReactNode
  wide?: boolean
  href: string
  withPrice?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  children,
  wide,
  withPrice,
  href,
  onClick
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.ButtonWrapper
    href={href}
    wide={wide}
    withPrice={withPrice}
    onClick={onClick}
  >
    {children}
  </S.ButtonWrapper>
)

export default Button
