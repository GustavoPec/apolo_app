import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

export const Container = styled.View`
  //Passagem de dados via props
  ${props => props}
`;

export const Input = styled.TextInput`
  ${props => props}
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 35;
  padding: 5px;
  padding-left: 20px;
  background-color: #ffffff33;
  width: 300;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  ${props => props}
  background-color: white;
  width: 200;
  height: 40;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const Text = styled.Text`
  ${props => props}
`;

export const Image = styled.Image`
${props => props}
`