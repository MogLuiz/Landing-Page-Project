// Packages
import React from 'react'

// Components
import Container from 'components/Container'
import Heading from 'components/Heading'

// Utils
import content from './content'

// Styles
import * as S from './styles'

const SectionConcepts = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <S.Box>
      <Heading lineBottom>Conceitos que você irá aprender</Heading>
      <S.List>
        {content.map((item) => (
          <S.Item key={item}>{item}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
