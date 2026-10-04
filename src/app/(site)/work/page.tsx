import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, EvidenceStrip, FactList, LinkAction, PageIntro, Prose, Section, Split } from "@/components/page/section";
import { auditMailto, proposalMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Websites and digital products we have designed and built, described by what was structured and shipped rather than by claims we cannot verify.",
};

export default function Work() {
  return (
    <>
      <PageIntro
        title="Selected work"
        description="A selection of websites and digital products we have designed and built. Each case study lists what was structured and shipped, because that can be checked by opening the product."
      >
        <LinkAction href={proposalMailto} primary>Request a proposal</LinkAction>
      </PageIntro>

      <Section id="imow" title="iMOW Indonesia">
        <Split>
          <Prose>
            <h3>An industrial product catalogue turned into a sales platform.</h3>
            <p>
              Eight product categories, four industry use cases, two languages, and a total cost of ownership calculator that puts a
              buyer&rsquo;s own fleet numbers against the electric alternative.
            </p>
            <FactList
              facts={[
                { label: "Industry", value: "Material handling and industrial equipment" },
                { label: "Engagement", value: "Corporate website and product platform" },
                { label: "Scope", value: "Strategy · Information architecture · UX · UI · Development · CMS" },
              ]}
            />
            <LinkAction href="/work/imow">Read the iMOW case study</LinkAction>
          </Prose>
          <EvidenceStrip
            items={[
              { label: "Product categories structured", value: 8, context: "Diesel, lead-acid, lithium, stackers, reach trucks, pallet trucks, order pickers" },
              { label: "Industry use cases", value: 4, context: "Manufacturing, logistics and 3PL, cold storage, e-commerce fulfilment" },
              { label: "Languages supported", value: 2, context: "English and Indonesian" },
              { label: "Interactive calculator", value: 1, context: "Total cost of ownership, against the buyer's own fleet numbers" },
            ]}
          />
        </Split>
      </Section>

      <Section id="gunung-kendali" title="PT Gunung Kendali Docking">
        <Split>
          <Prose>
            <h3>An engineering business buyers can evaluate in minutes.</h3>
            <p>
              Nine service lines and five industries, structured so a shipyard, a shipping company, or a power plant can tell quickly
              whether the company does the work they need, and how to start a conversation.
            </p>
            <FactList
              facts={[
                { label: "Industry", value: "Marine and industrial engineering" },
                { label: "Engagement", value: "Corporate website" },
                { label: "Scope", value: "Strategy · Information architecture · UX · UI · Development" },
              ]}
            />
            <LinkAction href="/work/gunung-kendali">Read the Gunung Kendali case study</LinkAction>
          </Prose>
          <EvidenceStrip
            items={[
              { label: "Engineering services structured", value: 9, context: "Docking, engines, gearboxes, boilers, valves, hydraulics, electrical, supply" },
              { label: "Industries represented", value: 5, context: "Shipyards, shipping, power plants, chemical, heavy equipment" },
              { label: "Published case studies", value: 3, context: "Engine overhauls and boiler maintenance on named vessels" },
              { label: "Named partner marks", value: 13, context: "Marine and industrial operators shown on the site" },
            ]}
          />
        </Split>
      </Section>

      <Section id="more" title="More work">
        <CardGrid columns={2}>
          <Card title="Further projects">
            <CardBody>
              Other projects are published as each client approves the wording. Some clients prefer to stay unnamed, and we respect that
              rather than describing the work in a way that identifies them anyway.
            </CardBody>
          </Card>
          <Card title="Ask for the full portfolio">
            <CardBody>
              Send us the problem you are working on and we will share the closest relevant work directly, including the parts we would not
              put on a public page.
            </CardBody>
          </Card>
        </CardGrid>
        <LinkAction href={proposalMailto} primary>Ask for relevant work</LinkAction>
      </Section>

      <Section id="how-to-read" title="How to read a case study here">
        <Prose>
          <p>
            Numbers in these pages are counts of what was structured, written, designed, and built. They are checkable: open the site and
            count the categories, the languages, or the service lines. We publish them because they are true regardless of what happened
            after launch.
          </p>
          <p>
            What we do not publish is a business result we cannot support. No revenue uplift, no conversion percentage, and no
            &ldquo;increased inquiries by 40%&rdquo; unless the client has given us the analytics that show it. Where a client has supplied a
            figure, it appears with the client&rsquo;s name against it.
          </p>
          <p>
            Where a claim belongs to the client rather than to us, it is labelled as theirs. PT Gunung Kendali Docking states that it has
            worked on more than a hundred marine projects since 2021; that is their figure, not our measurement.
          </p>
        </Prose>
        <Figure name="terminal" label="A terminal window with its history in rows, scrolling back as the pointer moves" caption="Evidence is a record, not a highlight reel." intensity={0.5} />
        <LinkAction href="/proof">Read the evidence policy</LinkAction>
      </Section>

      <CtaSection
        variant="centered"
        title="See work closest to your problem"
        description="Tell us what the business needs and we will send the relevant projects, with the reasoning behind the decisions."
        primaryAction={{ label: "Request a proposal", href: proposalMailto }}
        secondaryAction={{ label: "Request a website audit", href: auditMailto }}
        faces={[]}
      />
    </>
  );
}
