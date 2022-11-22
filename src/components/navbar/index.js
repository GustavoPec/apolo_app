import * as Styles from './style';
import {useNavigation} from '@react-navigation/native';

export const Navbar = () => {
  const navigation = useNavigation(); //modulo de navegação 

  return (
    <Styles.MainContainer>
      <Styles.Container
        flex={1}
        height="60px"
        background="#2e2e2e"
        justify-content="center"
        aling-items="center">
        <Styles.Container
          display="flex"
          flex-direction="row"
          justify-content="space-around"
          aling-items="center"> 
          <Styles.Button onPress={() => navigation.navigate('home')}> 
            <Styles.Image source={require('../../screens/public/home.png')} /> 
          </Styles.Button>

          <Styles.Button onPress={() => navigation.navigate('schedule')}> 
            <Styles.Image source={require('../../screens/public/timer.png')} />
          </Styles.Button>

          <Styles.Button onPress={() => navigation.navigate('user')}> 
            <Styles.Image source={require('../../screens/public/user.png')} />
          </Styles.Button>
        </Styles.Container>
      </Styles.Container>
    </Styles.MainContainer>
  );
};
