---
layout: project-ux
title: "UX Advocacy"
client: "Free Library of Philadelphia"
tags: [UX/UI, UX Advocacy]
image: "images/FLP-RBD-w.png"
id: myday
summary: "Architecting discovery systems to provide access to archival collections"
color: "var(--party)"
link: /projects/receiving-app

hero:
  bg_color: white
  left:
    type: cover
    src: "images/FLP-RBD-w.png"
  right:
    type: text
    header: "How can we design a user-friendly tool for special collections?"
    header_color: "var(--tokyo)"
    body: >
      <p>
       The Free Library's Rare Book Department oversees and connects the public to the library's vast collection of historic objects and artifacts.
      </p>
       <p>
       When requesting a minor text update, they also expressed that they were not using a section of our site intended to provide the public with information about collections and related services. We asked why and their team shared their belief that visitors were not finding information and that the information on the pages was inaccurate.
      </p>


outline_role:
  title: "UX/UI Designer"
  description: >
    <p>
    Working closely with our subject matter experts and in-house Special Collection partners, I led efforts to better align public web pages to user needs. 
    </p>
    <p>
    As the first dedicated UX/UI designer at the Library in many years, my perpetual goal with every project was to improve the UX maturity of the organization. 
    </p>

outline_methods:
  - Data collation and analysis
  - Diagraming 
  - Heuristics


outline_medium: "Public-facing, Responsive Website"
outline_bg_color: "var(--porridge)"

segments:
  - layout: split
    bg_color:  "var(--earth)"
    left:
      col: 6
      type: image
      images:
      - src: "images/rbd-personas.png"
        alt:
        caption: Value Diagram
    right:
     col: 6
     type: text
     label: User Definition
     header: "Who needs this content?"
     header_color: "var(--nimbus)"
     body: >
        <p>
        In a 40-minute discussion, I engaged the Special Collections team, <mark>asking them to tell me about their experiences engaging with visitors and fielding help desk inquiries.</mark> What were their common questions? How did they initiate contact? What were they hoping to achieve? What challenges did they face when serving their audiences, if any? 
        </p>
        <p>
        From our conversation, we identified two primary audiences: <strong>Researchers and Recreational Visitors</strong>
        </p>
 
     body_color: "var(--nimbus)"

  - layout: split
    bg_color: "var(--porridge)"
    left:
     col: 6
     type: text
     label: "Discovery Research"
     header: "What do tasks look like in practice?"
     body: >
      <p> I tested the belief that visitors were not finding information. Using Google's analytics tool, I noted that visitors were indeed finding these pages, but only engaging in a limited amount of content in the section. Based on the content being explored, we translated this audience behavior into questions the audience was hoping to answer. </p> 
    right:
      col: 6
      type: callout
      callouts:
      - sub: "What do I need to know to visit a collection?"
        bg_color: "white"
        sub_color: "var(--stratus)"

      - sub: "What is in the collection?"
        bg_color: "white"
        sub_color: "var(--stratus)"

      - sub: "How can I engage with the collection?"
        bg_color: "white"
        sub_color: "var(--stratus)"
    gallery:
      images:
       - src: "images/rbd-flow-old.jpg"
         alt: "Receiving workflow"
         caption: Workflow
         col: 12


  - layout: split
    bg_color: "var(--nimbus)"
    left:
     col: 6
     type: text
     label: "Key Research Findings"
     header: "How did research shape the design?"
     body: >
        <p>
        Not having direct contact with users meant we were instilling a lot of information from other data, but this was a good first step for the organization to begin thinking of users. 
        </p>
        <p>
        Conversations revealed an audience that may have gone overlooked. And reviewing analytics helped better shape direction.
        </p>

    right:
      type: callout
      col: 6
      callouts:
      - header: Our solution should...
        sub: >
          <ul>
          <li>allow casual visitors ability to find information quickly</li>
          <li>surface commonly sought information</li>
          <li>help visualize the collections</li>
          <li>accommodate educators</li>
          </ul>

    icons:
        sets:
        - material: "calendar_month"
          text: "Casual visitors were less likely to plan their visit than researchers or educators."
          col: 3

        - material: "query_stats"
          text: "Visitors were finding pages, but not information they were looking for on text-dense pages."
          col: 3

        - material: "contact_support"
          text: "Digital tools and resources were not being used, but without further user insights we did not have enough information to determine why."
          col: 3
        
        - material: "school"
          text: "Library holdings should not accommodate a single Researcher audience, but instead be accessible to all interested audiences."
          col: 3

  - layout: split
    bg_color: "var(--porridge)"
    right:
      type: image
      images:
        - src: "images/rbd-note-book.png"
          alt: A rough sketch of a screen with notes depicting a list of vendors and times
          caption: A sample sketch from one of our sessions. 
        - src: "images/rbd-flow-new.jpg"
          alt:
          caption: new flow

    left:
      type: text
      label: "Design"
      header: "How might we refine?"
      body: >
        <p>
        A major aspect of our redesign involved reducing the amount of text in favor of expressing information visually or in more concise manners. On the landing page, we traded over 500 words for a "snapshot" of the collection in the form of large, clickable areas with high-quality photos.
        </p>
        <p>
        Recognizing that recreational visitors were less likely to plan their visit than researchers, on-site attractions, such as the exhibition spaces and daily tours, were reorganized into more digestible segments and provided links to hours and directions.</p>
        <p>
        Links to additional digital tools and resources on specific topics were previously housed in their own section. We extracted this information and paired it with related topics on the collection detail pages.
        </p>
    gallery:
        images:
            - src: "images/rbd-visitors-page.png"
              alt: "Updated visitors page"
              caption: Easy access to public features
            - src: "images/rbd-digital-tools.png"
              alt: "Digital tools"
              caption: Surfacing digital tools
            - src: "images/rbd-collections-explore.png"
              alt: "collection page featuring images of each collection instead of text"
              caption: "Visualizing collections"


  - layout: split
    bg_color: "var(--earth)"
    left:
      col: 6
      type: image
      images:
        - src: "images/rbd-screen.png"
          alt:
          caption:
          position: 
    right:
      col: 6
      type: text
      label: "Results & Achievements"
      header: "What changed because of this?"
      body: >
        <p>
        This project has yet to launch, but my hope is that our efforts will begin to better answer the questions our visitors have when coming to these pages. From my perspective, a significant win for this project occurs beyond the screen, developing a solution that our Rare Book Department is proud of and eager to promote to their partners and researchers. 
        </p>
        <p>
        Had I continued with the team, I'd be eager to know if and how their help desk inquiries may have been impacted, if casual visitation had increased to the public collections, and how web analytics to these pages may have evolved. 
        </p>

      header_color: "var(--seafoam)"
      body_color: "var(--nimbus)"
---