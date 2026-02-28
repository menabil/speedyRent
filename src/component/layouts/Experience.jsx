import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import One from "/src/assets/expOne.png";
import Two from "/src/assets/expTwo.png";
import Thr from "/src/assets/expThr.png";
import For from "/src/assets/expFor.png";
import Fiv from "/src/assets/expFiv.png";
import Six from "/src/assets/expSix.png";
import Mid from "/src/assets/expMid.png";

const Experience = () => {
  return (
    <div className="mt-12.5 mb-[350px]">
      <Container>
        <h3 className="text-center w-[1140px] text-5xl font-semibold leading-[150%] text-[#181818] mx-auto mb-7.5">
          Discover Our Exclusive Features and Add-Ons for a Perfect Rental
          Experience
        </h3>
        <p className="w-[928px] text-center text-[16px] leading-[180%] text-[#454545] mx-auto mb-25">
          Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
          molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus
          sagittis egestas blandit eget.
        </p>

        <Flex>
          <div className="">
            <div className="">
              <Image imgSrc={One} />
              <div className="w-[493px] mt-5 mr-5">
                <h6 className="text-[32px] text-[#181818] font-semibold pb-5">
                  Online Booking
                </h6>
                <p className="text-[16px] text-[#454545] leading-[180%]">
                  Providing an easy-to-use online booking system is essential
                  for modern car rental services.
                </p>
              </div>
            </div>
            <div className="my-[140px]">
              <Image imgSrc={Thr} />
              <div className="w-[493px] mt-[60px] mr-7.5">
                <h6 className="text-[32px] text-[#181818] font-semibold pb-5">
                  Multiple Payment
                </h6>
                <p className="text-[16px] text-[#454545] leading-[180%]">
                  Make sure to offer multiple payment options for customers,
                  such as credit cards, debit cards, and PayPal.
                </p>
              </div>
            </div>
            <div className="">
              <Image imgSrc={Fiv} />
              <div className="w-[493px] mt-5 mr-5">
                <h6 className="text-[32px] text-[#181818] font-semibold pb-5">
                  Flexible Rental Periods
                </h6>
                <p className="text-[16px] text-[#454545] leading-[180%]">
                  Offering flexible rental periods, such as hourly, daily,
                  weekly, and monthly rentals, is important for meeting the
                  needs of a wide range of customers.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-35">
            <Image imgSrc={Mid} />
          </div>
          <div className="">
            <div className="">
              <Image imgSrc={Two} />
              <div className="w-[493px] mt-5 ml-5 text-right">
                <h6 className="text-[32px] text-[#181818] font-semibold pb-5">
                  Comprehensive Insurance
                </h6>
                <p className="text-[16px] text-[#454545] leading-[180%] ">
                  Make sure to offer comprehensive insurance coverage to protect
                  your customers and their rental cars in case of accidents or
                  damage.
                </p>
              </div>
            </div>
            <div className="my-[140px] ml-5">
              <Image imgSrc={For} />
              <div className="w-[493px] mt-[60px] ml-7.5 text-right">
                <h6 className="text-[32px] text-[#181818] font-semibold pb-5">
                  24/7 Customer Support
                </h6>
                <p className="text-[16px] text-[#454545] leading-[180%]">
                  Providing 24/7 customer support, either through phone or
                  online chat, is important for helping customers.
                </p>
              </div>
            </div>
            <div className="">
              <Image imgSrc={Six} />
              <div className="w-[493px] mt-5 ml-5 text-right">
                <h6 className="text-[32px] text-[#181818] font-semibold pb-5">
                  GPS Navigation
                </h6>
                <p className="text-[16px] text-[#454545] leading-[180%]">
                  Providing GPS navigation systems as an optional feature can be
                  helpful for customers who are unfamiliar with the local area
                  and need directions to their destination.
                </p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Experience;
