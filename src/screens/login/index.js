import {useEffect, useState} from 'react';
import * as Styles from './style';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  //armazena informação nas váriaveis 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [identifica, setIdentifica] = useState('Identifique-se');

  const navigation = useNavigation();

  const handleLogin = () => {
    //Verifica se o email e a senha são iguais aos informados no código
    if (email == 'G' && senha == '1234') {
      //Se for igual, faz o navegate
      console.log(email, senha);
      //se for errada, muda a mensagem de login para "erro no login"
    } else {
      setIdentifica('Erro no login');
    }
  };

  return (
    <Styles.MainContainer>
      <Styles.Container flex={2}>
        <Styles.Image
          margin-top="30px"
          source={require('../public/LogoApolo.png')}
        />
      </Styles.Container>
      <Styles.Container flex={1} align-items="center" background-color="black">
        <Styles.Text margin-bottom="10px" color="white" font-size="40px">
          {identifica}
        </Styles.Text>
        <Styles.Input
          onChange={setEmail}
          value={email}
          placeholder="Email..."></Styles.Input>
        <Styles.Input
          secureTextEntry={true}
          placeholder="Senha..."
          margin-top="10px"
          onChange={setSenha}
          value={senha}></Styles.Input>

        <Styles.Button
          onPress={() => navigation.navigate('home')}
          margin-top="30px">
          <Styles.Text color="#695E4A" font-size="30px">
            Logar
          </Styles.Text>
        </Styles.Button>
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default Login;
