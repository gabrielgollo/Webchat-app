import { Container, Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import ButtonDefault from "../../components/Forms/Button";
import InputText from "../../components/Forms/Input";
import { useStyles } from "./styles";

const Register = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("aqui", data);
  };
  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              Sign Up!
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Grid container direction="row" justifyContent="flex-start">
              <Grid item xs={12}>
                <Typography className={classes.loginText}>
                  Username:{" "}
                </Typography>
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
          <Grid item xs={12} align="center">
            <Grid container direction="row" justifyContent="flex-start">
              <Grid item xs={12}>
                <Typography className={classes.loginText}>Email: </Typography>
                <InputText
                  id="standard-email-input"
                  label="Type your email"
                  type="email"
                  placeholder="Email"
                  autoComplete="current-email"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonDefault>Confirm!</ButtonDefault>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
