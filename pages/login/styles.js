import { makeStyles } from "@mui/styles"
  ;
export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.container,
    borderRadius: "8px",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    marginTop: "1%",
    marginBottom: "1%",
    minHeight: "450px",
    boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.75)",
  },
  title: {
    fontWeight: 900,
    color: theme.palette.text.primary,
  },
  loginText: {
    fontWeight: 600,
  },
}));
