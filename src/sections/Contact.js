import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import { Heading, Text } from 'rebass';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';


const Background = () => (
    <div>
      <Triangle
        color="backgroundDark"
        height={['35vh', '80vh']}
        width={['95vw', '60vw']}
      />
  
      <Triangle
        color="secondary"
        height={['38vh', '80vh']}
        width={['50vw', '35vw']}
      />
  
      <Triangle
        color="primaryDark"
        height={['25vh', '35vh']}
        width={['75vw', '60vw']}
        invertX
      />
  
      <Triangle
        color="backgroundDark"
        height={['20vh', '20vh']}
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
const Contact = () => (
    <Section.Container id="Contact Us" Background={Background}>
    <Section.Header name="Contact Us" icon="✍" label="contact" />
    <EllipsisHeading>
    <h1>Hotel Address: 112 Hoang Hoa Tham, Nha Trang city, Vietnam</h1>
    <p>Email: info@binhanhotel.com</p>
    <p>Phone: +84905703932</p>
    </EllipsisHeading>
    </Section.Container>
)

export default Contact;