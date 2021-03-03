import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e222b;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 12px 10px;

    background-color: #1e222b;
    border-bottom-color: rgba(255,255,255,0.2);
    border-bottom-width: 1px;
`;

export const TabText = styled.Text`
  font-size: 20px;
  font-weight: bold;  
  color: rgba(255,255,255,0.6)
`;

export const ConfigureOption = styled.TouchableOpacity``;

export const OptionText = styled.Text`
    color: #1ab563;
    font-weight: bold;
`;

export const NotificationArea = styled.ScrollView``;
