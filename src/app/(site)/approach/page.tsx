import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Feature, FeatureGrid, LinkAction, PageIntro, Prose, Section, Split, Statement } from "@/components/page/section";
import { auditMailto, proposalMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "We define what the product needs to help people understand or accomplish before deciding how it should look. Four disciplines in one project.",
};

export default function Approach() {
  return (
    <>
      <PageIntro
        title="We start with what the business needs the product to do"
        description="Before deciding how a website should look, we define what it needs to help people understand or accomplish. That definition is what keeps a project from drifting."
      >
        <LinkAction href={proposalMailto} primary>Request a proposal</LinkAction>
      </PageIntro>

      <Section id="outcomes" title="What the product needs to do">
        <FeatureGrid columns={4}>
          <Feature title="Generate inquiries">Make it easier for potential customers to find the right information and contact sales.</Feature>
          <Feature title="Explain the business clearly">Turn complex products, services, and capabilities into information people can understand.</Feature>
          <Feature title="Build credibility">Present the company, its work, facilities, certifications, and experience with the level of clarity the business deserves.</Feature>
          <Feature title="Reduce manual work">Build web applications and internal tools that simplify repetitive processes and fragmented workflows.</Feature>
        </FeatureGrid>
      </Section>

      <Section id="disciplines" title="Four disciplines, one project">
        <Split>
          <Prose>
            <h3>Business context, product thinking, design, engineering</h3>
            <p>
              The order matters. Business context sets the constraints. Product thinking decides what to build and what to leave out.
              Design makes it understandable. Engineering makes it real, and it starts before design is finished, because feasibility
              is a design input rather than a later objection.
            </p>
            <p>
              The goal is not simply to deliver pages. The goal is to build something useful to the business and usable by the people it
              serves. Those two tests are different, and a project has to pass both.
            </p>
            <p>
              Keeping the four in one team means decisions do not get lost between separate suppliers. There is no handover where the
              reason for a decision disappears, and no design that turns out to be unbuildable after it has been approved.
            </p>
          </Prose>
          <Figure
            name="exploded"
            label="An application window drawn in four layers, opening as the pointer moves across it"
            caption="Four layers of the same product. Pull one out and the others still have to fit."
            intensity={0.6}
          />
        </Split>
        <Statement>Define the outcome. Then design the smallest product that reaches it.</Statement>
      </Section>

      <Section id="questions" title="The questions we ask before proposing anything">
        <Prose>
          <p>
            A short discovery is usually enough to know whether a project is worth doing, and what shape it should take. We ask these in
            the first conversation, not after a proposal:
          </p>
          <ul>
            <li>What has to become easier for the business, and for whom?</li>
            <li>Who has to act for that to happen, and what do they need to know first?</li>
            <li>What does the current website or workflow already do well, so we do not throw it away?</li>
            <li>Who inside the company can make decisions, and at which points do they need to review?</li>
            <li>What content, data, or access already exists, and what has to be produced?</li>
            <li>How will we know it worked?</li>
          </ul>
          <p>
            The answers become the project context and the success criteria. If we cannot answer them together, the project is not ready
            to start, and starting anyway is how budgets get spent on the wrong thing.
          </p>
        </Prose>
      </Section>

      <Section id="tradeoffs" title="How we make tradeoffs">
        <FeatureGrid columns={3}>
          <Feature title="Clarity over cleverness">If a visitor has to work to understand the business, the design has failed regardless of how it looks.</Feature>
          <Feature title="Structure before surface">Navigation, hierarchy, and content order decide whether a site works. Visual design amplifies that decision, it cannot replace it.</Feature>
          <Feature title="Specific over impressive">A verified number beats a bold claim. If we cannot support a statement, it does not go on the page.</Feature>
          <Feature title="Fewer things, finished">A short scope delivered properly is worth more than a long scope half-built. Later phases are written down, not smuggled in.</Feature>
          <Feature title="Built to be maintained">Code, CMS, and documentation are handed over so your team can keep working after we leave.</Feature>
          <Feature title="Accessible by default">Semantics, keyboard use, contrast, and reduced motion are part of the build, not a later audit.</Feature>
        </FeatureGrid>
      </Section>

      <CtaSection
        variant="centered"
        title="Start with the business problem"
        description="Tell us what the business needs the product to do. We will tell you what we would build, and what we would leave out."
        primaryAction={{ label: "Request a proposal", href: proposalMailto }}
        secondaryAction={{ label: "Request a website audit", href: auditMailto }}
        faces={[]}
      />
    </>
  );
}
