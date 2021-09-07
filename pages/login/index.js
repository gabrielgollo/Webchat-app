import Link from "next/link";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import InputText from "../../components/Forms/Input";
import { LoginButton } from "../../components/Forms/LoginButton";

function Login() {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "white",
      borderRadius: "8px",
      color: "black",
      fontWeight: "bold",
      marginTop: "1%",
      marginBottom: "1%",
      minHeight: "450px",
    },
    title: {
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid
        container
        spacing={5}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>Username: </Typography>
          <InputText
            id="standard-username-input"
            label="Type your Username"
            placeholder="Username"
            autoComplete="current-username"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>Password: </Typography>
          <InputText
            id="standard-password-input"
            label="Type your Password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <LoginButton />
        </Grid>
        <Grid item xs={5} textAlign="center">
          <p>Or just sign up</p>
        </Grid>
        <Grid item xs={3}>
          <Link href="/register">
            <a
              style={{
                fontVariant: "none",
                color: "blue",
                textAlign: "center",
                margin: "auto",
              }}
            >
              Sign Up!
            </a>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
