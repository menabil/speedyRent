import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import AbPage from "/src/assets/about.png";

const About = () => {
  return (
    <div className="mt-100 mb-75">
      <Container>
        <Flex className={"items-end gap-x-25 mb-[50px]"}>
          <div className="">
            <p className="text-[#454545] text-2xl font-semibold">
              About Speedy
            </p>
            <h3 className="text-[#000000] text-5xl w-[614px] pt-5 pb-[168px] font-semibold">
              Discover the Difference with Our Car Rentals
            </h3>
            <p className="text-[#454545] text-[16px] w-[556px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem
              pellentesque suscipit sit vel. Id sem elementum adipiscing sed
              pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget
              in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus
              elementum mauris faucibus felis eleifend placerat.
            </p>
          </div>
          <div className="">
            <p className="text-[#454545] text-[16px] w-[882px] pb-20">
              Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem
              pellentesque suscipit sit vel. Id sem elementum adipiscing sed
              pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget
              in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus
              elementum mauris faucibus felis eleifend placerat. Quam sed fusce
              id molestie amet quis tortor porta lorem. Sed commodo et in congue
              at in amet vivamus iaculis. Amet in duis eu in non nunc adipiscing
              egestas. Ultricies morbi at ut nec luctus. Blandit convallis a
              blandit eget sagittis. Amet varius suspendisse odio molestie.
              Ullamcorper laoreet dictum semper augue et dui vestibulum
              imperdiet cum. Laoreet in scelerisque nulla in vulputate malesuada
              dictumst vitae diam. Volutpat sed arcu urna sem eu ornare et
              facilisis sed.
            </p>
            <p className="text-[#454545] text-[16px] w-[882px]">
              Egestas molestie dictum fringilla nulla in et. Rhoncus donec nunc
              sed congue egestas tellus. Consequat ultrices tincidunt tincidunt
              convallis libero gravida. Etiam magnis faucibus tincidunt risus
              nisi. Montes amet sit suspendisse venenatis adipiscing interdum
              nunc. At pulvinar adipiscing maecenas bibendum adipiscing rutrum
              nullam. Neque sit proin hac nulla nullam massa condimentum
              tristique risus. Feugiat faucibus sollicitudin commodo nunc. In
              condimentum non ut at odio diam in.
            </p>
          </div>
        </Flex>
        <Image imgSrc={AbPage} className={"w-full"} />
      </Container>
    </div>
  );
};

export default About;
