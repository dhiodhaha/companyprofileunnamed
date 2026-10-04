import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Figure } from "@/components/page/figure";
import { email, site } from "@/content/site";
import { PrintButton } from "./print-button";
import "./print.css";

export const metadata: Metadata = {
  title: "Company profile",
  description:
    "The Unnamed+ company profile: websites and web applications built around business goals, with two industrial case studies and the evidence behind them.",
  robots: { index: false, follow: false },
};

const TOTAL = 20;

/** One A4 sheet. The footer names the sheet, so a printed copy can be referenced in a meeting. */
function Sheet({ page, section, children }: { page: number; section: string; children: ReactNode }) {
  return (
    <section className="sheet" aria-label={`Page ${page} of ${TOTAL}: ${section}`}>
      <div className="rule" />
      <div className="body">{children}</div>
      <footer className="foot">
        <span className="brand">Unnamed+</span>
        <span className="section">{section}</span>
        <span className="tabular">
          {String(page).padStart(2, "0")} / {TOTAL}
        </span>
      </footer>
    </section>
  );
}

/** A slot for something that is not verified yet. It says so rather than pretending. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <div className="slot">
      <p className="small">{children}</p>
    </div>
  );
}

function Evidence({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="evidence">
      {items.map(item => (
        <div key={item.label}>
          <div className="value">{item.value}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function CompanyProfile() {
  return (
    <main className="print-preview">
      <div className="print-bar">
        <h1>Company profile</h1>
        <p>
          Twenty A4 pages. Screen shows the sheets as they will print. Numbers are counts of shipped work; anything unverified is marked as a
          slot rather than filled in.
        </p>
        <div className="actions">
          <PrintButton />
        </div>
      </div>

      {/* 01 Cover */}
      <Sheet page={1} section="Cover">
        <p className="display">Unnamed+</p>
        <h2 className="title">Websites and web applications built around business goals.</h2>
        <p className="lede">
          We combine product design and software engineering to help companies generate inquiries, communicate clearly, and simplify how work
          gets done.
        </p>
        <Figure
          name="exploded"
          label="An application window drawn in four layers"
          bare
          className="fig"
          intensity={0.6}
        />
        <div className="spread">
          <div className="studio-block">
            <span className="name">Unnamed+</span>
            <span className="line">Design and engineering studio</span>
            <span className="line">{email}</span>
            <span className="line">{site.replace("https://", "")}</span>
          </div>
          <p className="small">Websites · Web applications · Company profiles</p>
        </div>
      </Sheet>

      {/* 02 The client's problem */}
      <Sheet page={2} section="Start with the client's problem">
        <h2 className="title">Your website should make your business easier to understand, trust, and contact.</h2>
        <p className="lede">
          A company can grow faster than its digital presence. The business improves. The team grows. The offering becomes more capable. But the
          website stays the same.
        </p>
        <div className="group">
          <div className="cell">
            <h3>The business has changed. The website has not.</h3>
            <p>
              An outdated website can make an established company look smaller, less capable, or less relevant than it actually is.
            </p>
          </div>
          <div className="cell">
            <h3>People visit, but do not know what to do next.</h3>
            <p>
              A website can contain all the right information and still make it difficult to request a quote, contact sales, find a product, or
              understand why the company is worth considering.
            </p>
          </div>
        </div>
        <Figure name="riffle" label="A tray of cards, the one under the pointer standing up" bare className="fig compact" intensity={0.5} />
      </Sheet>

      {/* 03 The client's problem, continued */}
      <Sheet page={3} section="Start with the client's problem">
        <h2 className="title">The internal team does not have the capacity to rebuild it.</h2>
        <p className="lede">
          Marketing, IT, and management already have their own priorities. A website project needs someone to turn business requirements into
          structure, design, working software, and a finished launch.
        </p>
        <p className="statement">That is where we work.</p>
        <div className="group">
          <div className="cell">
            <h3>What we take on</h3>
            <ul className="list cols">
              <li>Working out what the product needs to achieve</li>
              <li>Structuring the information people have to understand</li>
              <li>Designing the interface and the paths through it</li>
              <li>Building and shipping the working product</li>
              <li>Handing over access, documentation, and support</li>
              <li>Keeping the decisions written down and reviewable</li>
            </ul>
          </div>
          <div className="cell">
            <h3>What we need from you</h3>
            <ul className="list cols">
              <li>Someone who can answer questions about the business</li>
              <li>Access to the material that already exists</li>
              <li>A decision maker for the review points</li>
              <li>An honest view of the constraints</li>
            </ul>
          </div>
        </div>
        <p className="copy">
          Most projects start because something concrete is not working: inquiries arrive without the information sales needs, buyers cannot tell
          which product fits them, or a process is being held together by hand.
        </p>
        <div className="group">
          <div className="cell">
            <h3>Where projects usually start</h3>
            <ul className="list cols">
              <li>The website describes the company, not the buyer&rsquo;s problem</li>
              <li>Sales answers the same questions on every call</li>
              <li>The product range is filed the way the company files it</li>
              <li>Proof exists but is not where the claim is made</li>
              <li>A process depends on one person&rsquo;s spreadsheet</li>
              <li>The last rebuild was never finished</li>
            </ul>
          </div>
        </div>
      </Sheet>

      {/* 04 Our approach */}
      <Sheet page={4} section="Our approach">
        <h2 className="title">We start with what the business needs the product to do.</h2>
        <p className="lede">
          Before deciding how a website should look, we define what it needs to help people understand or accomplish.
        </p>
        <div className="grid2">
          <div className="group">
            <div className="cell">
              <h3>Generate inquiries</h3>
              <p>Make it easier for potential customers to find the right information and contact sales.</p>
            </div>
            <div className="cell">
              <h3>Explain the business clearly</h3>
              <p>Turn complex products, services, and capabilities into information people can understand.</p>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Build credibility</h3>
              <p>Present the company, its work, facilities, certifications, and experience with the level of clarity the business deserves.</p>
            </div>
            <div className="cell">
              <h3>Reduce manual work</h3>
              <p>Build web applications and internal tools that simplify repetitive processes and fragmented workflows.</p>
            </div>
          </div>
        </div>
        <Figure name="terrain" label="A field of pillars on a plinth, rising around the pointer" bare className="fig compact" intensity={0.5} />
      </Sheet>

      {/* 05 Our approach, continued */}
      <Sheet page={5} section="Our approach">
        <h2 className="title">Four disciplines, one project.</h2>
        <div className="path">
          <div>Business context</div>
          <div className="arrow">→</div>
          <div>Product thinking</div>
          <div className="arrow">→</div>
          <div>Design</div>
          <div className="arrow">→</div>
          <div>Engineering</div>
        </div>
        <p className="copy">
          The order matters. Business context sets the constraints. Product thinking decides what to build and what to leave out. Design makes it
          understandable. Engineering makes it real, and it starts before design is finished, because feasibility is a design input rather than a
          later objection.
        </p>
        <p className="statement">The goal is not simply to deliver pages.</p>
        <p className="copy">
          The goal is to build something useful to the business and usable by the people it serves. Those are two different tests, and a project
          has to pass both.
        </p>
        <div className="group">
          <div className="cell">
            <h3>What keeping the four in one team changes</h3>
            <ul className="list cols">
              <li>No handover where the reason for a decision disappears</li>
              <li>No design that turns out to be unbuildable after approval</li>
              <li>Design decisions made with performance and content in view</li>
              <li>Technical decisions made with the user in view</li>
            </ul>
          </div>
        </div>
        <p className="copy">
          It also changes what we say no to. If a feature cannot be built well within the scope, we would rather take it out of this phase and
          write it down than ship something we will have to rebuild.
        </p>
        <Figure name="branches" label="A commit graph with a branch forking off the main line and merging back into it" bare className="fig compact" intensity={0.55} />
      </Sheet>

      {/* 06 What we build */}
      <Sheet page={6} section="What we build">
        <h2 className="title">What we build</h2>
        <div className="grid3">
          <div className="group">
            <div className="cell">
              <h3>Websites</h3>
              <p>
                Corporate websites, product websites, and campaign sites designed around clear business actions. From information architecture and
                interface design to development, CMS, analytics, and launch.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Web applications</h3>
              <p>
                Custom tools, dashboards, portals, and workflow applications built around a specific operational need. From product definition and
                interface design to software engineering and deployment.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Company profiles</h3>
              <p>
                Printed and digital company profiles that make a business easier to understand, evaluate, and remember. From information structure
                and writing to visual design and print-ready production.
              </p>
            </div>
          </div>
        </div>
        <p className="copy">
          Most engagements mix the three. A corporate website often needs a quotation workflow behind it. A company profile usually needs a
          digital version that doubles as a landing page.
        </p>
        <Figure name="router" label="A router with its antennas leaning toward the pointer" bare className="fig tight" intensity={0.5} />
      </Sheet>

      {/* 07 What the work needs to achieve */}
      <Sheet page={7} section="What the work needs to achieve">
        <h2 className="title">The deliverable changes. The goal stays clear.</h2>
        <p className="lede">Our work usually needs to help a business do one or more of three things.</p>
        <div className="grid3">
          <div className="group">
            <div className="cell">
              <h3>Convert</h3>
              <p>Turn attention into a business action.</p>
            </div>
            <div className="cell">
              <ul className="list">
                <li>Inquiry</li>
                <li>Request for quotation</li>
                <li>Sales contact</li>
                <li>Meeting</li>
                <li>Application</li>
                <li>Distributor inquiry</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Communicate</h3>
              <p>Make important information easier to understand.</p>
            </div>
            <div className="cell">
              <ul className="list">
                <li>Capabilities</li>
                <li>Products</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Certifications</li>
                <li>Company credentials</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Operate</h3>
              <p>Make work easier to manage.</p>
            </div>
            <div className="cell">
              <ul className="list">
                <li>Internal workflows</li>
                <li>Data entry</li>
                <li>Reporting</li>
                <li>Approvals</li>
                <li>Customer portals</li>
                <li>Operational tools</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="statement">We define the intended outcome before deciding what to build.</p>
        <div className="group">
          <div className="cell">
            <h3>How we choose, in four questions</h3>
            <ul className="list cols">
              <li>What outcome, in one sentence a stakeholder would recognise</li>
              <li>Who has to act for it to happen, and what they need to know first</li>
              <li>What we will look at to decide whether it worked</li>
              <li>The smallest product that reaches the outcome, and what waits</li>
            </ul>
          </div>
        </div>
        <p className="small">
          Where a client has analytics, we plan against real numbers. Where they do not, we say so, and we measure what the product itself can
          show: task steps, content coverage, response times, and the paths people take.
        </p>
      </Sheet>

      {/* 08 Why Unnamed */}
      <Sheet page={8} section="Why Unnamed">
        <h2 className="title">Design and engineering stay in the same team.</h2>
        <p className="lede">Unnamed+ is a compact design and engineering studio. We keep product thinking, design, and software development close together.</p>
        <div className="group">
          <div className="cell">
            <h3>Direct access to the people doing the work</h3>
            <p>
              The people discussing the problem are also involved in designing and building the solution. There are fewer layers between a business
              requirement and the person responsible for turning it into a working product.
            </p>
          </div>
          <div className="cell">
            <h3>Design with technical context</h3>
            <p>
              Design decisions consider feasibility, performance, content, and implementation from the start. What can be built well, what costs
              more than it returns, and what will be hard to maintain are answered while the design is still moving.
            </p>
          </div>
          <div className="cell">
            <h3>Engineering with user context</h3>
            <p>
              Technical decisions consider how people will actually use the product, not only whether the feature works. A form that saves
              correctly but reads badly has not solved the problem it was built for.
            </p>
          </div>
        </div>
        <p className="statement">Fewer handoffs. Clearer ownership.</p>
        <Figure name="branches" label="A commit graph with a branch forking off the main line and merging back into it" bare className="fig tight" intensity={0.5} />
      </Sheet>

      {/* 09 Why Unnamed, continued */}
      <Sheet page={9} section="Why Unnamed">
        <h2 className="title">A compact core team</h2>
        <p className="lede">
          We keep the core team small and extend it with trusted specialists when a project requires additional expertise. This gives each project
          clear ownership without pretending every problem needs a large agency team.
        </p>
        <div className="grid2">
          <div className="group">
            <div className="cell">
              <h3>What stays inside the core team</h3>
              <ul className="list">
                <li>Product definition and scope</li>
                <li>Information architecture and content structure</li>
                <li>Interface design and the visual system</li>
                <li>Front-end and back-end engineering</li>
                <li>Deployment, handover, and support</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>What we bring in when it is needed</h3>
              <ul className="list">
                <li>A particular platform or integration</li>
                <li>Print specification and production</li>
                <li>Security review</li>
                <li>Data migration</li>
                <li>Photography or illustration</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copy">
          The project still has one accountable core team. Specialists are brought in for a defined piece of work, and we tell you when a
          specialist is being added, what they are doing, and what it costs.
        </p>
        <p className="statement">Fewer handoffs. Clearer ownership.</p>
        <Figure name="lockers" label="A bank of lockers where the one under the pointer opens" bare className="fig tight" intensity={0.5} />
      </Sheet>

      {/* 10 How we work */}
      <Sheet page={10} section="How we work">
        <h2 className="title">A clear process from problem to launch</h2>
        <ol className="steps">
          <li>
            <span className="no">01</span>
            <div>
              <h3>Understand</h3>
              <p>We learn about the business, audience, current problems, constraints, and intended outcomes.</p>
              <p className="out">Output: project context and success criteria.</p>
            </div>
          </li>
          <li>
            <span className="no">02</span>
            <div>
              <h3>Define</h3>
              <p>We turn those requirements into scope, information architecture, technical requirements, milestones, and responsibilities.</p>
              <p className="out">Output: a clear project plan.</p>
            </div>
          </li>
          <li>
            <span className="no">03</span>
            <div>
              <h3>Design</h3>
              <p>We develop the content structure, user experience, interface, and prototypes needed to validate the direction.</p>
              <p className="out">Output: an approved product direction.</p>
            </div>
          </li>
          <li>
            <span className="no">04</span>
            <div>
              <h3>Build</h3>
              <p>We turn the approved design into a working website or application, in reviewable increments.</p>
              <p className="out">Output: a production-ready product.</p>
            </div>
          </li>
          <li>
            <span className="no">05</span>
            <div>
              <h3>Validate</h3>
              <p>We review functionality, responsiveness, content, browser compatibility, performance, and launch requirements.</p>
              <p className="out">Output: a tested release.</p>
            </div>
          </li>
          <li>
            <span className="no">06</span>
            <div>
              <h3>Launch and support</h3>
              <p>We deploy the product, hand over the required access and documentation, and support the team after launch.</p>
              <p className="out">Output: a working product your team can continue using.</p>
            </div>
          </li>
        </ol>
        <p className="copy">
          Every stage has something you review and something you receive, so progress is visible rather than reported.
        </p>
        <div className="group">
          <div className="cell">
            <h3>What you get at each stage</h3>
            <ul className="list cols">
              <li>Before production: scope, responsibilities, review points, and timelines in writing</li>
              <li>During production: work reviewed at defined stages, in a form you can open</li>
              <li>Before launch: functionality, content, browsers, devices, and performance signed off</li>
              <li>At launch: deployment, redirects, analytics, and a checklist</li>
              <li>At handover: source files, code, credentials, assets, and documentation</li>
              <li>After launch: support defined in advance, with who to contact</li>
            </ul>
          </div>
        </div>
      </Sheet>

      {/* 11 Case study 01 */}
      <Sheet page={11} section="Case study 01 · iMOW Indonesia">
        <h2 className="title">iMOW Indonesia</h2>
        <p className="lede">An industrial product range that a buyer could not evaluate without talking to a sales representative first.</p>
        <dl className="facts">
          <div>
            <dt>Industry</dt>
            <dd>Material handling and industrial equipment</dd>
          </div>
          <div>
            <dt>Engagement</dt>
            <dd>Corporate website and product platform</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Strategy · Information architecture · UX · UI · Development · CMS</dd>
          </div>
        </dl>
        <div className="group">
          <div className="cell">
            <h3>The context</h3>
            <p>
              iMOW sells electric forklifts and material handling equipment in Indonesia: diesel trucks, lead-acid and lithium battery forklifts,
              stackers, reach trucks, pallet trucks, order pickers, and tow tractors. The range is technical, the buyers are operational, and the
              decision is expensive enough that nobody makes it from a single page.
            </p>
          </div>
          <div className="cell">
            <h3>The problem</h3>
            <p>
              Products were listed by model name rather than by the job they do, so a buyer arriving with an operational question had to translate
              it into the company&rsquo;s internal product language first. Industry context was missing: a cold storage operator and an e-commerce
              fulfilment centre need different machines, and neither could see themselves on the site. The running cost comparison, the strongest
              commercial argument the company had, was not available to a visitor at all.
            </p>
          </div>
          <div className="cell">
            <h3>What needed to change</h3>
            <p>
              A buyer should be able to discover, evaluate, calculate, and inquire without a sales call. That is four steps, and each one needs
              its own structure: a product taxonomy that matches how buyers think, industry context and specification detail for evaluation, the
              cost comparison as a tool rather than a paragraph, and an inquiry path that is obvious at the moment the buyer is convinced.
            </p>
          </div>
        </div>
      </Sheet>

      {/* 12 Case study 01, continued */}
      <Sheet page={12} section="Case study 01 · iMOW Indonesia">
        <p className="statement">A buyer should be able to discover, evaluate, calculate, and inquire without a sales call.</p>
        <div className="group">
          <div className="cell">
            <h3>What we did</h3>
            <p>
              We reorganised the range into eight categories that follow how equipment is chosen: by power source, by handling task, and by
              application. We built four industry pages. We designed and built a total cost of ownership calculator that takes a buyer&rsquo;s fleet
              size and daily operating hours and returns an estimate of the saving against diesel or lead-acid equipment. Finally we structured the
              commercial paths so each one sits where the buyer is already ready for it.
            </p>
          </div>
          <div className="cell">
            <h3>What we built</h3>
            <ul className="list cols">
              <li>Eight product categories with model pages</li>
              <li>Four industry use case pages</li>
              <li>A total cost of ownership calculator</li>
              <li>Quotation, free trial, and catalogue paths</li>
              <li>Bilingual structure: English and Indonesian</li>
              <li>News and event content</li>
            </ul>
          </div>
        </div>
        <Evidence
          items={[
            { value: "8", label: "Product categories structured" },
            { value: "4", label: "Industry use cases" },
            { value: "2", label: "Languages supported" },
            { value: "1", label: "Interactive TCO calculator" },
          ]}
        />
        <p className="small">
          These are counts of what was structured and shipped, and can be checked by opening the site. We have not published a lead, conversion, or
          revenue figure for this project, because the client has not given us the analytics behind one.
        </p>
        <div className="qr-row">
          <div className="qr">
            <strong>QR</strong>
            <span>Project</span>
          </div>
          <p className="small">
            View the project at imow-indonesia.com. The code is generated when the profile goes to print, so it always points at the live site.
          </p>
        </div>
      </Sheet>

      {/* 13 Case study 02 */}
      <Sheet page={13} section="Case study 02 · PT Gunung Kendali Docking">
        <h2 className="title">PT Gunung Kendali Docking</h2>
        <p className="lede">Nine kinds of engineering work sold to five industries, which a buyer could not evaluate without booking a consultation first.</p>
        <dl className="facts">
          <div>
            <dt>Industry</dt>
            <dd>Marine and industrial engineering</dd>
          </div>
          <div>
            <dt>Engagement</dt>
            <dd>Corporate website</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Strategy · Information architecture · UX · UI · Development</dd>
          </div>
        </dl>
        <div className="group">
          <div className="cell">
            <h3>The context</h3>
            <p>
              PT Gunung Kendali Docking works on ships and on industrial plant: vessel docking, main and auxiliary engine repair, gearbox overhaul,
              boiler inspection and retubing, valve servicing, hydraulic and crane repair, alternator rewinding, electrical automation, and spare
              parts supply. Its buyers are procurement and technical managers at shipyards, shipping companies, power plants, chemical plants, and
              heavy equipment operators. They arrive with a machine that has stopped, or a docking window that is already booked.
            </p>
          </div>
          <div className="cell">
            <h3>The problem</h3>
            <p>
              A company that does nine kinds of work looks unfocused when the work is presented as a list. The buyer&rsquo;s first question is not
              &ldquo;what services do you offer&rdquo; but &ldquo;do you do this job, on this equipment, in this industry&rdquo;, and the site had no
              way to answer it quickly. Proof existed but was disconnected from the claims it supported.
            </p>
          </div>
          <div className="cell">
            <h3>What needed to change</h3>
            <p>
              Make a technically complex engineering company understandable within a few minutes. Every service line needs a page that says what it
              covers and who it is for, every industry needs to see its own context, and every claim needs evidence placed next to it. Then the
              commercial path has to be short, because this buyer is already in a hurry.
            </p>
          </div>
        </div>
      </Sheet>

      {/* 14 Case study 02, continued */}
      <Sheet page={14} section="Case study 02 · PT Gunung Kendali Docking">
        <p className="statement">Make a technically complex engineering company understandable within a few minutes.</p>
        <div className="group">
          <div className="cell">
            <h3>What we did</h3>
            <p>
              Each service became its own page with the equipment it covers, the work it involves, and the industries it applies to. We gave the five
              industries their own context, so a shipyard and a chemical plant read different pages about the same capability, and linked the two
              sets to each other. We built the proof architecture: partner marks beside the claim of experience, published case studies with the
              vessel and the work named, and testimonials only where the client has approved the wording.
            </p>
          </div>
          <div className="cell">
            <h3>What we built</h3>
            <ul className="list cols">
              <li>Nine service pages with their equipment and scope</li>
              <li>Five industry contexts, cross-linked with services</li>
              <li>A partner wall of marine and industrial operators</li>
              <li>Published project case studies</li>
              <li>A consultation and quotation path on every page</li>
              <li>An FAQ answering the questions that become first calls</li>
            </ul>
          </div>
        </div>
        <Evidence
          items={[
            { value: "9", label: "Engineering services structured" },
            { value: "5", label: "Industries represented" },
            { value: "3", label: "Published case studies" },
            { value: "13", label: "Named partner marks" },
          ]}
        />
        <p className="small">
          The client states that it has worked on more than 100 marine projects since 2021. That is the company&rsquo;s own figure, presented as
          theirs. We did not measure it and we do not present it as our result.
        </p>
        <div className="qr-row">
          <div className="qr">
            <strong>QR</strong>
            <span>Project</span>
          </div>
          <p className="small">
            View the project at ptgunungkendalidocking.com. The code is generated when the profile goes to print, so it always points at the live
            site.
          </p>
        </div>
      </Sheet>

      {/* 15 Selected work */}
      <Sheet page={15} section="Selected work">
        <h2 className="title">Selected work</h2>
        <p className="lede">A selection of websites and digital products we have designed and built.</p>
        <div>
          <div className="work-row">
            <span className="name">iMOW Indonesia</span>
            <span className="type">Corporate website and product platform</span>
            <span className="note">
              An industrial electric forklift range restructured around the buyer&rsquo;s decision, with a total cost of ownership calculator and
              three commercial paths.
            </span>
          </div>
          <div className="work-row">
            <span className="name">PT Gunung Kendali Docking</span>
            <span className="type">Corporate website</span>
            <span className="note">
              Nine marine and industrial service lines and five industries, structured so a buyer can tell within minutes whether the company does
              their job.
            </span>
          </div>
        </div>
        <Slot>
          Further projects are published once each client has approved the wording. We do not describe client work in a way that identifies them
          anyway, and we do not fill this page with work we cannot show.
        </Slot>
        <div className="group">
          <div className="cell">
            <h3>Every case study on this page states</h3>
            <ul className="list cols">
              <li>The business problem, in the client&rsquo;s terms</li>
              <li>What was difficult, unclear, inefficient, or outdated</li>
              <li>What needed to change before design was discussed</li>
              <li>The decisions we made and why</li>
              <li>What was built, in countable terms</li>
              <li>The outcome, using only evidence that can be verified</li>
            </ul>
          </div>
        </div>
        <div className="spread">
          <div className="qr-row">
            <div className="qr">
              <strong>QR</strong>
              <span>Portfolio</span>
            </div>
            <p className="small">The full portfolio is sent on request, including the projects that stay off a public page.</p>
          </div>
        </div>
      </Sheet>

      {/* 16 Manufacturing insert */}
      <Sheet page={16} section="Manufacturing">
        <h2 className="title">Websites for manufacturing companies</h2>
        <p className="lede">Make it easier for buyers to understand what your company can do.</p>
        <p className="copy">
          Manufacturing businesses often need to communicate a large amount of technical and commercial information. A corporate website should
          help buyers find that information without relying on a sales representative to explain everything first.
        </p>
        <div className="grid2">
          <div className="group">
            <div className="cell">
              <h3>Products and specifications</h3>
              <p>Help buyers find the right product and its technical information.</p>
            </div>
            <div className="cell">
              <h3>Manufacturing capabilities</h3>
              <p>Explain facilities, processes, capacity, machinery, and areas of expertise.</p>
            </div>
            <div className="cell">
              <h3>Certifications and standards</h3>
              <p>Make relevant credentials easy to find and verify.</p>
            </div>
            <div className="cell">
              <h3>Industries served</h3>
              <p>Show where the company&rsquo;s capabilities are already being applied.</p>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Request for quotation</h3>
              <p>Give qualified prospects a clear path to the commercial team.</p>
            </div>
            <div className="cell">
              <h3>Distributor and export information</h3>
              <p>Support buyers, partners, and distributors across different markets.</p>
            </div>
            <div className="cell">
              <h3>Company credentials</h3>
              <p>Present the scale and experience of the business with the clarity it deserves.</p>
            </div>
            <div className="cell">
              <h3>Where most sites fail</h3>
              <p>Buyer language, proof separated from the claim, and a quotation path that asks the wrong questions.</p>
            </div>
          </div>
        </div>
        <p className="statement">Help the right buyer understand the company and take the next step.</p>
      </Sheet>

      {/* 17 Team */}
      <Sheet page={17} section="Team">
        <h2 className="title">A compact multidisciplinary team</h2>
        <p className="lede">Unnamed+ brings product, design, and engineering into one core team.</p>
        <div className="grid2">
          <div className="group">
            <div className="cell">
              <h3>Product engineer</h3>
              <p>Product thinking · Interface design · Front-end engineering</p>
            </div>
            <div className="cell">
              <h3>Product engineer</h3>
              <p>Product strategy · Software engineering · Technical architecture</p>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>Software engineer</h3>
              <p>Back-end engineering · Infrastructure · Integrations</p>
            </div>
            <div className="cell">
              <h3>UI designer</h3>
              <p>Interface design · Visual systems · Design production</p>
            </div>
          </div>
        </div>
        <Slot>
          Names and portraits are added when each person has approved how they appear. The roles above describe the work, which does not change.
        </Slot>
        <p className="copy">
          When a project requires expertise outside the core team, we work with specialists from our trusted engineering network. The project still
          has one accountable core team.
        </p>
        <div className="group">
          <div className="cell">
            <h3>What stays inside the core team</h3>
            <ul className="list cols">
              <li>Product definition and scope</li>
              <li>Information architecture and content structure</li>
              <li>Interface design and the visual system</li>
              <li>Front-end and back-end engineering</li>
              <li>Deployment, handover, and support</li>
              <li>Accountability for the delivered work</li>
            </ul>
          </div>
        </div>
        <Figure name="lockers" label="A bank of lockers where the one under the pointer opens" bare className="fig tight" intensity={0.5} />
      </Sheet>

      {/* 18 Delivery and governance */}
      <Sheet page={18} section="Delivery and governance">
        <h2 className="title">Clear ownership throughout the project</h2>
        <p className="lede">Good work is not enough if the process is difficult to manage.</p>
        <ul className="checks">
          <li>Defined scope and milestones agreed before production begins</li>
          <li>One accountable project lead from start to launch</li>
          <li>Regular reviews at defined stages, not at the end</li>
          <li>Quality assurance across devices, browsers, content, and performance</li>
          <li>Clear handover of source files, code, credentials, and documentation</li>
          <li>Support requirements defined before launch</li>
          <li>Semantics, keyboard use, contrast, and reduced motion treated as requirements</li>
          <li>Findings written down and fixed, not summarised as minor issues</li>
        </ul>
        <div className="group">
          <div className="cell">
            <h3>For procurement and vendor onboarding</h3>
            <p>
              Company registration, tax, and contract documents are supplied as part of procurement, once they have been verified. We work under
              your contract or ours, and sign a non-disclosure agreement where the work involves information you do not want shared. You own the
              delivered work: code, source files, assets, and accounts are handed over or transferred as agreed.
            </p>
          </div>
        </div>
        <Figure name="vault" label="A vault door with a dial and three bolts" bare className="fig tight" intensity={0.5} />
      </Sheet>

      {/* 19 Proof */}
      <Sheet page={19} section="Proof">
        <h2 className="title">What we publish, and what we refuse to claim.</h2>
        <p className="lede">
          A studio can describe its work in ways nobody can check. We would rather show fewer numbers and have each one hold up.
        </p>
        <div className="grid2">
          <div className="group">
            <div className="cell">
              <h3>What we publish today</h3>
              <ul className="list">
                <li>Counts of what was structured, written, designed, and built</li>
                <li>The scope of each engagement</li>
                <li>Client claims labelled as the client&rsquo;s own</li>
                <li>Technical results we measured ourselves</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="cell">
              <h3>What we do not publish</h3>
              <ul className="list">
                <li>Revenue uplift without the client&rsquo;s analytics</li>
                <li>Conversion percentages we cannot support</li>
                <li>Testimonials the client has not approved</li>
                <li>Client logos without permission</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="cell">
            <h3>Four kinds of evidence, and who can measure each one</h3>
            <ul className="list cols">
              <li>Product output: pages, products structured, languages, features. We can count these today.</li>
              <li>Technical output: performance, accessibility, page weight, responsive coverage. We measure these with tools.</li>
              <li>User impact: task time, steps, completion. Measurable in some projects, with the client and their users.</li>
              <li>Business impact: revenue, inquiries, savings. Requires the client&rsquo;s analytics.</li>
            </ul>
          </div>
        </div>
        <Slot>
          Testimonials and client marks appear here once each client has approved the exact wording and how they are named. Until then the space
          stays empty rather than filled with something we cannot stand behind. If you would like to talk to a reference, ask us and we will
          arrange it directly.
        </Slot>
        <p className="small">
          Numbers about projects delivered, years of operation, and repeat clients are added when they can be supported. We do not publish a figure
          until then.
        </p>
      </Sheet>

      {/* 20 Next step */}
      <Sheet page={20} section="Next step">
        <h2 className="title">Find out what your website could do better.</h2>
        <p className="lede">
          We can review your current website and identify where its structure, content, design, or technology may be making it harder for people to
          understand your business or take action.
        </p>
        <div className="group">
          <div className="cell">
            <h3>The audit covers</h3>
            <ul className="list cols">
              <li>Positioning and message clarity</li>
              <li>Information structure</li>
              <li>Calls to action</li>
              <li>Mobile experience</li>
              <li>Technical performance</li>
              <li>Obvious conversion friction</li>
            </ul>
          </div>
        </div>
        <div className="qr-row">
          <div className="qr">
            <strong>QR</strong>
            <span>Audit</span>
          </div>
          <div>
            <p className="item-title">Request a website audit</p>
            <p className="small">
              Scan the code or write to {email}. You get the findings in writing, ranked by what is likely to matter most, with what we would fix
              first and what we would leave alone. If the site does not need a rebuild, the audit will say so.
            </p>
          </div>
        </div>
        <div className="cta-row">
          <span className="item-title">Already have a project in mind?</span>
          <span className="small">Book a 30-minute discovery call, or ask for a proposal.</span>
        </div>
        <div className="spread">
          <div className="studio-block">
            <span className="name">Unnamed+</span>
            <span className="line">Design and engineering studio</span>
            <span className="line">{email}</span>
            <span className="line">{site.replace("https://", "")}</span>
          </div>
        </div>
      </Sheet>
    </main>
  );
}
