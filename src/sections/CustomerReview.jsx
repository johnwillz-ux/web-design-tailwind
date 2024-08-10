import { reviews } from "../constants";
import TestimonialCard from "../components/TestimonialCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-palanquin mb-5  text-4xl font-bold text-center">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h1>
        <p className="info-text mb-3 lg:max-w-lg text-center">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your.
        </p>
      </div>

      <div>
        {reviews.map((review) => (
          <div key={review.feedback}>
            <div>
              <TestimonialCard
                imageURL={review.imgURL}
                text={review.feedback}
                rate={review.rating}
                name={review.customerName}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
