import complete from "../assets/icon-complete.svg";
export const Success = () => {
  return (
    <div>
      <div className="text-center flex flex-col gap-6 justify-center items-center space-grotesk ">
        <img src={complete} alt="complete" className="" />

        <p className="text-[--] text-2xl font-bold uppercase">Thank you</p>
        <p className="text-[--] pb-7">We've have added your card details</p>
      </div>
    </div>
  );
};
