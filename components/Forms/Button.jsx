import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    Button:{
        backgroundColor: theme.palette.button.primary,
        borderRadius:'6px',
        width:'100%',
        margin:'auto',
        padding:'2%',
        color: theme.palette.primary.main,
        fontWeight:'700',
        fontSize:'16px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover':{
            backgroundColor: theme.palette.button.secondary,
            border:'1px',
            borderColor:'"#490083"'
        }
    }
}))

const ButtonDefault = (props) => {
    const { children } = props
    const classes = useStyles()
    return (<Button className={classes.Button} {...props} >{children}</Button>)
}
export default ButtonDefault