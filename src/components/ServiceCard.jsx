import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  const { serviceId, serviceName, rating, price, image } = service
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition" data-aos="fade-up">
      <figure><img src={image} alt={serviceName} className="h-48 w-full object-cover" /></figure>
      <div className="card-body">
        <h3 className="card-title">{serviceName}</h3>
        <p className="flex items-center gap-3"><span className="badge badge-warning">{rating}★</span><span className="font-semibold">${price}</span></p>
        <div className="card-actions justify-end">
          <Link to={`/services/${serviceId}`} className="btn btn-primary btn-sm">View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
