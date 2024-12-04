import Hero from "./components/Hero";
import Card from "./components/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";
import { Success } from "./components/Success";

function App() {
  const FormField = () => {
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors, isSubmitSuccessful },
    } = useForm();

    const [cardDetails, setcardDetails] = useState({
      cardholder: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitFunc = (data: any) => {
      console.log(data);
      console.log(errors);
      setcardDetails(data);
    };

    return (
      <div className="">
        <div className="absolute lg:left-[15rem] z-10 top-0">
          <Card
            holdername={
              cardDetails.cardholder
                ? cardDetails.cardholder
                : watch("cardholder")
            }
            number={cardDetails.number ? cardDetails.number : watch("number")}
            month={cardDetails.month ? cardDetails.month : watch("month")}
            year={cardDetails.year ? cardDetails.year : watch("year")}
            cvc={cardDetails.cvc ? cardDetails.cvc : watch("cvc")}
          />
        </div>
        <form
          className="lg:pt-[8rem] pt-[5rem]"
          onSubmit={handleSubmit((data) => {
            handleSubmitFunc(data);
          })}
        >
          {!isSubmitSuccessful ? (
            <div className="flex flex-col gap-3 lg:w-[400px] z-50 ">
              <section className="flex flex-col uppercase gap-y-1 my-2">
                <label htmlFor="cardholder" className="space-grotesk text-sm">
                  cardholder name
                </label>
                <input
                  maxLength={24}
                  type="text"
                  placeholder="e.g Peter Samuel"
                  className={` ${
                    errors.cardholder &&
                    "border-2 border-[--RedError] py-[0.8rem] rounded-lg px-4"
                  } py-[0.5rem] rounded-md px-4 border-2  border-[--LightGrayishViolet] outline-[--VeryDarkViolet]`}
                  {...register("cardholder", {
                    required: "Cardholder name cannot be empty",
                    maxLength: 24,
                  })}
                />
                {errors.cardholder && (
                  <span className="text-xs text-[--RedError] normal-case">
                    {typeof errors.cardholder?.message === "string" &&
                      errors.cardholder?.message}
                  </span>
                )}
                {/* card number */}

                <label htmlFor="number" className="text-sm space-grotesk pt-4">
                  card number
                </label>
                <input
                  type="text"
                  id=""
                  placeholder="e.g 1234 5678 9123 0000"
                  className={`py-[0.5rem] rounded-lg px-4 border-2 border-[--LightGrayishViolet] outline-[--VeryDarkViolet] ${
                    errors.number && "border-2 border-[--RedError]"
                  }`}
                  maxLength={16}
                  {...register("number", {
                    required: "Cardholder number cannot be empty",
                    minLength: {
                      value: 16,
                      message: "Not complete",
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: "Wrong format numbers only",
                    },
                  })}
                />
                {errors.number && (
                  <span className=" text-xs text-[--RedError] normal-case">
                    {typeof errors.number?.message === "string" &&
                      errors.number?.message}
                  </span>
                )}
              </section>
              <section className="flex  space-x-4 ">
                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="month"
                      className="flex flex-col text-sm uppercase"
                    >
                      {" "}
                      exp.date{" "}
                    </label>

                    <input
                      type="text"
                      placeholder="MM"
                      className={`py-[0.5rem] rounded-md px-2 w-[5rem] border-2 border-[--LightGrayishViolet] ${
                        errors.month && "border-2 border-[--RedError]"
                      }`}
                      {...register("month", {
                        required: " Can't be Blank",
                        pattern: {
                          value: /[0-9]/,
                          message: "Numbers only",
                        },
                      })}
                      maxLength={2}
                    />
                    {errors.month && (
                      <span className="error text-xs lowercase text-[--RedError]">
                        {typeof errors.month?.message === "string" &&
                          errors.month?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="year"
                      className="flex flex-col text-sm uppercase "
                    >
                      (MM/YY)
                    </label>
                    <input
                      type="string"
                      className={`py-[0.5rem] rounded-lg px-2 w-[5rem] border-2 border-[--LightGrayishViolet] ${
                        errors.year && "border-2 border-[--RedError]"
                      }`}
                      placeholder="YY"
                      {...register("year", {
                        required: " Can't be Blank",
                        pattern: {
                          value: /[0-9]/,
                          message: "Numbers only",
                        },
                      })}
                      maxLength={2}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="flex flex-col text-sm uppercase"
                  >
                    cvc
                  </label>
                  <input
                    maxLength={3}
                    type="text"
                    className={`rounded-lg px-4 py-[0.5rem] border-2 border-[--LightGrayishViolet] ${
                      errors.cvc && "border-2 border-[--RedError]"
                    }`}
                    placeholder="e.g 123"
                    {...register("cvc", {
                      required: " Can't be Blank",
                      pattern: {
                        value: /[0-9]/,
                        message: "Numbers only",
                      },
                    })}
                  />
                  {errors.cvc && (
                    <span className="error text-xs lowercase text-[--RedError]">
                      {typeof errors.cvc?.message === "string" &&
                        errors.cvc?.message}
                    </span>
                  )}
                </div>
              </section>
            </div>
          ) : (
            <Success />
          )}
          <section>
            <div className="flex flex-col justify-center mt-4">
              <input
                type="submit"
                value={isSubmitSuccessful ? "Continue" : "Confirm"}
                className="text-white bg-[--VeryDarkViolet] py-[1rem] cursor-pointer rounded-md space-grotesk"
                onClick={() => isSubmitSuccessful && reset()}
              />
            </div>
          </section>
        </form>
      </div>
    );
  };

  return (
    <main className="">
      <div className="flex lg:flex-row flex-col justify-center lg:justify-start lg:items-start items-center lg:space-y-10 lg:space-x-[450px] relative ">
        <div>
          <Hero classes="h-dvh" />
        </div>

        <div className="mx-8 lg:pt-8 ">
          <FormField />{" "}
        </div>
        {/* forms */}
      </div>
    </main>
  );
}

export default App;
