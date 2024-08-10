import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
    id="special-offer"
    className="w-full flex max-lg:flex-col items-center max-xl:flex-col-reverse justify-between gap-10 max-container"
  >
   

    <div className="flex flex-1 justify-center items-center">
      <img
        src={offer}
        className="object-contain "
        width={773}
        height={687}
        alt=""
      />
    </div>


    <div className="flex flex-1 flex-col">
      <h1 className="font-palanquin mb-10  text-4xl font-bold lg:max-w-lg">
       <span className="text-coral-red">Special </span>
       Offer
      </h1>
      <p className="info-text mb-3 lg:max-w-lg">
        Ensuring premium comfort and style, our meticulously crafted footwear
        is designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance.
      </p>

      <p className="info-text mb-9 lg:max-w-lg">
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className="flex gap-3">
      <Button label="Shop now" iconURL={arrowRight} />

      <Button label="Learn more" />
      </div>
    </div>
  </section>
  )
}

export default SpecialOffer