import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const Header = styled.View`
    padding: 16px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled.TouchableOpacity``;

export const SearchContainer = styled.TouchableOpacity`
    flex-direction: row;    
    align-items: center;

    background-color: rgba(255,255,255,.4)

    border-radius: 30px;
    width: 330px;
    padding: 8px 60px;
`;

export const SearchPlaceHolder = styled.Text`
    margin-left: 10px;
    font-size: 14px;
    color: #fff;
`;

export const HighlightsTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;

    margin: 10px 16px;
`;

export const StoresHeaderContainer = styled.View`
    flex-direction: row;
    padding-top: 10px;
    padding-left: 16px;
    justify-content: space-between;
`;

export const StoresTabTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const SeeMore = styled.TouchableOpacity`
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
`;

export const SeeMoreText = styled.Text`
    font-weight: bold;
    color: #10c86e;
    margin-right: 5px;
`;