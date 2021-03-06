import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
export default function UsersOnline() {
    const useStyles = makeStyles( theme => ({
        onlineUsersBox: {
            backgroundColor:"#fff1f1",
            borderRadius:"6px",
            border:'1px',
            alignItems:'center',
            minHeight: '475px',
            overflow: 'auto',
        }
    }))
    const classes = useStyles()
    return(
        <Container className={classes.onlineUsersBox} maxWidth='lg'>usuarios online:</Container>
    )
};