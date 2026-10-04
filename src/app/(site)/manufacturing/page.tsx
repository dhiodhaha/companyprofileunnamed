import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { FaqSection } from "@/components/arc/blocks/faq-section/faq-section";
import { StatsBand } from "@/components/arc/blocks/stats-band/stats-band";
import { Figure } from "@/components/page/figure";
import { Card, CardBody, CardGrid, EvidenceStrip, Feature, FeatureGrid, HairlineList, LinkAction, PageIntro, Prose, Section, Split } from "@/components/page/section";
import { auditMailto, proposalMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Websites for manufacturing companies",
  description:
    "Help buyers understand what your company can do: products and specifications, capabilities, certifications, industries served, quotations, and distributor information.",
};

const faqs = [
  {
    question: "Our product data is in spreadsheets and PDFs. Is that a problem?",
    answer: "No, that is the normal starting point. Part of the work is deciding which fields a buyer actually filters on, and structuring the rest so it stays findable. The spreadsheet usually becomes the source for the website rather than being replaced by it.",
    category: "Product data",
  },
  {
    question: "We sell through distributors. Should prices be on the site?",
    answer: "Usually not. What buyers need is enough technical detail to shortlist, and a clear path to a quotation or a distributor in their market. We agree what is published and what is only available on request.",
    category: "Product data",
  },
  {
    question: "Can buyers request a quotation without calling sales?",
    answer: "Yes. A quotation request can carry the product, the quantity, the application, and the delivery location, so the commercial team answers with real information instead of a follow-up question.",
    category: "Quotations",
  },
  {
    question: "Do you handle multiple languages?",
    answer: "Yes. Two languages with one structure is the common case for exporters, and it means both versions stay consistent when the product range changes.",
    category: "Markets",
  },
  {
    question: "Our certifications matter to buyers. How should they appear?",
    answer: "Beside the claim they support, with enough detail to verify: what the certificate covers, who issued it, and when it expires. A logo wall on its own does not help a procurement officer.",
    category: "Trust",
  },
  {
    question: "Can the site connect to our ERP or catalogue system?",
    answer: "It can, when the system has an interface worth using. We assess that during the define stage, and we say plainly when a manual update is the more sensible option.",
    category: "Systems",
  },
];

export default function Manufacturing() {
  return (
    <>
      <PageIntro
        title="Make it easier for buyers to understand what your company can do"
        description="Manufacturing businesses often need to communicate a large amount of technical and commercial information. A corporate website should help buyers find that information without relying on a sales representative to explain everything first."
      >
        <LinkAction href={auditMailto} primary>Request a website audit</LinkAction>
      </PageIntro>

      <Section
        id="information"
        title="What a manufacturing website has to carry"
        lede="Seven kinds of information. Each one has a different reader, and each one needs a place to live."
      >
        <FeatureGrid columns={3}>
          <Feature title="Products and specifications">Help buyers find the right product and its technical information, with the fields they actually filter on.</Feature>
          <Feature title="Manufacturing capabilities">Explain facilities, processes, capacity, machinery, and areas of expertise.</Feature>
          <Feature title="Certifications and standards">Make relevant credentials easy to find and verify, beside the claim they support.</Feature>
          <Feature title="Industries served">Show where the company&rsquo;s capabilities are already being applied.</Feature>
          <Feature title="Request for quotation">Give qualified prospects a clear path to the commercial team, with the fields that matter.</Feature>
          <Feature title="Distributor and export information">Support buyers, partners, and distributors across different markets and languages.</Feature>
          <Feature title="Company credentials">Present the scale and experience of the business with the clarity it deserves.</Feature>
        </FeatureGrid>
      </Section>

      <Section id="proof" title="Two industrial projects, counted rather than claimed">
        <Split>
          <Prose>
            <h3>iMOW Indonesia</h3>
            <p>
              An electric forklift and material handling range: diesel trucks, lead-acid and lithium forklifts, stackers, reach trucks, pallet
              trucks, order pickers, and tow tractors. The site carries the comparison work, including a total cost of ownership calculator that
              puts a buyer&rsquo;s own fleet numbers against the electric alternative.
            </p>
            <LinkAction href="/work/imow">Read the iMOW case study</LinkAction>
          </Prose>
          <EvidenceStrip
            items={[
              { label: "Product categories structured", value: 8, context: "Diesel, lead-acid, lithium, stackers, reach trucks, pallet trucks, order pickers" },
              { label: "Industry use cases", value: 4, context: "Manufacturing, logistics and 3PL, cold storage, e-commerce fulfilment" },
              { label: "Commercial conversion paths", value: 3, suffix: "+", context: "Request quote, request free trial, download catalogue" },
            ]}
          />
        </Split>
        <Split>
          <Prose>
            <h3>PT Gunung Kendali Docking</h3>
            <p>
              Marine and industrial engineering: vessel docking, engine overhaul, gearboxes, boilers, valves, hydraulics, alternators, electrical
              automation, and spare parts supply. Nine service lines and five industries, structured so a buyer can tell within a few minutes
              whether the company does their job.
            </p>
            <LinkAction href="/work/gunung-kendali">Read the Gunung Kendali case study</LinkAction>
          </Prose>
          <EvidenceStrip
            items={[
              { label: "Engineering services structured", value: 9, context: "Docking, engines, gearboxes, boilers, valves, hydraulics, electrical, supply" },
              { label: "Industries represented", value: 5, context: "Shipyards, shipping, power plants, chemical, heavy equipment" },
              { label: "Named partner marks", value: 13, context: "Marine and industrial operators shown on the site" },
            ]}
          />
        </Split>
      </Section>

      <Section id="audit" title="What we look at first">
        <StatsBand
          layout="divided"
          stats={[
            { value: 7, label: "Information types", detail: "Products, capabilities, certifications, industries, quotations, distributors, credentials" },
            { value: 3, label: "Buyers to satisfy", detail: "The technical evaluator, the commercial decision maker, and procurement" },
            { value: 1, label: "Action to make obvious", detail: "The step a qualified buyer takes when they are ready" },
          ]}
        />
        <Prose>
          <p>
            Most manufacturing sites fail in the same three places: the product range is described in the company&rsquo;s language rather than the
            buyer&rsquo;s, the proof sits in a different part of the site from the claim it supports, and the path to a quotation asks for the wrong
            information at the wrong moment.
          </p>
          <p>
            We audit those three before proposing a rebuild. Sometimes the answer is a new structure and a rewritten set of product pages rather
            than a new website.
          </p>
        </Prose>
        <CardGrid columns={3}>
          <Card title="Buyer language">
            <CardBody>Technical detail a buyer recognises, in the order they ask for it, rather than an internal product taxonomy.</CardBody>
          </Card>
          <Card title="Proof beside the claim">
            <CardBody>Certifications, capacities, and reference projects next to the capability they support, not in a separate section.</CardBody>
          </Card>
          <Card title="One clear commercial path">
            <CardBody>A quotation route that captures the product, quantity, application, and location, so sales can answer immediately.</CardBody>
          </Card>
        </CardGrid>
        <Figure name="cabinet" label="A rack of blades with the ones nearest the pointer pulled out" caption="The range can be deep. The first screen still has to be readable." intensity={0.5} />
      </Section>

      <Section id="deliverables" title="What a manufacturing project usually includes">
        <HairlineList
          items={[
            "A product taxonomy built from how buyers search, not how the catalogue is filed internally",
            "Product and model pages with the technical fields a buyer filters on",
            "Capability pages: facilities, processes, capacity, and machinery",
            "A certification and standards section that can be verified",
            "Industry pages that show where the capability is already applied",
            "A quotation request with the fields the commercial team needs",
            "Distributor and export information for other markets",
            "Bilingual structure where the market requires it",
          ]}
        />
      </Section>

      <FaqSection
        title="Questions from manufacturing teams"
        description="The ones that come up most often before a project starts."
        items={faqs}
        contact={{ label: "Ask a specific question", description: "Send us the problem and the current site. We will reply with an honest read on it.", href: proposalMailto }}
      />

      <CtaSection
        variant="centered"
        title="Help the right buyer understand the company and take the next step"
        description="We can review your current website and identify where buyers lose the thread: the product range, the proof, or the path to a quotation."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "Request a proposal", href: proposalMailto }}
        faces={[]}
      />
    </>
  );
}
