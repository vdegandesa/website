import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col, Form, Button, Nav
} from 'react-bootstrap';

import NewsletterPhoto from '../assets/images/newsletterPhoto.png'

import BlankButton from '../components/BlankButton'
import theme from '../styles/theme';
import Text from '../components/Text';
import DividerLine from '../components/DividerLine';

import { API_ROOT } from '../constants'

const Section = styled(Row)`
    padding-top: 80px;
    position:relative;
`

const Wrapper = styled(Col)`
    padding-bottom:30px
    padding-left:0
`

const ImageContainer = styled(Image)`
    position:absolute;
    width:40%;
    z-index:1;
    right:3%;
    bottom:8%;
`
const Division = styled(Row)`
    background:${theme.colors.primary};
    padding-top:30px;
    padding-bottom:30px;
`


class Newsletter extends Component {


    constructor() {
        super();
    }

    state = {
        submitted: false,
    }

    checkStatus = (response) => {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    postData = (e) => {
        e.preventDefault();
        const email = document.getElementById('emailHolder').value;
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }

        fetch(`${API_ROOT}/send`, config)
        .then(this.checkStatus)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        this.setState({
            submitted: true
        })
    }


    render() {


        const NEWSLETTER = this.props.content.NEWSLETTER[0]

        return (

            <Section className='Newsletter'>
                <ImageContainer
                    className='d-none d-md-flex'
                    src={NewsletterPhoto}
                />
                <Col xs={10} className='mx-auto '>
                    <Text
                        weight='bold'
                        className='h2'
                    >
                        {NEWSLETTER.title}
                    </Text>
                    <Wrapper md={2} xs={6}>
                        <DividerLine />
                    </Wrapper>
                    <Wrapper md={6}>
                        <Text
                            weight='bold'
                            className='body'
                        >
                            {NEWSLETTER.headline}
                        </Text>
                        <Nav.Link href='/newsletters' className='p-0'>
                            <Text
                                className='body'
                            >
                                {NEWSLETTER.pastNewsletters}
                            </Text>
                        </Nav.Link>
                    </Wrapper>
                </Col>
                <Col xl={12}>
                    <Division>
                        {this.state.submitted
                            ? (
                                <Col xs={11} className='mx-auto'>
                                    <Text
                                        weight='bold'
                                        color={theme.colors.white}
                                        className='body'
                                    >
                                    Thanks for suscribing!
                                    </Text>
                                    <Text
                                        weight='bold'
                                        color={theme.colors.white}
                                        className='body'
                                    >
                                        {NEWSLETTER.description}

                                    </Text>


                                </Col>
                            )
                            : (
                                <Col xs={10} className='mx-auto'>
                                    <Text
                                        weight='bold'
                                        color={theme.colors.white}
                                        className='body'
                                    >
                                        {NEWSLETTER.description}
                                    </Text>
                                    <Form
                                        type='form'
                                        onSubmit={this.postData}

                                    >
                                        <Wrapper md={4}>
                                            <Form.Control
                                                required
                                                id='emailHolder'
                                                size='sm'
                                                type='email'
                                                placeholder={NEWSLETTER.placeholder}

                                            />
                                        </Wrapper>
                                        <Wrapper md={2}>
                                            <Button
                                                variant='info'
                                                type='submit'
                                            >
                                                {NEWSLETTER.buttonText}
                                            </Button>
                                        </Wrapper>
                                    </Form>
                                </Col>
                            )
                        }
                    </Division>
                </Col>
            </Section>

        )

    }


}


export default Newsletter
