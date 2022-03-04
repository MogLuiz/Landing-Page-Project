// Packages
import React from 'react'

// Components
import {
  SectionHero,
  SectionAboutProject,
  SectionTech,
  SectionConcepts,
  SectionModules,
  SectionAgenda,
  PricingBox,
  SectionAboutUs,
  SectionReviews,
  SectionFaq,
  Footer,
  JsonSchema
} from '../components'

// Graphql
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'

// Types
import { LandingPageProps } from 'types/api'
import { GetStaticProps } from 'next'

const Index: React.FC<LandingPageProps> = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...sectionAboutProject} />
    <SectionTech {...sectionTech} />
    <SectionConcepts {...sectionConcepts} />
    <SectionModules {...sectionModules} />
    <SectionAgenda {...sectionAgenda} />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
