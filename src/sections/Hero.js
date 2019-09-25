import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col, Button
} from 'react-bootstrap';


import TeaserTile from '../components/TeaserTile';
import PrincipalMessage from '../components/PrincipalMessage'
import HeroGraphic from '../assets/images/heroGraphic.png'

const Section = styled(Row)`
    padding-top: 50px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

const ImageContainer = styled(Image)`
    height: 100%;
    width: 100%;


`

class Hero extends Component {


    renderPrincipalMessage = () => {
        const { PRINCIPALMESSAGE } = this.props.content
        return PRINCIPALMESSAGE.map(t => {
            return (
                <Col key={t.key} md={{ order: 1 }} xs={{ order: 2 }}>
                    <PrincipalMessage
                        headline1={t.headline1}
                        headline2={t.headline2}
                        description={t.description}
                        buttonText={t.buttonText}
                        url={t.url}
                        key={t.key}
                    />

                </Col>
            )
        })
    }

    renderTeaser = () => {
        const { TEASERS } = this.props.content
        return TEASERS.map(t => {
            return (
                <Col md={4} key={t.key}>
                    <TeaserTile
                        headline={t.headline}
                        intro={t.description}
                        buttonText={t.linkTitle}
                        link={t.url}
                    />
                </Col>
            )
        })
    }

    render() {
        return (

            <Section>

                <Col xs={10} className='mx-auto'>
                    <Section>
                        {this.renderPrincipalMessage()}
                        <Button variant='primary' onClick={this.props.changeLanguage}>Primary</Button>
                        <Col md={{ order: 2 }} xs={{ order: 1 }}>
                            <ImageContainer src={HeroGraphic} alt='Hero Graphic' />
                        </Col>
                    </Section>

                    <Row>
                        {this.renderTeaser()}
                    </Row>
                </Col>

            </Section>
        )
    }
}

export default Hero
