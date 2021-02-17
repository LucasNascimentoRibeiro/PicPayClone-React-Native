import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${ ({BgColor}) => BgColor};
    width: 150px;
    height: 200px;
    border-radius: 8px;
    margin: 0 13px;
    padding: 15px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Img = styled.Image`
    align-self: center;
`;