import styled from 'styled-components';

export const Container = styled.View`
    flex:1;
`;

export const Notification = styled.TouchableOpacity`
    flex: 1;
    padding: 10px 12px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255,255,255,0.2);
    margin: 0px 16px;
`;

export const MessageText = styled.Text`
    color: rgba(255,255,255,0.8);
    font-size: 14px;
    font-weight: 100;
    margin-bottom: 10px;
`;

export const MessageDate = styled.Text`
    color: rgba(255,255,255,0.4);
    font-size: 12px;
`;