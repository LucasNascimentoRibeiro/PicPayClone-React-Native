import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalIndicator: false,
    contentContainerStyle: {
        paddingLeft: 10,
    },
}))`
    padding: 8px 0;
`;

export const TransactionActivitiesItemContainer = styled.TouchableOpacity`
    background: #1e222b;
    border-radius: 10px;

    flex-direction: column
    justify-content: space-between;
    height: 100px;
    width: 107px;
    
    padding: 10px;
    margin-right: 10px;
`;

export const TransactionActivitiesText = styled.Text`
  font-size: 14px;
  color: #fff;

  margin-top: 16px;
`;