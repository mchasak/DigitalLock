import { Grid, Stack, styled } from '@mui/material'
import Display from './Display'
import LockButton from './LockButton'
import Diod from './Diod'

type LockPropsT = {
    inputValue: string
    color: string
    isLocked: boolean
    onButtonClick: (text: string) => void
}


const buttons = [
    {text: '1' },
    {text: '2' },
    {text: '3' },
    {text: '4' },
    {text: '5' },
    {text: '6' },
    {text: '7' },
    {text: '8' },
    {text: '9' },
    {text: '*' },
    {text: '0' },
    {text: '#' },
]

const Lock = ({inputValue, color, isLocked, onButtonClick}: LockPropsT) => {
    return (
        <StyledStack maxWidth={400} ml={40}>
            <Stack position='relative'>
                <Display inputValue={inputValue}/>
                <Diod color={color} />
            </Stack>
            <Grid container spacing={1} mt={2}>
            {buttons.map((button => (
                <Grid item key={button.text} xs={4}>
                    <LockButton text={button.text} onButtonClick={() => onButtonClick(button.text)} specialButton={button.text === '*' || button.text === '#'}/>
                </Grid>
            )))}
            </Grid>
        </StyledStack>
    )
}

const StyledStack = styled(Stack)(() => ({
    backgroundColor: '#000',
    maxWidth: '270px',
    padding: '20px'
}))

export default Lock