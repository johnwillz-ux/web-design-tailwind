import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10'>

      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Update </span>& Newsletter
      </h3>


      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full">

        <input type="text" placeholder="subscribe@nike.com" className="input" />

        <div>
          <Button label="Sign Up" iconURL={arrowRight}/>
        </div>
      </div>



    </section>
  );
};

export default Subscribe;
