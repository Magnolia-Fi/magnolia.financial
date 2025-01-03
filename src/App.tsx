import "./App.css";
import { UnderFoldHeading } from "./UnderFoldHeading";
import { TenetsSection } from "./TenetsSection";
import { ContactForm } from "./ContactForm";
import { SponsorsSection } from "./SponsorsSection";
import { TopHeadingSection } from "./TopHeadingSection";

function App() {
  return (
    <div className="w-[100vw]">
      <TopHeadingSection />

      <UnderFoldHeading />

      <TenetsSection />

      <SponsorsSection />

      <ContactForm />
    </div>
  );
}

export default App;
