import { useRouter } from "next/dist/client/router";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputText from "../../components/Forms/Input";
import { useStyles } from "./styles";
import * as yup from "yup";
import { useForm } from "react";
import ButtonDefault from "../../components/Forms/Button";
const yupSchema = yup.object().shape({
  name: yup.string().min(1).max(50).required().label("Nome do Robô"),
  description: yup.string().max(2000).label("Descrição"),
  useCredentials: yup.boolean().label("Possui Credencial?"),
});

const Login = () => {
  const router = useRouter();
  const classes = useStyles();

  const handlePage = (url) => {
    router.push(url);
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid
        container
        spacing={5}
        direction="row"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Grid container direction="row" justifyContent="flex-start">
            <Grid item xs={12}>
              <Typography className={classes.loginText}>Username: </Typography>
              <InputText
                id="standard-username-input"
                label="Type your Username"
                placeholder="Username"
                autoComplete="current-username"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography className={classes.loginText}>Password:</Typography>
          <InputText
            id="standard-password-input"
            label="Type your Password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonDefault>Login</ButtonDefault>
        </Grid>
        <Grid item xs={5} align="center">
          <p>Or just sign up</p>
        </Grid>
        <Grid item xs={3}>
          <a
            style={{
              fontVariant: "none",
              color: "#96f4ff",
              textAlign: "center",
              margin: "auto",
              cursor: "pointer",
            }}
            onClick={() => {
              handlePage("/signup");
            }}
          >
            Sign Up!
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
