// Packages
import React from 'react'

// Components
import { Heading, Container, CardModule } from '../index'

// Utils
import content from './content'

// Styles
import * as S from './styles'

const SectionModules = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Heading reverseColor>Módulos deste curso</Heading>

    <S.Content>
      {content.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
