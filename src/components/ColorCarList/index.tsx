import { ArrowButton, Container, MainSquare, Square } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { setCarColor } from '@store/Stock.store';

function ColorCarList() {
  const dispatch = useDispatch();
  const selectedCarInfo = useSelector(
    (state: RootState) => state.stock.selectedCarInfo
  );

  function renderSquare() {
    return selectedCarInfo.colors.map((el) => {
      if (
        selectedCarInfo.colors.indexOf(el) ===
        Math.round(selectedCarInfo.colors.length / 2 - 1)
      ) {
        return (
          <div key={el.id}>
            <MainSquare>
              <img src={el.image} alt='car' />
            </MainSquare>
          </div>
        );
      } else {
        return (
          <div key={el.id}>
            <Square onClick={() => dispatch(setCarColor(el.id))}>
              <img src={el.image} alt='car' />
            </Square>
          </div>
        );
      }
    });
  }

  return (
    <Container>
      <div>
        <ArrowButton
          onClick={() => {
            dispatch(setCarColor(selectedCarInfo.colors[0].id));
          }}
        >
          <BsArrowLeft style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
      {renderSquare()}

      <div>
        <ArrowButton
          onClick={() => {
            dispatch(dispatch(setCarColor(selectedCarInfo.colors[2].id)));
          }}
        >
          <BsArrowRight style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
    </Container>
  );
}

export default ColorCarList;
