import React from 'react';

import { Container, HiglightsItemContainer,  HighlightsTitle, HighlightsTitleDecoration, HighlightsDescription } from './styles'

const items = [
  {
    key: String(Math.random()),

    HiglighsTitle: 'Venha ver as vantagens do PicPay',
    HighlightsDescription: 'Ganhe dinheiro de forma rapida e facil com as promoções do PicPay.'
  },
  {
    key: String(Math.random()),

    HiglighsTitle: 'Ganhe R$10 de volta',
    HighlightsDescription: 'Ao pagar com cartão de credito na primeira recarga do celular.'
  },
  {
    key: String(Math.random()),

    HiglighsTitle: 'trabalhe com Economia e Praticidade',
    HighlightsDescription: 'Com PicPay, você economiza no bolso e nas preocupações'
  }
]

const Highlights = () => {
  return (
    <Container>
        {items.map((item) => (
          <HiglightsItemContainer key={item.key} colors={['#52e78c', '#1ab563']}>
            <HighlightsTitle>{item.HiglighsTitle}</HighlightsTitle>
            <HighlightsTitleDecoration/>
            <HighlightsDescription>{item.HighlightsDescription}</HighlightsDescription>
          </HiglightsItemContainer>
        ))}
    </Container>   
  );
}

export default Highlights;