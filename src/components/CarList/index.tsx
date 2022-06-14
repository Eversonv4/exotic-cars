import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CarsType } from './interface';
import { setSelectedCar } from 'store/Stock.store';
import CarCard from '../CarCard';
import { group } from '../../assets';
import { Container, ScrollButton } from './styles';

function CarList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cars, setCars] = useState<CarsType>();

  useEffect(() => {
    fetch('./cars.json')
      .then((res) => res.json())
      .then((res) => setCars(res))
      .catch((error) => console.log(error));
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
