import styled from '@emotion/styled'
import { TextField } from '@mui/material'

type DisplayPropsT = {
    inputValue: string
}


const Display = ({inputValue}: DisplayPropsT) => {
    return (
        <StyledDisplay 
            value={inputValue} 
            sx={{textAlign: 'center'}} 
            onInput = {(e) =>{
                inputValue = Math.max(0, parseInt(inputValue) ).toString().slice(0,4)
            }}
        />
    )
}

const StyledDisplay = styled(TextField)(({}) => ({
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '5px',
    'input': {
        height: 50,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 500,  
    }
}))

export default Display