import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import MessageBox from "../../components/MessageBox";
import UsersOnline from "../../components/UsersOnline";

function Webchat({ children }) {
  const useStyles = makeStyles((theme) => ({
    container: {
      color: "black",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "0.5%",
      minHeight: "500px",
    },
    title: {
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();
  const [auth, setAuth] = useState(true);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid
        container
        spacing={3}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <UsersOnline />
        </Grid>
        <Grid item xs={9}>
          <MessageBox />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Webchat;
