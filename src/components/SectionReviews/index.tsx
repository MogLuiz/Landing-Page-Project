// Packages
import React from 'react'
import Slider from 'react-slick'

// Components
import { Container, Heading, ReviewCard } from '../index'

// Types
import { SectionReviewsProps } from 'types/api'

// Styles
import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews: React.FC<SectionReviewsProps> = ({ reviews, title }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Heading reverseColor>Junte-se a mais de 200 mil alunos</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, photo, text }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={photo.url}
            description={text}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
