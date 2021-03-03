import React from 'react';

import { Container, StoresItemContainer, Avatar, Img, StoreBody, StoresTitle, StoresDescription } from './styles';

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
        StoresTitle: 'Recarga',
        StoresDescription: 'Recarregue para diversas operadoras com o PicPay.'
    },
    {
        key: String(Math.random()),

        img: Img2,
        StoresTitle: 'Uber',
        StoresDescription: 'Viaje rapidamente com Uber.'
    },
    {
        key: String(Math.random()),

        img: Img3,
        StoresTitle: 'Cartão Transporte',
        StoresDescription: 'Recarregue seu cartão transporte, Vivo, Tim, Claro etc.'
    },
    {
        key: String(Math.random()),

        img: Img4,
        StoresTitle: 'Sky',
        StoresDescription: 'Recarga da SKY TV.'
    },
    {
        key: String(Math.random()),

        img: Img5,
        StoresTitle: 'Doações',
        StoresDescription: 'Doe e ajude a salvar vidas.'
    },
    {
        key: String(Math.random()),

        img: Img6,
        StoresTitle: 'Código de Barra',
        StoresDescription: 'Pague seu boleto com o código de barra.'
    },
    {
        key: String(Math.random()),

        img: Img7,
        StoresTitle: 'Poupança',
        StoresDescription: 'Poupe seu dinheiro conosco.'
    },
];

const Stores = () => {
  return (
    <Container>
        {items.map((item) => (
        <StoresItemContainer key={item.key}>
            <Avatar>
                <Img source={item.img}/>
            </Avatar>
            <StoreBody>
                <StoresTitle>{item.StoresTitle}</StoresTitle>
                <StoresDescription>{item.StoresDescription}</StoresDescription>
            </StoreBody>
        </StoresItemContainer>
        ))}
    </Container>
  )
}

export default Stores;