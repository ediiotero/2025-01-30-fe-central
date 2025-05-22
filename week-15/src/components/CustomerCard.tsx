import React from "react";
import Card from "react-bootstrap/Card";

interface CustomerCardProps {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
  color: string;
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
  name,
  email,
  phone,
  street,
  city,
  zip,
  color,
}) => {
  return (
    <Card className="my-3">
      <Card.Body className="text-center">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-box" style={{backgroundColor: color}}></Card.Text>
        <Card.Text>email: {email}</Card.Text>
        <Card.Text>phone: {phone}</Card.Text>
        <Card.Text>address: {street} {city} {zip}</Card.Text>
      </Card.Body>
    </Card>
  );
};
