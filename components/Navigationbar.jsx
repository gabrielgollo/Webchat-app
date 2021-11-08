import { AppBar, Typography, IconButton, Box, Grid } from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useTheme } from "@material-ui/styles";
import { Brightness4Rounded, Brightness7Rounded, Home } from "@material-ui/icons";
import { useRouter } from "next/dist/client/router";
const useStyles = makeStyles((theme) => ({
    navbar:{
        flexGrow:1,
        marginBottom:"40px"
    },
    title: {
        flexGrow:1,
        alignItems:"center",
        justifyContent:"center",
        fontWeight:"bold"
    },
    accountCircle:{
        color: theme.palette.primary.main
    }
}))

function Navigationbar() {
    const router = useRouter()
    const theme = useTheme()
    const styleClass = useStyles()
    const [auth, setAuth] = useState(false)

    const handlePage = (url) => {
        router.push(url)
    }

    const handleTheme = () => {
        if(window.localStorage){
            const localStorage=window.localStorage
            if(localStorage.getItem("theme")==="dark"){
                localStorage.setItem("theme","light")
            }
            else{
                localStorage.setItem("theme","dark")
            }
        }
    }

    return (
        <div style={{width: "100%"}}>
            <AppBar color={"secondary"} className={styleClass.navbar} position="static">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <IconButton onClick={ () => handlePage("/")}><Home /></IconButton>
                    </Grid>
                    <Grid item>
                        <Typography className={styleClass.title} variant="h6" noWrap>
                            Webchat App
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Grid item>
                                <IconButton>
                                    <AccountCircle className={styleClass.accountCircle} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={handleTheme} className={styleClass.accountCircle}>
                                    {theme.palette.type == "dark" ? <Brightness4Rounded /> : <Brightness7Rounded />}
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
}

export default Navigationbar