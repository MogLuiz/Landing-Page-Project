// Packages
import React from 'react'
import Slider from 'react-slick'

// Components
import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

// Utils
import reviews from './content'

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

const SectionReviews = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Heading reverseColor>Junte-se a mais de 200 mil alunos</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, image, description }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={image}
            description={description}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
