import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import PageFooter from './components/PageFooter';
import SideBar from './components/SideBar';
import CustomerCard from './components/CustomerCard';
import { customerData } from './assets/customerData';

function App() {

  return (
    <>
      <NavBar />
      <main className='container'>
        <div className='row'>
          <div className='col-md-3 mt-4'>
             <SideBar />
          </div>
          <div className='col-md-9'>
            <h2 className='text-center my-3'>Customer List</h2>
            {customerData.map((customer, index) => (
            <CustomerCard
              key={index}
              name={customer.name}
              email={customer.email}
              phone={customer.phone}
              address={customer.address}
              city={customer.city}
              state={customer.state}
              zip={customer.zip}
            />
          ))}
          </div>
        </div>

      </main>
      <PageFooter />
    </>
  )
}

export default App
