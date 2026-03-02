import { FaChevronDown } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Service = () => {
  return (
    <div className="my-75 bg-[url(/src/assets/service.png)] bg-no-repeat h-165">
      <Container>
        <Flex className={"justify-between"}>
          <div className=""></div>
          <div className="">
            <h3 className="text-5xl text-[#181818] font-semibold w-153.5 leading-[150%] pb-12.5">
              Explore Our Wide Range of Car Rental Services
            </h3>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <Flex className={"gap-x-7.5 items-start"}>
                  <div className="bg-[#EA002D] mt-2 py-2.75 px-6 leading-[150%] text-white text-2xl font-semibold">
                    1
                  </div>
                  <div className={"w-171"}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={
                          "text-[#454545] aria-expanded:text-[#181818] [&>svg]:hidden text-4xl font-semibold hover:no-underline hover:cursor-pointer"
                        }
                      >
                        Car Rental
                        <div className="">
                          <FaChevronDown className="text-2xl  aria-expanded:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-[#454545] text-[16px]">
                        <p>
                          Make sure to provide clear and detailed information
                          about the types of vehicles you offer, rental rates,
                          rental periods, and any additional fees or
                          requirements.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Flex>

                <Flex className={"gap-x-7.5 py-7.5 items-start"}>
                  <div className="bg-[#EA002D] mt-2 py-2.75 px-6 leading-[150%] text-white text-2xl font-semibold">
                    2
                  </div>
                  <div className={"w-171"}>
                    <AccordionItem value="item-2">
                      <AccordionTrigger
                        className={
                          "text-[#454545] aria-expanded:text-[#181818] [&>svg]:hidden text-4xl font-semibold hover:no-underline hover:cursor-pointer"
                        }
                      >
                        Airport Transfers
                        <div className="">
                          <FaChevronDown className="text-2xl" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-[#454545] text-[16px]">
                        <p>
                          Make sure to provide clear and detailed information
                          about the types of vehicles you offer, rental rates,
                          rental periods, and any additional fees or
                          requirements.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Flex>

                <Flex className={"gap-x-7.5 pb-7.5 items-start"}>
                  <div className="bg-[#EA002D] mt-2 py-2.75 px-6 leading-[150%] text-white text-2xl font-semibold">
                    3
                  </div>
                  <div className={"w-171"}>
                    <AccordionItem value="item-3">
                      <AccordionTrigger
                        className={
                          "text-[#454545] aria-expanded:text-[#181818] text-4xl [&>svg]:hidden font-semibold hover:no-underline hover:cursor-pointer"
                        }
                      >
                        Car Maintenance and Repair
                        <div className="">
                          <FaChevronDown className="text-2xl" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-[#454545] text-[16px]">
                        <p>
                          To keep your rental cars in top condition, you'll need
                          to provide regular maintenance and repair services.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Flex>

                <Flex className={"gap-x-7.5 items-start"}>
                  <div className="bg-[#EA002D] py-2.75 mt-2 px-6 leading-[150%] text-white text-2xl font-semibold">
                    4
                  </div>
                  <div className={"w-171"}>
                    <AccordionItem value="item-4">
                      <AccordionTrigger
                        className={
                          "text-[#454545] aria-expanded:text-[#181818] text-4xl font-semibold hover:no-underline hover:cursor-pointer [&>svg]:hidden"
                        }
                      >
                        Roadside Assistance
                        <div className="">
                          <FaChevronDown className="text-2xl" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-[#454545] text-[16px]">
                        <p>
                          To keep your rental cars in top condition, you'll need
                          to provide regular maintenance and repair services.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Flex>
              </Accordion>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
