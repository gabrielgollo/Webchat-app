import { AppBar, Typography, IconButton, Box, Grid, useTheme } from "@mui/material"
import { makeStyles } from "@mui/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react"
import { Brightness4Rounded, Brightness7Rounded, Home } from "@mui/icons-material";
import { useRouter } from "next/dist/client/router";
import { getCookies, setCookie } from "../src/utils/cookies";


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
        if(process.browser) {
            const themeCookie = getCookies("theme")
            setCookie("theme", themeCookie === "dark" ? "light" : "dark")
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
                        <IconButton style={{ color: theme.palette.primary.main }}onClick={ () => handlePage("/")}><Home /></IconButton>
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
                                    <AccountCircleIcon className={styleClass.accountCircle} />
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