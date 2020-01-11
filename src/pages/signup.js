import React, { useState } from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/SEO.js"
import {
  Box,
  Link as AnchorLink,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/core"
import SimpleReactValidator from "simple-react-validator"
import { Link } from "gatsby"

const SignUp = () => {
  const [updateCount, setForceUpdate] = useState(0)
  const forceUpdate = () => setForceUpdate(updateCount + 1)

  const [validator] = useState(
    new SimpleReactValidator({
      locale: "en",
      element: message => <FormErrorMessage>{message}</FormErrorMessage>,
      validators: {
        samePassword: {
          rule: (val, params, validator) =>
            val && val[0] === val[1] ? true : false,
          message: "Both passwords must be same!",
          required: true,
        },
        password: {
          rule: val =>
            validator.helpers.testRegex(
              val,
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
            )
              ? true
              : false,
          message: "The password must follow the below requirments",
          required: true,
        },
      },
      autoForceUpdate: { forceUpdate },
    })
  )

  const [type, setType] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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
  const isPasswordValid = validator.message(
    "password",
    password,
    "required|password"
  )
  const isConfirmPasswordValid = validator.message(
    "confirm-password",
    [password, confirmPassword],
    "required|samePassword"
  )
  const [orgName, setOrgName] = useState("")
  const isFirstnameValid = validator.message("firstname", firstname, "required")
  const isLastnameValid = validator.message("lastname", lastname, "required")
  const isOrgNameValid = validator.message(
    "organisation-name",
    orgName,
    "required|min:3"
  )
  const isTypeValid = validator.message("user-type", type, "required")

  const getUserSpecificComponent = () => {
    if (type === "organisation")
      return (
        <FormControl
          w="100%"
          isInvalid={isOrgNameValid ? true : false}
          p="10px"
          flexBasis="100%"
        >
          <FormLabel htmlFor="orgName">
            Organisation Name
            <Text as="span" color="red.400">
              *
            </Text>
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter Organisation Name"
            id="orgName"
            value={orgName}
            onChange={e => setOrgName(e.target.value)}
            maxWidth="480px"
          />
          {isOrgNameValid}
        </FormControl>
      )
    if (type === "volunteer")
      return (
        <>
          <FormControl
            w="100%"
            isInvalid={isFirstnameValid ? true : false}
            p="10px"
          >
            <FormLabel htmlFor="firstname">
              Firstname
              <Text as="span" color="red.400">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter firstname"
              id="firstname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              maxWidth="360px"
            />
            {isFirstnameValid}
          </FormControl>
          <FormControl
            w="100%"
            isInvalid={isLastnameValid ? true : false}
            p="10px"
          >
            <FormLabel htmlFor="lastname">
              Lastname
              <Text as="span" color="red.400">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter lastname"
              id="lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              maxWidth="360px"
            />
            {isLastnameValid}
          </FormControl>
        </>
      )
    return ""
  }
  return (
    <Layout>
      <SEO />
      <Box
        d="flex"
        flexDir="column"
        alignItems="middle"
        justifyContent="center"
        border="1px"
        borderColor="gray.200"
        mt={["", "", "50px", "50px"]}
        maxWidth="680px"
        mx="auto"
        boxShadow={["", "", "lg", "lg"]}
      >
        <Heading p="20px" bg="rgba(233, 216, 253, 0.4)">
          Signup
        </Heading>
        <Box
          as="form"
          onSubmit={handleLogin}
          d="flex"
          flexWrap="wrap"
          borderY="2px solid"
          borderColor="purple.200"
          p="10px"
        >
          <FormControl
            w="100%"
            isInvalid={isTypeValid ? true : false}
            p="10px"
            flexBasis="100%"
          >
            <FormLabel htmlFor="type">
              I am
              <Text as="span" color="red.400">
                *
              </Text>
            </FormLabel>
            <RadioGroup
              defaultValue="0"
              // value={type}
              onChange={e => setType(e.target.value)}
              isInline
            >
              <Radio value="organisation" isChecked={type === "organisation"}>
                an Organisation/Shelter
              </Radio>
              <Radio isChecked={type === "volunteer"} value="volunteer">
                a Voluteer
              </Radio>
              <Radio isDisabled value="org-employee">
                a Organisation Employee
              </Radio>
            </RadioGroup>
            {isTypeValid}
          </FormControl>
          {getUserSpecificComponent()}
          <FormControl
            w="100%"
            isInvalid={isEmailValid ? true : false}
            p="10px"
            flexBasis="100%"
          >
            <FormLabel htmlFor="email">
              Email{" "}
              <Text as="span" color="red.400">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              maxWidth="360px"
            />
            {isEmailValid}
          </FormControl>
          <FormControl
            w={["100%", "auto", "auto", "auto"]}
            isInvalid={isPasswordValid ? true : false}
            p="10px"
          >
            <FormLabel htmlFor="password">
              Password{" "}
              <Text as="span" color="red.400">
                *
              </Text>
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              maxWidth="360px"
            />
            {isPasswordValid}
          </FormControl>
          <FormControl
            w={["100%", "auto", "auto", "auto"]}
            isInvalid={isConfirmPasswordValid ? true : false}
            p="10px"
          >
            <FormLabel htmlFor="confirmPassword">
              Confirm password
              <Text as="span" color="red.400">
                *
              </Text>
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter password again"
              id="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              maxWidth="360px"
            />
            {isConfirmPasswordValid}
          </FormControl>
          <Box flexBasis="100%" px="10px">
            The password must
            <Text
              color={
                typeof password === "string" && password.match(/^.{8,}$/)
                  ? "green"
                  : "red"
              }
            >
              {typeof password === "string" && password.match(/^.{8,}$/)
                ? "✔"
                : "❌"}
              be Atleast 8 characters.
            </Text>
            <Text
              color={
                typeof password === "string" &&
                password.match(/(?=.*[A-X])(?=.*[a-z])/)
                  ? "green"
                  : "red"
              }
            >
              {typeof password === "string" &&
              password.match(/(?=.*[A-X])(?=.*[a-z])/)
                ? "✔"
                : "❌"}
              have atleast one uppercase and lowercase letter.
            </Text>
            <Text
              color={
                typeof password === "string" &&
                password.match(/(?=.*\d)(?=.*[!@#$%^&*])/)
                  ? "green"
                  : "red"
              }
            >
              {typeof password === "string" &&
              password.match(/(?=.*\d)(?=.*[!@#$%^&*])/)
                ? "✔"
                : "❌"}
              have atleast one number and one special character.
            </Text>
          </Box>
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
              Sign up
            </Button>
          </Box>
        </Box>
        <Box
          d="flex"
          flexDir="row-reverse"
          p="20px"
          bg="rgba(233, 216, 253, 0.4)"
        >
          <AnchorLink as={Link} to="login">
            Already a User? Login
          </AnchorLink>
        </Box>
      </Box>
    </Layout>
  )
}

export default SignUp
