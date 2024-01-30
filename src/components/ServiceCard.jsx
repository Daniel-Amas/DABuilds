import PropTypes  from "prop-types";

const ServiceCard = ({ label, subtext}) => {
    return (
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl px-10 rounded-[5px] py-16">
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
          <p className="mt-3 break-words text-lg leading-normal text-slate-gray font-montserrat">{subtext}</p>
      </div>
    )
  }

  // Add PropTypes for isSidebarOpen
ServiceCard.propTypes = {
    label: PropTypes.bool.isRequired,
    subtext: PropTypes.bool.isRequired,
  };
  
  export default ServiceCard