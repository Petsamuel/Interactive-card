import bgCardFront from "../assets/bg-card-front.png";
import bgCardBack from "../assets/bg-card-back.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FrontCard = ({ holdername, number, month, year }: any) => {
  const AddSpaces = () => {
    let spacedString = "";

    try {
      for (let i = 0; i < number.length; i += 4) {
        if (i > 0) {
          spacedString += " ";
        }
        spacedString += number.slice(i, i + 4);
      }
    } catch (error) {
      console.log(error);
    }
    return spacedString;
  };
  return (
    <div className=" text-white w-full relative lg:ml-[-10rem] ml-[-2.8rem] lg:mt-0 md:mt-[-7.6rem] mt-[-7rem] z-20">
      <img src={bgCardFront} alt="front" className=" relative" />
      <div className="absolute top-0 flex-col flex h-full w-full lg:p-[2rem] p-[1rem] gap-y-[3.5rem]">
        {/* val */}
        {/* circle */}
        <div className="flex gap-3 items-center justify-items-start ">
          <div className="rounded-full w-3 h-full bg-white p-[1.5rem]"></div>
          <div className="rounded-full w-3 h-3 ring-1 ring-white p-[0.5rem]"></div>
        </div>
        {/* card number */}
        <div className="">
          <div className="lg:text-2xl text-lg">
            {number
              ? AddSpaces()
              : // number
                "2233 2323 232e 2332"}
          </div>
          <div className="flex justify-between py-2 uppercase">
            <div>{holdername || "Samuel Peters"}</div>
            <div>
              {month || "09"}/{year || "00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BackCard = ({ cvc }: any) => {
  return (
    <div className="relative ">
      <img src={bgCardBack} alt="back" className=" relative shadow-2xl rounded-lg " />
      <div className="absolute top-0 flex-col flex h-full w-full p-[2em] ">
        <div className="absolute  lg:top-[6.5rem] top-[5.5rem] end-12">
          {cvc ? cvc : "000"}
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ holdername, number, month, year, cvc }: any) => {
  return (
    <div className="lg:mt-[5rem] mt-[3rem] md:mt-[10rem] relative flex lg:flex-col flex-col-reverse gap-8 space-grotesk mx-8  ">
      <FrontCard
        holdername={holdername}
        number={number}
        month={month}
        year={year}
      />

      <div className="text-white ">
        <BackCard cvc={cvc} />
      </div>
    </div>
  );
};

export default Card;
