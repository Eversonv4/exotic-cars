import { createSlice } from '@reduxjs/toolkit';
import { CarColorAction, IInitialState, SelectedCarInfoAction } from './interface';

const stock = createSlice({
  name: 'stock',

  initialState: {
    selectedCarInfo: {},
  } as IInitialState,
  reducers: {
    setSelectedCar(state, action: SelectedCarInfoAction) {
      state.selectedCarInfo = action.payload;
    },
    setCarColor(state, action: CarColorAction) {
      let newArr = state.selectedCarInfo.colors;
      newArr.forEach((color) => {
        if (color.id === action.payload) {
          let first;
          let middle;
          let last;

          switch (color.id) {
            case '01':
              middle = color;
              newArr.forEach((el) => {
                if (el.id === '02') {
                  last = el;
                } else if (el.id === '03') {
                  first = el;
                }
              });
              break;
            case '02':
              middle = color;
              newArr.forEach((el) => {
                if (el.id === '01') {
                  first = el;
                } else if (el.id === '03') {
                  last = el;
                }
              });
              break;
            case '03':
              middle = color;
              newArr.forEach((el) => {
                if (el.id === '02') {
                  first = el;
                } else if (el.id === '01') {
                  last = el;
                }
              });
              break;

            default:
              break;
          }

          newArr[0] = first;
          newArr[1] = middle;
          newArr[2] = last;
        }
      });

      state.selectedCarInfo.colors = newArr;
    },
  },
});

export const { setSelectedCar, setCarColor } = stock.actions;

export default stock.reducer;
