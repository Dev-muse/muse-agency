import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro title="About us" header="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative and bespoke approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Rapidmuse was started by two friends who noticed that large agencies were charging clients double what an in-house team would
            cost without an personalisation to each project, just pumping out websites 
          </p>
           
        </div>
      </PageIntro>
      <Container className="mt-16">
        {/* <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList> */}
      </Container>
      {/* <Cultures />
      <ContactSection /> */}
    </>
  );
};

export default AboutPage;