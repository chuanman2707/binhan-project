import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
    <div>
    <Triangle
        color="backgroundDark"
        height={['15vh', '10vh']}
        width={['100vw', '100vw']}
        invertX
    />

    <Triangle
        color="secondary"
        height={['50vh', '40vh']}
        width={['70vw', '40vw']}
        invertY
    />

    <Triangle
        color="primaryDark"
        height={['40vh', '15vh']}
        width={['100vw', '100vw']}
        invertX
        invertY
    />
    </div>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;
const Post = (props) => (
    <Card>
        <EllipsisHeading m={3} p={1}>
            <p>{props.para}</p>
        </EllipsisHeading>
    </Card>
)

const Services = () => (
    <Section.Container id="Services" Background={Background}>
    <Section.Header name="Services" icon="✍️" label="writing" />
    <CardContainer minWidth="300px">
    <Post para="Vin Pearl Ticket Adult : 880.000 VND Children: 700.000 VND "/>
    <Post para="4 islands tour: 350.000 VND, lunch on boat included" />
    <Post para="3 islands by glass boat: 500.000 VND, lunch on boat included" />
    <Post para="Monkey island or Nha Phu island: 600.000 VND, lunch included" />
    <Post para="Yang Bay water fall 1 day tour: 600.000 VND" />
    <Post para="Diep Son island 1 day tour: 600.000 VND" />
    <Post para="Scuba Dive from PADI center: 2 dives US$ 50. US$70/ two times" />
    <Post para="Snorkeling tour: 500.000 VND City tour: 600.000 VND, including lunch" />
    <Post para="Laundry service : 50.000 VND per kg" />
    <Post para="Airport taxi pick up from Cam Ranh : 400.000 VND/ trip" />
    <Post para=" Rent motorbike 1 day: Automatic transmission : 150.000 VND/day"/>
    <Post para="Rent motorbike 1 day: Manual transmission : 100.000 VND/day"/>
    
    </CardContainer>
    </Section.Container>
);

export default Services;

