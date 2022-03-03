// Packages
import React from 'react'

// Styles
import * as S from './styles'

type Props = {
  id?: string
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, id }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Container id={id}>{children}</S.Container>
)

export default Container
