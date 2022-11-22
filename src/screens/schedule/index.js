import * as Styles from './style';
import {Navbar} from '../../components/navbar';

const Schedule = () => {
  return (
    <Styles.MainContainer>
      <Styles.Container
        align-items="center"
        justify-content="center"
        flex={0.1}>
        <Styles.Text font-size="24px">Horários disponiveis</Styles.Text>
      </Styles.Container>
      <Styles.SafeArea flex={1}>
        <Styles.ScrollView width="100%" height="100%">
          <Styles.Container justify-content="space-around" align-items="center">
            <Styles.Button>
              <Styles.Container
                background="#2e2e2e"
                width="300px"
                height="60px"
                flex-direction="row">
                <Styles.Container
                  flex-direction="column"
                  justify-content="space-around"
                  align-items="center"
                  width="110px"
                  height="100%">
                  <Styles.Text font-size="15px">Data: 22/11/2022</Styles.Text>
                  <Styles.Text>Horario: 14:30 </Styles.Text>
                </Styles.Container>
                <Styles.Container
                  background="#236E3E"
                  width="64%"
                  justify-content="center"
                  align-items="center">
                  <Styles.Text>Disponivel</Styles.Text>
                </Styles.Container>
              </Styles.Container>
            </Styles.Button>

            <Styles.Button>
              <Styles.Container
                background="#2e2e2e"
                width="300px"
                height="60px"
                flex-direction="row">
                <Styles.Container
                  flex-direction="column"
                  justify-content="space-around"
                  align-items="center"
                  width="110px"
                  height="100%">
                  <Styles.Text font-size="15px">Data: 22/11/2022</Styles.Text>
                  <Styles.Text>Horario: 15:30 </Styles.Text>
                </Styles.Container>
                <Styles.Container
                  background="#8B1D00"
                  width="65%"
                  justify-content="center"
                  align-items="center">
                  <Styles.Text>Indisponivel</Styles.Text>
                </Styles.Container>
              </Styles.Container>
            </Styles.Button>

            <Styles.Button>
              <Styles.Container
                background="#2e2e2e"
                width="300px"
                height="60px"
                flex-direction="row">
                <Styles.Container
                  flex-direction="column"
                  justify-content="space-around"
                  align-items="center"
                  width="110px"
                  height="100%">
                  <Styles.Text font-size="15px">Data: 22/11/2022</Styles.Text>
                  <Styles.Text>Horario: 16:00 </Styles.Text>
                </Styles.Container>
                <Styles.Container
                  background="#236E3E"
                  width="65%"
                  justify-content="center"
                  align-items="center">
                  <Styles.Text>Disponivel</Styles.Text>
                </Styles.Container>
              </Styles.Container>
            </Styles.Button>

            <Styles.Button>
              <Styles.Container
                background="#2e2e2e"
                width="300px"
                height="60px"
                flex-direction="row">
                <Styles.Container
                  flex-direction="column"
                  justify-content="space-around"
                  align-items="center"
                  width="110px"
                  height="100%">
                  <Styles.Text font-size="15px">Data: 22/11/2022</Styles.Text>
                  <Styles.Text>Horario: 17:30 </Styles.Text>
                </Styles.Container>
                <Styles.Container
                  background="#8B1D00"
                  width="65%"
                  justify-content="center"
                  align-items="center">
                  <Styles.Text>Indisponivel</Styles.Text>
                </Styles.Container>
              </Styles.Container>
            </Styles.Button>
          </Styles.Container>
        </Styles.ScrollView>
      </Styles.SafeArea>

      <Navbar />
    </Styles.MainContainer>
  );
};

export default Schedule;
