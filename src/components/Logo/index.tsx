// Packages
import React from 'react'

// Utils
import { getImageUrl } from 'utils/getImageUrl'

// Types
import { LogoProps } from 'types/api'

// Styles
import * as S from './styles'

const Logo: React.FC<LogoProps> = ({ alternativeText, url }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
