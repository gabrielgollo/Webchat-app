import Head from "next/head";
import Navigationbar from "../components/Navigationbar.jsx";
import Footer from "../components/Footer.jsx";
import { Box, Container, Grid, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Layout({children}) {
  const theme = useTheme();
  const useStyles = makeStyles( theme => ({
    container:{
      opacity:"100%",
      padding:"0%",
      margin:"auto"
    }
  }))
  const classes = useStyles()
  
  return (
      <body>
            <Head>
                <title>{process.env.NEXT_PUBLIC_TITLE}</title>
            </Head>
              <Navigationbar />
              <Box>
                <Container maxWidth="lg" disableGutters>
                  <Grid container>
                    <Grid item className={classes.container} xs={12}
                    >
                        {children}
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              <Footer />
    </body>
  );
}