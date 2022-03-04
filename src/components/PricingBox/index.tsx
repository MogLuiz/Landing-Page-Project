// Packages
import React from 'react'

// Utils
import { gaEvent } from 'utils/ga'

// Components
import { Button } from '../index'

// Types
import { PricingBoxProps } from 'types/api'

// Styles
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox: React.FC<PricingBoxProps> = ({
  benefits,
  button,
  numberInstallments,
  priceInstallment,
  totalPrice
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------s
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${numberInstallments * priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
