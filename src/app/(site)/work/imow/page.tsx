import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { EvidenceStrip, FactList, HairlineList, LinkAction, PageIntro, Prose, Section, Split, Statement } from "@/components/page/section";
import { auditMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "iMOW Indonesia case study",
  description:
    "Turning a complex industrial product catalogue into a sales platform: eight product categories, four industry use cases, two languages, and a total cost of ownership calculator.",
};

export default function ImowCaseStudy() {
  return (
    <>
      <PageIntro
        title="iMOW Indonesia"
        description="An industrial product range that a buyer could not evaluate without talking to a sales representative first."
      >
        <LinkAction href="https://imow-indonesia.com/" primary external>View the live project</LinkAction>
      </PageIntro>

      <Section id="facts" width="read">
        <FactList
          facts={[
            { label: "Industry", value: "Material handling and industrial equipment" },
            { label: "Engagement", value: "Corporate website and product platform" },
            { label: "Scope", value: "Strategy · Information architecture · UX · UI · Development · CMS" },
          ]}
        />
      </Section>

      <Section id="context" title="The context" width="read">
        <Prose>
          <p>
            iMOW sells electric forklifts and material handling equipment in Indonesia: diesel trucks, lead-acid and lithium battery
            forklifts, stackers, reach trucks, pallet trucks, order pickers, and tow tractors. The range is technical, the buyers are
            operational, and the decision is expensive enough that nobody makes it from a single page.
          </p>
          <p>
            The company also had to make an argument that is not obvious: that an electric fleet costs less to run than the diesel or
            lead-acid equipment a buyer already has. That argument only lands if the buyer can put their own numbers into it.
          </p>
        </Prose>
      </Section>

      <Section id="problem" title="The problem" width="read">
        <Prose>
          <p>
            A catalogue of this size is easy to publish and hard to use. Products were listed by model name rather than by the job they
            do, so a buyer arriving with an operational question had to translate it into the company&rsquo;s internal product language
            before they could find anything.
          </p>
          <p>
            Industry context was missing. A cold storage operator and an e-commerce fulfilment centre need different machines, and neither
            could see themselves on the site. The commercial argument, the running cost comparison, was the strongest asset the company
            had, and it was not available to a visitor at all.
          </p>
        </Prose>
      </Section>

      <Section id="change" title="What needed to change" width="read">
        <Statement>A buyer should be able to discover, evaluate, calculate, and inquire without a sales call.</Statement>
        <Prose>
          <p>
            That is four steps, and each one needs its own structure. Discovery needs a product taxonomy that matches how buyers think.
            Evaluation needs industry context and the specification detail that separates models. Calculation needs the running cost
            comparison to be a tool rather than a paragraph. Inquiry needs a path that is obvious at the moment the buyer is convinced.
          </p>
        </Prose>
      </Section>

      <Section id="did" title="What we did">
        <Split>
          <Prose>
            <h3>Restructured the range around the buyer&rsquo;s decision, not the catalogue.</h3>
            <p>
              We reorganised the products into eight categories that follow how equipment is chosen: by power source, by handling task, and
              by application. Category pages carry the comparison a buyer needs, and individual model pages carry the specification detail
              for the shortlist.
            </p>
            <p>
              We built four industry pages covering manufacturing, logistics and 3PL, cold storage, and e-commerce fulfilment. Each one
              describes the handling problem in that environment and points at the equipment that solves it.
            </p>
            <p>
              We designed and built the total cost of ownership calculator, which takes a buyer&rsquo;s fleet size and daily operating hours
              and returns an estimate of the saving against diesel or lead-acid equipment. It turns the company&rsquo;s strongest commercial
              argument into something a buyer can act on in under a minute.
            </p>
            <p>
              Finally we structured the commercial paths: a quotation request, a free trial request, and a catalogue download, each placed
              where the buyer is already ready for it rather than collected in one contact page.
            </p>
          </Prose>
          <Figure
            name="terrain"
            label="A field of pillars on a plinth, rising around the pointer"
            caption="A range this size only reads as simple when the structure underneath is deliberate."
            intensity={0.6}
          />
        </Split>
      </Section>

      <Section id="built" title="What we built">
        <HairlineList
          items={[
            "Eight product categories, from diesel trucks and lead-acid forklifts to lithium equipment, stackers, reach trucks, pallet trucks, and order pickers",
            "Individual model pages for named machines, with the specifications a buyer compares",
            "Four industry pages: manufacturing, logistics and 3PL, cold storage, and e-commerce fulfilment",
            "An interactive total cost of ownership calculator that takes fleet size and operating hours as inputs",
            "Three commercial conversion paths: request a quotation, request a free trial, and download the product catalogue",
            "A bilingual structure covering English and Indonesian",
            "News and event content, including exhibition participation and customer deliveries",
            "A content-managed site the team can update as the range changes",
          ]}
        />
      </Section>

      <Section
        id="outcome"
        title="The outcome"
        lede="Counts of what was structured and shipped. Each of these can be checked by opening the site, which is why they are the numbers we publish."
      >
        <EvidenceStrip
          items={[
            { label: "Product categories structured", value: 8, context: "Diesel, lead-acid, lithium, stackers, reach trucks, pallet trucks, order pickers" },
            { label: "Industry use cases", value: 4, context: "Manufacturing, logistics and 3PL, cold storage, e-commerce fulfilment" },
            { label: "Languages supported", value: 2, context: "English and Indonesian, on one structure" },
            { label: "Interactive calculator", value: 1, context: "Total cost of ownership, against the buyer's own fleet numbers" },
          ]}
        />
        <Prose>
          <p>
            What we are not claiming: we have not published a lead, conversion, or revenue figure for this project, because the client has
            not given us the analytics behind one. The site is built so those figures can be measured; the measuring is a separate
            conversation.
          </p>
        </Prose>
        <LinkAction href="https://imow-indonesia.com/" primary external>View the live project</LinkAction>
      </Section>

      <CtaSection
        variant="centered"
        title="Selling a technical product range?"
        description="If buyers cannot work out which product fits them, the problem is usually structure rather than design. We can review yours."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "Read the Gunung Kendali case study", href: "/work/gunung-kendali" }}
        faces={[]}
      />
    </>
  );
}
