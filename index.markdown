---
layout: home
title: Selected Work
---

# INDEX IS RENDERING

{% assign projects = site.ux | concat: site.motion | concat: site.graphic | concat: site.personal %}

<section class="home">

  {% if page.title %}
    <h1 class="page-heading">{{ page.title }}</h1>
  {% endif %}

  <div class="projects-list">
    {% for project in projects %}
      {% include home/project-card.html
        project=project
        link=project.url
        image=project.hero.image
        title=project.title
        client=project.client
        tags=project.tags
        color=project.theme_color
      %}
    {% endfor %}
  </div>

</section>

