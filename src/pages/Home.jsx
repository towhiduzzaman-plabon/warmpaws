import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/services.json').then(r => r.json()).then(setServices)
  }, [])

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="my-6">
        <Hero />
      </div>

      <section className="my-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Popular Winter Care Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0,6).map(s => <ServiceCard key={s.serviceId} service={s} />)}
        </div>
      </section>

      <section className="my-14 grid md:grid-cols-2 gap-10 items-center">
        <img data-aos="fade-right" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000" className="rounded-2xl shadow-md" />
        <div data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-3">Winter Care Tips for Pets</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use paw balm and check for ice/salt after walks.</li>
            <li>Keep bedding warm and dry; avoid drafts.</li>
            <li>Choose insulated coats for short-haired breeds.</li>
            <li>Hydrate! Winter air is dry—fresh water always.</li>
            <li>Groom regularly to maintain insulating fur.</li>
          </ul>
        </div>
      </section>

      <section className="my-14">
        <h3 className="text-2xl font-semibold mb-6">Meet Our Expert Vets</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {name:'Dr. Maya Rahman', role:'Canine Specialist', img:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'},
            {name:'Dr. Imran Chowdhury', role:'Feline Care', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800'},
            {name:'Dr. Sara Hossain', role:'Dermatology', img:'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800'},
            {name:'Dr. Nadir Khan', role:'Nutrition', img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800'},
          ].map((v,i)=>(
            <div key={i} className="card bg-base-100 shadow-sm" data-aos="fade-up">
              <figure><img src={v.img} className="h-48 w-full object-cover" /></figure>
              <div className="card-body">
                <h4 className="card-title">{v.name}</h4>
                <p>{v.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-14">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold">Emergency Winter Helpline</h3>
          <p className="opacity-80 mt-2">24/7 guidance for hypothermia, frostbite risks, and safe transport. Save this number: <span className="font-semibold">+880 1999-PAWS</span></p>
        </div>
      </section>
    </div>
  )
}

export default Home
//bhvffgshfshgsdhfjhsdgfjsdfjhdsgf