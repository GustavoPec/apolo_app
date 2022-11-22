import * as Styles from './style';
import {Navbar} from '../../components/navbar';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Styles.MainContainer>
      <Styles.Container justify-content="center" flex={0.5}>
        <Styles.Container
          border="3px #ffffff33 solid"
          borderTopRightRadius="15px"
          borderBottomRightRadius="15px"
          background="#2E2E2E"
          width="250"
          height="160"
          padding-left="10px">
          <Styles.Text font-size="35px">
            Olá Gustavo,{'\n'}Vamos marcar{'\n'}um horário?
          </Styles.Text>
          <Styles.Container
            margin-top="10px"
            justify-content="center"
            align-items="center">
            <Styles.Button
              background="black"
              width="90"
              height="30"
              border-radius="15px"
              justify-content="center"
              align-items="center"
              onPress={() => navigation.navigate('schedule')}>
              <Styles.Text font-size="20px">Agendar</Styles.Text>
            </Styles.Button>
          </Styles.Container>
        </Styles.Container>
      </Styles.Container>
      <Styles.Container
        flex={1}
        justify-content="space-evenly"
        align-items="center">
        <Styles.Button onPress={() => navigation.navigate('price')}>
          <Styles.Container
            border="3px #ffffff33 solid"
            border-radius="15px"
            background="#2E2E2E"
            height="80px"
            width="350px"
            justify-content="center"
            align-items="center">
            <Styles.Text font-size="24px">Cortes e preço</Styles.Text>
          </Styles.Container>
        </Styles.Button>

        <Styles.Button onPress={() => navigation.navigate('fidelity')}>
          <Styles.Container
            border="3px #ffffff33 solid"
            border-radius="15px"
            background="#2E2E2E"
            height="80px"
            width="350px"
            justify-content="center"
            align-items="center">
            <Styles.Text font-size="24px">Vale fidelidade</Styles.Text>
          </Styles.Container>
        </Styles.Button>

        <Styles.Button>
          <Styles.Container
            border="3px #ffffff33 solid"
            border-radius="15px"
            background="#2E2E2E"
            height="80px"
            width="350px"
            justify-content="center"
            align-items="center">
            <Styles.Text font-size="24px">Rede social</Styles.Text>
          </Styles.Container>
        </Styles.Button>
      </Styles.Container>
      <Navbar />
    </Styles.MainContainer>
  );
};

export default Home;
