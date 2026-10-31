export type MarineService = {
  id: number;
  code: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  scope: string[];
  deliverables: string[];
};

export const services: MarineService[] = [
  {
    id: 1,
    code: "CMCS-01",
    title: "Vessel On-Hire / Off-Hire & General Condition Surveys",
    slug: "vessel-on-hire-off-hire-general-condition-surveys",
    description:
      "We conduct detailed vessel condition surveys at the commencement and completion of charter periods. Our inspections document the vessel’s condition, equipment, and any existing damage to help establish a clear record and minimize potential disputes between owners and charterers.",
    image: "/images/services/vessel-condition.jpg",
    scope: [
      "Review of charter party delivery and redelivery condition requirements",
      "Inspection of hull, decks, hatch covers, holds and accommodation",
      "Check of safety, navigation and mooring equipment",
      "Recording of existing damage, defects and cleanliness",
      "Bunker and fresh water quantities on board at delivery or redelivery",
    ],
    deliverables: [
      "On-hire or off-hire condition report",
      "Photographic record with an itemised damage list",
      "Bunker and consumables statement",
      "Same-day preliminary briefing",
    ],
  },
  {
    id: 2,
    code: "CMCS-02",
    title: "Marine Warranty Surveys & Towage Approvals",
    slug: "marine-warranty-surveys-towage-approvals",
    description:
      "We provide independent marine warranty surveys and towage assessments to evaluate the risks associated with marine operations. Our services include reviewing towing arrangements, equipment, procedures, and operational plans to support safe and compliant execution of marine projects.",
    image: "/images/services/marine-warranty.jpg",
    scope: [
      "Review of tow plan, route, weather windows and contingency arrangements",
      "Inspection of the towing vessel and the towed object",
      "Examination of towing gear, bridles, wires, shackles and connections",
      "Review of stability, ballast and seafastening documents",
      "Attendance at departure to verify readiness",
    ],
    deliverables: [
      "Towage suitability and approval report",
      "List of recommendations and conditions",
      "Photographic record of equipment and arrangements",
      "Statement of compliance with the agreed warranty scope",
    ],
  },
  {
    id: 3,
    code: "CMCS-03",
    title: "Magnetic Compass Adjustments",
    slug: "magnetic-compass-adjustments",
    description:
      "We provide professional magnetic compass adjustment services to help maintain reliable navigation. Our work includes assessing compass deviation, making necessary adjustments, and recording relevant results to support accurate compass readings and safe vessel navigation.",
    image: "/images/services/magnetic-compass.jpg",
    scope: [
      "Check of compass deviation on cardinal and intercardinal headings",
      "Adjustment of compass correctors where required",
      "Comparison against gyro or azimuth observations",
      "Recording of residual deviation after adjustment",
    ],
    deliverables: [
      "Updated deviation card",
      "Compass adjustment report or certificate",
      "Record of readings before and after adjustment",
      "Recommendations for any equipment faults",
    ],
  },
  {
    id: 4,
    code: "CMCS-04",
    title: "Draft Surveys",
    slug: "draft-surveys",
    description:
      "Our draft surveys determine the quantity of cargo loaded or discharged by measuring vessel drafts before and after cargo operations. We assess relevant vessel data and loading conditions to provide accurate calculations and independent reports for cargo quantity verification.",
    image: "/images/services/draft-survey.jpg",
    scope: [
      "Initial and final draft readings at bow, midship and stern, port and starboard",
      "Measurement of water density at the berth",
      "Sounding of ballast, fuel, fresh water and other tanks",
      "Displacement calculation from hydrostatic tables with trim, list and hog/sag corrections",
      "Cargo quantity calculated from the difference between initial and final surveys",
    ],
    deliverables: [
      "Draft survey report with full calculation sheets",
      "Photographs of draft marks and tank soundings",
      "Comparison against bill of lading or shore figures",
      "Same-day preliminary cargo quantity",
    ],
  },
  {
    id: 5,
    code: "CMCS-05",
    title: "Bunker, 221B & Sludge Disposal Surveys",
    slug: "bunker-221b-sludge-disposal-surveys",
    description:
      "We inspect and document bunker fuel quantities, relevant tank measurements, and sludge disposal operations, according to the scope of each assignment. Our independent findings help maintain accurate records, support quantity verification, and promote transparency during fuel-related and waste-disposal activities.",
    image: "/images/services/bunker-sludge.jpg",
    scope: [
      "Sounding of bunker tanks and calculation of quantities before and after bunkering",
      "Witnessing of bunker delivery, sampling and metering where applicable",
      "Review of bunker delivery notes and sample documentation",
      "Verification of sludge and oily waste quantities before disposal",
      "Review of disposal receipts and the oil record book entries",
    ],
    deliverables: [
      "Bunker quantity survey report",
      "Sampling and sealing record",
      "Sludge disposal verification report",
      "Photographs of soundings and operations",
    ],
  },
  {
    id: 6,
    code: "CMCS-06",
    title: "P&I Surveys",
    slug: "p-i-surveys",
    description:
      "We carry out surveys on behalf of, or in connection with, Protection and Indemnity (P&I) interests to investigate incidents, assess damage, examine cargo claims, and document relevant findings. Our reports provide factual information to support claims assessment and informed decision-making.",
    image: "/images/services/pi-survey.jpg",
    scope: [
      "Attendance on board after an incident or claim notification",
      "Investigation of the circumstances and collection of statements and records",
      "Assessment of damage to vessel, cargo, port property or third-party property",
      "Examination of cargo condition for cargo claims",
      "Review of relevant logs, certificates and documents",
    ],
    deliverables: [
      "Factual incident and survey report",
      "Damage assessment and extent of loss",
      "Photographic and document evidence file",
      "Preliminary advice to the P&I interests",
    ],
  },
  {
    id: 7,
    code: "CMCS-07",
    title: "ISM / ISPS & Internal Audit Inspections",
    slug: "ism-isps-internal-audit-inspections",
    description:
      "We conduct inspections and internal audits covering applicable International Safety Management (ISM) and International Ship and Port Facility Security (ISPS) requirements. Our assessments review relevant procedures, records, and operational practices to identify gaps and support continuous improvement in safety and security management.",
    image: "/images/services/ism-isps.jpg",
    scope: [
      "Review of the Safety Management System and ship security plan",
      "Check of records, drills, maintenance and training logs",
      "Inspection of safety and security equipment and procedures",
      "Interviews with officers and crew",
      "Identification of non-conformities and observations",
    ],
    deliverables: [
      "Internal audit report",
      "Non-conformity and observation list",
      "Recommended corrective actions",
      "Summary for the Designated Person Ashore or company management",
    ],
  },
  {
    id: 8,
    code: "CMCS-08",
    title: "Damage Surveys",
    slug: "damage-surveys",
    description:
      "We investigate and document damage to vessels, cargo, and associated marine property. Through detailed inspections, photographic evidence, and factual reporting, we help establish the nature and extent of damage and provide information to support insurance claims and repair assessments.",
    image: "/images/services/damage-survey-official.jpg",
    scope: [
      "Inspection of damaged hull, machinery, cargo or equipment",
      "Determination of the nature, extent and likely cause of damage",
      "Collection of evidence, measurements and witness information",
      "Review of repair proposals and estimates",
      "Attendance during repairs where required",
    ],
    deliverables: [
      "Damage survey report",
      "Photographic evidence",
      "Repair scope and cost assessment",
      "Report suitable to support insurance claims",
    ],
  },
  {
    id: 9,
    code: "CMCS-09",
    title: "General Cargo Hold & Grain Cleanliness Inspections",
    slug: "general-cargo-hold-grain-cleanliness-inspections",
    description:
      "We inspect cargo holds to assess cleanliness, dryness, and overall suitability for the intended cargo. For grain shipments, we assess relevant cleanliness standards and identify potential contamination risks before loading to help protect cargo quality and meet applicable contractual requirements.",
    image: "/images/services/cargo-hold.jpg",
    scope: [
      "Inspection of holds for cleanliness, dryness and absence of residues, rust scale and odour",
      "Check of hatch covers, bilges, sounding pipes and hold ventilation",
      "Inspection for insects, contamination or previous cargo remains",
      "Assessment of suitability for the nominated cargo or grain",
      "Re-inspection after cleaning where required",
    ],
    deliverables: [
      "Hold inspection report with pass or fail status",
      "Photographs of each hold",
      "List of deficiencies and cleaning recommendations",
      "Re-inspection report where applicable",
    ],
  },
  {
    id: 10,
    code: "CMCS-10",
    title: "Ultrasonic Thickness (UT) Inspection of Hatch Covers",
    slug: "ultrasonic-thickness-ut-inspection-of-hatch-covers",
    description:
      "We perform ultrasonic thickness measurements on vessel hatch covers to assess steel plate thickness and identify areas of potential corrosion or material loss. The results help evaluate structural condition and support maintenance, repair planning, and condition assessments.",
    image: "/images/services/ultrasonic-thickness.jpg",
    scope: [
      "Marking of measurement points on hatch cover panels",
      "Ultrasonic thickness readings on the plating and structure",
      "Visual check for corrosion, buckling, cracks and wastage",
      "Comparison of readings against original or minimum permissible thickness",
      "Identification of areas needing repair or monitoring",
    ],
    deliverables: [
      "UT measurement report with thickness tables and location diagrams",
      "Photographs of measured and defective areas",
      "Summary of wastage and condition",
      "Repair and follow-up recommendations",
    ],
  },
  {
    id: 11,
    code: "CMCS-11",
    title: "Loading / Discharge Supervision & Tally Surveys",
    slug: "loading-discharge-supervision-tally-surveys",
    description:
      "We supervise cargo loading and discharge operations and verify cargo quantities through systematic tallying and recordkeeping. Our services help monitor cargo handling, identify discrepancies, and maintain accurate documentation throughout the operation.",
    image: "/images/services/loading-discharge.jpg",
    scope: [
      "Attendance throughout loading or discharge",
      "Tally of cargo units, packages, bags or containers",
      "Monitoring of stowage, handling and cargo condition",
      "Recording of damage, shortage and delays",
      "Reconciliation of tally against cargo documents",
    ],
    deliverables: [
      "Tally sheets and final tally report",
      "Report of shortages, overages and damage",
      "Photographs of cargo handling and condition",
      "Time log of the operation",
    ],
  },
  {
    id: 12,
    code: "CMCS-12",
    title: "Container On/Off-Hire Inspections, Rework & Related Surveys",
    slug: "container-on-off-hire-inspections-rework-related-surveys",
    description:
      "We inspect containers during interchange to document their physical condition and identify visible damage or defects. We also survey container rework and related handling activities, providing condition records and reports to help reduce disputes and support appropriate corrective action.",
    image: "/images/services/container-on-off-hire.jpg",
    scope: [
      "External and internal inspection of container structure, doors, floor and seals",
      "Check for holes, dents, corrosion, odour and cleanliness",
      "Recording of container numbers and condition at interchange",
      "Inspection of repair and rework quality",
      "Assessment of damage against interchange standards",
    ],
    deliverables: [
      "Container condition and interchange report",
      "Photographs of each damaged container",
      "Damage and repair item list",
      "Post-repair inspection record",
    ],
  },
  {
    id: 13,
    code: "CMCS-13",
    title: "Cargo Lashing & Securing Surveys",
    slug: "cargo-lashing-securing-surveys",
    description:
      "We inspect cargo securing arrangements to assess whether lashing systems and securing methods are appropriate for the intended transport conditions. Our surveys identify visible deficiencies and help reduce the risk of cargo movement or damage during transit.",
    image: "/images/services/cargo-lashing.jpg",
    scope: [
      "Review of the cargo securing plan against the cargo and voyage",
      "Inspection of lashings, dunnage, chocking, blocking and supports",
      "Check of the condition and strength of securing equipment",
      "Identification of weak or missing securing arrangements",
      "Re-inspection after corrective work",
    ],
    deliverables: [
      "Lashing and securing survey report",
      "Photographs of arrangements and deficiencies",
      "List of corrective actions",
      "Final confirmation after rectification",
    ],
  },
  {
    id: 14,
    code: "CMCS-14",
    title: "Pre-Purchase Surveys",
    slug: "pre-purchase-surveys",
    description:
      "We conduct vessel inspections for prospective buyers to assess the ship’s general condition and identify apparent defects or areas requiring further investigation. Our findings help buyers understand the vessel’s condition and make more informed purchasing decisions.",
    image: "/images/services/pre-purchase.jpg",
    scope: [
      "Inspection of hull, decks, tanks and holds",
      "Examination of main engine, auxiliaries and electrical systems",
      "Review of class, statutory certificates and maintenance records",
      "Check of safety and navigation equipment",
      "Identification of defects needing repair or further investigation",
    ],
    deliverables: [
      "Pre-purchase survey report",
      "Defect and repair priority list",
      "Photographic record",
      "Summary of findings for the buyer's decision",
    ],
  },
  {
    id: 15,
    code: "CMCS-15",
    title: "Ship Valuations",
    slug: "ship-valuations",
    description:
      "We provide vessel valuation services based on the agreed scope, available documentation, vessel particulars, age, condition, and relevant market information. Our assessments help clients obtain an informed view of a vessel’s estimated value for commercial, financial, or insurance-related purposes.",
    image: "/images/services/ship-valuations.jpg",
    scope: [
      "Collection of vessel particulars, age, class and trading history",
      "Inspection of general condition where required",
      "Review of market sales data for comparable vessels",
      "Consideration of lightweight, specification and equipment",
      "Preparation of an estimated value based on the agreed scope",
    ],
    deliverables: [
      "Valuation report with stated basis and assumptions",
      "Summary of comparable sales used",
      "Vessel particulars and condition summary",
      "Valuation for finance, insurance or commercial purposes",
    ],
  },
  {
    id: 16,
    code: "CMCS-16",
    title: "Gas-Free Inspections",
    slug: "gas-free-inspections",
    description:
      "We assess vessel tanks, holds, or other specified spaces to determine atmospheric conditions for the intended operation. Where within our approved scope, inspections include atmospheric testing and documentation to help verify that applicable gas-free criteria have been met before entry, hot work, or other specified activities.",
    image: "/images/services/gas-free.jpg",
    scope: [
      "Review of the space, previous cargo and the planned work",
      "Atmospheric testing for oxygen, flammable gas and toxic gas where within approved scope",
      "Testing at different levels and locations in the space",
      "Check of ventilation and isolation arrangements",
      "Documentation of readings against the applicable criteria",
    ],
    deliverables: [
      "Gas-free test report with recorded readings",
      "Equipment and calibration details",
      "Statement of conditions at the time of testing",
      "Recommendations on re-testing before entry or hot work",
    ],
  },
  {
    id: 17,
    code: "CMCS-17",
    title: "AGM Inspection",
    slug: "agm-inspection",
    description:
      "We provide inspection services in accordance with the specific requirements and scope of the AGM inspection assignment. Our surveyors examine relevant cargo, vessel, or operational conditions and document their findings to support the required reporting and compliance process.",
    image: "/images/services/agm.jpg",
    scope: [
      "Confirmation of the specific scope and requirements of the assignment",
      "Inspection of the relevant cargo, holds or vessel conditions",
      "Measurement and recording of findings",
      "Check against the instructions and applicable requirements",
      "Attendance at the agreed time and location",
    ],
    deliverables: [
      "Inspection report in the required format",
      "Photographic evidence",
      "Statement of findings against the instructions",
      "Prompt delivery for compliance and reporting",
    ],
  },
];
