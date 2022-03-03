const GET_LANDING_PAGE = /*GraphQL */ `
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
    ...image
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...image
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`

export default GET_LANDING_PAGE
