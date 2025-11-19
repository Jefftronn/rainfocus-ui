import MainHeader from "./components/MainHeader";
import SetupGuide from "./components/SetupGuide";
import ModuleHeader from "./components/ModuleHeader";
import ModuleList from "./components/ModuleList";

export default function Page() {
  return (
    <div className="dashboard-container">
      <MainHeader />
      <SetupGuide />
      <ModuleList />
    </div>
  );
}