import React from 'react'

import { LogoProps } from 'types/api'

import * as S from './styles'

const Logo: React.FC<LogoProps> = ({ alternativeText, url }) => (
  <S.LogoWrapper src={`${url}`} alt={alternativeText} />
)

export default Logo
