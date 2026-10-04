import type { Metadata } from "next";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { Figure } from "@/components/page/figure";
import { EvidenceStrip, FactList, HairlineList, LinkAction, PageIntro, Prose, Section, Split, Statement } from "@/components/page/section";
import { auditMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "PT Gunung Kendali Docking case study",
  description:
    "Structuring a complex engineering business so buyers can quickly understand its capabilities: nine service lines, five industries, and a proof architecture around them.",
};

export default function GunungKendaliCaseStudy() {
  return (
    <>
      <PageIntro
        title="PT Gunung Kendali Docking"
        description="Nine kinds of engineering work sold to five industries, which a buyer could not evaluate without booking a consultation first."
      >
        <LinkAction href="https://ptgunungkendalidocking.com/" primary external>View the live project</LinkAction>
      </PageIntro>

      <Section id="facts" width="read">
        <FactList
          facts={[
            { label: "Industry", value: "Marine and industrial engineering" },
            { label: "Engagement", value: "Corporate website" },
            { label: "Scope", value: "Strategy · Information architecture · UX · UI · Development" },
          ]}
        />
      </Section>

      <Section id="context" title="The context" width="read">
        <Prose>
          <p>
            PT Gunung Kendali Docking works on ships and on industrial plant: vessel docking, main and auxiliary engine repair, gearbox
            overhaul, boiler inspection and retubing, valve servicing, hydraulic and crane repair, alternator rewinding, electrical
            automation, and spare parts supply. The company has operated since 2021 and states that it has worked on more than a hundred
            marine projects.
          </p>
          <p>
            Its buyers are procurement and technical managers at shipyards, shipping companies, power plants, chemical plants, and heavy
            equipment operators. They are not browsing. They arrive with a machine that has stopped, or a docking window that is already
            booked.
          </p>
        </Prose>
      </Section>

      <Section id="problem" title="The problem" width="read">
        <Prose>
          <p>
            A company that does nine kinds of work looks unfocused when the work is presented as a list. The buyer&rsquo;s first question is
            not &ldquo;what services do you offer&rdquo; but &ldquo;do you do this job, on this equipment, in this industry&rdquo;, and the site had no way to
            answer it quickly.
          </p>
          <p>
            Proof existed but was disconnected. The company has worked with a substantial set of marine and industrial operators, and it
            publishes project write-ups, but a first-time visitor had no reason to trust any of it because the claims, the partners, and the
            completed work were not arranged around the capability they support.
          </p>
        </Prose>
      </Section>

      <Section id="change" title="What needed to change" width="read">
        <Statement>Make a technically complex engineering company understandable within a few minutes.</Statement>
        <Prose>
          <p>
            That means three things: every service line needs a page that says what it covers and who it is for, every industry needs to
            see its own context, and every claim needs evidence placed next to it. Then the commercial path has to be short, because this
            buyer is already in a hurry.
          </p>
        </Prose>
      </Section>

      <Section id="did" title="What we did">
        <Split>
          <Prose>
            <h3>Structured the services, the industries, and the proof around each other.</h3>
            <p>
              Each service became its own page with the equipment it covers, the work it involves, and the industries it applies to. A
              visitor who arrives looking for valve servicing lands on valve servicing rather than on a general capability list.
            </p>
            <p>
              We gave the five industries their own context, so a shipyard and a chemical plant read different pages about the same
              engineering capability. The service pages and the industry pages link to each other, which is how the buyer actually moves.
            </p>
            <p>
              We built the proof architecture: partner marks beside the claim of experience, published project case studies with the vessel
              and the work named, and a testimonial section that only carries approved quotes.
            </p>
            <p>
              Finally we made the next step consistent. A consultation, inspection, or quotation request appears at the end of every path
              rather than being hidden behind one contact page.
            </p>
          </Prose>
          <Figure
            name="vault"
            label="A vault door with a dial and three bolts, the bolts drawing back on the combination"
            caption="Nine capabilities, one answer to the buyer's first question."
            intensity={0.55}
          />
        </Split>
      </Section>

      <Section id="built" title="What we built">
        <HairlineList
          items={[
            "Nine service pages: vessel docking, engine repair, gearbox overhaul, boiler repair, valve service, hydraulic and crane, alternator and generator, electrical automation, and general supply",
            "Five industry contexts: shipyards, shipping companies, power plants, chemical plants, and heavy equipment",
            "A partner wall carrying the marine and industrial operators the company works with",
            "Published project case studies, with the vessel and the work named",
            "A testimonial section for approved client quotes",
            "A consultation and quotation path at the end of every service and industry page",
            "An FAQ section answering the questions that otherwise become the first sales call",
          ]}
        />
      </Section>

      <Section
        id="outcome"
        title="The outcome"
        lede="Counts of what was structured and shipped, plus one figure that belongs to the client rather than to us."
      >
        <EvidenceStrip
          items={[
            { label: "Engineering services structured", value: 9, context: "Docking, engines, gearboxes, boilers, valves, hydraulics, electrical, supply" },
            { label: "Industries represented", value: 5, context: "Shipyards, shipping, power plants, chemical, heavy equipment" },
            { label: "Published case studies", value: 3, context: "Engine overhauls and boiler maintenance on named vessels" },
            { label: "Named partner marks", value: 13, context: "Marine and industrial operators shown on the site" },
          ]}
        />
        <Prose>
          <p>
            The client states that it has worked on more than a hundred marine projects since 2021. That is the company&rsquo;s own figure,
            presented as theirs. We did not measure it and we do not present it as our result.
          </p>
          <p>
            We have not published an inquiry, conversion, or revenue figure for this project, because the client has not given us the
            analytics behind one.
          </p>
        </Prose>
        <LinkAction href="https://ptgunungkendalidocking.com/" primary external>View the live project</LinkAction>
      </Section>

      <CtaSection
        variant="centered"
        title="Selling technical capability to impatient buyers?"
        description="If your buyers cannot tell what you do within a few minutes, the site is costing you consultations. We can review it."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "Read the iMOW case study", href: "/work/imow" }}
        faces={[]}
      />
    </>
  );
}
