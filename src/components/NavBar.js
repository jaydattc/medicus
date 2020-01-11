import React from "react"
import { Box, Link as AnchorLink, Heading } from "@chakra-ui/core"
import { Link } from "gatsby"

const NavBar = props => {
  return (
    <Box
      d="flex"
      flexDir="row"
      justifyContent="space-between"
      bg="purple.200"
      borderBottom="2px solid"
      borderBottomColor="purple.300"
      boxShadow="lg"
      p="20px"
      textAlign="bottom"
    >
      <Heading as="span" fontSize="1.5rem" color="blue.900">
        <AnchorLink as={Link} to="/">
          Medicus
        </AnchorLink>
      </Heading>
      <Box d="flex" flexDir="row" alignItems="flex-end">
        <AnchorLink as={Link} to="/about" mx="5px">
          About
        </AnchorLink>
        <AnchorLink as={Link} to="/login" mx="5px">
          Login
        </AnchorLink>
        <AnchorLink as={Link} to="/signup" mx="5px">
          Signup
        </AnchorLink>
      </Box>
    </Box>
  )
}

export default NavBar
