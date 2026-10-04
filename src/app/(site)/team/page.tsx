import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, HairlineList, LinkAction, PageIntro, Prose, Section, Split } from "@/components/page/section";
import { discoveryMailto, email } from "@/content/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "A compact multidisciplinary core team: product engineering, software engineering, and interface design, extended with trusted specialists when a project needs them.",
};

/* Names and portraits are added when each person has approved how they appear. */
const roles = [
  {
    title: "Product engineer",
    covers: ["Product thinking", "Interface design", "Front-end engineering"],
    body: "Turns a business requirement into structure, screens, and working front-end code. The person who keeps the product coherent from the first sketch to the last component.",
  },
  {
    title: "Product engineer",
    covers: ["Product strategy", "Software engineering", "Technical architecture"],
    body: "Defines what the product has to do and how it should be built, including the data model, integrations, and the parts that have to survive contact with real operations.",
  },
  {
    title: "Software engineer",
    covers: ["Back-end engineering", "Infrastructure", "Integrations"],
    body: "Builds and runs the server side: APIs, data, deployment, monitoring, and the connections to the systems a company already uses.",
  },
  {
    title: "UI designer",
    covers: ["Interface design", "Visual systems", "Design production"],
    body: "Turns structure into an interface people can read at a glance, and maintains the visual system so the product stays consistent as it grows.",
  },
];

export default function Team() {
  return (
    <>
      <PageIntro
        title="A compact multidisciplinary team"
        description="Unnamed+ brings product, design, and engineering into one core team. When a project requires expertise outside it, we work with specialists from our trusted engineering network."
      >
        <LinkAction href={discoveryMailto} primary>Book a 30-minute discovery call</LinkAction>
      </PageIntro>

      <Section id="roles" title="Who does what">
        <CardGrid columns={2}>
          {roles.map((role, index) => (
            <Card key={`${role.title}-${index}`} title={role.title}>
              <CardBody>{role.body}</CardBody>
              <HairlineList items={role.covers} />
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section id="network" title="The engineering network">
        <Split>
          <Prose>
            <h3>Specialists, brought in for a defined piece of work.</h3>
            <p>
              Some projects need depth we do not keep on staff: a particular platform, a payment integration, a print specification, a
              security review, or a data migration. We bring in someone who does that work regularly, for the part of the project that
              needs it.
            </p>
            <p>
              The project still has one accountable core team. The specialist answers to the same plan, the same review points, and the
              same quality checks as the rest of the work, and their output is handed over with everything else.
            </p>
            <p>
              We tell you when a specialist is being added, what they are doing, and what it costs. Nothing appears on an invoice
              without a name against it.
            </p>
          </Prose>
          <Figure name="patch" label="A patch panel of ports with cables, one lifting under the pointer" caption="Depth where it is needed, one accountable team around it." intensity={0.5} />
        </Split>
      </Section>

      <Section id="contact-team" title="Talk to the team">
        <Prose>
          <p>
            The first conversation is with the people who would do the work. Bring the business problem and we will bring the questions.
          </p>
          <p>
            Email <a href={`mailto:${email}`}>{email}</a> or book a 30-minute discovery call.
          </p>
        </Prose>
        <LinkAction href={discoveryMailto} primary>Book a 30-minute discovery call</LinkAction>
      </Section>

      <CtaSection
        variant="centered"
        title="One team, from the first question to launch"
        description="Fewer handoffs means fewer places for a decision to change meaning. That is the whole argument for a compact studio."
        primaryAction={{ label: "Book a 30-minute discovery call", href: discoveryMailto }}
        secondaryAction={{ label: "Read why companies work with us", href: "/why-unnamed" }}
        faces={[]}
      />
    </>
  );
}
