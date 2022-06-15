import { Container } from './styles';
import { Header, CarList } from '@components/index'


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