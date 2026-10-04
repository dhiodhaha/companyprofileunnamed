import type { Metadata } from "next";
import { HeroSection } from "@/components/arc/blocks/hero-section/hero-section";
import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { FaqSection } from "@/components/arc/blocks/faq-section/faq-section";
import { Figure } from "@/components/page/figure";
import {
  Card,
  CardBody,
  CardGrid,
  EvidenceStrip,
  Feature,
  FeatureGrid,
  HairlineList,
  LinkAction,
  Prose,
  Section,
  Split,
  Statement,
  StepList,
} from "@/components/page/section";
import { auditMailto, discoveryMailto, email } from "@/content/site";

export const metadata: Metadata = {
  title: "Design and engineering studio",
  description:
    "Unnamed+ builds websites and web applications around business goals: generate inquiries, communicate clearly, and simplify how work gets done.",
};

const steps = [
  { title: "Understand", body: "We learn about the business, audience, current problems, constraints, and intended outcomes.", output: "project context and success criteria" },
  { title: "Define", body: "We turn those requirements into scope, information architecture, technical requirements, milestones, and responsibilities.", output: "a clear project plan" },
  { title: "Design", body: "We develop the content structure, user experience, interface, and prototypes needed to validate the direction.", output: "an approved product direction" },
  { title: "Build", body: "We turn the approved design into a working website or application.", output: "a production-ready product" },
  { title: "Validate", body: "We review functionality, responsiveness, content, browser compatibility, performance, and launch requirements.", output: "a tested release" },
  { title: "Launch and support", body: "We deploy the product, hand over the required access and documentation, and support the team after launch.", output: "a working product your team can continue using" },
];

const faqs = [
  {
    question: "What do you need from us to start?",
    answer: "A person who can answer questions about the business, access to whatever material already exists, and a decision-maker for the review points. We ask for the rest as the project needs it, not all at once.",
    category: "Working together",
  },
  {
    question: "How long does a project take?",
    answer: "Scope decides it. A corporate website and a workflow application are different sizes of project, so we agree milestones after the define stage, when the scope is real rather than estimated.",
    category: "Working together",
  },
  {
    question: "Do you work with our existing developers?",
    answer: "Yes. We can hand over designs, components, and documentation to an internal team, or work alongside them for part of the build. We say which of the two we recommend before the project starts.",
    category: "Working together",
  },
  {
    question: "Who owns the work?",
    answer: "You do. Source files, code, credentials, assets, and documentation are handed over as agreed in the project plan.",
    category: "Working together",
  },
  {
    question: "Can you maintain the site after launch?",
    answer: "Support requirements are defined before launch, so both teams know what happens after release. It can be a fixed support period, an ongoing arrangement, or a clean handover to your team.",
    category: "After launch",
  },
  {
    question: "Do you only build new sites?",
    answer: "No. Some projects improve what exists: restructuring content, rebuilding the front end, or adding an application beside the current site. We review the current site first and say plainly when a rebuild is not the right next step.",
    category: "After launch",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection
        variant="split"
        title="Websites and web applications built around business goals"
        description="We combine product design and software engineering to help companies generate inquiries, communicate clearly, and simplify how work gets done."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "See selected work", href: "/work" }}
        media={<Figure name="exploded" label="An application window drawn in four layers" intensity={0.6} bare />}
        meta={["Websites", "Web applications", "Company profiles"]}
      />

      <Section
        id="problem"
        title="Your website should make your business easier to understand, trust, and contact"
        lede="A company can grow faster than its digital presence. The business improves, the team grows, the offering becomes more capable, and the website stays the same."
      >
        <FeatureGrid columns={3}>
          <Feature title="The business has changed. The website has not">
            An outdated website can make an established company look smaller, less capable, or less relevant than it actually is.
          </Feature>
          <Feature title="People visit, but do not know what to do next">
            A website can contain all the right information and still make it difficult to request a quote, contact sales, find a product, or understand why the company is worth considering.
          </Feature>
          <Feature title="The internal team does not have the capacity to rebuild it">
            Marketing, IT, and management already have their own priorities. A website project needs someone to turn business requirements into structure, design, working software, and a finished launch.
          </Feature>
        </FeatureGrid>
        <Statement>That is where we work.</Statement>
      </Section>

      <Section
        id="approach"
        title="We start with what the business needs the product to do"
        lede="Before deciding how a website should look, we define what it needs to help people understand or accomplish."
      >
        <FeatureGrid columns={4}>
          <Feature title="Generate inquiries">Make it easier for potential customers to find the right information and contact sales.</Feature>
          <Feature title="Explain the business clearly">Turn complex products, services, and capabilities into information people can understand.</Feature>
          <Feature title="Build credibility">Present the company, its work, facilities, certifications, and experience with the level of clarity the business deserves.</Feature>
          <Feature title="Reduce manual work">Build web applications and internal tools that simplify repetitive processes and fragmented workflows.</Feature>
        </FeatureGrid>
        <Prose>
          <h3>Business context, product thinking, design, engineering</h3>
          <p>
            From there, we bring four disciplines into the same project. The goal is not simply to deliver pages. The goal is to build
            something useful to the business and usable by the people it serves.
          </p>
        </Prose>
      </Section>

      <Section id="what-we-build" title="What we build" lede="Three kinds of project, each with its own definition of done.">
        <CardGrid columns={3}>
          <Card title="Websites">
            <CardBody>
              Corporate websites, product websites, and campaign sites designed around clear business actions. From information
              architecture and interface design to development, CMS, analytics, and launch.
            </CardBody>
          </Card>
          <Card title="Web applications">
            <CardBody>
              Custom tools, dashboards, portals, and workflow applications built around a specific operational need. From product
              definition and interface design to software engineering and deployment.
            </CardBody>
          </Card>
          <Card title="Company profiles">
            <CardBody>
              Printed and digital company profiles that make a business easier to understand, evaluate, and remember. From information
              structure and writing to visual design and print-ready production.
            </CardBody>
          </Card>
        </CardGrid>
        <LinkAction href="/what-we-build">See what each project covers</LinkAction>
      </Section>

      <Section
        id="outcomes"
        title="The deliverable changes. The goal stays clear"
        lede="Our work usually needs to help a business do one or more of three things. We define the intended outcome before deciding what to build."
      >
        <CardGrid columns={3}>
          <Card title="Convert">
            <CardBody>Turn attention into a business action.</CardBody>
            <HairlineList items={["Inquiry", "Request for quotation", "Sales contact", "Meeting", "Application", "Distributor inquiry"]} />
          </Card>
          <Card title="Communicate">
            <CardBody>Make important information easier to understand.</CardBody>
            <HairlineList items={["Capabilities", "Products", "Services", "Experience", "Certifications", "Company credentials"]} />
          </Card>
          <Card title="Operate">
            <CardBody>Make work easier to manage.</CardBody>
            <HairlineList items={["Internal workflows", "Data entry", "Reporting", "Approvals", "Customer portals", "Operational tools"]} />
          </Card>
        </CardGrid>
        <LinkAction href="/outcomes">See how we define the outcome</LinkAction>
      </Section>

      <Section id="why-unnamed" title="Design and engineering stay in the same team">
        <Split>
          <Prose>
            <h3>Direct access to the people doing the work</h3>
            <p>
              Unnamed+ is a compact design and engineering studio. The people discussing the problem are also involved in designing and
              building the solution, so there are fewer layers between a business requirement and the person responsible for turning it
              into a working product.
            </p>
            <p>
              Design decisions consider feasibility, performance, content, and implementation from the start. Technical decisions
              consider how people will actually use the product, not only whether the feature works.
            </p>
            <p>
              We keep the core team small and extend it with trusted specialists when a project requires additional expertise. Each
              project gets clear ownership without pretending every problem needs a large agency team.
            </p>
          </Prose>
          <Figure
            name="branches"
            label="A commit graph with a branch forking off the main line and merging back into it"
            caption="Two tracks of work, one history. Design and engineering decisions land in the same place."
            intensity={0.55}
          />
        </Split>
        <Statement>Fewer handoffs. Clearer ownership.</Statement>
        <LinkAction href="/why-unnamed">Read why companies work with us</LinkAction>
      </Section>

      <Section id="process" title="A clear process from problem to launch" lede="Six stages, each with something you can review and something you receive.">
        <StepList steps={steps} />
        <LinkAction href="/process">Read the process in full</LinkAction>
      </Section>

      <Section
        id="work"
        title="Selected work"
        lede="Two industrial projects, described by what was structured and shipped. Those counts can be checked by opening the product, so we publish them. Business results we cannot verify, we do not publish."
      >
        <Split>
          <Prose>
            <h3>iMOW Indonesia</h3>
            <p>
              A catalogue of industrial electric forklifts became a platform that helps a buyer find the right machine, work out what it
              costs to run, and ask for a quotation or a trial without a sales call first.
            </p>
            <p>
              The work was mostly structure: eight product categories, four industry use cases, two languages, and one interactive
              total cost of ownership calculator that turns an operational question into a number a buyer can act on.
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
              A marine and industrial engineering company sells nine kinds of work to five industries, from shipyards to chemical
              plants. The website had to make that range legible in a few minutes, because a buyer who cannot tell what the company does
              will not book the consultation.
            </p>
            <p>
              We structured the services, the industries, the proof, and the case studies, and gave every path one clear next step.
            </p>
            <LinkAction href="/work/gunung-kendali">Read the Gunung Kendali case study</LinkAction>
          </Prose>
          <EvidenceStrip
            items={[
              { label: "Engineering services structured", value: 9, context: "Docking, engines, gearboxes, boilers, valves, hydraulics, electrical, supply" },
              { label: "Industries represented", value: 5, context: "Shipyards, shipping, power plants, chemical, heavy equipment" },
              { label: "Published project case studies", value: 3, context: "Engine overhauls and boiler maintenance on named vessels" },
            ]}
          />
        </Split>
        <LinkAction href="/work">See all selected work</LinkAction>
      </Section>

      <Section id="manufacturing" title="Websites for manufacturing companies">
        <Split>
          <Prose>
            <h3>Make it easier for buyers to understand what your company can do.</h3>
            <p>
              Manufacturing businesses often need to communicate a large amount of technical and commercial information. A corporate
              website should help buyers find that information without relying on a sales representative to explain everything first.
            </p>
            <HairlineList
              items={[
                "Products and specifications, so buyers find the right product and its technical data",
                "Manufacturing capabilities: facilities, processes, capacity, machinery, and areas of expertise",
                "Certifications and standards that are easy to find and verify",
                "Industries served, so buyers see where the capability is already applied",
                "A clear path to a request for quotation",
                "Distributor and export information for partners in different markets",
              ]}
            />
            <p>Help the right buyer understand the company and take the next step.</p>
          </Prose>
          <Figure
            name="cabinet"
            label="A rack of twelve blades with the ones nearest the pointer pulled out"
            caption="Depth without clutter. A buyer opens the drawer that matters to them."
            intensity={0.55}
          />
        </Split>
        <LinkAction href="/manufacturing">See the manufacturing page</LinkAction>
      </Section>

      <Section id="proof" title="Proof" lede="What we can show, and what we refuse to claim.">
        <CardGrid columns={2}>
          <Card title="Counts you can check">
            <CardBody>
              We publish what was structured, written, designed, and built, because anyone can open the product and count it. We do not
              publish a revenue, lead, or conversion figure unless the client has given us the analytics behind it.
            </CardBody>
          </Card>
          <Card title="Client words, when the client has approved them">
            <CardBody>
              Testimonials and client names appear once the client has approved the exact wording. Until then the space stays empty
              rather than filled with something we cannot stand behind.
            </CardBody>
          </Card>
        </CardGrid>
        <LinkAction href="/proof">Read the evidence policy</LinkAction>
      </Section>

      <FaqSection
        title="Questions we are asked before a project starts"
        description="If the answer you need is not here, write to the studio and we will answer it directly."
        items={faqs}
        contact={{ label: "Ask us directly", description: "Email the studio and we will reply with a real answer, not a brochure.", href: `mailto:${email}` }}
      />

      <CtaSection
        variant="centered"
        title="Find out what your website could do better"
        description="We can review your current website and identify where its structure, content, design, or technology may be making it harder for people to understand your business or take action."
        primaryAction={{ label: "Request a website audit", href: auditMailto }}
        secondaryAction={{ label: "Book a 30-minute discovery call", href: discoveryMailto }}
        note="Already have a project in mind? Ask for a proposal and we will come back with scope, milestones, and a price."
        faces={[]}
      />
    </>
  );
}
