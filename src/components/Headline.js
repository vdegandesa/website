import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Text from './Text'

const Wrapper = styled(Row)`
    margin-bottom: 15px
`

const Holder = styled(Col)`
    text-align: center;
    margin: auto;


`


const Headline = ({
    headline,
    description,
    color,
    weight,
    alignment,
    fontSize,
}) => {
    return (
        <Wrapper>

            {alignment === 'left' ? (
                <Col md={2} className='mr-auto'>
                    <DividerLine />
                </Col>
            ) : (
                <Col md={2} className='mx-auto'>
                    <DividerLine />
                </Col>
            )}
            <Holder md={12}>
                <Text
                    color={color}
                    weight={weight}
                    alignment={alignment}
                    fontSize={fontSize}
                    className='h2'
                >
                    {headline}
                </Text>
            </Holder>
            <Holder md={12}>
                <Text
                    color={color}
                    alignment={alignment}
                    className='subtitle'
                >
                    {description}
                </Text>
            </Holder>

        </Wrapper>
    )
}

export default Headline
