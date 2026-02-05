---
layout: project-ux
title: "Tasking App"
client: "Kroger"
tags: [End-to-End]
image: "/images/DSD-vendor.png"
id: DSD
summary: "Assisting a new user audience with taking informed actions"
color: "#d7b0d8"
scolor: "#000"
link: /ux/shrink-case-study



hero:
  bg_color: "var(--seafoam)"
  left:
    type: cover
    src: "images/DSD-vendor.png"
  right:
    type: text
    header: "How can a 'Task Management' app help prevent shrink?"
    header_color: "var(--oak)"
    label: The Problem
    body: >
        <p>
        I served as the lead designer for an associate-facing mobile app that helped stores confirm the receipt of product from distribution centers and help manage Night Crew tasks.
        </p> 
        <p>
        When our business partners identified opportunities related to a different role in the company whose responsibilities included receiving products, we agreed to investigate how and if we might help.
        </p>
    body_color: "var(--earth)"

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
    left:
      type: image
      images:
        - src: "images/dsd_why-how.png"
          alt:
          caption: 
    right:
      type: text
      label: "Current State"
      header: "What we know."
      body: >
         <p>We began our project recognizing that many Receiver responsibilities did not intersect with our application, and some Receivers may not be familiar with our application at all.</p>
         <p>We understood from our enterprise-level SME that shrink resulted greatly from outstanding credits and from too much vendor product.</p>
         <p>We knew a separate team was working to advance features of a third-party application used by the Receiver. Aligning with this team early, we had a clear understanding of their limitations and their current and future development.</p>

      header_color: "var(--golden)"
      body_color: "var(--porridge)"

  - layout: split
    bg_color: "var(--porridge)"
    left:
     col: 8
     type: text
     label: "Discovery Research"
     header: "What do user responsibilities look like in practice?"
     body: >
        I led the planning for this research: defining what we needed to learn
        and creating guidance for in-store interviews, observations, and
        documentation. This supported a group of consultants conducting <mark>research
        across a range of stores of different sizes, regions, and markets.</mark> I
        reviewed interview notes and observation data. And, to help ground my
        understanding, I participated in several in-store interviews.
    right:
      col: 4
      type: callout
      callouts:
      - sub: "What factors impact receipt of credits and product volume?"
        bg_color: 
        sub_color: "var(--oak)"

      - sub: "How might solving this problem impact the Receiver, if at all?"
        bg_color: 
        sub_color: "var(--oak)"
        
      - sub: "What are current perceptions or interactions with our application?"
        bg_color: 
        sub_color: "var(--oak)"
    gallery:
        images:
            - src: "/images/dsd-process-1.png"
              alt: "Receiving workflow"
              caption: Workflow
            - src: "/images/dsd-process-2.png"
              alt: "Vendor intake"
              caption: Sample


  - layout: split
    bg_color: "var(--seafoam)"
    left:
     col: 6
     type: text
     label: "Key Research Findings"
     header: "How did research shape the design? "
     body: >
        We discovered that the high-priority business problem mapped to lower-priority tasks for a role whose focus was often on immediate needs. After presenting this our partners, suggesting additional institutional changes, we evaluated whether a technical solution could assist in any way.
     header_color: "var(--oak)"
    right:
      col: 6
      type: callout
      callouts:
      - header: "Add value to our users."
        header_color: "var(--oak)"
        text: "While receipt of credits and product volume was a high priority for business, there are few ways to achieve these easily and quickly as they often require managing vendors whom the Receiver might have limited insight."

      - header: "Do not add work."
        header_color: "var(--oak)"
        text: "Stores only had one designated Receiver role with limited additional bandwidth. Additional steps in their workflows could risk failure, and would need to fit naturally into their workflows"

    icons:
        sets:
        - material: "desktop_mac"
          text: "Receivers rely on multiple, required third-party tools and devices."
          col: 3

        - material: "visibility_off"
          text: "Limited visibility into other store activities increases coordination effort"
          col: 3

        - material: "forum"
          text: "Their work is highly time-sensitive and requires constant prioritization and communication"
          col: 3
        
        - material: "assignment"
          text: "Receivers recognized our application, but not all interacted with it, noting it related to tertiary duties."
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
        <p>I conducted <mark>multiple workshop sessions with our team</mark>, first prioritizing areas of opportunity we had identified from discovery, then sketching early concepts. We evaluated ideas through group discussion and feature voting.</p>
        <p>
        Given the volume of ideas, we narrowed the work to two design concepts which we would test with users.</p>
        <p>
        Throughout the process, I owned the creation of the design concepts, files, and prototypes, defining the core UI and interactions as we continued to test and iterate.</p>
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
    bg_color: "var(--oak)"
    left:
      type: text
      label: "Testing & Iteration"
      header: "Is this the right solution?"
      header_color: "var(--seafoam)"
      body: >
        We tested concepts with Receivers in stores, walking through the designs and asking targeted questions to assess usability, clarity, and perceived value. As the designs evolved, we continued to gather feedback at key stages while continuing to coordinate with our engineering team on technical feasibility.
        </br></br>
        Once the team and our partners felt confident in the solution, I presented the MVP and select future features in a virtual forum that invited managers of all the 2000+ stores.
        </br></br> 
        I handed off the designs to a UX designer, who aligned them to the design system and refined visual details to support a smooth transition to development.
      body_color: "var(--seafoam)"


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
        - src: "images/fpo-phones.png"
          alt:
          caption:
          position: 
    right:
      type: text
      label: "Results & Achievements"
      header: "What changed because of this?"
      body: >
        <p>
        Unlike past projects, my involvement on the team came to an end before the team had launched alpha or beta tests.</p>
        <p>
        Discovery efforts, however, surfaced conversations about larger oganizational needs to support the success of the DSD Receiver role and what that might mean.
        </p>
        <p>
        Discussions also stirred a need among the team and larger organization to consider better defining the purpose and future trajectory of the application once colloquially referred to as the "Night Crew" application by stores to encompass all receiving activities.
        </p>
      header_color: "var(--golden)"
      body_color: "var(--porridge)"
---