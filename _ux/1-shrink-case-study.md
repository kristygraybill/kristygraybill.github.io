---
layout: project-ux
title: "How a task management app helps prevent shrink"
client: "Kroger - Grocery Retailer"
tags: [Discovery, Research, Android, Associate Experience]
image: "/images/dsd-vendor-w.png"
id: DSD
summary: "Establishing a centralized hub for vendor oversight and store-level decision support."
color: "var(--seafoam)"
scolor: "#000"
link: /ux/shrink-case-study
sitemap: false
robots: noindex, nofollow



hero:
  bg_color: "#FFFFFF"
  left:
    type: cover
    src: "images/dsd-vendor-w.png"
    col: 5
  right:
    type: text
    header: "How a task management app helps prevent shrink"
    header_color: "var(--oak)"
    label: Problem + Opportunity
    body: >
        <p>
        Enterprise data showed that stores were losing millions in revenue because <mark>damaged or expired goods weren't being reported for credit.</mark>
        </p>
        <p>As a team responsible for an associate-facing task management application, this proved an interesting challenge. </p>
    body_color: "var(--earth)"
    col: 7

callout:
  problem_statment: >
       <h3>How might we</span> drive revenue recovery related to the store role responsible for receiving store credit, the Direct-Store Deliveries (DSD) Receivers?
       </h3>



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
  - User Research + Testing

outline_medium: "Android"
outline_bg_color: "var(--porridge)"

segments:
  - layout: split
    bg_color: "var(--earth)"

    left:
      col: 5
      type: "list"
      label: "Discovery"
      header: "What do we need to know to be successful?"
      subheader: "Methods & Artifacts"
      header_color: "var(--seafoam)"
      subheader_color: "var(--nimbus)"
      list_color: "var(--nimbus)"
      list:
        - sub: Research Planning + Design

        - sub: Contextual Interviews

        - sub: Stakeholder Interviews

        - sub: Behavioral Journey Map

        - sub: SOP Gap Analysis





    right:
      col: 7
      type: text
      body_color: "var(--nimbus)"
      body: 
        <h3>How are credits redeemed and by whom?</h3>
         <p>I recognized that the DSD Receiver role, who handles the third-party vendor management and deliveries to the store, was often been conflated with warehouse receiving. I conducted sessions with stakeholders and cross-functional design teams to help first bring clarity to this role, familiarity with standard operating procedures, and technical considerations from cross-functional teams.</p> 
         <h3>What makes a DSD Receiver successful in receiving credits?</h3>
         <p>With this knowledge, I more defined what we needed to learn and created guidance for in-store interviews, observations, and documentation. This guidance supported a three consultants, an assisting UX designer, and our Product Manager who would be conducting research across a range of stores of different sizes, regions, and markets. </p>


    gallery:
        images:
            - src: "/images/dsd-process-1.png"
              alt: "Receiving workflow"
              caption: Behavioral Journey Map 
              caption_color: "var(--nimbus)"
              col: 6

            - src: "/images/dsd-process-2.png"
              alt: "Vendor intake"
              caption: Behavioral Journey Map
              caption_color: "var(--nimbus)"
              col: 6

    #icons:
      #text_color: "var(--nimbus)"
      #shadow: false
      #sets:
      #- material: "my_location"
      #  header: Focusing Our Goal
      #  text: >
      #    We understood from data provided by our enterprise-level SME that, while the Receiver had many responsibilities, our focus should remain on shrink resulting from outstanding credits and from too much vendor product.
      #  col: 4
      
      #- material: "group_add"
      #  header: Known Challenges
      #  text: >
      #    While there were similarities in work being done by Receivers and our product's users, there were significant differences. We'd need to develop for a net new user who relied on separate, third-party tools.
      #  col: 4

      #- material: "handshake"
      #  header: Strategic Partnerships
      #  text: >
      #   Another team was actively improving a third-party application used by the Receiver. We aligned with this team to help ensure we had a clear understanding of current and future development and their limitations.
      #  col: 4
    


  - layout: split
    bg_color: white
    left:
     col: 12
     type: text
     label: "Key Research Findings"
     # body: >
     #   I translated our teams' findings into artifacts that showcased <mark>critical insights into the environment and day-to-day life of a DSD Receiver</mark> and called out <mark>gaps and challenges that hindered the success of Receivers.</mark>
     header_color: "var(--earth)"
     body_color: var(--stratus)

 


    icons:
        color: "var(--oak)"
        bg: true
        bg_color: "var(--seafoam)"
        header_color: "var(--oak)"
        sets:
        - material: "visibility_off"
          header: >
            "Vendors have my full attention when they are making deliveries or in the store."
          text: "A DSD Receiver ensures that deliveries are made in a timely fashion to keep delivery areas from growing congested with many vendors. Like a good host, they needed to remain attentive to vendors while they were a guest to the store."
          col: 3
        - material: "forum"
          header: >
            "I am not aware of how much of a product the store is receiving until it's arrived."
          text: "We heard from both Receivers and Store Managers that success was achieved through regular communication. Limited visibility into other store activities increases coordination effort."
          col: 3
        - material: "assignment"
          header: >
            "Other teammates perform overlapping tasks that complicate workflows."
          text: "Receivers relied on third-party vendors or store associates to perform certain tasks, while lacking authority over these roles. When tasks were performed poorly or vendors failed to respond, Receivers were absorbing the consequences."
          col: 3

        - material: "desktop_mac"
          header: >
             "I already use multiple apps and tools. I don't need another one."
          text: "We observed Receivers switching between tools and devices as they shifted between tasks. Receivers rely on multiple, required third-party tools and devices. And, few DSD Receivers interacted with our application as it was not essential to their duties."
          col: 3
        

  - layout: split
    bg_color: "var(--porridge)"
    right:
      col: 7
      type: text
      body: >
          <p>
          Through research and testing, we learned a deeper operational truth. <mark>The biggest barrier to capturing credits wasn't lack of technology, it was workplace dynamics. Top performing Receivers succeeded because of strong communication skills and willingness to hold vendors accountable.</mark>
          </p>
          <p>
          Realizing our solution couldn't fix organizational hierarchy, we shifted our design focus to raise the operational baseline rather than optimize for expert users.
          </p>
          <p>
          We focused on how we might guide and support coverage staff and provide hard data and prompts for receivers to provide objective authority.
          </p>
          <p>
          I led workshops to translate research into early concepts, using discussion, co-creation, and voting to prioritize ideas. We narrowed a wide set of directions to two solutions for testing.
          </p>
      body_color: var(--earth)

    left:
      type: list
      label: "Ideation"
      header: "In what ways can our team help?"
      subheader: "Methods + Artifacts"
      col: 5
      list: 
        - sub: "Prioritization Workshop"
        - sub: "Co-Designing Workshop"
        - sub: "Wireframe Sketches"


    gallery:
        images:
            - src: "/images/dsd-prioritization.png"
              alt: "Vendor intake"
              caption: Prioritization Workshop
              col: 4
            - src: "images/dsd-sketch.png"
              alt:  Sample sketch of a screen with notes depicting a list of vendors and times
              caption: Sketch from Co-Designing Workshop
              col: 4
            - src: "/images/dsd-coworking.png"
              alt: "Receiving workflow"
              caption: Co-Design Workshop 
              col: 4




  - layout: split
    bg_color: "var(--porridge)"
    left:
      col: 5
      type: list
      label: "Testing + Iteration"
      header: "Will our designs impact the problem?"
      header_color: "var(--earth)"
      body_color: "var(--stratus)"
      subheader: "Methods + Artifacts"
      subheader_color: "var(--tokyo)"    # Deep blue for the header
      list_color: "var(--tokyo)"      # Slate gray applied to all bullet points
      bg_color: ""        # Light gray background for the entire component block
      list:
        - sub: "A/B Concept Testing"
        - sub: "Friction Mapping"
        - sub: "Mockups, High Fidelity Designs, and Prototypes"
        - sub: "Stakeholder Feedback Session"
    
    right:
      col: 7
      type: text
      body: >
        <p>
        We tested concepts with in-store Receivers, asking targeted questions to evaluate value, priority, usability, and clarity. As the designs evolved, we gathered feedback at key stages and coordinated with engineering on technical feasibility.
        </p>

        <p>As design lead, I built the prototypes and defined the core interface and interactions through iterative testing and refinement. <mark>Refined solutions gave Receivers a clear daily task view and a single access point for their tools, replaced paper processes with guided digital workflows, and improved visibility so the entire store could stay aligned.</mark>
        </p>

        <p>I then presented our refined MVP and select future features in two virtual forums, soliciting further feedback from managers of 2,000+ stores, as our team worked toward a Beta product to pilot.</p>
      body_color: var(--earth)


    gallery:
      images:
        - src: "/images/dsd-wireframe.png"
          alt: "Vendor intake"
          caption: Concept Wireframes
          col: 4
        - src: "images/dsd-feedback-lofi.png"
          alt: 
          caption: "Feedback from users on early concepts"
          col: 4
        - src: "images/dsd-feedback-hifi.png"
          alt: 
          caption: "Feedback from users on revised designs"
          col: 4

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
      label: "Results + Achievements"
      header: 
      body: >
        <p>
        Discovery efforts surfaced conversations about larger organizational needs.
        </p>
        <p>
        My work would inform future research and product roadmap beyond my contract with the team.
        </p>
        <p>
        And, before leaving, I'd worked with the team to establish adoption criteria, baseline metrics, and indicators of the feature's success.  
        </p>
      header_color: "var(--nimbus)"
      body_color: "var(--nimbus)"
---