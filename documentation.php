<?php include 'header.php'; ?>

<link rel='stylesheet' href='CSS/documentation.css'>
<script id='MathJax-script' async src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'></script>

<?php

//Getting project name variable from url
$url = $_SERVER["REQUEST_URI"];
parse_str(parse_url($url)["query"], $query);
$name = $query["project"];

//Getting project data
$jsonFile = file_get_contents("Project documents/$name/data.json");
$data = json_decode($jsonFile, true);

$content = $data["documentation"];

$complexity = $data["metadata"]["complexity"];
$language = $data["metadata"]["language"];
$duration = $data["metadata"]["duration"];
$dateCompleted = $data["metadata"]["dateCompleted"];
$prerequisites = $data["metadata"]["prerequisites"];
$libraries = $data["metadata"]["libraries"];

echo "
<div id='page'>
    <div id='sectionBoxContainer'>
        <div>
            <p><b>Sections</b></p>
            <a href='#details'>> Details</a>";

for ($i = 0; $i < count($content); $i++) {
    
    $id = $content[$i]["id"];
    if ($id != "none") {
        $label = $content[$i]["label"];
        echo "<a href='#$id'>> $label</a>";
    }
}

echo "
        </div>
    </div>

    <div id='content'>
        <h1 id='projectPageTitle'>$name</h1>

        <div id='details'>
            <p><b>Complexity: </b>$complexity</p>
            <p><b>Language: </b>$language</p>
            <p><b>Date Completed: </b>$dateCompleted</p>
            <p><b>Duration: </b>$duration</p>
            <p><b>Libraries: </b>$libraries</p>
            <p><b>Prerequisites: </b>$prerequisites</p>
        </div>

        <div id='documentationContainer'>";

for ($i = 0; $i < count($content); $i++) {

    $id = "";
    if ($content[$i]["id"] != "none") {
        $id = $content[$i]["id"];
    }

    switch ($content[$i]["type"]) {

        case "text":

            $text = implode($content[$i]["content"]);
            echo "<p id='$id'>$text</p>";
            break;

        case "caption":

            $text = implode($content[$i]["content"]);
            echo "<p id='$id' class='caption'>$text</p>"; 
            break;

        case "header":

            $text = $content[$i]["content"];
            echo "<br><br><h1 id='$id'>$text</h1>";
            break;

        case "image":

            $src = $content[$i]["content"];
            echo "<img id='$id' src='Project documents/$name/$src' alt='$id'>";
            break;

        case "small image":

            $src = $content[$i]["content"];
            echo "<img id='$id' class='small' src='Project documents/$name/$src' alt='$id'>";
            break;

        case "list":

            $list = $content[$i]["content"];
            echo "<ul id='$id'>";
            for ($j = 0; $j < count($list); $j++) {
                $text = $list[$j];
                echo "<li>$text</li>";
            }
            echo "</ul>";
            break;
    }

}               ?>
        </div>

        <div id='QuickLinks'>
            <a href='projects.php'>Explore more projects →</a>
        </div>
    </div>
</div>

<div id='borderFadeContainer'>
    <div id='borderFade'></div>
</div>

<?php include 'footer.php'; ?>