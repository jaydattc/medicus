import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  Box,
  Link as AnchorLink,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/core"
import SimpleReactValidator from "simple-react-validator"
import { Link } from "gatsby"

const Login = props => {
  const [updateCount, setForceUpdate] = useState(0)
  const forceUpdate = () => setForceUpdate(updateCount + 1)

  const [validator] = useState(
    new SimpleReactValidator({
      locale: "en",
      autoForceUpdate: { forceUpdate },
    })
  )

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = e => {
    e.preventDefault()
    if (validator.allValid()) {
      // api login call
    } else {
      validator.showMessages()
    }
  }

  const isEmailValid = validator.message("email", email, "required|email")
  const isPasswordValid = validator.message("password", password, "required")

  return (
    <Layout>
      <SEO />
      <Box
        d="flex"
        flexDir="column"
        maxWidth="480px"
        alignItems="middle"
        justifyContent="center"
        mx="auto"
        mt={["", "", "50px", "50px"]}
        border="1px"
        borderColor="gray.200"
        boxShadow={["", "", "lg", "lg"]}
      >
        <Heading p="20px" bg="rgba(233, 216, 253, 0.4)">
          Login
        </Heading>
        <Box p="20px" borderY="1px solid" borderColor="purple.300">
          <form onSubmit={handleLogin}>
            <FormControl isInvalid={isEmailValid ? true : false}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="text"
                placeholder="Enter email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <FormErrorMessage>{isEmailValid}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={isPasswordValid ? true : false}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <FormErrorMessage>{isPasswordValid}</FormErrorMessage>
            </FormControl>
            <Box w="100%" mt="20px" d="flex" flexDir="row-reverse">
              <Button
                disabled={
                  email && password
                    ? isEmailValid && isPasswordValid
                      ? true
                      : false
                    : true
                }
                type="submit"
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          d="flex"
          flexDir="row-reverse"
          p="20px"
          bg="rgba(233, 216, 253, 0.4)"
        >
          <AnchorLink as={Link} to="signup">
            Sign up
          </AnchorLink>
          <AnchorLink as={Link} to="forgot" mr="20px">
            Forgot password?
          </AnchorLink>
        </Box>
      </Box>
    </Layout>
  )
}

export default Login
