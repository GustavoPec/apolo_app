import * as Styles from './style';
import {Navbar} from '../../components/navbar';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const User = () => {
  const navigation = useNavigation();

  //muda o status do switch on e off
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Styles.MainContainer>
      <Styles.Container
        flex={0.2}
        align-items="center"
        justify-content="space-around">
        <Styles.Text font-size="24">Perfil</Styles.Text>
        <Styles.Text font-size="24">Gustavo Peçanha</Styles.Text>
      </Styles.Container>

      <Styles.Container flex={1} align-items="center" justify-content="center">
        <Styles.Container
          flex={0.4}
          align-items="center"
          justify-content="space-around">
          <Styles.Button onPress={toggleSwitch}>
            <Styles.Container
              flex-direction="row"
              background="#2e2e2e"
              width="350px"
              height="40px"
              border-radius="15px"
              align-items="center"
              justify-content="space-around">
              <Styles.Text font-size="20px"> {isEnabled === false ? "Ativar notificação" : "Desativar notificação" }</Styles.Text>
              <Styles.Switch
                value={isEnabled}
                
              />
            </Styles.Container>
          </Styles.Button>

          <Styles.Button>
            <Styles.Container
              background="#2e2e2e"
              width="350px"
              height="40px"
              border-radius="15px"
              align-items="center"
              justify-content="space-around">
              <Styles.Text font-size="20px">Editar conta</Styles.Text>
            </Styles.Container>
          </Styles.Button>

          <Styles.Button>
            <Styles.Container
              background="#2e2e2e"
              width="350px"
              height="40px"
              border-radius="15px"
              align-items="center"
              justify-content="space-around">
              <Styles.Text font-size="20px" color="red">
                Excluir conta
              </Styles.Text>
            </Styles.Container>
          </Styles.Button>
        </Styles.Container>
      </Styles.Container>

      <Styles.Container
        flex={0.1}
        align-items="center"
        justify-content="center">
        <Styles.Button
          onPress={() => navigation.navigate('login')}
          border-radius="15px"
          align-items="center"
          justify-content="center"
          height="30px"
          width="80px"
          background="white">
          <Styles.Text color="black" font-size="24">
            Sair
          </Styles.Text>
        </Styles.Button>
      </Styles.Container>
      <Styles.Container>
        <Navbar />
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default User;
