import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Heading } from "@chakra-ui/core"

const Home = props => {
  return (
    <Layout>
      <SEO />
      <Box w="100%" h="100%" textAlign="center" alignItems="middle">
        <Heading>Hello there!</Heading>
      </Box>
    </Layout>
  )
}

export default Home
