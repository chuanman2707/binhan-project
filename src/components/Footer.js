import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';
import Section from './Section';

const FooterContainer = styled.footer`
  padding: 2em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: auto;

  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;


const Info = (props) => (
  <p>{props.info}</p>
)

const Footer = () => (

  <FooterContainer>
    <Fade bottom>
      <Info info="Email: Binhanhotel28@yahoo.com" />
      <Info info="Phone: +84931797370" />
      <Info info="Address: 102 Hoang Hoa Tham, Nha Trang, Khanh Hoa" />
      
    </Fade>
  </FooterContainer>

);

export default Footer;
