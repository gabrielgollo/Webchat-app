import { TextField } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';


function InputText(props){
    const theme = useTheme();
    return (
        <TextField
            {...props}
            style={{
                backgroundColor: theme.palette.background.input,
                color: theme.palette.text.primary,
                borderColor: theme.palette.text.primary,
                borderRadius:'0px'
            }}
            color='primary'
            variant='outlined'
        />
    )
}

export default InputText;