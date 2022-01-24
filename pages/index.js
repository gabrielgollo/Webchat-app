import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Webchat from "./webchat";
import Login from "./login";

function Home({ children }) {
  const [auth, setAuth] = useState(false);

  return auth ? <Webchat /> : <Login />;
}

export default Home;
