import './styles';
import {
  BackButton,
  BookButton,
  CarColorDiv,
  CarDiv,
  CarHeader,
  CarImgDiv,
  Container,
  InfoDiv,
  Price,
} from './styles';
import  { ColorCarList, Header }  from '@components/index';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function SelectedCar() {
  const navigate = useNavigate();
  const selectedCarInfo = useSelector(
    (state: RootState) => state.stock.selectedCarInfo
  );

  return (
    <>
      <Header />
      <Container>
        <CarHeader>
          <img src={selectedCarInfo.logo} alt='logo' />
          <InfoDiv>
            <h1
              style={{ margin: 0 }}
            >{`${selectedCarInfo.brand} ${selectedCarInfo.name}`}</h1>
            <Price>${selectedCarInfo.price}/day</Price>
          </InfoDiv>
        </CarHeader>
        <CarDiv>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <BackButton
              onClick={() => {
                navigate('/');
              }}
            >
              <BsArrowLeft
                style={{ marginRight: 9, fontSize: 20, color: '#313136' }}
              />
              Back to catalog
            </BackButton>
          </div>
          <CarImgDiv>
            <img
              src={
                selectedCarInfo.colors[
                  Math.round(selectedCarInfo.colors.length / 2 - 1)
                ].image
              }
              alt='carro'
            />
            <div>
              <BookButton>
                Book now
                <BsArrowRight
                  style={{ marginLeft: 9, fontSize: 20, color: 'white' }}
                />
              </BookButton>
            </div>
          </CarImgDiv>
          <CarColorDiv>
            <div>
              <h1>
                {
                  selectedCarInfo.colors[
                    Math.round(selectedCarInfo.colors.length / 2 - 1)
                  ].id
                }
              </h1>
              <h3>
                {
                  selectedCarInfo.colors[
                    Math.round(selectedCarInfo.colors.length / 2 - 1)
                  ].color
                }
              </h3>
            </div>
          </CarColorDiv>
        </CarDiv>
        <ColorCarList />
      </Container>
    </>
  );
}

export default SelectedCar;
