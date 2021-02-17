import React from 'react';
import { Text } from 'react-native';

import { Container, Option, Title, Img } from './styles';

import Img8 from '../../assets/08.png';
import Img9 from '../../assets/09.png';
import Img10 from '../../assets/10.png';
import Img11 from '../../assets/11.png';
import Img12 from '../../assets/12.png';

const items = [
    {
        key: String(Math.random()),
        img: Img8,
        Title: 'Pague suas contas sem sair de casa',
        BgColor: '#172c4a',
    },
    {
        key: String(Math.random()),
        img: Img9,
        Title: 'Aproveite mais tempo com a familia',
        BgColor: '#6a0159',
    },
    {
        key: String(Math.random()),
        img: Img10,
        Title: 'Evite o Coronovarius indo em lotéricas',
        BgColor: '#4139c8',
    },
    {
        key: String(Math.random()),
        img: Img11,
        Title: 'tudo disponível em poucos passos',
        BgColor: '#00ab4b',
    },
    {
        key: String(Math.random()),
        img: Img12,
        Title: 'Com uma mão, livre-se de problemas',
        BgColor: '#ba2f76',
    }
];

const Tips = () => {
  return (
      <Container>
          {items.map((item) => (
            <Option key={item.key} BgColor={item.BgColor}>
                <Title>{item.Title}</Title>
                <Img source={item.img} />
            </Option>
          ))}
          
      </Container>
  );
}
export default Tips;