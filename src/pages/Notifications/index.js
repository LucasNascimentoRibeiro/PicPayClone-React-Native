import React from 'react';
import {StatusBar} from 'react-native';

import NotificationMessages from '../../Components/NotificationMessages';

import { 
  Container, Header, NotificationArea,
  TabText, 
  ConfigureOption, OptionText
} from './styles';

const Notifications = () => {
  return (
    <Container>
      <StatusBar/>

      <Header>
        <TabText>Notificações</TabText>
        <ConfigureOption>
          <OptionText>Configurar</OptionText>
        </ConfigureOption>
      </Header>

      <NotificationArea>
        <NotificationMessages/>
      </NotificationArea>

    </Container>
  );
}

export default Notifications;