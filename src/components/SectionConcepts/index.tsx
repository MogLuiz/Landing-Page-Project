// Packages
import React from 'react'

// Components
import { Container, Heading } from '../index'

// Utils
import content from './content'

// Types
import { SectionConceptsProps } from 'types/api'

// Styles
import * as S from './styles'

const SectionConcepts: React.FC<SectionConceptsProps> = ({
  title,
  concepts
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
