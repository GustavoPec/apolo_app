import * as Styles from './style';
import {Navbar} from '../../components/navbar';

const Price = () => {
  return (
    <Styles.MainContainer>
      <Styles.Container
        flex={0.1}
        justify-content="center"
        align-items="center">
        <Styles.Text font-size="24px">Tabela de valores</Styles.Text>
      </Styles.Container>
      <Styles.Container flex={1} justify-content="center" align-items="center">
        <Styles.Container
          flex={0.7}
          justify-content="space-around"
          align-items="center">
          <Styles.Container
            background="#2e2e2e"
            width="350px"
            height="80px"
            border-radius="15px"
            justify-content="space-around"
            align-items="center"
            flex-direction="row">
            <Styles.Text font-size="24px">Corte de barba</Styles.Text>
            <Styles.Text font-size="24px">
              <Styles.Text font-size="30px">R$</Styles.Text> 40.00
            </Styles.Text>
          </Styles.Container>

          <Styles.Container
            background="#2e2e2e"
            width="350px"
            height="80px"
            border-radius="15px"
            justify-content="space-around"
            align-items="center"
            flex-direction="row">
            <Styles.Text font-size="24px">Corte de cabelo</Styles.Text>
            <Styles.Text font-size="24px">
              <Styles.Text font-size="30px">R$</Styles.Text> 50.00
            </Styles.Text>
          </Styles.Container>

          <Styles.Container
            background="#2e2e2e"
            width="350px"
            height="80px"
            border-radius="15px"
            justify-content="space-around"
            align-items="center"
            flex-direction="row">
            <Styles.Text font-size="24px">
              Corte de cabelo {'\n'}e barba
            </Styles.Text>
            <Styles.Text font-size="24px">
              <Styles.Text font-size="30px">R$</Styles.Text> 60.00
            </Styles.Text>
          </Styles.Container>

          <Styles.Container
            background="#2e2e2e"
            width="350px"
            height="80px"
            border-radius="15px"
            justify-content="space-around"
            align-items="center"
            flex-direction="row">
            <Styles.Text font-size="24px">Cerveja</Styles.Text>
            <Styles.Text font-size="24px">
              <Styles.Text font-size="30px">R$</Styles.Text> 7.00
            </Styles.Text>
          </Styles.Container>
        </Styles.Container>
      </Styles.Container>
      <Navbar />
    </Styles.MainContainer>
  );
};

export default Price;
