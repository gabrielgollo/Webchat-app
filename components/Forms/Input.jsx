import { TextField } from '@material-ui/core'


function InputText(props){
    return (
        <TextField
            {...props}
            style={{
                backgroundColor:'white',
                color: 'black',
                borderRadius:'5px'
            }}
        />
    )
}

export default InputText;