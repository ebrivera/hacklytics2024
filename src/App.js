import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import Explore from "./components/pages/Explore";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
