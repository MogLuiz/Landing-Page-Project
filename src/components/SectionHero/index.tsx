// Packages
import React from 'react'

// Components
import { Logo, Button, Container } from '../index'

// Utils
import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'

// Types
import { HeaderProps, LogoProps } from 'types/api'

// Styles
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type SectionHeroProps = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero: React.FC<SectionHeroProps> = ({ logo, header }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
