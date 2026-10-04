import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { EmptyState } from "@/components/arc/empty-state/empty-state";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, Feature, FeatureGrid, HairlineList, LinkAction, PageIntro, Prose, Section } from "@/components/page/section";
import { auditMailto, email } from "@/content/site";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "How we present evidence: counts of shipped work we can support, and no revenue, lead, or conversion figure without the client's analytics behind it.",
};

export default function Proof() {
  return (
    <>
      <PageIntro
        title="What we publish, and what we refuse to claim"
        description="A studio can describe its work in ways nobody can check. We would rather show fewer numbers and have each one hold up."
      >
        <LinkAction href={auditMailto} primary>Request a website audit</LinkAction>
      </PageIntro>

      <Section
        id="kinds"
        title="Four kinds of evidence"
        lede="They are not equal. Two of them we can measure ourselves, one needs the client's analytics, and one needs the client's permission."
      >
        <FeatureGrid columns={4}>
          <Feature title="Product output">
            Pages, products structured, languages, workflows, integrations, and features. We can count these today, and anyone can check them by
            opening the product.
          </Feature>
          <Feature title="Technical output">
            Performance, accessibility, indexability, page weight, and responsive coverage. We measure these with tools before launch.
          </Feature>
          <Feature title="User impact">
            Task time, number of steps, discoverability, and completion. Measurable in some projects, with the client&rsquo;s involvement and their
            users.
          </Feature>
          <Feature title="Business impact">
            Revenue, inquiries, and cost savings. These require the client&rsquo;s analytics, and we do not report them without it.
          </Feature>
        </FeatureGrid>
      </Section>

      <Section id="publish" title="What we publish today">
        <HairlineList
          items={[
            "Counts of what was structured, written, designed, and built, per project",
            "The scope of each engagement, so you can see what was and was not part of the work",
            "Client claims labelled as the client's own, such as project counts a company states about itself",
            "Technical results we measured ourselves, where a project has them",
            "Nothing about another client's business that the client has not approved",
          ]}
        />
        <Prose>
          <p>
            Every number on this site should be checkable by opening the product, reading the client&rsquo;s own material, or asking us for the
            measurement behind it. If we cannot point at the source, the number comes down.
          </p>
        </Prose>
        <Figure
          name="keyboard"
          label="A sixty-key board where the key under the pointer sinks and its neighbours follow"
          caption="Every key accounted for. Evidence works the same way."
          intensity={0.5}
        />
      </Section>

      <Section id="testimonials" title="Testimonials and client names">
        <CardGrid columns={2}>
          <EmptyState
            title="No testimonials published yet"
            description="Quotes appear here once the client has approved the exact wording and how they are named. We do not paraphrase approval, and we do not write a quote on a client's behalf."
            label="Client testimonials"
          />
          <EmptyState
            title="No client logos published yet"
            description="Client marks appear once the client has agreed to be shown. Until then this space stays empty rather than filled with something we cannot stand behind."
            label="Selected clients"
          />
        </CardGrid>
        <Prose>
          <p>
            If you would like to talk to a reference, ask us. Where a client is willing to speak to a prospective one, we will arrange it
            directly, which is worth more than a logo on a page.
          </p>
        </Prose>
        <LinkAction href={`mailto:${email}`}>Ask for a reference</LinkAction>
      </Section>

      <Section id="not-published" title="Numbers you will not find here">
        <CardGrid columns={3}>
          <Card title="No revenue uplift">
            <CardBody>We do not state that a project increased revenue unless the client has given us the analytics that show it.</CardBody>
          </Card>
          <Card title="No conversion percentages">
            <CardBody>
              A conversion rate depends on traffic, offer, season, and sales follow-up. Quoting one without the client&rsquo;s data would be a guess
              dressed as a result.
            </CardBody>
          </Card>
          <Card title="No unsupported totals">
            <CardBody>
              Project counts, years of operation, and repeat-client percentages appear here once they can be supported. Until then the space stays
              empty.
            </CardBody>
          </Card>
        </CardGrid>
        <Prose>
          <p>
            This is not modesty. It is the only way a case study stays useful: a buyer who can verify what you claim will believe the rest of the
            page too.
          </p>
        </Prose>
      </Section>

      <CtaSection
        variant="centered"
        title="Ask us for the evidence behind any claim on this site"
        description="If a number on this site is not enough on its own, we will show you where it came from, or take it down."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "See selected work", href: "/work" }}
        faces={[]}
      />
    </>
  );
}
