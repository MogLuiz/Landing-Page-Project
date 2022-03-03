import React from 'react'

import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const Logo: React.FC<LogoProps> = ({ alternativeText, url }) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
