import complete from "../assets/icon-complete.svg";
export const Success = () => {
  return (
    <div className="flex flex-col gap-3 w-[400px]  z-50">
      <div className="text-center flex flex-col gap-6 justify-center items-center space-grotesk ">
        <img src={complete} alt="complete" className="" />

        <h1 className="text-[--] text-2xl font-bold uppercase">Thank you</h1>
        <h4 className="text-[--] pb-7">We've have added your card details</h4>
      </div>
    </div>
  );
};
