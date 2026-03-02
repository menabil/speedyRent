import Container from "../Container";

const Review = () => {
  return (
    <div className="bg-[url(/src/assets/review.png)] bg-right bg-no-repeat">
      <Container>
        <h3 className="text-5xl text-[#181818] font-semibold w-[660px] leading-[150%]">
          See Why Speedy is the Top Choice for Car Rentals
        </h3>
        <p className="pt-7.5 pb-12.5 text-[#454545] text-[16px] w-[594px]">
          Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
          molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus
          sagittis egestas blandit eget.
        </p>
        <h5 className="text-[#181818] text-2xl italic leading-[180%] w-[674px]">
          "I recently rented a car from Speedy and I was blown away by the level
          of service I received. The booking process was quick and easy, and the
          staff were friendly and helpful when I arrived to pick up my rental
          car”
        </h5>
        <h6 className="pt-7.5 pb-1.5 text-[32px] text-[#181818] font-semibold">
          James Andrew
        </h6>
        <p className="text-[#454545] text-[16px] font-semibold">Customer</p>
      </Container>
    </div>
  );
};

export default Review;
