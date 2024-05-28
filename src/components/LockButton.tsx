import styled from '@emotion/styled';
import { Button } from '@mui/material';

type ButtonPropsT = {
    text: string;
    onButtonClick: (text: string) => void;
    specialButton?: boolean
}

const LockButton = ({text, onButtonClick, specialButton}: ButtonPropsT) => {
    return (
        <StyledButton onClick={() => onButtonClick(text)} specialButton={specialButton}>{text}</StyledButton>
    )
}

const StyledButton = styled(Button)<{specialButton?: boolean}>(({specialButton}) => ({
    BorderRadius: '10px',
    backgroundColor: specialButton ? 'grey' :'#fff',
    color: '#000',
    fontSize: '25px',
    padding: '10px 22px',
    lineHeight: 1,
    '&:hover': {
        backgroundColor: '#C6C6C6'
    }
}))


export default LockButton