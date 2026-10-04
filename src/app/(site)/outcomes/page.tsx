import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, Feature, FeatureGrid, HairlineList, LinkAction, PageIntro, Prose, Section, Split, Statement } from "@/components/page/section";
import { auditMailto, discoveryMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "What the work needs to achieve",
  description:
    "Convert, communicate, operate. Three outcomes our work is measured against, and the questions we answer before deciding what to build.",
};

export default function Outcomes() {
  return (
    <>
      <PageIntro
        title="The deliverable changes. The goal stays clear"
        description="Our work usually needs to help a business do one or more of three things. We define the intended outcome before deciding what to build."
      >
        <LinkAction href={discoveryMailto} primary>Book a 30-minute discovery call</LinkAction>
      </PageIntro>

      <Section id="convert" title="Convert">
        <Split>
          <Prose>
            <h3>Turn attention into a business action.</h3>
            <p>
              Conversion is a path, not a button. A visitor who does not yet know which product fits, what it costs to run, or whether
              you serve their industry has nothing to convert on. We build the path first, then place the action where the visitor is
              already ready to take it.
            </p>
            <HairlineList
              items={[
                "Inquiry, with enough context to route it to the right person",
                "Request for quotation, including the fields sales actually needs",
                "Sales contact, with a named route rather than a general form",
                "Meeting and discovery booking",
                "Application and registration flows",
                "Distributor and partner inquiries for other markets",
              ]}
            />
            <p>
              We agree which actions count before the build, and what happens to each one after it is submitted, so nothing arrives in
              an inbox nobody reads.
            </p>
          </Prose>
          <Figure name="riffle" label="A tray of cards, the one under the pointer standing up" caption="One clear choice at the right moment beats six buttons on every page." intensity={0.55} />
        </Split>
      </Section>

      <Section id="communicate" title="Communicate">
        <Split>
          <Prose>
            <h3>Make important information easier to understand.</h3>
            <p>
              Most companies with a complicated offering do not have a content problem, they have a structure problem. The information
              exists, spread across presentations, brochures, and the memory of the sales team. We put it in one place, in the order a
              buyer needs it.
            </p>
            <HairlineList
              items={[
                "Capabilities: what the company can do, and at what scale",
                "Products and services, with the technical detail buyers ask for",
                "Experience and reference projects",
                "Certifications and standards, findable and verifiable",
                "Facilities, processes, and capacity",
                "Company credentials for procurement",
              ]}
            />
          </Prose>
          <Figure name="router" label="A router with its antennas leaning toward the pointer" caption="One source of truth, pointed at each audience." intensity={0.55} />
        </Split>
      </Section>

      <Section id="operate" title="Operate">
        <Split>
          <Prose>
            <h3>Make work easier to manage.</h3>
            <p>
              Some problems are not communication problems at all. They are work that gets re-entered, chased, or reconciled by hand. An
              application is the right answer when the process is repetitive, the rules are clear, and the cost of getting it wrong is
              real.
            </p>
            <HairlineList
              items={[
                "Internal workflows with states, owners, and deadlines",
                "Data entry with validation at the point of entry",
                "Reporting that answers a question someone actually asks",
                "Approvals with an audit trail",
                "Customer and partner portals",
                "Operational tools for field, plant, or warehouse teams",
              ]}
            />
          </Prose>
          <Figure name="turntable" label="Blocks on a turntable, spinning down to the nearest quarter turn" caption="A process with clear states settles into something people trust." intensity={0.55} />
        </Split>
      </Section>

      <Section id="decide" title="How we choose what to build">
        <Statement>Define the outcome, then the smallest product that reaches it.</Statement>
        <FeatureGrid columns={4}>
          <Feature title="1. Name the outcome">One sentence a stakeholder would recognise: more qualified inquiries, fewer manual steps, faster quotations.</Feature>
          <Feature title="2. Name the audience">Who has to act for that outcome to happen, and what they need to know first.</Feature>
          <Feature title="3. Name the evidence">What we will look at to decide whether it worked, agreed before the build rather than after.</Feature>
          <Feature title="4. Name the scope">The smallest product that reaches the outcome, with the rest written down as a later phase.</Feature>
        </FeatureGrid>
        <Prose>
          <p>
            Where a client has analytics, we plan against real numbers. Where they do not, we say so, and we measure what the product
            itself can show: task steps, content coverage, response times, and the paths people take. We do not present an unmeasured
            number as a result.
          </p>
        </Prose>
        <CardGrid columns={3}>
          <Card title="When the outcome is inquiries">
            <CardBody>We audit the current path first, because most inquiry problems are clarity problems upstream of the form.</CardBody>
          </Card>
          <Card title="When the outcome is understanding">
            <CardBody>We start with information architecture, then write, then design. Skipping the order is how sites end up beautiful and useless.</CardBody>
          </Card>
          <Card title="When the outcome is less manual work">
            <CardBody>We shadow the current process before proposing a product, and we count the steps we are removing.</CardBody>
          </Card>
        </CardGrid>
      </Section>

      <CtaSection
        variant="centered"
        title="Which of the three does your business need most?"
        description="We can review the current website or workflow and tell you where the gap is, in writing, before any project starts."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "Book a 30-minute discovery call", href: discoveryMailto }}
        faces={[]}
      />
    </>
  );
}
