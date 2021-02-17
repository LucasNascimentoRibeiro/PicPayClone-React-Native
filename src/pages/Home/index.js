import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../Components/Suggestions';
import Activities from '../../Components/Activities';
import Tips from '../../Components/Tips';
import Banner from '../../Components/Banner';

const Home = () => {
  return  (
    
      <Wrapper>
        <Container>
          <Header>
          <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e'/>

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 00,00</Balance>
          </BalanceContainer>

          <AntDesign name='gift' size={30} color='#10c86e'/>
          <MaterialCommunityIcons name="percent-outline" size={30} color="#10c86e" />
          </Header>

          <Suggestions/>
          <Activities/>
          <Tips/>
          <Banner/>
          
        </Container>
      </Wrapper>
    
  )
}

export default Home;