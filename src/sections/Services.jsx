import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center sm:items-center flex-wrap gap-9 ">
      {services.map((service) => (
        <div key={service.label}>
          <div>
            <ServiceCard serviceProp={service} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
