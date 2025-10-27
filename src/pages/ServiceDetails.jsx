import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const ServiceDetails = () => {
  const { id } = useParams()
  const [service, setService] = useState(null)

  useEffect(() => {
    fetch('/services.json').then(r => r.json()).then(list => {
      const found = list.find(s => String(s.serviceId) === String(id))
      setService(found)
    })
  }, [id])

  const handleBook = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    toast.success(`Booked for ${name}! Confirmation sent to ${email}`)
    e.currentTarget.reset()
  }

  if (!service) return <div className="container mx-auto px-4 max-w-3xl my-10"><span className="loading loading-spinner loading-lg"></span></div>

  return (
    <div className="container mx-auto px-4 max-w-3xl my-10">
      <div className="card bg-base-100 shadow-sm">
        <figure><img src={service.image} alt={service.serviceName} className="w-full h-72 object-cover" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.serviceName}</h2>
          <p className="opacity-80">{service.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div><span className="font-semibold">Provider:</span> {service.providerName}</div>
            <div><span className="font-semibold">Email:</span> {service.providerEmail}</div>
            <div><span className="font-semibold">Category:</span> {service.category}</div>
            <div><span className="font-semibold">Price:</span> ${service.price}</div>
            <div><span className="font-semibold">Rating:</span> {service.rating}★</div>
            <div><span className="font-semibold">Slots:</span> {service.slotsAvailable}</div>
          </div>

          <div className="divider"></div>
          <h3 className="text-xl font-semibold">Book Service</h3>
          <form onSubmit={handleBook} className="grid md:grid-cols-2 gap-4 mt-2">
            <input required name="name" type="text" placeholder="Your name" className="input input-bordered w-full" />
            <input required name="email" type="email" placeholder="Your email" className="input input-bordered w-full" />
            <button className="btn btn-primary md:col-span-2">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
