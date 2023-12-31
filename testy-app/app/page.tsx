import { LandignPage } from "@/components/component/landign-page";
import { PageLinkSection } from "@/components/component/page-link-section";
import { AccordionQuestions } from "@/components/component/accordion-questions";
const Page = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="px-4">
      <LandignPage />
      <PageLinkSection />
      <AccordionQuestions />
    </div>
  );
};

export default Page;
