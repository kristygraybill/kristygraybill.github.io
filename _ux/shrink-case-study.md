---
layout: project-ux
title: "Kroger_Receiving App"
client: "Kroger"
theme_color: "#D7B0D8"

hero:
  bg_color: "#DFEBE0"
  left:
    type: cover
    src: "/images/grf-Grocery-Vendors.png"
  right:
    type: text
    header: "How can a 'Receiving' app help prevent shrink?"
    body: >
       I served as the lead designer for an associate-facing mobile app that helped stores confirm the receipt of product from distribution centers and manage related Night Crew tasks, such as stocking these deliveries.
        </br></br>     
       Our business partners identified opportunities related to a different role in the company whose responsibilities also included receiving products, they asked how we might help. 


outline_role:
  title: "UX Design Lead"
  description: "I led end-to-end research and design for a new feature that would bring our application to a first-time user audience across 2,000+ nationwide stores. As UX Design Lead, I owned the design vision and research strategy, translating insights into design decisions."

outline_collaborators:
  - Product Manager
  - Development
  - Team Business Analyst
  - UX/UI Designer
  - UX Manager

outline_methods:
  - Workshop Facilitation
  - Product Design
  - Interactive Prototyping
  - User Research & Testing

outline_medium: "Android"
outline_bg_color: "#F5F5F5"

segments:
  - layout: split
    bg_color: "#1C232B"
    left:
      type: image
      src: "images/dsd_why-how.png"
    right:
      type: text
      label: "Problem Framing"
      header: "Where does shrink occur?"
      body: "We understood from our enterprise-level SME that shrink resulted greatly from outstanding credits due a store and from too much vendor product."
      header_color: "#CBDA5A"
      body_color: "#FFFFFF"

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
        documentation. This supported a group of consultants conducting research
        across a range of stores of different sizes in varying locations. I
        reviewed interview notes and observation data. And, to help ground my
        understanding, I participated in several in-store interviews.
    right:
      col: 4
      type: callout
      callouts:
      - sub: "What factors impact receipt of credits and product volume?"
        bg_color: "#CBDA5A"
        color: "#1C232B"

      - sub: "How might solving this problem impact the Receiver, if at all?"
        bg_color: "#CBDA5A"
        color: "#1C232B"
        
      - sub: "What are current perceptions or interactions with our application?"
        bg_color: "#CBDA5A"
        color: "#1C232B"
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

     header_color: "var(--color-earth)"
    right:
      col: 6
      type: callout
      callouts:
      - header: "Add value to our users."
        header_color: "var(--earth)"
        text: "Receivers were already operating at capacity, so any added steps could risk failure"

      - header: "Do not add work."
        header_color: "var(--earth)"
        text: "Interactions had to be quick and fit naturally into busy, physical workflows"
        
      - header: "Fit existing tools and timing."
        header_color: "var(--earth)"
        text: "The solution needed to work alongside required systems and tasks. This role was ***"
    icons:
        sets:
        - fa: "desktop"
          text: "Receivers rely on multiple, required third-party tools and devices."
          col: 3

        - fa: "desktop"
          text: "Limited visibility into other store activities increases coordination effort"
          col: 3

        - fa: "desktop"
          text: "Their work is highly time-sensitive and requires constant prioritization and communication"
          col: 3
        
        - fa: "desktop"
          text: "Receivers recognized our application, but not all interacted with it, noting it related to tertiary duties."
          col: 3

  - layout: split
    bg_color: "var(--porridge)"
    left:
      type: text
      label: "Ideation"
      header: "What should we build?"
      body: >
        <p>I conducted multiple workshop sessions with our team,first prioritizing areas of opportunity we had identified from discovery, then sketching early concepts. We evaluated ideas through group discussion and feature voting.</p>
        <p>
        Given the volume of ideas, we narrowed the work to two design concepts which we would test with users.</p>
        <p>
        Throughout the process, I owned the creation of the design concepts, files, and prototypes, defining the core UI and interactions as we continued to test and iterate.</p>

    right:
      type: image
      images:
        - src: "images/dsd-sketch.png"
          alt: A rough sketch of a screen with notes depicting a list of vendors and times
          caption: A sample sketch from one of our sessions. 
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
    bg_color: "var(--seafoam)"
    left:
      type: text
      label: "Testing & Iteration"
      header: "Is this the right solution?"
      body: >
        We tested concepts with Receivers in stores, walking through the designs and asking targeted questions to assess usability, clarity, and perceived value. As the designs evolved, we continued to gather feedback at key stages while continuing to coordinate with our engineering team on technical feasibility.
        </br></br>
        Once the team and our partners felt confident in the solution, I presented the MVP and select future features in a virtual forum that invited managers of all the 2000+ stores.
        </br></br> 
        I handed off the designs to a UX designer, who aligned them to the design system and refined visual details to support a smooth transition to development.

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
    bg_color: "var(--tokyo)"
    left:
      type: image
      src: "images/fpo-phones.png"
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
      header_color: "#CBDA5A"
      body_color: "#FFFFFF"
---