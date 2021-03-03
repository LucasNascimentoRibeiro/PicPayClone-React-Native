import React from 'react';

import { Container, Notification, MessageDate, MessageText } from './styles';

const items = [
    {
        key: String(Math.random()),

        MessageText: 'PICPAY: Pague seus boletos com o credito do PicPay.',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'HOJE: Use seu desconto para compras com o cartão do PicPay.',
        MessageDate: 'Hoje às 16:30'
    },
    {
        key: String(Math.random()),

        MessageText: 'HOJE: 25% de desconto no seu boleto por nossa conta. Parcele um boleto com PicPay e ganhe dinheiro de volta.',
        MessageDate: 'Hoje às 17:30'
    },
    {
        key: String(Math.random()),

        MessageText: 'PICPAY: Pague suas contas sem sair de casa, é rapido e facil com PicPay. Toque para saber mais',
        MessageDate: 'Hoje às 17:45'
    },
    {
        key: String(Math.random()),

        MessageText: 'HOJE: Facilite nas compras com o Cartão de Credito PicPay. Faça o seu agora mesmo. Toque para saber mais',
        MessageDate: 'Hoje às 18:40'
    },
    {
        key: String(Math.random()),

        MessageText: 'Pague suas contas sem sair de casa',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'HOJE: Facilite nas compras com o Cartão de Credito PicPay. Faça o seu agora mesmo. Toque para saber mais',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'Pague suas contas sem sair de casa',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'HOJE: Ganhe dinheiro com as promoções nas compras com o Cartão de Credito PicPay. Toque para saber mais',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'Pague suas contas sem sair de casa',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'Pague suas contas sem sair de casa',
        MessageDate: 'Hoje às 13:00'
    },
    {
        key: String(Math.random()),

        MessageText: 'HOJE: Facilite nas compras com o Cartão de Credito PicPay. Faça o seu agora mesmo. Toque para saber mais',
        MessageDate: 'Hoje às 13:00'
    },
];

const NotificationMessages = () => {
  return (
      <Container>
          {items.map((item) => (
            <Notification key={item.key}>
                <MessageText>{item.MessageText}</MessageText>
                <MessageDate>{item.MessageDate}</MessageDate>
            </Notification>
          ))}       
      </Container>
  );
}
export default NotificationMessages;