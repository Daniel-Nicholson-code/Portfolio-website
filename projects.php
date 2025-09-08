<?php include 'header.php'; ?>

<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'></script>
<script src='Javascript/loadjsonFile.js'></script>
<script src='Javascript/projects.js'></script>
<link rel='stylesheet' href='CSS/projects.css'>

<p id='noResultsText'>No results</p>

<div id='SMALLprojectDatabaseText'>My projects</div>

<div class='topHeading'>

  <div class='projectDatabaseText'>
    <h2>My projects</h2>
  </div>

  <div class='searchText'>
    <p>Search:</p>
  </div>

  <div class='filterText'>
    <p>Filter:</p>
  </div>

  <div class='displayModeText'>
    <p>Display:</p>
  </div>

  <div class='search'>
    <input type='text' id='searchBar' onkeyup='searchOrFilter()' placeholder='e.g. Fluid Dynamics'>
  </div>

  <div class='filter'>
    <label for="cppFilterCheckbox">C++</label>
    <input type='checkbox' checked='checked' onclick='searchOrFilter()' id='cppFilterCheckbox'>

    <label for="pythonFilterCheckbox">Python</label>
    <input type='checkbox' checked='checked' onclick='searchOrFilter()' id='pythonFilterCheckbox'>
  </div>

  <div class='displayMode'>
    <label for='displayModeInput'>grid</label>
    <label class='displayModeSwitch'>
      <input id='displayModeInput' type='checkbox' onclick='displayModeToggle()'>
      <span class='displayModeSlider'></span>
    </label>
    <label for='displayModeInput'>list</label>
  </div>

</div>

<div id='SMALLinfoBox'>
  <p><em>Current selection: </em>Fluid dynamics</p>
  <a href='documentation.php?project=Fluid dynamics'>Project info</a>
</div>

<div id='content' onresize='widthUpdate()'>

  <div id='resultsContainer'>

    <div id='columnHeaderTextContainer'>
      <div>
        <p class='nameText'>[name]</p>
        <p class='complexityText'>[complexity]</p>
        <p class='languageText'>[language]</p>
      </div>
    </div>

    <div id='scrollFade'></div>
    
    <ul id='results'><?php

    $jsonFile = file_get_contents('Javascript/projectDatabase.json');
    $database = json_decode($jsonFile, true);

    for ($i = 0; $i < count($database['projects']); $i++) {
      
      $name = $database['projects'][$i]['name'];
      $complexity = $database['projects'][$i]['complexity'];
      $language = $database['projects'][$i]['language'];

      echo 
      "<li class='li' id='blank'>
        <a href='projects.php#$name' onclick='selectProject($i)' alt='$name'
          onmouseover='highlightBox($i,true)' onmouseleave='highlightBox($i,false)'>
          <img src='Project documents/$name/thumbnail.webp' alt='$name'>
          <div class='textContainer'>
            <p class='nameText'>$name<em> [$language]</em></p>
            <p class='complexityText $complexity hide'>$complexity</p>
            <p class='languageText hide'>$language</p>
          </div>
          <div class='gradient'></div>
        </a>
      </li>";
    }

    ?></ul>
  </div>
  
  <div id='infoBoxContainer'>
    <div id='infoBox'>
      <h3>Fluid dynamics <em>[C++]</em></h3>
      <p>Fluid dynamics simulation, for 2D turbulent flow in an incompressible fluid, and for simulating heat
        dissipation. This was done using the finite volume method and I only used Win32 and SDL. It took
        over 2 years to make - the difficulty mostly coming from the extensive optimisations.
      </p>
      <div id='leftScrollFade'>
        <p onmousedown='scrollGallery(-1)'><</p>
      </div>
      <div id='rightScrollFade'>
        <p onmousedown='scrollGallery(1)'>></p>
      </div>
      <div id='imageScrollerContainer'>
        <p class='imageBuffer'>------</p>
        <div><img src='Project documents/Fluid dynamics/thumbnail.webp' alt='gallery image 0'></div>
        <div><img src='Project documents/Fluid dynamics/image 1.webp' alt='gallery image 1'></div>
        <div><img src='Project documents/Fluid dynamics/image 2.webp' alt='gallery image 2'></div>
        <div><img src='Project documents/Fluid dynamics/image 3.webp' alt='gallery image 3'></div>
        <div><img src='Project documents/Fluid dynamics/image 4.webp' alt='gallery image 4'></div>
        <div><img src='Project documents/Fluid dynamics/image 5.webp' alt='gallery image 5'></div>
        <p class='imageBuffer'>------</p>
      </div>
      <div id='moreInfoButtonContainer'>
        <a id='moreInfoButton' href='documentation.php?project=Fluid dynamics'>Project info</a>
      </div>
    </div>
  </div>

</div>

<div id='QuickLinks'>
  <a href='about.php'>About this website →</a>
</div>

<div id='links'>
  <a href='https://github.com/Daniel-Nicholson-code' target='_blank'>Github</a>
  <a href='Resume.pdf' target='_blank'>Résumé</a>
  <a href='https://uk.linkedin.com/in/daniel-nicholson-uk' target='_blank'>LinkedIn</a>
  <a href='https://leetcode.com/u/Daniel-Nicholson/' target='_blank'>Leetcode</a>
</div>

<?php include 'footer.php'; ?>