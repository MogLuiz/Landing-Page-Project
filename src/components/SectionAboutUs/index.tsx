// Packages
import React from 'react'

// Components
import { Heading, Container, ProfileCard } from '../index'

// Utils
import content from './content'

// Styles
import * as S from './styles'

const SectionAboutUs = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Heading reverseColor>Quem somos nós?</Heading>

    <S.Content>
      {content.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={profile.image}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
