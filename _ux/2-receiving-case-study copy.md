---
layout: project-ux
title: "Receiving App"
client: "Kroger"
tags: [Process Mapping]
image: "images/MD-delivery.png"
id: myday
summary: Streamlining workflows and improving transparency
color: "#799AA7"
link: /projects/receiving-app

hero:
  bg_color: #FFFFFF
  left:
    type: cover
    src: "images/MD-delivery.png"
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
    <p>
    While proto-personas and historical insights existed, the workflows behind inventory receiving were not clearly mapped or documented.
    </p>
    <p>
    My focus was to map the end-to-end receiving and backroom processes across real store environments to inform design decisions and future enhancements
    </p>

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
     col: 8
     type: text
     label: "Stakeholder & User Mapping"
     header: "Who are impacted by or invested in inaccurate deliveries?"
     header_color: "var(--electric)"
     body: >
        <p>
        As I positioned myself on the team and received historic knowledge from the prior UX teammates and the product manager, I visualized who would be affected by delivery errors. This ensured we considered operational impacts across the store and involved the right stakeholders.
        </p>
        <p>
        Through this process, we clearly noted that many varying roles impact the receipt of inventory and would potentially need to interact with the application. As a result, addressing this problem space would begin to redefine the purpose of the app and evolve early concept designs.
        </p>
     body_color: "var(--porridge)"
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
    bg_color: "var(--electric)"
    left:
     col: 6
     type: text
     label: "Key Research Findings"
     header: "How did research shape the design? "
     body: >
        Research revealed many variables among stores and how they operated as a result of their individual size, staff, and the kind of delivery, as examples.
     header_color: "var(--tokyo)"
    right:
      col: 6
      type: callout
      callouts:
      - header: "Support new user groups."
        header_color: "var(--oak)"
        text: "Receivers were already operating at capacity, so any added steps could risk failure"

      - header: "Do not add time to the process."
        header_color: "var(--oak)"
        text: "Interviewees stressed the importance of timeliness in receiving a delivery. While we always look for time-saving opportunities, this case had many potential downstream effects."
        
      - header: "Remain flexible to varying styles of working."
        header_color: "var(--oak)"
        text: "Upstream data was tailored to use in environments before they reached the store. Additionally, error during any upstream process would impact what in-store users see on screen."
    icons:
        sets:
        - material: "group"
          text: "Many different roles may contribute to the unloading of a truck depending on the time of delivery or available staff."
          col: 3

        - material: "local_shipping"
          text: "Drivers are on strict timelines, so the unloading process may need to occur quickly or in the absence of a driver."
          col: 3

        - material: "barcode_reader"
          text: "Devices may be limited in stores, so not all teammates may have a unique device available to them while they are working."
          col: 3
        
        - material: "category"
          text: "Distribution Centers, Drivers, and Department Managers had different ways of categorizing product data."
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
      col: 4
      type: image
      images:
        - src: "images/fpo-phones.png"
          alt:
          caption:
          position: 
    right:
      col: 8
      type: text
      label: "Results & Achievements"
      header: "What changed because of this?"
      body: >
        <p>
        Our delivery-scanning solution was widely adopted in stores, <mark>surpassing forecasts with 90% enterprise-wide adoption</mark>, and earning praise from managers for its ease of use and quick onboarding (which is my personal favorite note).
        </p>
        <ul>
        <li>
        Adoption was so strong that distribution centers noticed an increase in reported discrepancies, highlighting opportunities for improvement.
        </li>
        <li>
        Guided by insights from interviews and process mapping, I advocated for future features that minimized burden on in-store associates and aligned with real workflows.
        </li>
        <li>
        These initial efforts laid the foundation for digital enhancements that could improve data accuracy, support adjacent applications, and start to generate metrics to inform broader loss prevention initiatives.
        </li>
        </ul>
      header_color: "var(--golden)"
      body_color: "var(--porridge)"
---