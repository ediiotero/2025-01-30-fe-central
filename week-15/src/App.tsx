import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import { SideBar } from "./components/Sidebar";
import PageFooter from "./components/PageFooter";
import { CustomerCard } from "./components/CustomerCard";
import { fetchUsers } from "./utils/api";
import type { User } from "./models/Users";
import Button from 'react-bootstrap/Button';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [color, setColor] = useState('green')

  const handleColorChange = (color: string) => {
    setColor(color)
  }

  useEffect(() => {
    fetchUsers()
      .then((userData) => setUsers(userData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <NavBar />
      <main className="container main-content">
        <div className="row">
          <div className="col-md-3 mt-4">
            <SideBar />
          </div>
          <div className="col-md-9">
            <h2 className="text-center my-3">Customer List</h2>
            <div className="text-center mb-3">
              <Button variant="primary" className="mx-2" onClick={() => handleColorChange('blue')}>Blue</Button>
              <Button variant="success" className="mx-2" onClick={() => handleColorChange('green')}>Green</Button>
              <Button variant="danger" className="mx-2" onClick={() => handleColorChange('red')}>Red</Button>
            </div>
            {users.map((user) => (
              <CustomerCard
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                street={user.address.street}
                city={user.address.city}
                zip={user.address.zipcode}
                color={color}
              />
            ))}
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}

export default App;
