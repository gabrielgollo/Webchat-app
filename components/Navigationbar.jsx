import { AppBar, Toolbar, Typography, IconButton, Box } from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core"
import { useState } from "react"

function Navigationbar() {
    const useStyles = makeStyles({
        root:{ flexGrow:1 },
        navbar:{
            backgroundColor: '#490083',
            marginBottom:"2%"
        },
        title: {
            flexGrow:1,
            alignItems:"center",
            justifyContent:"center",
            fontWeight:"bold"
        },
        accountCircle:{
            color:"white"
        }
    })
    const styleClass = useStyles()
    const [auth, setAuth] = useState(false)
    return (
        <div className={styleClass.root}>
            <AppBar className={styleClass.navbar} position="static">
                <Toolbar>
                    
                        <div className={styleClass.root}></div>
                        <Typography className={styleClass.title} variant="h6" noWrap>
                            Webchat App
                        </Typography>
                        
                        <IconButton>
                            <AccountCircle className={styleClass.accountCircle} />
                        </IconButton>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigationbar