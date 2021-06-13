import logo from './logo.svg';
import './App.css';
import ChartCustomized from './components/ChartCustomized/ChartCustomized'
import CheckupPage from './pages/Checkup/Checkup.tsx'
import Company, { StatusCompany, TypeCompany } from './types/types'

function App() {
  // const company = {id: 325, dateFrom: new Date(2011,5,1), dateTo: new Date(2021,6,1), type: TypeCompany.cycle, status: StatusCompany.working}
  // const company = {
  //   id: 325, 
  //   dateFrom: new Date(2011,5,1), 
  //   dateTo: new Date(2021,6,1), 
  //   type: TypeCompany.cycle, 
  //   status: StatusCompany.stopped,
  //   countOutputs: 5,
  //   lengthBlock: 7,
  //   days: 'Пн, Вт, Ср, Чт, Пт, Сб, Вс',
  //   time: 'Круглосуточно'
  // }
  const company = {
    id: 325, 
    dateFrom: new Date(2011,5,1), 
    dateTo: new Date(2021,6,1), 
    type: TypeCompany.cycle, 
    status: StatusCompany.working,
    countOutputs: 5,
    lengthBlock: 7,
    days: 'Пн, Вт, Ср, Чт, Пт, Сб, Вс',
    time: 'Круглосуточно'
  }

  return (
    <div className="App">
      <CheckupPage company={company}  />
      <ChartCustomized/>
      
    </div>
  );
}

export default App;
