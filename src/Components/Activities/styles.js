import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;

`;

export const Header = styled.View`
    flex-direction: row;
`;

export const Tabs = styled.Text`
    color: #fff;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px
    font-weight: bold;
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
    color: #fff
    font-size: 16px;
    padding-left: 10px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const CardFooter = styled.View`
    margin-top: 10px;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255,255,255,06);
    margin: 0 10px;
`;

export const DateLabel = styled.Text`
    color: #fff
    padding: 0 10px;
`;

export const Actions = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const Options = styled.TouchableOpacity`
    padding: 0 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const OptionLabel = styled.Text`
    color: #fff;
    padding-left: 5px
    font-size: 14px;
`;