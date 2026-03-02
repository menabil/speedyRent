import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import One from "/src/assets/blog.png";

const Blog = () => {
  return (
    <div className="my-[350px]">
      <Container>
        <h3 className="text-center w-[1090px] text-5xl font-semibold leading-[150%] text-[#181818] mx-auto mb-7.5">
          Stay Up-to-Date with the Latest Car Rental Trends and Tips
        </h3>
        <p className="w-[1090px] text-center text-[16px] leading-[180%] text-[#454545] mx-auto mb-25">
          Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
          molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus
          sagittis egestas blandit eget.
        </p>
        <Flex className={"gap-x-7.5"}>
          <div className="">
            <Image imgSrc={One} />
            <div className="mt-7.5 w-[510px]">
              <h4 className="text-[#181818] text-[32px] font-semibold leading-[150%]">
                How to Choose the Right Rental Car for Your Needs
              </h4>
              <p className="text-[#454545] text-[16px] leading-[180%] pt-7.5 pb-10">
                Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                amet molestie imperdiet quis enim varius. Vitae rutrum praesent
                a et cursus sagittis e.{" "}
              </p>
              <div className="bg-[#EA002D] cursor-pointer px-15 py-5 text-white w-[210px]">
                Read More
              </div>
            </div>
          </div>
          <div className="">
            <Image imgSrc={One} />
            <div className="mt-7.5 w-[510px]">
              <h4 className="text-[#181818] text-[32px] font-semibold leading-[150%]">
                10 Tips for Saving Money on Your Next Car Rental
              </h4>
              <p className="text-[#454545] text-[16px] leading-[180%] pt-7.5 pb-10">
                Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                amet molestie imperdiet quis enim varius. Vitae rutrum praesent
                a et cursus sagittis e.{" "}
              </p>
              <div className="bg-[#EA002D] cursor-pointer px-15 py-5 text-white w-[210px]">
                Read More
              </div>
            </div>
          </div>
          <div className="">
            <Image imgSrc={One} />
            <div className="mt-7.5 w-[510px]">
              <h4 className="text-[#181818] text-[32px] font-semibold leading-[150%]">
                5 Essential Items to Pack for Your Next Road Trip
              </h4>
              <p className="text-[#454545] text-[16px] leading-[180%] pt-7.5 pb-10">
                Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                amet molestie imperdiet quis enim varius. Vitae rutrum praesent
                a et cursus sagittis e.{" "}
              </p>
              <div className="bg-[#EA002D] cursor-pointer px-15 py-5 text-white w-[210px]">
                Read More
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Blog;
