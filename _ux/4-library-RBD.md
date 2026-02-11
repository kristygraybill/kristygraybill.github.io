---
layout: project-ux
title: "Research Hub"
client: "Free Library of Philadelphia"
tags: [Information Architecture]
image: "images/FLP-RBD.png"
id: myday
summary: "Making Rare Library Collections easy to find and use"
color: "#F79283"
link: /projects/receiving-app

hero:
  bg_color: "var(--golden)"
  left:
    type: cover
    src: "images/FLP-RBD.png"
  right:
    type: text
    header: "How can a small, in-house design team make a greater impact on event promotion?"
    header_color: "var(--tokyo)"
    body: >
      <p>
       Event programming is an essential service of a public library and Philadelphia’s Free Library hosts over 30,000 events a year.
      </p>
      <p>
        The Library’s two-person design team and a two-person in-house print team aid in the promotion of programs and events.
      </p>


outline_role:
  title: "Co-lead, Design"
  description: >
    <p>
    Collaborating closely with another co-leader, ***
    </p>

outline_collaborators:
  - Co-Leader, Design Studio

outline_methods:
  - Surveying
  - User Testing
  - Workflow and Process Mapping
  - Prototyping


outline_medium: "Service Design"
outline_bg_color: "var(--porridge)"

segments:
  - layout: split
    bg_color: "var(--nimbus)"
    left:
      col: 6
      type: image
      images:
      - src: "images/FLP-marketing-venn.png"
        alt:
        caption: Value Diagram
    right:
     col: 6
     type: text
     label: "Value Definition"
     header: "What defines success?"
     header_color: "var(--tokyo)"
     body: >
        <p>
        We identified three core criteria for success representing non-negotiable interests of major stakeholders and users: ease of use, preservation of brand, and cost in resources which represented both money and time spent by enablers of the service.
        </p>
     body_color: "var(--tokyo)"



  - layout: split
    bg_color: "var(--seafoam)"
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
        - src: "images/dsd-sketch.png"
          alt: A rough sketch of a screen with notes depicting a list of vendors and times
          caption: A sample sketch from one of our sessions. 
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
    gallery:
        images:
            - src: "/images/dsd-prioritization.png"
              alt: "Vendor intake"
              caption: Prioritization
            - src: "/images/dsd-coworking.png"
              alt: "Receiving workflow"
              caption: Co-Design Workshop
            - src: "/images/dsd-wireframe.png"
              alt: "Vendor intake"
              caption: Concept Sketches


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