import styled from 'styled-components';
import theme from '../styles/theme';


const Title = styled.p`
    font-size: ${props => props.size};
    text-align: ${props => props.alignment};
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    margin: 0;
`

Title.defaultProps = {
    color: theme.colors.black,
    weight: 'normal',
    textAlign: 'center',
    fontWeight: 'normal',
    className: 'Title',

}

export default Title