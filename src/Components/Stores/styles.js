import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const StoresItemContainer = styled.TouchableOpacity`

    flex-direction: row;
    margin: 10px 10px;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 60px;
`;

export const Avatar = styled.View``;

export const Img = styled.Image`
    height: 50px;
    width: 50px;
`;

export const StoreBody = styled.View`
    padding: 0px 20px;
`;

export const StoresTitle = styled.Text`
    color: #fff;
`;

export const StoresDescription = styled.Text`
    color: rgba(255,255,255,0.8)
`;
