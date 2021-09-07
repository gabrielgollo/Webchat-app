import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"


export function LoginButton() {
    const useStyles = makeStyles( theme => ({
        Button:{
            backgroundColor:'purple',
            borderRadius:'6px',
            width:'100%',
            margin:'auto',
            padding:'2%',
            color:'whitesmoke',
            fontWeight:'bold',
            fontSize:'16px',
            '&:hover':{
                backgroundColor:"#490083",
                border:'1px',
                borderColor:'"#490083"'
            }
        }
    }))

    const classes = useStyles()

    return(
        <Button className={classes.Button} disableElevation>Login</Button>
    )
}