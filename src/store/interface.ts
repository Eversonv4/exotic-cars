type carType = {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  logo: string;
  colors: any[];
};
 
interface SelectedCarInfoAction {
  payload: carType;
}
 
interface CarColorAction {
  payload: string | number;
}
 
interface IInitialState {
  selectedCarInfo: carType;
}
 
export type { IInitialState, SelectedCarInfoAction, CarColorAction };
 