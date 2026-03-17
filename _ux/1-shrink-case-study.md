---
layout: project-ux
title: "Decision Support"
client: "Kroger - Grocery Retailer"
tags: [Revenue Recovery]
image: "/images/DSD-vendor-w.png"
id: DSD
summary: "Establishing a centralized hub for vendor oversight and store-level decision support."
color: "var(--seafoam)"
scolor: "#000"
link: /ux/shrink-case-study



hero:
  bg_color: "#FFFFFF"
  left:
    type: cover
    src: "images/DSD-vendor-w.png"
    col: 5
  right:
    type: text
    header: "How can a 'Task Management' app help prevent shrink?"
    header_color: "var(--oak)"
    label: Problem + Opportunity
    body: >
        <p>
        Our team managed a task application for warehouse inventory, but workflows for products delivered directly by vendors existed entirely outside the system. Enterprise data showed that stores were losing millions in revenue because damaged or expired goods weren't being reported for credit This revealed a clear opportunity to extend the product into these workflows, surfacing the information needed to drive revenue recovery and strengthen compliance at both the store and enterprise levels.
        </p>
    body_color: "var(--earth)"
    col: 7

outline_role:
  title: "UX Design Lead"
  description: "I led end-to-end research and design for a new feature that would bring a new extension of our application to a first-time user audience across 2,000+ nationwide stores. As UX Design Lead, I owned the design vision and research strategy, translating insights into design decisions."

outline_collaborators:
  - Product Manager
  - Engineering Team
  - Business Analyst
  - UX/UI Designer
  - UX Manager

outline_methods:
  - Workshop Facilitation
  - Product Design
  - Interactive Prototyping
  - User Research & Testing

outline_medium: "Android"
outline_bg_color: "var(--porridge)"

segments:
  - layout: split
    bg_color: "var(--earth)"
    right:
      type: image
      images:
        - src: "images/dsd-backroom-sample.png"
          alt: backroom with many pallets of bottled drinks from vendors
          caption: Sample of back room stock 
          caption_color: "var(--nimbus)"
    left:
      type: text
      label: "Current State"
      header: "What we knew"
      body: >
         <p>I conducted a series of discovery sessions with stakeholders and cross-functional design teams, documenting insights on a central digital whiteboard. This effort streamlined our focus on shrink, clarified user-centered design challenges, and synchronized our roadmap with adjacent initiatives.</p> 

      header_color: "var(--seafoam)"
      body_color: "var(--nimbus)"

    icons:
      sets:
      - header: Focusing Our Goal
        text: >
          We understood from our enterprise-level SME that shrink resulted greatly from outstanding credits and from too much vendor product. We understood that the Receiver had many responsibilities beyond this, but we'd need to focus results in this space.
        col: 4
      
      - header: Known Challenges
        text: >
          Our existing application was tailored to work related to receiving distribution center product. Receivers' work rarely intersected with this, if at all. We'd need to develop for a net new user who was equipped with separate, third-party tools that they used to receive product.
        col: 4



      - header: Strategic Partnerships
        text: >
         A separate team was working with a vendor to advance features of a third-party application used by the Receiver. Aligning with this team early, we had a clear understanding of their current and future development and their limitations.
        col: 4
    


  - layout: split
    bg_color: "var(--porridge)"
    left:
     col: 8
     type: text
     label: "Discovery Research"
     header: "What do tasks look like in practice?"
     body: >
      <p> I led the planning for this research: defining what we needed to learn and creating guidance for in-store interviews, observations, and documentation. This supported a group of consultants conducting research across a range of stores of different sizes, regions, and markets.And, to help ground my understanding, I participated in several in-store interviews. </p> <p>I translated these findings into maps that showed where the work was breaking down and how different roles and tools interacted. Additionally, I compiled proto-personas from our conversations to help remind the team of real-world challenges, mental models, and different kinds of Receivers might have different needs. </p> 
    right:
      col: 4
      type: callout
      callouts:
      - sub: "What factors impact receipt of credits and product volume?"
        bg_color: "white"
        sub_color: "var(--stratus)"

      - sub: "How might solving this problem impact the Receiver, if at all?"
        bg_color: "white"
        sub_color: "var(--stratus)"
        
      - sub: "What are current perceptions or interactions with our application?"
        bg_color: "white"
        sub_color: "var(--stratus)"
    gallery:
        images:
            - src: "/images/dsd-process-1.png"
              alt: "Receiving workflow"
              caption: Workflow
              col: 6
            - src: "/images/dsd-process-2.png"
              alt: "Vendor intake"
              caption: Sample
              col: 6


  - layout: split
    bg_color: white
    left:
     col: 7
     type: text
     label: "Key Research Findings"
     header: "How did research shape the design? "
     body: >
        In addition to critical insights into the environment and day-to-day life of a DSD Receiver, we identified a number of gaps and challenges that hindered the success of Receivers. Since many of these gaps intersected with other systems and roles that were far beyond the scope of our product or irrelevant to the current business case, we offered our suggestions and emphasized what role our product team might play in next steps. 
     header_color: "var(--earth)"
    right:
      col: 5
      type: callout
      callouts:
      - header: Our solution should...
        sub: >
          <ul>
          <li>improve visibility</li>
          <li>simplify complexities where possible</li>
          <li>NOT create additional work</li>
          <li>add value for Receivers AND business</li>
          </ul>


    icons:
        sets:
        - material: "forum"
          header: Shifting Priorities
          text: "We observed work environments that constantly pulled Receivers' attention in different directions. Their work is highly time-sensitive and requires constant prioritization and communication."
          col: 3
        

        - material: "desktop_mac"
          header: Many Tools + Devices
          text: "We observed Receivers switching between tools and devices as they shifted between tasks. Receivers rely on multiple, required third-party tools and devices."
          col: 3
        


        - material: "visibility_off"
          header: Needed Visibility
          text: "We heard from both Receivers and Store Managers that success was achieved through regular communication. Limited visibility into other store activities increases coordination effort."
          col: 3
        

        - material: "assignment"
          header: Unfamiliar with App
          text: "We confirmed our assumption that Receivers recognized our application, but not all interacted with it. It was considered a 'Night Crew App,' not relevant to their work."
          col: 3
        

  - layout: split
    bg_color: "var(--porridge)"
    left:
      type: image
      images:
        - src: "images/dsd-sketch.png"
          alt: A rough sketch of a screen with notes depicting a list of vendors and times
          caption: A sample sketch from one of our sessions. 
    right:
      type: text
      label: "Ideation"
      header: "What should we build?"
      body: >

        <p>I led workshops to translate research into early concepts, using discussion, co-creation, and voting to prioritize ideas. We narrowed a wide set of directions to two solutions for testing.</p>

        <p>As design lead, I built the prototypes and defined the core interface and interactions through iterative testing and refinement. The final solutions gave Receivers a clear daily task view and a single access point for their tools, replaced paper processes with guided digital workflows, and improved visibility so the entire store could stay aligned.
        </p>
      body_color: var(--stratus)
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
    bg_color: "var(--porridge)"
    left:
      type: text
      label: "Testing & Iteration"
      header: "Is this the right solution?"
      header_color: "var(--earth)"
      body: >
        We tested concepts with in-store Receivers, walking through designs and asking targeted questions to evaluate value, priority, usability, and clarity. As the designs evolved, we gathered feedback at key stages and coordinated with engineering on technical feasibility.

        <p>As a part of this effort, I presented the MVP and select future features in a virtual forum for managers across 2,000+ stores.</p>

        <p>Since our junior designer and engineers were invited to sessions and regularly updated on research and testing findings, I was confident when handing off design files for pixel-perfect UI refinement and development. Notes with user-insights for features and quick links to artifacts within my Figma file, paired with open lines of communication, helped ensure the integrity of our designs and kept users at the through-line of decision-making. </p>
      body_color: "var(--stratus)"


    right:
      type: image
      images:
        - src: "images/dsd-feedback-lofi.png"
          alt: 
          caption: "Feedback from users on early concepts"
        - src: "images/dsd-feedback-hifi.png"
          alt: 
          caption: "Feedback from users on low-fi prototypes"

  - layout: split
    bg_color: "var(--earth)"
    left:
      type: image
      images:
        - src: "images/dsd-phones.png"
          alt:
          caption:
          position: 
    right:
      type: text
      label: "Results & Achievements"
      header: "What changed because of this?"
      body: >
        <p>
        Unlike past projects, my involvement came to an end before the team had developed and released a functioning prototype. </p>
        <p>
        Discovery efforts, however, surfaced conversations about larger organizational needs and would inform a future roadmap beyond my contract.
        </p>
        <p>
        Had I remained on the team, I'd be eager to measure adoption among Receivers and monitor any impact on unclaimed vendor credits relative to usage metrics. 
        </p>
      header_color: "var(--seafoam)"
      body_color: "var(--nimbus)"
---