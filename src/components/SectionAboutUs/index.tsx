// Packages
import React from 'react'
import { SectionAboutUsProps } from 'types/api'

// Components
import { Heading, Container, ProfileCard } from '../index'

// Styles
import * as S from './styles'

const SectionAboutUs: React.FC<SectionAboutUsProps> = ({ title, authors }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          photo={author.photo}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
