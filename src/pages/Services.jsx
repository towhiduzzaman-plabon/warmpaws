import React, { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/services.json').then(r => r.json()).then(setServices)
  }, [])

  return (
    <div className="container mx-auto px-4 max-w-6xl my-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">All Winter Care Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => <ServiceCard key={s.serviceId} service={s} />)}
      </div>
    </div>
  )
}

export default Services
//jsfhshfishfisdjfksdhfsdufshdfishdfshd