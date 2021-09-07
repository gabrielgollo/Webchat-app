import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

function MessageBox(){
    const useStyles = makeStyles({
        container:{

        },
        messageContent:{
            backgroundColor:"#fff1f1",
            borderRadius:"6px",
            border:'1px',
            color:'black',
            alignItems:'center',
            minHeight:'350px',
            maxHeight:'300px',
            overflow: 'auto',
            maxWidth:'100%',
            padding:"1.5%"
        },
        messageWriteBox: {
            backgroundColor:"#fff1f1",
            borderRadius:"6px",
            border:'1px',
            alignItems:'center',
            minHeight: '100px',
            maxWidth:'100%',
            padding:"1.5%",
        }
    })
    const stylesClasses = useStyles()
    const users = []
    const messages = []
    for(let i=0; i<100; i+=1){
        users.push(i)
        messages.push('Lorem ipsum habitasse enim etiam lorem aptent curae nam, erat leo potenti iaculis accumsan consectetur habitasse, congue integer enim accumsan morbi consequat ipsum. suspendisse mi per sollicitudin rutrum torquent accumsan tincidunt quisque, viverra convallis diam primis lacinia tristique a curae velit, dictum maecenas nunc ac arcu consequat dictumst. placerat mattis magna curae rhoncus elementum diam rutrum orci, rhoncus eleifend justo adipiscing urna luctus viverra bibendum netus, integer est nulla fames convallis inceptos litora. orci potenti iaculis habitasse dui arcu vestibulum consequat habitasse, dictum massa sollicitudin convallis phasellus euismod neque vitae, adipiscing maecenas litora ut aenean habitasse leo. ')
    }


    return (
        <Grid container spacing={3} alignContent='center' alignItems='center' justifyContent='center'>
            <Grid item xs={12}> 
                <Grid className={stylesClasses.messageContent}>
                {users.map( (i, index)=> <div key={i}>
                    <Grid container justifyContent='left' alignContent='left' alignItems='left'> 
                        <Grid item xs={2}>user{i}-san:</Grid>
                        <Grid item xs={10}> <p>{messages[index]}</p> </Grid>
                    </Grid>
                </div>)} 
                </Grid>
            </Grid>
            <Grid item xs={12}> 
                <Grid className={stylesClasses.messageWriteBox} >enviar mensagem </Grid>
            </Grid>
        </Grid>
    )
}

export default MessageBox