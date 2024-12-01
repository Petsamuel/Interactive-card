import bgMobile from "../assets/bg-main-mobile.png";
import bgDeskotp from "../assets/bg-main-desktop.png";

type Classes = {
  classes: string;
};

const Hero = ({ classes }: Classes) => {
  return (
    <div className="overflow-y-auto">
      <img
        src={bgDeskotp}
        alt="bg"
        className={`lg:block hidden md:block lg:w-[30dvw] ${classes}`}
      />
      <img src={bgMobile} alt="bg" className="lg:hidden md:hidden w-dvw" />
    </div>
  );
};

export default Hero;
