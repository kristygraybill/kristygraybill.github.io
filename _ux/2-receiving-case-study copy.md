---
layout: project-ux
title: "Workflow Architecture"
client: "Kroger - Grocery Retailer"
tags: [Process Mapping]
image: "images/MD-delivery-w.png"
id: myday
summary: Visualizing complex workflows to establish operational transparency
color: "#799AA7"
link: /projects/receiving-app

hero:
  bg_color: #FFFFFF
  left:
    type: cover
    src: "images/MD-delivery-w.png"
  right:
    type: text
    header: "How might a Night Crew Management App help improve delivery issues?"
    header_color: "var(--tokyo)"
    body: >
      <p>
       Delivery issues create real impact, significant time is spent correcting inventory, driving  $8.4M+ loss prevention business cases.
      </p>
      <p>
        I joined the team as a full-time product designer for an application that helped Night Crew Managers’ manage workload from incoming deliveries.
      </p>


outline_role:
  title: "UX Design Lead"
  description: >
    The prior team had notable tribal knowlege of the user's day-to-day, but as My focus was to map the end-to-end receiving and backroom processes across real store environments to inform design decisions and future enhancements

outline_collaborators:
  - Product Manager
  - Engineering Team
  - Business Analyst
  - UX/UI Designer
  - UX Manager

outline_methods:
  - Product design
  - Research planning
  - Workflow and Process Mapping
  - Interactive Prototyping


outline_medium: "Android"
outline_bg_color: "var(--porridge)"

segments:
  - layout: split
    bg_color: "var(--earth)"
    left:
     col: 10
     type: text
     label: "Stakeholder & User Mapping"
     header: "Who are impacted by or invested in inaccurate deliveries?"
     header_color: "var(--seafoam)"
     body: >
        <p>
        As I positioned myself on the team and received historic knowledge from the prior UX teammates and the product manager, I visualized who would be affected by delivery errors. This ensured we considered operational impacts across the store and involved the right stakeholders.
        </p>
        <p>
        Through this process, we clearly noted that many varying roles impact the receipt of inventory and would potentially need to interact with the application. As a result, addressing this problem space would begin to redefine the purpose of the app and evolve early concept designs.
        </p>
     body_color: "var(--nimbus)"
    gallery:
      images:
        - src: "images/MD-Process.png"
          alt: 
          col: 6
          caption: "Stakeholder Mapping"
        - src: "images/MD-painpoints.png"
          col: 6
          alt: 
          caption: "User Mapping"


  - layout: split
    bg_color: white
    left:
     col: 6
     type: text
     label: "Key Research Findings"
     header: "How did research shape the design? "
     body: >
        Research revealed many variables among stores and how they operated as a result of their individual size, staff, and the kind of delivery, as examples.
     header_color: "var(--oak)"
    right:
      col: 6
      type: callout
      callouts:
      - header: Our solution should...
        sub: >
          <ul>
          <li>support new user groups.</li>
          <li>not add time to the process.</li>
          <li>remain flexible to varying styles of working.</li>
          <li>reflect the categorizations of the user</li>
          </ul>

    icons:
        sets:
        - material: "group"
          header: Many New Users
          text: "Many different roles may contribute to the unloading of a truck depending on the time of delivery or available staff."
          col: 3

        - material: "local_shipping"
          header: Timeline Restrictions
          text: "Drivers are on strict timelines, so the unloading process may need to occur quickly or in the absence of a driver."
          col: 3

        - material: "barcode_reader"
          header: Limited Devices
          text: "Devices may be limited in stores, so not all teammates may have a unique device available to them while they are working."
          col: 3
        
        - material: "category"
          header: Differing Vocabulary
          text: "Distribution Centers, Drivers, and Department Managers each had different ways of categorizing product data and labeling products."
          col: 3

  - layout: split
    bg_color: "var(--porridge)"
    right:
      type: image
      images:
        - src: "/images/MD-feedback-sample.png"
          alt: "Sample Feedback Ideation"
          caption: Sample Feedback Ideation

        - src: "/images/MD-prototype.png"
          alt: "Sample Prototype File"
          caption: Sample Prototype File

    left:
      type: text
      label: "Design & Feedback"
      header: "How might we refine?"
      body: >
        <p>
        We refined the initial designs to support the fast, hands-on nature of unloading a trailer. While some roles needed detailed delivery information, others only needed to check in inventory quickly. The interface was intentionally focused on what was required in the moment, reducing distractions during physical work.
        </p>
        <p>
        Information that previously lived across external sources was now centralized in the application for easy reference. Familiar artifacts informed the UI to help users orient quickly, with deeper details available on demand for those who needed them.</p>



  - layout: split
    bg_color: "var(--earth)"
    left:
      col: 6
      type: image
      images:
        - src: "images/md-screen-sample.png"
          alt:
          caption:
          position: 
    right:
      col: 6
      type: text
      label: "Results & Achievements"
      header: "What changed because of this?"
      body: >
        <ul>
        <li>
        The delivery-scanning solution surpassed forecasts with 90% enterprise-wide adoption and positive feedback from managers on its ease of use and fast onboarding.
        </li>
        <li>
        High adoption also surfaced an increase in reported discrepancies at distribution centers, exposing opportunities to improve the process. Drawing on interviews and process mapping, I championed future features that minimized associate burden and aligned with real workflows.
        </li>
        <li>
        This work established a foundation for enhancements to improve data accuracy, support adjacent tools, and generate metrics to guide broader loss prevention efforts.
        </li>
        </ul>
      header_color: "var(--seafoam)"
      body_color: "var(--porridge)"
---