import ServiceCard from "../../components/ServiceCard"
import { services } from "../../constants"

const Services = () => {
  return (
    <section id="services" className="max-container flex items-center justify-center flex-col gap-9">
      <h2 className="text-4xl pb-10 font-palanquin font-medium">Our <span className="text-chestnut">Services</span></h2>
      <div className="w-full flex justify-center flex-wrap gap-9">
        {services.map((service)=>(
          <ServiceCard key={service.label} {...service}/>
        ))}
      </div>
    </section>
  )
}

export default Services