import React, { useState } from "react";

const ArgumentAnalysisGuide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderHeader = () => (
    <div className="bg-blue-800 text-white p-6 rounded-t-lg">
      <h1 className="text-3xl font-bold mb-2">
        Week 1: Foundations of Effective Argument Analysis
      </h1>
      <p className="text-lg">
        An interactive visual guide to understanding and dismantling arguments
      </p>
    </div>
  );

  const renderNavigation = () => (
    <div className="flex flex-wrap p-2 bg-blue-100 sticky top-0 z-10">
      <NavButton id="overview" text="Overview" />
      <NavButton id="argument-anatomy" text="Argument Anatomy" />
      <NavButton id="source-verification" text="Source Verification" />
      <NavButton id="strong-weak" text="Strong vs. Weak Arguments" />
      <NavButton id="case-study" text="Huff-Carson Framework" />
    </div>
  );

  const NavButton = ({ id, text }) => (
    <button
      className={`px-4 py-2 m-1 rounded-lg ${
        activeSection === id
          ? "bg-blue-600 text-white"
          : "bg-white hover:bg-blue-50"
      }`}
      onClick={() => setActiveSection(id)}
    >
      {text}
    </button>
  );

  const ExpandableSection = ({ id, title, children }) => (
    <div className="mb-4 border rounded-lg overflow-hidden bg-white">
      <button
        className="w-full p-4 text-left font-semibold bg-blue-50 hover:bg-blue-100 flex justify-between items-center"
        onClick={() => toggleExpand(id)}
      >
        {title}
        <span>{expandedItems[id] ? "−" : "+"}</span>
      </button>
      {expandedItems[id] && <div className="p-4">{children}</div>}
    </div>
  );

  const renderOverview = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
      <p className="mb-4">
        Welcome to Week 1 of our course on effective argument analysis. This
        week establishes the foundations you'll need to identify, evaluate, and
        dismantle arguments effectively.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <OverviewCard
          title="Lecture 1"
          subtitle="The Anatomy of Arguments"
          description="Learn to identify claims, evidence, and reasoning in any argument"
          icon="📝"
        />
        <OverviewCard
          title="Lecture 2"
          subtitle="Source Verification Fundamentals"
          description="Develop skills to verify and evaluate sources effectively"
          icon="🔍"
        />
        <OverviewCard
          title="Workshop"
          subtitle="Identifying Strong vs. Weak Arguments"
          description="Practice distinguishing between compelling and flawed arguments"
          icon="💪"
        />
        <OverviewCard
          title="Case Study"
          subtitle="The Huff-Carson Debate Framework"
          description="Study effective techniques for dismantling weak arguments"
          icon="⚔️"
        />
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <h3 className="font-bold">Learning Journey</h3>
        <p>
          This interactive guide will help you navigate the key concepts from
          Week 1. Use the navigation bar above to explore different sections,
          and click on expandable sections to reveal detailed content.
        </p>
      </div>
    </div>
  );

  const OverviewCard = ({ title, subtitle, description, icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <h4 className="text-blue-700 font-semibold">{subtitle}</h4>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );

  const renderArgumentAnatomy = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">The Anatomy of Arguments</h2>
      <p className="mb-6">
        Every argument consists of three essential components that work together
        to create a persuasive whole. Understanding this structure is key to
        effective analysis.
      </p>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl">
          <h3 className="text-xl font-bold text-center mb-6">
            Core Components of an Argument
          </h3>

          <div className="flex flex-col md:flex-row justify-between">
            <ArgumentComponent
              title="Claims"
              description="Assertions or positions that the arguer wants the audience to accept"
              color="blue"
            />
            <ArgumentComponent
              title="Evidence"
              description="Supporting information presented to validate the claims"
              color="green"
            />
            <ArgumentComponent
              title="Reasoning"
              description="The logical connections made between evidence and claims"
              color="purple"
            />
          </div>
        </div>
      </div>

      <ExpandableSection
        id="claims"
        title="Claims: The Foundation of Arguments"
      >
        <h4 className="font-bold mb-2">Types of Claims:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <ClaimTypeCard
            type="Factual Claims"
            example="The Codex Sinaiticus dates to the 4th century CE"
            description="Assertions about what is or is not the case; can be verified or falsified through evidence"
          />
          <ClaimTypeCard
            type="Interpretive Claims"
            example="The absence of certain passages indicates intentional omission"
            description="Assertions about the meaning or significance of facts; requires interpretive frameworks"
          />
          <ClaimTypeCard
            type="Evaluative Claims"
            example="This source is more reliable than that one"
            description="Assertions involving judgments or values; incorporates criteria and standards"
          />
          <ClaimTypeCard
            type="Prescriptive Claims"
            example="Historians should prioritize earlier manuscripts"
            description="Assertions about what should be done; combines factual premises with value judgments"
          />
        </div>

        <h4 className="font-bold mb-2">Recognizing Claim Types:</h4>
        <ul className="list-disc pl-6">
          <li>
            Pay attention to language indicators (is/was vs. means/signifies vs.
            should/ought)
          </li>
          <li>Identify unstated assumptions underlying claims</li>
          <li>
            Note the scope and specificity of claims (universal vs. particular)
          </li>
        </ul>
      </ExpandableSection>

      <ExpandableSection id="evidence" title="Evidence: The Support Structure">
        <h4 className="font-bold mb-2">Categories of Evidence:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <EvidenceCard
            type="Empirical"
            description="Observable data, physical artifacts, measurements"
          />
          <EvidenceCard
            type="Testimonial"
            description="Accounts, quotations, reported experiences"
          />
          <EvidenceCard
            type="Authoritative"
            description="Expert opinions, scholarly consensus"
          />
          <EvidenceCard
            type="Analogical"
            description="Comparisons and parallels to known cases"
          />
          <EvidenceCard
            type="Statistical"
            description="Numerical data, trends, patterns"
          />
        </div>

        <h4 className="font-bold mb-2">Characteristics of Strong Evidence:</h4>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Relevance:</span> Directly relates
              to the claim being supported
            </li>
            <li>
              <span className="font-semibold">Accuracy:</span> Precise and
              correct in representation
            </li>
            <li>
              <span className="font-semibold">Sufficiency:</span> Adequate in
              quantity and quality
            </li>
            <li>
              <span className="font-semibold">Representativeness:</span>{" "}
              Reflects broader patterns
            </li>
            <li>
              <span className="font-semibold">Verifiability:</span> Can be
              confirmed by independent observers
            </li>
          </ul>
        </div>

        <h4 className="font-bold mb-2">Red Flags in Evidence Presentation:</h4>
        <div className="bg-red-50 p-4 rounded-lg">
          <ul className="space-y-2">
            <li>Cherry-picked examples that ignore contradictory cases</li>
            <li>Outdated or superseded sources</li>
            <li>Misrepresented or distorted source material</li>
            <li>Anonymous or untraceable sources</li>
            <li>Secondary or tertiary sources presented as primary</li>
          </ul>
        </div>
      </ExpandableSection>

      <ExpandableSection
        id="reasoning"
        title="Reasoning: The Connective Tissue"
      >
        <h4 className="font-bold mb-2">Common Reasoning Patterns:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <ReasoningCard
            type="Deductive"
            description="Moving from general principles to specific conclusions"
            example="All primary sources require verification; this is a primary source; therefore, this source requires verification."
          />
          <ReasoningCard
            type="Inductive"
            description="Deriving general patterns from specific observations"
            example="The last 5 manuscripts examined contained this passage; therefore, most manuscripts likely contain this passage."
          />
          <ReasoningCard
            type="Abductive"
            description="Inferring the most likely explanation for observations"
            example="This manuscript contains phrases from Dante; Dante wrote in the 14th century; therefore, this manuscript likely dates after the 14th century."
          />
          <ReasoningCard
            type="Analogical"
            description="Drawing parallels between similar cases or situations"
            example="This manuscript's deterioration pattern resembles that of authenticated 3rd century texts; therefore, it may be from a similar time period."
          />
        </div>

        <h4 className="font-bold mb-2">Evaluating Reasoning Quality:</h4>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Logical validity:</span> Do
              conclusions follow from premises?
            </li>
            <li>
              <span className="font-semibold">Soundness:</span> Are premises
              factually accurate?
            </li>
            <li>
              <span className="font-semibold">Strength:</span> How compelling is
              the connection between evidence and claims?
            </li>
            <li>
              <span className="font-semibold">Alternative explanations:</span>{" "}
              Are other interpretations considered?
            </li>
            <li>
              <span className="font-semibold">Limitations:</span> Are
              qualifications and boundaries acknowledged?
            </li>
          </ul>
        </div>
      </ExpandableSection>

      <ExpandableSection
        id="integrated-analysis"
        title="Integrated Analysis: How Components Work Together"
      >
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-bold mb-2">The Coherence Test:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Do the claims align with the presented evidence?</li>
            <li>
              Does the reasoning connect evidence to claims in a valid way?
            </li>
            <li>Are there gaps or leaps in the logical chain?</li>
          </ul>

          <h4 className="font-bold mb-2">The Necessity Test:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Is the presented evidence necessary to support the specific
              claims?
            </li>
            <li>
              Could the same evidence support different or contradictory claims?
            </li>
            <li>
              Would the argument collapse if certain pieces of evidence were
              removed?
            </li>
          </ul>

          <h4 className="font-bold mb-2">The Sufficiency Test:</h4>
          <ul className="list-disc pl-6">
            <li>
              Is the presented evidence sufficient to justify the claims made?
            </li>
            <li>
              What additional evidence would strengthen or weaken the argument?
            </li>
            <li>
              Are there unstated assumptions filling gaps in the evidence?
            </li>
          </ul>
        </div>
      </ExpandableSection>

      <ExpandableSection
        id="application"
        title="Application: Deconstructing Arguments"
      >
        <h4 className="font-bold mb-2">Step-by-Step Process:</h4>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Identify the core claims (factual, interpretive, evaluative,
              prescriptive)
            </li>
            <li>Catalog the evidence presented to support each claim</li>
            <li>Analyze the reasoning connecting evidence to claims</li>
            <li>
              Evaluate the coherence, necessity, and sufficiency of the argument
            </li>
            <li>
              Identify potential weaknesses in any of the three components
            </li>
          </ol>
        </div>
      </ExpandableSection>
    </div>
  );

  const ArgumentComponent = ({ title, description, color }) => {
    const colorClasses = {
      blue: "bg-blue-100 border-blue-500",
      green: "bg-green-100 border-green-500",
      purple: "bg-purple-100 border-purple-500",
    };

    return (
      <div
        className={`p-4 border-l-4 rounded m-2 w-full md:w-1/3 ${colorClasses[color]}`}
      >
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    );
  };

  const ClaimTypeCard = ({ type, example, description }) => (
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
      <h5 className="font-bold text-blue-800">{type}</h5>
      <div className="italic text-sm my-1">"{example}"</div>
      <p className="text-sm">{description}</p>
    </div>
  );

  const EvidenceCard = ({ type, description }) => (
    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
      <h5 className="font-bold text-green-800">{type}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );

  const ReasoningCard = ({ type, description, example }) => (
    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
      <h5 className="font-bold text-purple-800">{type} Reasoning</h5>
      <p className="text-sm mb-2">{description}</p>
      <div className="text-xs italic bg-white p-2 rounded">
        Example: {example}
      </div>
    </div>
  );

  const renderSourceVerification = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Source Verification Fundamentals
      </h2>
      <p className="mb-6">
        Source verification forms the backbone of effective argument analysis.
        Learning to systematically evaluate sources is essential for identifying
        weaknesses in evidential support.
      </p>

      <ExpandableSection id="hierarchy" title="The Hierarchy of Sources">
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-2xl">
            <SourceHierarchyPyramid />
          </div>
        </div>

        <h4 className="font-bold mb-2">Primary Sources:</h4>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="mb-2">
            <span className="font-semibold">Definition:</span> Contemporaneous,
            first-hand accounts or artifacts
          </p>
          <p className="mb-2">
            <span className="font-semibold">Examples:</span> Original documents,
            artifacts, direct testimonies, original research data
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold">Strengths:</h5>
              <ul className="list-disc pl-6">
                <li>Directness</li>
                <li>Immediacy</li>
                <li>Closer to events</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Limitations:</h5>
              <ul className="list-disc pl-6">
                <li>Subjective perspective</li>
                <li>Contextual limitations</li>
                <li>Potential bias</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="font-bold mb-2">Secondary Sources:</h4>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <p className="mb-2">
            <span className="font-semibold">Definition:</span> Interpretations
            or analyses of primary sources
          </p>
          <p className="mb-2">
            <span className="font-semibold">Examples:</span> Scholarly books,
            peer-reviewed articles, expert analyses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold">Strengths:</h5>
              <ul className="list-disc pl-6">
                <li>Synthesis of multiple sources</li>
                <li>Analytical perspective</li>
                <li>Broader context</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Limitations:</h5>
              <ul className="list-disc pl-6">
                <li>Interpretive layers</li>
                <li>Potential for misunderstanding</li>
                <li>Further from original events</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="font-bold mb-2">Tertiary Sources:</h4>
        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <p className="mb-2">
            <span className="font-semibold">Definition:</span> Compilations or
            distillations of secondary sources
          </p>
          <p className="mb-2">
            <span className="font-semibold">Examples:</span> Textbooks,
            encyclopedias, reference works
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold">Strengths:</h5>
              <ul className="list-disc pl-6">
                <li>Accessible overviews</li>
                <li>Broad coverage</li>
                <li>Entry-level information</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Limitations:</h5>
              <ul className="list-disc pl-6">
                <li>Multiple layers removed from original</li>
                <li>Simplified content</li>
                <li>May lack nuance</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="font-bold mb-2">The "Source Distance" Concept:</h4>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="list-disc pl-6">
            <li>
              Measuring the gap between an original event/artifact and the
              source citing it
            </li>
            <li>
              How information changes or degrades with increasing distance
            </li>
            <li>
              The importance of tracing claims back to their primary sources
            </li>
          </ul>
        </div>
      </ExpandableSection>

      <ExpandableSection
        id="authenticity"
        title="Assessing Source Authenticity"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Physical/Material Authentication:
            </h4>
            <ul className="list-disc pl-6">
              <li>Dating methods (carbon dating, linguistic analysis)</li>
              <li>Provenance and chain of custody</li>
              <li>Signs of forgery or manipulation</li>
              <li>Digital authentication methods</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Content Authentication:</h4>
            <ul className="list-disc pl-6">
              <li>Internal consistency analysis</li>
              <li>Anachronism detection</li>
              <li>Linguistic and stylistic analysis</li>
              <li>Cross-reference with confirmed authentic sources</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
          <h4 className="font-bold mb-2">Red Flags for Potential Forgeries:</h4>
          <ul className="list-disc pl-6">
            <li>Convenient discoveries of previously unknown texts</li>
            <li>Documents that perfectly support controversial theories</li>
            <li>Unusual preservation circumstances without explanation</li>
            <li>
              Limited access to original materials for independent verification
            </li>
          </ul>
        </div>
      </ExpandableSection>

      <ExpandableSection id="reliability" title="Evaluating Source Reliability">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Author/Creator Credibility:</h4>
            <ul className="list-disc pl-6">
              <li>Expertise and qualifications in relevant field</li>
              <li>Reputation and track record for accuracy</li>
              <li>Potential biases and conflicts of interest</li>
              <li>Methodological rigor and transparency</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Publication/Dissemination Context:
            </h4>
            <ul className="list-disc pl-6">
              <li>Peer-review status and process</li>
              <li>Editorial standards and fact-checking</li>
              <li>Institutional affiliations and reputations</li>
              <li>Update and correction policies</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Consistency with Established Knowledge:
            </h4>
            <ul className="list-disc pl-6">
              <li>Alignment with well-established facts</li>
              <li>Treatment of contradictory evidence</li>
              <li>Extraordinary claims and their evidence</li>
              <li>Reception by experts in the field</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Methodological Transparency:</h4>
            <ul className="list-disc pl-6">
              <li>Clarity about data collection methods</li>
              <li>Disclosure of limitations and assumptions</li>
              <li>Accessibility of underlying data</li>
              <li>Replicability of findings or conclusions</li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      <ExpandableSection
        id="manipulation"
        title="Common Source Manipulation Techniques"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <ManipulationCard
            title="Selective Citation"
            description="Cherry-picking supportive passages while ignoring contradictory ones; removing context that changes meaning; presenting minority views as consensus"
          />
          <ManipulationCard
            title="Misattribution"
            description="Assigning statements to more authoritative sources; conflating different sources or texts; creating composite 'sources' from multiple actual sources"
          />
          <ManipulationCard
            title="Misrepresentation"
            description="Presenting modern recreations as original artifacts; confusing similar-sounding but distinct documents; mischaracterizing content or significance"
          />
          <ManipulationCard
            title="False Equivalence"
            description="Placing unverified sources on equal footing with verified ones; treating fringe publications as equivalent to peer-reviewed research"
          />
        </div>
      </ExpandableSection>

      <ExpandableSection
        id="framework"
        title="Practical Source Verification Framework"
      >
        <div className="bg-blue-100 p-6 rounded-lg mb-6">
          <h4 className="font-bold text-xl text-center mb-4">
            The FACTS Method
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <FactsMethodCard
              letter="F"
              description="Find the original source"
            />
            <FactsMethodCard
              letter="A"
              description="Assess the author's credentials and biases"
            />
            <FactsMethodCard
              letter="C"
              description="Check for corroboration from independent sources"
            />
            <FactsMethodCard
              letter="T"
              description="Trace the chain of citations"
            />
            <FactsMethodCard
              letter="S"
              description="Survey expert consensus on the source"
            />
          </div>
        </div>

        <h4 className="font-bold mb-2">Verification Questions Checklist:</h4>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <ol className="list-decimal pl-6 space-y-2">
            <li>What is the original source of this claim?</li>
            <li>
              Who created/authored this source and what are their
              qualifications?
            </li>
            <li>How was this source discovered and preserved?</li>
            <li>Has this source been verified by independent experts?</li>
            <li>
              When was this source created relative to the events it describes?
            </li>
            <li>Are there contradictory sources from the same period?</li>
            <li>How widely accepted is this source within its field?</li>
            <li>What methods were used to authenticate this source?</li>
          </ol>
        </div>
      </ExpandableSection>
    </div>
  );

  const SourceHierarchyPyramid = () => (
    <svg viewBox="0 0 500 300" className="w-full">
      <path
        d="M250,50 L50,250 L450,250 Z"
        fill="#DBEAFE"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <path
        d="M250,100 L100,250 L400,250 Z"
        fill="#D1FAE5"
        stroke="#10B981"
        strokeWidth="2"
      />
      <path
        d="M250,150 L150,250 L350,250 Z"
        fill="#FEF3C7"
        stroke="#F59E0B"
        strokeWidth="2"
      />

      <text x="250" y="80" textAnchor="middle" fill="#1E40AF" fontWeight="bold">
        Primary Sources
      </text>
      <text
        x="250"
        y="130"
        textAnchor="middle"
        fill="#047857"
        fontWeight="bold"
      >
        Secondary Sources
      </text>
      <text
        x="250"
        y="180"
        textAnchor="middle"
        fill="#B45309"
        fontWeight="bold"
      >
        Tertiary Sources
      </text>

      <text
        x="250"
        y="270"
        textAnchor="middle"
        fontStyle="italic"
        fontSize="12"
      >
        Source Distance from Original Events
      </text>
    </svg>
  );

  const ManipulationCard = ({ title, description }) => (
    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
      <h4 className="font-bold text-red-800 mb-2">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );

  const FactsMethodCard = ({ letter, description }) => (
    <div className="bg-white rounded-lg shadow p-3 text-center">
      <div className="text-2xl font-bold text-blue-700 mb-2">{letter}</div>
      <p className="text-sm">{description}</p>
    </div>
  );

  const renderStrongWeak = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Identifying Strong vs. Weak Arguments
      </h2>
      <p className="mb-6">
        This workshop focuses on applying concepts from the lectures to
        distinguish between compelling and flawed arguments.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-center mb-4">
          Strong/Weak Argument Analysis Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FrameworkCard
            number="1"
            title="Claim Clarity"
            question="Are the claims clear, specific, and falsifiable?"
            strong="Claims are precisely stated with clear boundaries"
            weak="Claims are vague, shifting, or unfalsifiable"
          />
          <FrameworkCard
            number="2"
            title="Evidence Quality"
            question="Is the evidence relevant, accurate, and sufficient?"
            strong="Evidence directly supports claims and is verified"
            weak="Evidence is cherry-picked, irrelevant, or insufficient"
          />
          <FrameworkCard
            number="3"
            title="Source Credibility"
            question="Are sources appropriate, reliable, and properly cited?"
            strong="Sources are authoritative and properly contextualized"
            weak="Sources are questionable, outdated, or misrepresented"
          />
          <FrameworkCard
            number="4"
            title="Reasoning Soundness"
            question="Is the logical connection between evidence and claims valid?"
            strong="Reasoning follows logical principles without fallacies"
            weak="Reasoning contains logical gaps or fallacious connections"
          />
          <FrameworkCard
            number="5"
            title="Counterargument Consideration"
            question="Are potential objections acknowledged and addressed?"
            strong="Counterarguments are fairly presented and addressed"
            weak="Opposing views are ignored or mischaracterized"
          />
        </div>
      </div>

      <ExpandableSection id="workshop-activities" title="Workshop Activities">
        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Guided Practice (40 minutes)</h4>
            <ul className="list-disc pl-6">
              <li>Sample arguments of varying strength</li>
              <li>Collective analysis of first example using framework</li>
              <li>Small group work on additional examples</li>
              <li>Group sharing with instructor feedback</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Argument Strength Spectrum Exercise (30 minutes)
            </h4>
            <ul className="list-disc pl-6">
              <li>Placing arguments on a spectrum from strongest to weakest</li>
              <li>
                Justifying placements based on specific strengths/weaknesses
              </li>
              <li>Comparing group assessments</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Weakness Identification Challenge (30 minutes)
            </h4>
            <ul className="list-disc pl-6">
              <li>Identifying embedded flaws in arguments</li>
              <li>Competition for most accurate weakness identification</li>
              <li>
                Types of embedded weaknesses include:
                <ul className="list-disc pl-6 mt-2">
                  <li>Citation of fictitious sources</li>
                  <li>Logical fallacies</li>
                  <li>Cherry-picked evidence</li>
                  <li>Misrepresentation of source material</li>
                  <li>Unwarranted jumps in reasoning</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Reflection and Application (20 minutes)
            </h4>
            <ul className="list-disc pl-6">
              <li>Writing reflections on patterns in weak arguments</li>
              <li>Discussing strategies for quickly identifying weaknesses</li>
              <li>Introducing next week's content</li>
              <li>Q&A on argument analysis techniques</li>
            </ul>
          </div>
        </div>
      </ExpandableSection>
    </div>
  );

  const FrameworkCard = ({ number, title, question, strong, weak }) => (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-2">
        <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">
          {number}
        </div>
        <h4 className="font-bold">{title}</h4>
      </div>
      <p className="text-sm mb-3 italic">{question}</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-start">
          <div className="text-green-600 font-bold mr-2">✓</div>
          <div>
            <span className="font-semibold">Strong:</span> {strong}
          </div>
        </div>
        <div className="flex items-start">
          <div className="text-red-600 font-bold mr-2">✗</div>
          <div>
            <span className="font-semibold">Weak:</span> {weak}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCaseStudy = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        The Huff-Carson Debate Framework
      </h2>
      <p className="mb-6">
        This case study introduces a real-world example that frames the course,
        demonstrating practical application of argument analysis techniques.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-center mb-4">The Participants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ParticipantCard
            name="Wes Huff"
            background="Background in historical texts and biblical languages, expertise in manuscript studies"
          />
          <ParticipantCard
            name="Billy Carson"
            background="Researcher focusing on alternative historical narratives, author on ancient civilizations and religious texts"
          />
        </div>
      </div>

      <ExpandableSection
        id="key-exchanges"
        title="Analysis of Key Exchange Segments"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Segment 1: The "Sinai Bible" Reference
            </h4>
            <ul className="list-disc pl-6">
              <li>Carson's initial claim about the Sinai Bible</li>
              <li>Huff's response and request for clarification</li>
              <li>Analysis using argument anatomy framework</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Segment 2: The Gospel of Barnabas Discussion
            </h4>
            <ul className="list-disc pl-6">
              <li>
                Carson's references to this text and authentication claims
              </li>
              <li>Huff's counter-arguments regarding anachronisms</li>
              <li>Analysis of argument structures and source verification</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">
              Segment 3: Methodological Differences
            </h4>
            <ul className="list-disc pl-6">
              <li>Different approaches to verifying historical accounts</li>
              <li>Questions about oral tradition vs. written documentation</li>
              <li>How methodology influences conclusions</li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      <ExpandableSection id="huff-framework" title="The 7-Step Huff Framework">
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "Source Clarification",
              description:
                "Precisely identifying which sources are being referenced",
            },
            {
              step: "2",
              title: "Authenticity Verification",
              description: "Examining evidence for the source's legitimacy",
            },
            {
              step: "3",
              title: "Content Accuracy",
              description: "Confirming what the source actually contains",
            },
            {
              step: "4",
              title: "Contextual Analysis",
              description:
                "Placing the source in historical and cultural context",
            },
            {
              step: "5",
              title: "Methodological Questioning",
              description: "Examining how conclusions were derived",
            },
            {
              step: "6",
              title: "Counter-Evidence Presentation",
              description: "Offering stronger evidence that contradicts claims",
            },
            {
              step: "7",
              title: "Respectful Engagement",
              description: "Maintaining professional discourse throughout",
            },
          ].map((step) => (
            <div
              key={step.step}
              className="bg-white border rounded-lg shadow-sm p-4 flex"
            >
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-3">
                {step.step}
              </div>
              <div>
                <h4 className="font-bold">{step.title}</h4>
                <p className="text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ExpandableSection>
    </div>
  );

  const ParticipantCard = ({ name, background }) => (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <h4 className="font-bold text-blue-800 mb-2">{name}</h4>
      <p className="text-sm">{background}</p>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return renderOverview();
      case "argument-anatomy":
        return renderArgumentAnatomy();
      case "source-verification":
        return renderSourceVerification();
      case "strong-weak":
        return renderStrongWeak();
      case "case-study":
        return renderCaseStudy();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {renderNavigation()}
      <div className="container mx-auto">{renderContent()}</div>
    </div>
  );
};

export default ArgumentAnalysisGuide;
