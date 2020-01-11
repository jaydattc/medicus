import React from "react"
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>

    <CSSReset />
    {element}
  </ThemeProvider>
)
