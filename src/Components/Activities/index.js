import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { 
    Container, 
    Header,
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold, 
    CardBody, 
    UserName, 
    CardFooter, 
    Details,
    Value,
    Divider,
    DateLabel,
    Actions,
    Options,
    OptionLabel
} from './styles';

import avatar from '../../assets/avatar.png';

const Activities = () => {
  return (
      <Container>
        <Header>
            <Title>Atividades</Title>
        </Header>
        
        <Card>
            <CardHeader>
                <Avatar source={avatar}/>
                <Description>
                    <Bold>Você</Bold> pagou a <Bold>@LucasNascimento</Bold>
                </Description>
            </CardHeader>

            <CardBody>
                <UserName>Lucas Nascimento</UserName>
            </CardBody>

            <CardFooter>
                <Details>
                    <Value>R$ 18,00</Value>

                    <Divider/>

                    <Feather name='lock' size={20} color='#fff' />
                    <DateLabel>Há 2 anos</DateLabel>

                    <Actions>
                        <Options>
                            <MaterialCommunityIcons name='comment-outline' size={20} color='#fff' />
                            <OptionLabel>0</OptionLabel>
                        </Options>
                        <Options>
                            <MaterialCommunityIcons name="heart-outline" size={20} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Options>
                    </Actions>

                </Details>
            </CardFooter>

        </Card>
      </Container>
  )
}

export default Activities;