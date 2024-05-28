import styled from "@emotion/styled"

type DiodPropsT = {
    color: string
}


const Diod = ({color}: DiodPropsT) => {
    return (
        <ColoredDiod color={color} />
    )
}

const ColoredDiod = styled('div')<DiodPropsT>(({color}) => ({
    backgroundColor: color,
    width: 15,
    height: 15,
    borderRadius: '99%',
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 2,
}))

export default Diod