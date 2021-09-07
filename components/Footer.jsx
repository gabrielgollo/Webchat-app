import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core"

function Footer(){
    const useStyles = makeStyles((theme) => ({
        footer:{
            backgroundColor:"#490083",
            borderRadius:"1px",
            color:"whitesmoke",
            margin:"auto",
            padding:"0.5%",
            height: "10%",
            maxWidth:"60%",
            marginTop:"2%"
        },
        text: {
            fontWeight:"bold"
        }
    }))
    const classes = useStyles()

    return (
    <Box className={classes.footer}>
        <Container maxWidth="lg">
            <Grid container alignContent="center" alignItems="center">
                <Grid item xs={4}>  
                    <a href="https://www.linkedin.com/in/gabrielsgamaral/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></img></a> 
                </Grid>
                <Grid item xs={4}>
                    <Typography className={classes.text}>
                        Desenvolvido por: Gabriel Gollo
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
}

export default Footer