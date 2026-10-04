import type { Metadata } from "next";
import { ContactSection } from "@/components/arc/blocks/contact-section/contact-section";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { HairlineList, LinkAction, PageIntro, Prose, Section } from "@/components/page/section";
import { auditMailto, discoveryMailto, email, proposalMailto, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Next step",
  description:
    "Request a website audit, book a 30-minute discovery call, or ask for a proposal. If the site does not need a rebuild, the audit will say so.",
};

const channels = [
  {
    value: "audit",
    label: "Request a website audit",
    meta: "A written review of your current site",
    detail: (
      <>
        <p>
          We review the current website and identify where its structure, content, design, or technology may be making it harder for people to
          understand the business or take action.
        </p>
        <LinkAction href={auditMailto} primary>Request the audit</LinkAction>
      </>
    ),
  },
  {
    value: "call",
    label: "Book a 30-minute discovery call",
    meta: "Bring the business problem",
    detail: (
      <>
        <p>
          Thirty minutes is usually enough to tell whether we are a good fit, which shape of project fits the problem, and what the next step would
          be.
        </p>
        <LinkAction href={discoveryMailto} primary>Book the call</LinkAction>
      </>
    ),
  },
  {
    value: "proposal",
    label: "Request a proposal",
    meta: "Scope, milestones, and a price",
    detail: (
      <>
        <p>
          Send the business problem, the audience, and what a good outcome looks like. We come back with what we would build, what it takes, and
          what we would leave out.
        </p>
        <LinkAction href={proposalMailto} primary>Request a proposal</LinkAction>
      </>
    ),
  },
];

export default function NextStep() {
  return (
    <>
      <PageIntro
        title="Find out what your website could do better"
        description="We can review your current website and identify where its structure, content, design, or technology may be making it harder for people to understand your business or take action."
      >
        <LinkAction href={auditMailto} primary>Request a website audit</LinkAction>
      </PageIntro>

      <Section id="audit" title="What the audit covers">
        <HairlineList
          items={[
            "Positioning and message clarity: what a first-time visitor understands in the first ten seconds",
            "Information structure: whether the site is organised the way buyers look for things",
            "Calls to action: whether the next step is obvious at the moment someone is ready",
            "Mobile experience: what the majority of visitors actually see",
            "Technical performance: page weight, loading behaviour, and Core Web Vitals",
            "Obvious conversion friction: the forms, fields, and dead ends that cost inquiries",
          ]}
        />
        <Prose>
          <p>
            You get the findings in writing, ranked by what is likely to matter most, with what we would fix first and what we would leave alone. If
            the site does not need a rebuild, the audit will say so.
          </p>
        </Prose>
        <Figure
          name="dish"
          label="A parabolic dish on a two-axis gimbal, aiming at the pointer"
          caption="Point the review at the pages that decide whether someone stays."
          intensity={0.5}
        />
        <LinkAction href={auditMailto} primary>Request the audit</LinkAction>
      </Section>

      <Section id="project" title="Already have a project in mind?">
        <Prose>
          <p>
            Skip the audit and come straight to the problem. Tell us what the business needs the product to do, and we will tell you what we would
            build, what it takes, and whether we are the right studio for it.
          </p>
        </Prose>
        <LinkAction href={discoveryMailto}>Book a 30-minute discovery call</LinkAction>
        <LinkAction href={proposalMailto}>Request a proposal</LinkAction>
      </Section>

      <ContactSection
        variant="channels"
        title="Reach the studio"
        description="Three ways to start. Every one of them reaches the same small team."
        channels={channels}
      />

      <Section id="details" width="read">
        <Prose>
          <p>
            Unnamed+ is a design and engineering studio. Write to <a href={`mailto:${email}`}>{email}</a> or visit <a href={site}>unnamed.plus</a>.
          </p>
        </Prose>
      </Section>

      <CtaSection
        variant="centered"
        title="Start with the problem, not the design"
        description="Send the business problem and we will reply with an honest read on it, including when the answer is smaller than you expected."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "See selected work", href: "/work" }}
        faces={[]}
      />
    </>
  );
}
