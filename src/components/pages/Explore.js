// Explore.js

import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Explore = () => {
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Explore Page</h1>
      <Box h="10"></Box>
      <img
        src={imageUrl}
        alt="Generated Image"
        style={{ width: "50vw", height: "50vh" }}
      />
    </div>
  );
};

export default Explore;
