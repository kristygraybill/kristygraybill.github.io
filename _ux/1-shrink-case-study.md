---
layout: project-ux
title: "Decision Support"
client: "Kroger - Grocery Retailer"
tags: [End-to-End]
image: "/images/dsd-vendor-w.png"
id: DSD
summary: "Establishing a centralized hub for vendor oversight and store-level decision support."
color: "var(--seafoam)"
scolor: "#000"
link: /ux/shrink-case-study



hero:
  bg_color: "#FFFFFF"
  left:
    type: cover
    src: "images/dsd-vendor-w.png"
    col: 5
  right:
    type: text
    header: "How can a 'Task Management' app help prevent shrink?"
    header_color: "var(--oak)"
    label: Problem + Opportunity
    body: >
        <p>
        Enterprise data showed that stores were losing millions in revenue because damaged or expired goods weren't being reported for credit.
        </p>
        <p>This information revealed a potential opportunity to extend our product, an associate-facting task management application, into these workflows. How might we drive revenue recovery and strengthen compliance at both the store and enterprise levels?
        </p>
    body_color: "var(--earth)"
    col: 7

outline_role:
  title: "UX Design Lead"
  description: "I led end-to-end research and design for a new feature that would extend our application to a first-time user audience across 2,000+ nationwide stores. As UX Design Lead, I owned the design vision and research strategy, translating insights into design decisions."

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
      col: 12
      type: text
      label: "Process"
      header: "Current State"
      body: >
         <p>I conducted a series of discovery sessions with stakeholders and cross-functional design teams, documenting insights on a central digital whiteboard. This effort streamlined our focus on shrink, clarified user-centered design challenges, and synchronized our roadmap with adjacent initiatives.</p> 

      header_color: "var(--nimbus)"
      body_color: "var(--nimbus)"

    icons:
      text_color: "var(--nimbus)"
      shadow: false
      sets:
      - material: "my_location"
        header: Focusing Our Goal
        text: >
          We understood from our enterprise-level SME that shrink resulted greatly from outstanding credits and from too much vendor product. We understood that the Receiver had many responsibilities beyond this, but we'd need to focus results in this space.
        col: 4
      
      - material: "group_add"
        header: Known Challenges
        text: >
          Our existing application was tailored to work related to receiving distribution center product. Receivers' work rarely intersected with this, if at all. We'd need to develop for a net new user who was equipped with separate, third-party tools that they used to receive product.
        col: 4

      - material: "handshake"
        header: Strategic Partnerships
        text: >
         A separate team was working with a vendor to advance features of a third-party application used by the Receiver. Aligning with this team early, we had a clear understanding of their current and future development and their limitations.
        col: 4
    


  - layout: split
    bg_color: white
    left:
     col: 11
     type: text
     label: "Process"
     header: "Discovery Research"
     body: >
      <p> I led planning for this research: defining what we needed to learn and creating guidance for in-store interviews, observations, and documentation. This guidance supported a group of consultants conducting research across a range of stores of different sizes, regions, and markets. I then translated findings into UX artifacts to aid with next-step planning and all future discussions. </p> 

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
     col: 11
     type: text
     label: "Key Research Findings"
     header: "How did research shape the design? "
     body: >
        In addition to critical insights into the environment and day-to-day life of a DSD Receiver, we identified a number of gaps and challenges that hindered the success of Receivers. Since many of these gaps intersected with other systems and roles that were far beyond the scope of our product or irrelevant to the current business case, we offered our suggestions and emphasized what role our product team might play in next steps. 
     header_color: "var(--earth)"
 


    icons:
        shadow: false
        shadow_color: "var(--golden)"
        sets:
        - material: "forum"
          header: Not Create More Work
          text: "We observed work environments that constantly pulled Receivers' attention in different directions. Their work is highly time-sensitive and requires constant prioritization and communication."
          col: 3
        

        - material: "desktop_mac"
          header: Simplify Complexities
          text: "We observed Receivers switching between tools and devices as they shifted between tasks. Receivers rely on multiple, required third-party tools and devices."
          col: 3
        


        - material: "visibility_off"
          header: Improve Visibility
          text: "We heard from both Receivers and Store Managers that success was achieved through regular communication. Limited visibility into other store activities increases coordination effort."
          col: 3
        

        - material: "assignment"
          header: Add Value for Receivers
          text: "We confirmed our assumption that Receivers recognized our application, but not all interacted with it. It was considered a 'Night Crew App,' not relevant to their work."
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
      label: "Process"
      header: "Ideation"
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
      label: "Process"
      header: "Testing & Iteration"
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
      header_color: "var(--nimbus)"
      body_color: "var(--nimbus)"
---