import React from "react"
import NavBar from "./NavBar.js"
import { Box } from "@chakra-ui/core"

const Layout = props => {
  return (
    <>
      <NavBar></NavBar>
      <Box transition="all 0.3s">{props.children}</Box>
    </>
  )
}
export default Layout
