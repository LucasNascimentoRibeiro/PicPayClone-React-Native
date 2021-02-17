import React from 'react';
import { View } from 'react-native';

import { Container, Details, Img, Title, Description } from './styles';

import Img13 from '../../assets/13.png';

const Banner = () => {
  return (
      <Container>
          <Details>
            <Title>Cobre um amigo</Title>

            <Description>
                Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
            </Description>
          </Details>
          <Img source={Img13}/>
      </Container>
  )
}

export default Banner;