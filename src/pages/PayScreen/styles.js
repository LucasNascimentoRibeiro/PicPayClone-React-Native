import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    background: #000;
`;


export const Container = styled.View`
    background: #000;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 16px;
`;

export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding: 0 16px;
    color: #fff;
`;

export const StoreLink = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    padding: 10px;
    margin:  4px 10px;

    background: #1e222b;
    border-radius: 10px;
`;

export const StoreLinkIcon = styled.View`
    padding: 10px;
`;

export const StoreLinkBody = styled.View`
    font-size: 18px;
    font-weight: bold;
    padding: 0 16px;
    color: #fff;
`;

export const StoreLinkTitle = styled.Text`
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
`;

export const StoreLinkDescription = styled.Text`
    font-size: 14px;
    padding: 0 10px;
    color: #fff;
`;

export const Locations = styled.TouchableOpacity`
    align-items: center;

    height: 157px;
    padding: 10px;
    margin: 10px;

    background: #1e222b;
    border-radius: 10px;
`;

export const LocationsContainer = styled.View`
    flex-direction: row;
    align-items: center;


    margin: 10px;
    border-radius: 10px;
`;

export const LocationsIcon = styled.View`
    padding: 10px;
`;

export const LocationsBody = styled.View`
    font-size: 18px;
    font-weight: bold;
    padding: 0 16px;
    color: #fff;
`;

export const LocationsTitle = styled.Text`
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
`;

export const LocationsDescription = styled.Text`
    font-size: 14px;
    padding: 2px 10px;
    color: #fff;
`;

export const Map = styled.View`
    height: 70px;
    width: 104%;
    align-items: center;
    overflow: hidden;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const Img = styled.Image`
    height: 500px;
    width: 600px;
    
`;

export const Services = styled.View`
    padding: 10px;
    flex-direction: row;
`;
export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px;
    color: #fff
`;
export const ServicePhone = styled.TouchableOpacity`
    background: #1e222b;
    border-radius: 10px;

    flex-direction: column
    justify-content: space-between;
    height: 100px;
    width: 107px;

    padding: 10px;
    margin-right: 10px;
`;
export const ServicePhoneDescription = styled.Text`
    color: #fff
`;
export const ServiceCard = styled.TouchableOpacity`
    background: #1e222b;
    border-radius: 10px;

    flex-direction: column
    justify-content: space-between;
    height: 100px;
    width: 107px;

    padding: 10px;
    margin-right: 10px;
`;
export const ServiceCardDescription = styled.Text`
    color: #fff
`;