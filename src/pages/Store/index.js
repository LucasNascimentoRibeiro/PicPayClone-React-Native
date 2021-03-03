import React from 'react';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Highlights from '../../Components/Highlights';
import Stores from '../../Components/Stores';


import { 
  Wrapper, Header,
  Icon,
  SearchContainer, SearchPlaceHolder,
  HighlightsTitle,
  StoresHeaderContainer, StoresTabTitle, SeeMore, SeeMoreText
} from './styles';

const Store = () => {
  return (
    <Wrapper>
      <StatusBar/>
      <Header>
        <Icon>
        <MaterialCommunityIcons name='qrcode-scan' size={24} color='#10c86e'/>
        </Icon>
        <SearchContainer>
          <MaterialIcons name="search" size={24} color="white" />
          <SearchPlaceHolder>Quem você quer pagar?</SearchPlaceHolder>
        </SearchContainer>
      </Header>

      <HighlightsTitle>Destaques: </HighlightsTitle>
      <Highlights/>

      <StoresHeaderContainer>
        <StoresTabTitle>LOJAS</StoresTabTitle>
        <SeeMore>
          <SeeMoreText>Ver mais</SeeMoreText>
          <MaterialIcons name="arrow-forward-ios" size={12} color="#10c86e"/>
        </SeeMore>
      </StoresHeaderContainer>

      <Stores/>

    </Wrapper>
  );
}

export default Store;