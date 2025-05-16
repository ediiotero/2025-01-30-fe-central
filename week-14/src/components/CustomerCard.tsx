import React from 'react'

interface CustomerCardProps {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({name, email, phone, address, city, state, zip}) => {
  return (
    <div className='customer-card'>
        <div className='text-center'>
            <p className='mb-0'><strong>{name}</strong></p>
            <p className='mb-0'>email: {email}</p>
            <p className='mb-0'>phone: {phone}</p>
            <p className='mb-0'>address: {address} {city} {state} {zip}</p>
        </div>
    </div>
  )
}

export default CustomerCard