import * as Styles from './style';
import {Navbar} from '../../components/navbar';

const Fidelity = () => {
  return (
    <Styles.MainContainer>
      <Styles.Container
        flex={0.1}
        margin-top="10px"
        align-items="center"
        justify-content="center">
        <Styles.Text font-size="24px">Vale fidelidade</Styles.Text>
      </Styles.Container>

      <Styles.Container flex={1} align-items="center" justify-content="center">
        <Styles.Container
          width="300px"
          height="360px"
          background="#2E2E2E"
          border-radius="15px"
          align-items="center">
          <Styles.Text margin="30px" font-size="24px">
            O vale fidelidade é contabilizado a cada corte de cabelo ou barba
            realizado. Acumulando um total de 10 cortes, você irá receber um
            corte de cabelo ou barba gratuito.
            {'\n'}
            {'\n'}
            Sua contagem: 30%
          </Styles.Text>
          <Styles.Container  width="250px" height="60px" border-radius="15px" background="white">
          <Styles.Container align-items="center" justify-content="center" width="100px" height="60px" border-radius="15px" background="green">
          </Styles.Container>
          
          </Styles.Container>
        </Styles.Container>
      </Styles.Container>

      <Styles.Container flex={0.1}>
        <Navbar />
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default Fidelity;
