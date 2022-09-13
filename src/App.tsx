// import { MantineProvider, Text, Button, Stack } from "@mantine/core";
// import { theme } from "./theme";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditTrip from "./Pages/EditTrip";
import { Home } from "./Pages/Home";
import { Trips } from "./Pages/Trips";



export default function App() {
  const [currentTripData, setCurrentTripData] = useState(null)

  return (
    // <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    // <Stack align="center" mt={50}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/edit" element={<EditTrip />} />
      </Routes>
    </Router>

    // <Button>Click the button</Button>
    // </Stack>
    // </MantineProvider>
  );
}
