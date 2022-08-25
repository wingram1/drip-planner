// import { MantineProvider, Text, Button, Stack } from "@mantine/core";
// import { theme } from "./theme";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Trips } from "./Pages/Trips";

export default function App() {
  return (
    // <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    // <Stack align="center" mt={50}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>

    // <Button>Click the button</Button>
    // </Stack>
    // </MantineProvider>
  );
}
