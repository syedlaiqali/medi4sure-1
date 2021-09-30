import { MediUpdates } from "./MediUpdates";
import { Feedback } from "../Feedback/Feedback";
import { EMICalc } from "../EMICalc/EMICalc";

export const Home = () => {
  return (
    <div>
      <EMICalc />
      <Feedback />
      <MediUpdates />
    </div>
  );
};
