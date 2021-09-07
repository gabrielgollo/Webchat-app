import Head from "next/head";
import Navigationbar from "../components/Navigationbar.jsx";
import Footer from "../components/Footer.jsx";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";


export default function Layout({children}) {
  const useStyles = makeStyles( theme => ({
    container:{
      opacity:"100%",
      padding:"0%",
      margin:"auto"
    }
  }))
  const classes = useStyles()
  
  return (
      <div>
            <Head>
                <title>{process.env.NEXT_PUBLIC_TITLE}</title>
            </Head>
            <Navigationbar />
            <Box>
              <Container maxWidth="lg">
                <Grid container>
                  <Grid item className={classes.container} xs={12}
                  >
                      {children}
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Footer />
    </div>
  );
}