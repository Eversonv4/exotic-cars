import { Container } from './styles';
import { Header, CarList } from '../../components'


const Main = () => {
   return (
      <>
         <Header />
         <Container>
            <CarList />
         </Container>
      </>
   );
}

export default Main;