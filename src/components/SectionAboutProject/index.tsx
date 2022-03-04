// Packages
import React from 'react'

// Utils
import { getImageUrl } from 'utils/getImageUrl'

// Components
import { Heading, Container } from '../index'

// Types
import { SectionAboutProjectProps } from 'types/api'

// Styles
import * as S from './styles'

const SectionAboutProject: React.FC<SectionAboutProjectProps> = ({
  description,
  image,
  title
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
