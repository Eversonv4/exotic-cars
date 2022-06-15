import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CarsType } from './interface';
import { setSelectedCar } from '@store/Stock.store';
import CarCard from '../CarCard';
import { group } from '@assets/index';
import { Container, ScrollButton } from './styles';
import api from '@shared/services/api';

function CarList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cars, setCars] = useState<CarsType>();

   useEffect(() => {
      async function fetchData() {
         const response = await api.get('/cars.json')
            .then((res) => res.data)
            .catch((error) => console.log(error));
            setCars(response)
      }
      fetchData();
   }, []);

  return (
    <Container>
      {cars?.data.map((car) => {
        return (
          <CarCard
            key={car.id}
            onClick={() => {
              dispatch(
                setSelectedCar({
                  brand: car.brand,
                  name: car.name,
                  price: car.price,
                  image: car.image,
                  id: car.id,
                  logo: car.logo,
                  colors: car.colors,
                })
              );
              navigate('/selected');
            }}
            brand={car.brand}
            name={car.name}
            price={car.price}
            image={car.image}
            id={car.id}
            last={car.id === cars.data.length}
          />
        );
      })}
      <ScrollButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        src={group}
        alt='scroll up'
        width={100}
      />
    </Container>
  );
}

export default CarList;
