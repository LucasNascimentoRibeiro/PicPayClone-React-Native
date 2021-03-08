import React from 'react';

import {  Ionicons  } from '@expo/vector-icons';

import { Wrapper, TransactionActivitiesItemContainer, TransactionActivitiesText } from './styles';

const items = [
    {
        key: String(Math.random()),
  
        IconName: 'person-circle-outline',
        TransactionActivitiesText: 'Pagar pessoas'
    },
    {
        key: String(Math.random()),
  
        IconName: 'md-add-circle-outline',
        TransactionActivitiesText: 'Pix'
    },
    {
        key: String(Math.random()),

        IconName: 'ios-barcode-outline',
        TransactionActivitiesText: 'Pagar boleto'
    },
    {
        key: String(Math.random()),
    
        IconName: 'card-outline',
        TransactionActivitiesText: 'Pagar com cartão'
    },
    {
        key: String(Math.random()),
    
        IconName: 'send-outline',
        TransactionActivitiesText: 'Fazer cobranças'
    },
  ]
  
  const TransactionActivities = () => {
    return (
      <Wrapper>
          {items.map((item) => (
            <TransactionActivitiesItemContainer key={item.key} >
              <Ionicons name={item.IconName} size={24} color='#10c86e'/>
              <TransactionActivitiesText>{item.TransactionActivitiesText}</TransactionActivitiesText>
            </TransactionActivitiesItemContainer>
          ))}
      </Wrapper>   
    );
}

export default TransactionActivities;