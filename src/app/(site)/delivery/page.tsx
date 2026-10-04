import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, Feature, FeatureGrid, HairlineList, LinkAction, PageIntro, Prose, Section, Split } from "@/components/page/section";
import { auditMailto, proposalMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Delivery and governance",
  description:
    "Defined scope and milestones, one accountable project lead, regular reviews, quality assurance before launch, clear handover, and post-launch support.",
};

export default function Delivery() {
  return (
    <>
      <PageIntro
        title="Clear ownership throughout the project"
        description="Good work is not enough if the process is difficult to manage. We structure projects so both teams know what is happening, what is expected, and what comes next."
      >
        <LinkAction href={proposalMailto} primary>Request a proposal</LinkAction>
      </PageIntro>

      <Section id="structure" title="How a project is structured">
        <Split>
          <Prose>
            <h3>Defined scope and milestones</h3>
            <p>
              Deliverables, responsibilities, review points, and timelines are agreed before production begins. The plan names what is
              included and what is not, so a later conversation about a new idea is a decision rather than a dispute.
            </p>
            <p>
              Each milestone has a deliverable you can open and a decision you can make. We do not ask for approval on a description of
              work that does not exist yet.
            </p>
          </Prose>
          <Figure name="vault" label="A vault door with a dial and three bolts, the bolts drawing back on the combination" caption="Governance is the combination, not the ceremony. Agreed up front, checked at each step." intensity={0.5} />
        </Split>
      </Section>

      <Section id="commitments" title="Six commitments">
        <FeatureGrid columns={3}>
          <Feature title="Defined scope and milestones">Deliverables, responsibilities, review points, and timelines agreed before production begins.</Feature>
          <Feature title="One accountable project lead">Every project has a clear point of responsibility from start to launch.</Feature>
          <Feature title="Regular project reviews">Stakeholders review the work at defined stages instead of discovering major decisions at the end.</Feature>
          <Feature title="Quality assurance before launch">We test the product across relevant devices, browsers, content, functionality, and performance requirements.</Feature>
          <Feature title="Clear handover">Relevant source files, code, credentials, assets, and documentation are handed over as agreed.</Feature>
          <Feature title="Post-launch support">Support requirements are defined before launch so both teams know what happens after release.</Feature>
        </FeatureGrid>
      </Section>

      <Section id="qa" title="What we check before launch">
        <HairlineList
          items={[
            "Functionality: every path a visitor or user can take, including the ones that fail",
            "Responsiveness: 390, 768, 1024, and 1440 pixels wide, with no sideways scroll",
            "Content: real copy in real lengths, with long names and values tested",
            "Browsers and devices: the ones your audience actually uses, not a generic list",
            "Performance: page weight, loading behaviour, and Core Web Vitals",
            "Accessibility: semantics, keyboard use, contrast, and reduced motion",
            "Analytics and forms: events firing, submissions arriving, and where they arrive",
            "Launch requirements: redirects, domain, certificates, backups, and access",
          ]}
        />
        <Prose>
          <p>
            Findings are written down and fixed, not summarised as &ldquo;minor issues&rdquo;. If something cannot be fixed before launch,
            you get told what it is and what it costs to fix later.
          </p>
        </Prose>
      </Section>

      <Section id="procurement" title="For procurement and vendor onboarding">
        <CardGrid columns={3}>
          <Card title="Company documents">
            <CardBody>
              Company registration, tax, and contract documents are supplied as part of procurement, once they have been verified. We do
              not publish unverified registration details.
            </CardBody>
          </Card>
          <Card title="Contracts and confidentiality">
            <CardBody>
              We work under your contract or ours, and sign a non-disclosure agreement where the work involves information you do not want
              shared. Terms are agreed before the project starts.
            </CardBody>
          </Card>
          <Card title="Ownership and access">
            <CardBody>
              You own the delivered work. Code, source files, assets, and accounts are handed over or transferred to your ownership as
              agreed in the plan.
            </CardBody>
          </Card>
        </CardGrid>
      </Section>

      <CtaSection
        variant="centered"
        title="Ask for the plan before the price"
        description="We will show you how the project would run, who is responsible for what, and where the review points fall."
        primaryAction={{ label: "Request a proposal", href: proposalMailto }}
        secondaryAction={{ label: "Request a website audit", href: auditMailto }}
        faces={[]}
      />
    </>
  );
}
