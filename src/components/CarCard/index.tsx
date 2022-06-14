import {
   BookNow,
   CarBrand,
   CardBody,
   CardFooter,
   CardHeader,
   CarName,
   Container,
   DivCardFooter,
   DivDolar,
   Dolar,
   OptionsButton,
 } from './styles';
 import { FaEllipsisH } from 'react-icons/fa';
 import { CarCardProps } from './interface';
 
 function CarCard(props: CarCardProps) {
   return (
     <Container onClick={() => props.onClick()}>
       <CardHeader>
         <div>
           <CarBrand>{props.brand}</CarBrand>
           <CarName>{props.name}</CarName>
         </div>
         <div>
           <OptionsButton>
             <FaEllipsisH color='#C8C8CA' />
           </OptionsButton>
         </div>
       </CardHeader>
       <CardBody>
         <div>
           <img src={props.image} alt='car'></img>
         </div>
       </CardBody>
       <DivCardFooter>
         <div>
           <BookNow>Book Now</BookNow>
         </div>
         <CardFooter>
           <DivDolar>
             <Dolar>$</Dolar>
           </DivDolar>
           <div>
             <h1 style={{ display: 'inline' }}>{props.price}</h1>/day
           </div>
         </CardFooter>
       </DivCardFooter>
     </Container>
   );
 }
 
export default CarCard;
 