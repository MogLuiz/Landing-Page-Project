// Packages
import React from 'react'

// Components
import { Heading, Container } from '../index'

// Utils
import { getImageUrl } from 'utils/getImageUrl'

// Types
import { SectionTechProps } from 'types/api'

// Styles
import * as S from './styles'

const SectionTech: React.FC<SectionTechProps> = ({ title, techIcons }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
