import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex:1
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;  
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    flex-direction: row;
    margin: 10px;
    align-items: center
`;

export const Balance = styled.Text`
    font-size: 38px;
    color: #fff;
    margin-right: 10px;
    font-weight: 200;
`;

export const Bold = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 30px;  
`;


export const Action = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 20px;
    border: rgba(255,255,255,0.7);
    margin: 3px 8px;
    padding: 5px 20px;
    align-items: center;
    justify-content: center;
    width: 160px;
`;

export const ActionLabel  = styled.Text`
    color: #fff
    font-size: 18px;
    padding-left: 10px;
`;

export const UseBalance = styled.View`
    background: #1e222b;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const UseBalanceText = styled.Text`
    color: #fff
    font-size: 14px;
`;

export const Label = styled.Text`
    color: #ccc;
    font-size: 10px;
    margin-top: 25px;
    margin-left: 16px;
    margin-bottom: 5px;
`;

export const Card = styled.View`
    background: #1e222b;
    padding: 20px;
    margin: 5px 15px;
    border-radius: 5px;
    flex-direction: row;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const CardBody = styled.View`
    flex:1;
    margin-right: 22px;
`;

export const CardText = styled.Text`
    color: rgba(255,255,255,0.8);
    padding: 15px 0;
`;

export const AddCard = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
`;

export const Icon = styled.TouchableOpacity`
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 20px;

`;

export const AddCardLabel = styled.Text`
    font-size: 16px
    color: #1ab563;
    font-weight: bold;
    padding: 0 10px;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const TicketContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`;

export const TicketText = styled.Text`
    color: #1ab563;
    text-decoration: underline;
    font-size: 14px;
    font-weight: bold;
    padding-left: 5px;
`;