import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export const Container = styled.View`
  ${props => props}
  border-radius: 15px;
`;

export const Text = styled.Text`
  ${props => props}
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

export const Button = styled.TouchableOpacity`
  ${props => props}
  margin-bottom: 20px;
  
`;

export const SafeArea = styled.SafeAreaView`
${props => props}
`