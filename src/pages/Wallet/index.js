import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Switch } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Img14 from '../../assets/credit-card.png';


import { 
  Wrapper, 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer, 
  Balance,
  Bold,
  Description,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceText,
  Label,
  Card,
  CardTitle,
  CardBody,
  CardText,
  AddCard,
  AddCardLabel,
  Icon,
  Img,
  TicketContainer,
  TicketText,
} from './styles';

const Wallet = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isVisible , setIsVisible] = useState(true)
  function HandleToggleVisibility() {
    setIsVisible((prevState) => !prevState)
  }

  const [isBalanceUsed, setIsBalanceUsed] = useState();
  function HandleToggleUseBalance () {
    setIsBalanceUsed((BalancePrevState) => !BalancePrevState);
  }


  return (
      <Wrapper>
          <Header colors={
            isBalanceUsed 
              ? ['#52e78c', '#1ab563']
              : ['#d3d3d3', '#868686']
          }
          >
            <HeaderContainer>
              <Title>Saldo PicPay</Title>
              <BalanceContainer>
                <Balance>
                  R$ <Bold>{isVisible ? '0,00' : '----' }</Bold>
                </Balance>
                <TouchableOpacity onPress={HandleToggleVisibility}>
                  <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="white" />
                </TouchableOpacity>
              </BalanceContainer>

              <Description>Seu Saldo esta rendendo 100% do CDI</Description>

              <Actions>
                <Action>
                <MaterialCommunityIcons name="cash-plus" size={28} color="white" />
                <ActionLabel>Adicionar</ActionLabel>
                </Action>

                <Action>
                <MaterialCommunityIcons name="bank-outline" size={28} color="white" />
                <ActionLabel>Retirar</ActionLabel>
                </Action>
              </Actions>

            </HeaderContainer>
          </Header>

          <UseBalance>
            <UseBalanceText>Usar Saldo ao pagar</UseBalanceText>
            <Switch
              trackColor={{ false: "#767577", true: "#1ab563" }}
              thumbColor={isEnabled ? "#fff" : "#fff"}
              onValueChange={HandleToggleUseBalance}
              value={isBalanceUsed}
            />
          </UseBalance>

          <Label>FORMAS DE PAGAMENTO</Label>

          <Card>
            <CardBody>
              <CardTitle>Cadastre seu Cartão de Credito</CardTitle>
              <CardText>
                Cadastre um cartão de credito para poder fazer pagamentos mesmo 
                quando não tiver saldo no seu PicPay.
              </CardText>

              <AddCard>
                <Icon>
                <MaterialCommunityIcons name="plus" size={35} color="#1ab563" />
                </Icon>
                <AddCardLabel>Adicionar Cartão de Crédito</AddCardLabel>
              </AddCard>

            </CardBody>
            <Img source={Img14} resizeMode='contain'/>
          </Card>

          <TicketContainer>
            <MaterialCommunityIcons name="ticket-percent-outline" size={28} color="#1ab563" />
            <TicketText>Usar Código Promocional</TicketText>
          </TicketContainer>

      </Wrapper>
  )
}

export default Wallet;