import { Container } from './styles';
import Header from '../../components/Header';
import CarList from '../../components/CarList';


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