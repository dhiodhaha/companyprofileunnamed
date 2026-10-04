import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, Feature, FeatureGrid, LinkAction, PageIntro, Prose, Section, Split, Statement } from "@/components/page/section";
import { auditMailto, discoveryMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Why Unnamed",
  description:
    "Design and engineering stay in the same team. Direct access to the people doing the work, design with technical context, engineering with user context.",
};

export default function WhyUnnamed() {
  return (
    <>
      <PageIntro
        title="Design and engineering stay in the same team"
        description="Unnamed+ is a compact design and engineering studio. We keep product thinking, design, and software development close together so decisions do not get lost between separate teams."
      >
        <LinkAction href={auditMailto} primary>Request a website audit</LinkAction>
      </PageIntro>

      <Section id="team" title="Direct access to the people doing the work">
        <Split>
          <Prose>
            <h3>The people discussing the problem are the people building the solution.</h3>
            <p>
              There are fewer layers between a business requirement and the person responsible for turning it into a working product.
              That means fewer interpretations of what was agreed, and fewer places for a decision to quietly change.
            </p>
            <p>
              You talk to the people who write the code and draw the screens. When something in the plan turns out to be wrong, the
              correction happens in the room where the work is being done, not across three suppliers.
            </p>
          </Prose>
          <Figure
            name="branches"
            label="A commit graph with a branch forking off the main line and merging back into it"
            caption="One history. Decisions land where the work is, not in a document that nobody opens."
            intensity={0.55}
          />
        </Split>
      </Section>

      <Section id="context" title="Two kinds of context">
        <FeatureGrid columns={2}>
          <Feature title="Design with technical context">
            Design decisions consider feasibility, performance, content, and implementation from the start. What can be built well, what
            costs more than it returns, and what will be hard to maintain are questions we answer while the design is still moving.
          </Feature>
          <Feature title="Engineering with user context">
            Technical decisions consider how people will actually use the product, not only whether the feature works. A form that saves
            correctly but reads badly has not solved the problem it was built for.
          </Feature>
        </FeatureGrid>
        <Prose>
          <p>
            The two contexts are why we keep the disciplines together. A design review with an engineer in it catches the expensive
            problems early. An engineering decision with a designer in it catches the ones that would have made the product awkward.
          </p>
        </Prose>
      </Section>

      <Section id="core-team" title="A compact core team">
        <Split>
          <Prose>
            <h3>Small by design, extended when a project needs it.</h3>
            <p>
              We keep the core team small and extend it with trusted specialists when a project requires additional expertise. This gives
              each project clear ownership without pretending every problem needs a large agency team.
            </p>
            <p>
              The project still has one accountable core team. Specialists are brought in for a defined piece of work, with the same
              person answerable for how it fits.
            </p>
          </Prose>
          <Figure name="lockers" label="A bank of lockers where the one under the pointer opens" caption="One owner per piece of work, and a place for everything." intensity={0.5} />
        </Split>
        <Statement>Fewer handoffs. Clearer ownership.</Statement>
      </Section>

      <Section id="when-not" title="When we are not the right studio">
        <CardGrid columns={3}>
          <Card title="If you need volume production">
            <CardBody>If the work is thirty templated pages a week, a larger production team is faster and cheaper than we are.</CardBody>
          </Card>
          <Card title="If the strategy is already fixed and detailed">
            <CardBody>We do our best work when we can question the brief. If the answer is decided and only execution is wanted, say so and we will price it that way.</CardBody>
          </Card>
          <Card title="If nobody owns the decision">
            <CardBody>A website or application project needs a decision-maker on the client side. Without one, review points stall and the project drifts.</CardBody>
          </Card>
        </CardGrid>
        <LinkAction href={discoveryMailto} primary>Book a 30-minute discovery call</LinkAction>
      </Section>

      <CtaSection
        variant="centered"
        title="Work directly with the people building it"
        description="A 30-minute call is usually enough to tell whether we are a good fit, and what the project would take."
        primaryAction={{ label: "Book a 30-minute discovery call", href: discoveryMailto }}
        secondaryAction={{ label: "See selected work", href: "/work" }}
        faces={[]}
      />
    </>
  );
}
