// Packages
import React from 'react'

// Assets
import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

// Types
import { Authors } from 'types/api'

// Styles
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard: React.FC<Authors> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      alt={photo.alternativeText}
      loading="lazy"
    />

    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
