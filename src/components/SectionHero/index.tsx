// Packages
import React from 'react'

// Components
import { Logo, Button, Container } from '../index'

// Utils
import { gaEvent } from 'utils/ga'

// Types
import { LogoProps } from 'types/api'

// Styles
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type SectionHeroProps = {
  logo: LogoProps
}

const SectionHero: React.FC<SectionHeroProps> = ({ logo }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOMAR22"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
