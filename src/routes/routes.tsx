import { Routes as Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import SelectedCar from '../pages/SelectedCar';


const Routes = () => {
   return (
      <Switch>
         <Route path="/" element={<Main />} />
         <Route path="/selected" element={<SelectedCar />} />
      </Switch>
   );
}

export default Routes;