import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="w-full flex max-lg:flex-col justify-between gap-10 max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin mb-10  text-4xl font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality </span>
          Shoes
        </h1>
        <p className="info-text mb-3 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text mb-9 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          className="object-contain "
          width={570}
          height={522}
          alt=""
        />
      </div>
    </section>
  );
};

export default SuperQuality;
