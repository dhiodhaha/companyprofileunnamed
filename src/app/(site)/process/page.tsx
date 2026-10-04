import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, Feature, FeatureGrid, LinkAction, PageIntro, Prose, Section, StepList } from "@/components/page/section";
import { auditMailto, discoveryMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Six stages from problem to launch: understand, define, design, build, validate, and launch with support. Each stage has a review and a deliverable.",
};

const steps = [
  { title: "Understand", body: "We learn about the business, the audience, the current problems, the constraints, and the intended outcomes. We look at what already exists: the website, the material, the workflow, the analytics if there are any.", output: "project context and success criteria" },
  { title: "Define", body: "We turn those requirements into scope, information architecture, technical requirements, milestones, and responsibilities. This is where we say what is not included, as clearly as what is.", output: "a clear project plan" },
  { title: "Design", body: "We develop the content structure, the user experience, the interface, and the prototypes needed to validate the direction. Content and interface are decided together, because a layout cannot fix a page that has nothing to say.", output: "an approved product direction" },
  { title: "Build", body: "We turn the approved design into a working website or application, in reviewable increments rather than one delivery at the end.", output: "a production-ready product" },
  { title: "Validate", body: "We review functionality, responsiveness, content, browser compatibility, performance, and launch requirements. Accessibility and Core Web Vitals are part of this check, not a separate phase.", output: "a tested release" },
  { title: "Launch and support", body: "We deploy the product, hand over the required access and documentation, and support the team after launch. Support is defined before launch so nobody is guessing afterwards.", output: "a working product your team can continue using" },
];

export default function Process() {
  return (
    <>
      <PageIntro
        title="A clear process from problem to launch"
        description="Six stages. Each one has something you review and something you receive, so progress is visible rather than reported."
      >
        <LinkAction href={discoveryMailto} primary>Book a 30-minute discovery call</LinkAction>
      </PageIntro>

      <Section id="stages" title="The six stages">
        <StepList steps={steps} />
      </Section>

      <Section id="governance" title="What you get at each stage">
        <FeatureGrid columns={3}>
          <Feature title="Before production">Scope, responsibilities, review points, and timelines agreed in writing.</Feature>
          <Feature title="During production">Work reviewed at defined stages, in a form you can open and comment on.</Feature>
          <Feature title="Before launch">Functionality, content, browsers, devices, and performance tested and signed off.</Feature>
          <Feature title="At launch">Deployment, redirects, analytics, and a checklist rather than a hope.</Feature>
          <Feature title="At handover">Source files, code, credentials, assets, and documentation, as agreed in the plan.</Feature>
          <Feature title="After launch">Support defined in advance: what is covered, for how long, and who to contact.</Feature>
        </FeatureGrid>
        <LinkAction href="/delivery">Read how we run delivery and governance</LinkAction>
      </Section>

      <Section id="fit" title="How the process adapts">
        <CardGrid columns={3}>
          <Card title="Website projects">
            <CardBody>
              Understand and define are short if the business already knows its audience. Most of the work sits in structure, content, and
              interface design, with development overlapping the last design stage.
            </CardBody>
          </Card>
          <Card title="Application projects">
            <CardBody>
              Define carries more weight, because the data model and the rules are harder to change later. We build the thinnest working
              version first and put it in front of the people who will use it.
            </CardBody>
          </Card>
          <Card title="Profile projects">
            <CardBody>
              Understand and define merge into one interview round. Writing and structure do the heavy lifting, and print production adds
              its own checks at the end.
            </CardBody>
          </Card>
        </CardGrid>
      </Section>

      <Section id="rhythm" title="Working rhythm">
        <Prose>
          <p>
            Projects run in short cycles with a review at the end of each one. You always know what is being worked on, what is waiting
            for a decision, and what comes next. Decisions are written down where they can be found again, so a change of personnel on
            either side does not restart the project.
          </p>
          <p>
            Review points are agreed up front, with the people who need to be in them. Stakeholders see the work as it develops rather
            than discovering the direction at the end, when changing it costs the most.
          </p>
        </Prose>
        <Figure name="slow" label="Crates riding a belt through a gate, slowing as the pointer hovers" caption="A steady pace with visible checkpoints. Nothing arrives at the gate unannounced." intensity={0.5} />
      </Section>

      <CtaSection
        variant="centered"
        title="See where your project would start"
        description="Bring the business problem to a 30-minute call. We will tell you which stage you are already past and what the next one needs."
        primaryAction={{ label: "Book a 30-minute discovery call", href: discoveryMailto }}
        secondaryAction={{ label: "Request a website audit", href: auditMailto }}
        faces={[]}
      />
    </>
  );
}
