// Packages
import React from 'react'

// Components
import { Heading, Container, CardModule } from '../index'

// Types
import { SectionModulesProps } from 'types/api'

// Styles
import * as S from './styles'

const SectionModules: React.FC<SectionModulesProps> = ({ title, modules }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
