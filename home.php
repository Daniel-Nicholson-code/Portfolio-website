<?php include 'header.php'; ?>

<link rel='stylesheet' href='CSS/home.css'>

<div id='page'>
  <div id='content'>

    <h2>About me and this website</h2>

    <p>I'm an undergradate mathematics student at the University of Newcastle upon Tyne. 
      This website is a technical portfolio to show my software development skills, and
      also to act as documentation for my projects. I've written a short article on each,
      detailing how I made it, and on my <a href='https://github.com/Daniel-Nicholson-code' target='_blank'>
      github</a> you can find the code.
      <br><br>
      <b>Technologies I use:</b>
    </p>

    <div id='technologies'>
      <img alt='C plus plus' src='https://img.shields.io/badge/-C++-c2c2c2?logo=cplusplus&logoColor=black&style=for-the-badge'>
      <img alt='Python' src='https://img.shields.io/badge/-Python-c2c2c2?logo=python&logoColor=black&style=for-the-badge'>
      <img alt='JavaScript' src='https://img.shields.io/badge/-JavaScript-c2c2c2?logo=javascript&logoColor=black&style=for-the-badge'>
      <img alt='Git' src='https://img.shields.io/badge/-git-c2c2c2?logo=git&logoColor=black&style=for-the-badge'>
      <img alt='JSON' src='https://img.shields.io/badge/-json-c2c2c2?logo=json&logoColor=black&style=for-the-badge'>
      <img alt='PHP' src='https://img.shields.io/badge/-PHP-c2c2c2?logo=php&logoColor=black&style=for-the-badge'>
      <img alt='HTML5' src='https://img.shields.io/badge/-HTML5-c2c2c2?logo=html5&logoColor=black&style=for-the-badge'>
      <img alt='CSS' src='https://img.shields.io/badge/-CSS-c2c2c2?logo=css&logoColor=black&style=for-the-badge'>
    </div>

    <div class='QuickLinks'>
      <a href='about.php'>More about me →</a>
    </div>

    <h2>Pinned projects</h2>

    <div id='pinned'>

      <article class='projectBox'>
        <h3>Fluid dynamics <em>[C++]</em></h3>

        <p>Fluid dynamics simulation, for 2D turbulent flow in an incompressible fluid, and for simulating heat
          dissipation. This was done using the finite volume method and I only used Win32 and SDL. It took
          over 2 years to make - the difficulty mostly coming from the extensive optimisations.
        </p>
      
        <div class='moreInfoButtonContainer'>
          <a class='moreInfoButton' href='documentation.php?project=Fluid dynamics'>Project info</a>
        </div>
      </article>

      <article class='projectBox'>
        <h3>Portfolio website <em>[WebDev]</em></h3>

        <p>Website to show off my software engineering projects, and to display my webdev skills. Built
          from the ground up with php, javascript, css and json as a flat file database; as well as being
          a virtual CV, it also contains documentation on each project.
        </p>
      
        <div class='moreInfoButtonContainer'>
          <a class='moreInfoButton' href='documentation.php?project=Portfolio website'>Project info</a>
        </div>
      </article>

      <article class='projectBox' id='finalProjectBox'>
        <h3>Julia sets <em>[Python]</em></h3>

        <p>Using Julia sets/Fatou dust representations to create fractals. Also taking a look
          at the Mandelbrot and burning ship fractals, and how complex functions can be mapped.
          Oversaw by two professors from The University of Liverpool.
        </p>
      
        <div class='moreInfoButtonContainer'>
          <a class='moreInfoButton' href='documentation.php?project=Julia sets'>Project info</a>
        </div>
      </article>

    </div>

    <div class='QuickLinks'>
      <a href='projects.php'>More projects →</a>
    </div>

    <h2>My education</h2>

    <div id='educationBox'>

      <div id='timeline'></div>
      <div id='timelineFade'></div>

      <em class='education2'>2024 → 2027</em>
      <span class='education2'></span>
      <img src='Images/Newcastle Logo.svg' class='education2'>
      <div class='education2'>
        <p><b>University of Newcastle upon Tyne<br>Mathematics BSc (Hons)</b>
        <br>Grade (as of after first year): 1st class · 87%</p>
      </div>

      <em class='education1'>2022 → 2024</em>
      <span class='education1'></span>
      <img src='Images/ULMAS Logo.webp' class='education1'>
      <div class='education1'>
        <p><b>University of Liverpool Maths school<br>A levels (GCE)</b>
        <br>Maths · Further Maths · Computer Science · Physics</p>
      </div>

    </div>

    <div id='links'>
      <a href='https://github.com/Daniel-Nicholson-code' target='_blank'>Github</a>
      <a href='Resume.pdf' target="_blank">Résumé</a>
      <a href='https://uk.linkedin.com/in/daniel-nicholson-uk' target='_blank'>LinkedIn</a>
      <a href='https://leetcode.com/u/Daniel-Nicholson/' target='_blank'>Leetcode</a>
    </div>

  </div>
</div>

<?php include 'footer.php'; ?>