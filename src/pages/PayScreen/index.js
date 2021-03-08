import React from 'react';

import TransactionActivities from '../../Components/TransactionActivities';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import MapImg from '../../assets/map.jpg';

import { 
    Wrapper, Container,
    Header, HeaderText,
    StoreLink, StoreLinkIcon, StoreLinkBody, StoreLinkTitle, StoreLinkDescription,
    Locations, LocationsContainer,  LocationsIcon, LocationsBody, LocationsTitle, LocationsDescription, Map, Img,
    Services, ServicesTitle,
    ServicePhone, ServicePhoneDescription, 
    ServiceCard, ServiceCardDescription

} from './styles';

const PayScreen = () => {
  return (
      <Wrapper>
        <Container>
            <Header>
                <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e'/>
                <HeaderText>Transações</HeaderText>
            </Header>

            <TransactionActivities/>

            <StoreLink>
                <StoreLinkIcon>
                    <MaterialIcons name='shopping-bag' size={24} color='#10c86e'/>
                </StoreLinkIcon>
                <StoreLinkBody>
                    <StoreLinkTitle>Store</StoreLinkTitle>
                    <StoreLinkDescription>Compre o que quiser sem sair de casa</StoreLinkDescription>
                </StoreLinkBody>
            </StoreLink>

            <Locations>
                <LocationsContainer>
                    <LocationsIcon>
                        <MaterialIcons name='location-on' size={24} color='#10c86e'/>
                    </LocationsIcon>
                    <LocationsBody>
                        <LocationsTitle>Locais próximos</LocationsTitle>
                        <LocationsDescription>Confira estabelecimentos perto de você</LocationsDescription>
                    </LocationsBody>
                </LocationsContainer>
                <Map>
                    <Img source={MapImg}/>
                </Map>
            </Locations>

            <ServicesTitle>Serviços</ServicesTitle>

            <Services>
                <ServicePhone>
                    <MaterialCommunityIcons name="cellphone" size={24} color="#10c86e" />
                    <ServicePhoneDescription>Recarga de Celular</ServicePhoneDescription>
                </ServicePhone>

                <ServiceCard>
                    <MaterialCommunityIcons name="cellphone" size={24} color="#10c86e" />
                    <ServiceCardDescription>Cartão Transporte</ServiceCardDescription>
                </ServiceCard>
            </Services>

        </Container>
      </Wrapper>
  )
};

export default PayScreen;