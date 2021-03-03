import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalIndicator: false,
    contentContainerStyle: {
        paddingLeft: 10,
    },
}))`
    padding: 8px 0;
`;

export const HiglightsItemContainer = styled(LinearGradient)`
    width: 350px;
    border-radius: 20px;
    padding: 8px 10px;

    margin: 0 10px;
`;

export const HighlightsTitle = styled.Text`
    color: #fff;
    font-size: 24px;

    margin-bottom: 5px;
`;

export const HighlightsTitleDecoration = styled.View`
    height: 3px;
    width: 300px;
    background: white;
    margin: 12px 0px;
`;

export const HighlightsDescription = styled.Text`
    color: #fff;
    font-size: 16px;
    text-align: justify;
    margin-right: 30px;
`;

