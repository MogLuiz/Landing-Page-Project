// Packages
import React from 'react'

// Components
import { Container, Heading } from '../index'

// Types
import { SectionAgendaProps } from 'types/api'

// Styles
import * as S from './styles'

const SectionAgenda: React.FC<SectionAgendaProps> = ({
  title,
  description
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
