import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, Feature, FeatureGrid, HairlineList, LinkAction, PageIntro, Prose, Section, Split } from "@/components/page/section";
import { auditMailto, proposalMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "What we build",
  description:
    "Websites, web applications, and company profiles. What each engagement covers, from information architecture and interface design to development, CMS, and launch.",
};

export default function WhatWeBuild() {
  return (
    <>
      <PageIntro
        title="What we build"
        description="Three kinds of project. Each one starts from what the business needs the product to do, and each one ends with something working."
      >
        <LinkAction href={auditMailto} primary>Request a website audit</LinkAction>
      </PageIntro>

      <Section id="websites" title="Websites">
        <Split>
          <Prose>
            <h3>Corporate websites, product websites, and campaign sites designed around clear business actions.</h3>
            <p>
              A website project is a communication problem before it is a design problem. We work out what a buyer needs to understand,
              in what order, and where the next step belongs. Then we build it.
            </p>
            <HairlineList
              items={[
                "Information architecture: what exists, how it groups, and how people move through it",
                "Content structure and writing support, so pages say something specific",
                "Interface design and prototypes, reviewed before anything is built",
                "Front-end and back-end development, including a CMS your team can use",
                "Analytics and the events worth tracking, agreed before launch",
                "Launch, redirects, and handover",
              ]}
            />
          </Prose>
          <Figure name="terrain" label="A field of pillars on a plinth, rising around the pointer" caption="Structure first. A site holds together because the pieces have a shape, not because they look alike." intensity={0.55} />
        </Split>
      </Section>

      <Section id="applications" title="Web applications">
        <Split>
          <Prose>
            <h3>Custom tools, dashboards, portals, and workflow applications built around a specific operational need.</h3>
            <p>
              An application project starts with the work people already do: the steps, the handoffs, the places where information is
              re-entered or lost. We define the smallest product that removes the real problem, then engineer it properly.
            </p>
            <HairlineList
              items={[
                "Product definition: the job to be done, the users, and what success looks like",
                "Interface design for the screens people will use every day",
                "Software engineering: data model, application logic, integrations, and permissions",
                "Reporting and exports where decisions depend on the numbers",
                "Deployment, environments, and monitoring",
                "Documentation and handover to your team, or ongoing support",
              ]}
            />
          </Prose>
          <Figure name="patch" label="A patch panel of ports with cables, the one under the pointer lifting while its neighbours lean away" caption="Systems meet in one place, and each connection is deliberate." intensity={0.55} />
        </Split>
      </Section>

      <Section id="profiles" title="Company profiles">
        <Split>
          <Prose>
            <h3>Printed and digital company profiles that make a business easier to understand, evaluate, and remember.</h3>
            <p>
              A company profile is read by someone deciding whether to spend time on you. It has to be structured, specific, and short
              enough to finish. The same material usually feeds the website, a proposal, and a procurement pack.
            </p>
            <HairlineList
              items={[
                "Information structure: what the reader needs to know, and in what order",
                "Writing and editing, including the parts only your team can supply",
                "Visual design that holds up in print and on screen",
                "Print-ready production: files, specifications, and checks with the printer",
                "A digital version that works on a phone",
              ]}
            />
          </Prose>
          <Figure name="riffle" label="A tray of cards where the card under the pointer stands up" caption="Pages in the right order. A profile is a sequence, not a collection." intensity={0.55} />
        </Split>
      </Section>

      <Section
        id="included"
        title="What every project includes"
        lede="Whatever the deliverable, these are part of the work rather than extras."
      >
        <FeatureGrid columns={4}>
          <Feature title="Defined scope">Deliverables, responsibilities, review points, and timelines agreed before production begins.</Feature>
          <Feature title="One accountable lead">A clear point of responsibility from the first meeting to launch.</Feature>
          <Feature title="Regular reviews">Stakeholders review the work at defined stages instead of discovering decisions at the end.</Feature>
          <Feature title="Quality assurance">Functionality, responsiveness, content, browsers, and performance checked before launch.</Feature>
          <Feature title="Handover">Source files, code, credentials, assets, and documentation handed over as agreed.</Feature>
          <Feature title="Post-launch support">Support defined before launch, so both teams know what happens after release.</Feature>
          <Feature title="Accessibility">Semantics, keyboard use, contrast, and reduced motion treated as requirements, not polish.</Feature>
          <Feature title="Performance">Page weight, loading, and Core Web Vitals measured, because slow pages cost inquiries.</Feature>
        </FeatureGrid>
      </Section>

      <Section id="not-sure" title="Not sure which one you need?" width="read">
        <Prose>
          <p>
            Most projects start as a mixture. A corporate website often needs a quotation workflow. A company profile often needs a
            digital version that doubles as a landing page. Tell us the business problem and we will say which shape of project solves
            it, including when the answer is smaller than you expected.
          </p>
        </Prose>
        <CardGrid columns={2}>
          <Card title="If the problem is being understood">
            <CardBody>Start with a website. Structure and clarity come before features.</CardBody>
          </Card>
          <Card title="If the problem is repeated manual work">
            <CardBody>Start with an application. The workflow defines the product, not the other way round.</CardBody>
          </Card>
        </CardGrid>
        <LinkAction href={proposalMailto} primary>Request a proposal</LinkAction>
      </Section>

      <CtaSection
        variant="centered"
        title="Tell us what the business needs the product to do"
        description="We will come back with the shape of the project, what it takes, and whether we are the right studio for it."
        primaryAction={{ label: "Request a proposal", href: proposalMailto }}
        secondaryAction={{ label: "Request a website audit", href: auditMailto }}
        faces={[]}
      />
    </>
  );
}
