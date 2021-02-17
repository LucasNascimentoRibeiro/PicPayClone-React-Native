import React from 'react';
import { View } from 'react-native';

import { Container, Options, Img, Label } from './styles';

import Img1 from '../../assets/01.png';
import Img2 from '../../assets/02.png';
import Img3 from '../../assets/03.png';
import Img4 from '../../assets/04.png';
import Img5 from '../../assets/05.png';
import Img6 from '../../assets/06.png';
import Img7 from '../../assets/07.png';

const items = [

    {
        key: String(Math.random()),
        img: Img1,
        label: 'Contas'
    },
    {
        key: String(Math.random()),
        img: Img2,
        label: 'Uber'
    },
    {
        key: String(Math.random()),
        img: Img3,
        label: 'ônibus'
    },
    {
        key: String(Math.random()),
        img: Img4,
        label: 'Sky'
    },
    {
        key: String(Math.random()),
        img: Img5,
        label: 'Doações'
    },
    {
        key: String(Math.random()),
        img: Img6,
        label: 'Boleto'
    },
    {
        key: String(Math.random()),
        img: Img7,
        label: 'Poupança'
    },

];

const Suggestions = () => {
  return (
      <Container>
          {items.map( (item) => (
            <Options key={item.key}>
              <Img source={item.img}/>
              <Label>{item.label}</Label>
            </Options>
          ))}
      </Container>
  )
}

export default Suggestions;

