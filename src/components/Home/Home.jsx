import { MediUpdates } from "./MediUpdates";
import { Feedback } from "../Feedback/Feedback";
import { EMICalc } from "../EMICalc/EMICalc";
import { HeaderForComp } from "../Common/HeaderForComp";

export const Home = () => {
  return (
    <div>
      <HeaderForComp title="EMI Calculator" />
      <EMICalc />
      <HeaderForComp title="Feedback" />
      <Feedback />
      <HeaderForComp title="Medicare Updates" />
      <MediUpdates />
    </div>
  );
};
