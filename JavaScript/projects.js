// GLOBAL VARIABLES

var database;
var previousSelection;
var previousContentWidth;





// FUNCTION

//Search bar and filter buttons functionality
//Credit: search function forked off W3Schools demo
function searchOrFilter() {
  var a, div;
  var newProjectList = [];
  var displayModeStatus = document.getElementById("displayModeInput").checked;
  const filteredText = document.getElementById("searchBar").value.toUpperCase();
  var projectList = document.getElementById("results").getElementsByTagName("li");

  //Getting filter checkbox state
  var filter1 = document.getElementById("cppFilterCheckbox").checked;
  var filter2 = document.getElementById("pythonFilterCheckbox").checked;

  //Looping through all list items, and hide those who don't match the search query
  for (i = 0; i < projectList.length; i++) {
    //Checking against inputted search bar text
    var projectTitle = projectList[i].getElementsByTagName("p")[0].textContent;
    var matchesSearch = projectTitle.toUpperCase().indexOf(filteredText) > -1;

    //Checking against filters
    var matchesFilter1 = false;
    //If does contain 'C++' but filter1 is not active: hide
    if (!filter1) {
      matchesFilter1 = projectTitle.toUpperCase().indexOf("C++") > -1;
    }
    var matchesFilter2 = false;
    //If does contain 'Python' but filter2 is not active: hide
    if (!filter2) {
      matchesFilter2 = projectTitle.toUpperCase().indexOf("PYTHON") > -1;
    }

    //Acting on query
    if (matchesSearch && !matchesFilter1 && !matchesFilter2) {
      projectList[i].style.display = "list-item";
      newProjectList.push(projectList[i]);
    } else {
      projectList[i].style.display = "none";
    }
  }

  //Correcting for stying errors caused by hiding elements
  if (displayModeStatus) {
    //If in list mode

    for (i = 0; i < newProjectList.length; i++) {
      
      //Repeating code from displayModeToggle function
      a = newProjectList[i].getElementsByTagName("a")[0];
      div = newProjectList[i].getElementsByClassName("textContainer")[0];

      //Squaring corners if non-edge list item
      a.style.borderRadius = "0px";
      a.style.borderStyle = "none";
      a.style.borderRightStyle = "solid";
      a.style.borderLeftStyle = "solid";
      a.style.borderColor = "var(--color-borders)";
      a.style.borderWidth = "2px";
      div.style.borderRadius = "0px";
      div.style.borderBottomStyle = "solid";
      div.style.height = "40px";

      //Rounding off corners if edge list item
      if (i == 0){
        a.style.borderTopRightRadius = "10px";
        a.style.borderTopLeftRadius = "10px";
        a.style.borderTopStyle = "solid";
        div.style.height = "38.5px";
        div.style.borderTopRightRadius = "8px";
        div.style.borderTopLeftRadius = "8px";
      }
      if (i == newProjectList.length - 1){
        div.style.borderBottomStyle = "none";
        a.style.borderBottomRightRadius = "10px";
        a.style.borderBottomLeftRadius = "10px";
        a.style.borderBottomStyle = "solid";
        div.style.height = "38.5px";
        div.style.borderBottomRightRadius = "8px";
        div.style.borderBottomLeftRadius = "8px";
      }

    }

    //Fixing styling bugs when there is only one result
    if (newProjectList.length == 1) {
      div = newProjectList[0].getElementsByClassName("textContainer")[0];
      div.style.height = "37px";
    }

    //Hiding table titles if no results, showing otherwise
    var headersTextDisplay = "block";
    if (newProjectList.length == 0) { headersTextDisplay = "none"; }
    var headersText = document.getElementById("columnHeaderTextContainer").getElementsByTagName("p");
    // Different behaviour for mobile
    if (window.innerWidth > 510) {
      headersText[0].style.display = headersTextDisplay;
      //Not touching complexity column in certain situations
      if (!(((1000 <= window.innerWidth) && (window.innerWidth <= 1300)) || (window.innerWidth <= 750))) {
        headersText[1].style.display = headersTextDisplay;
      }
      headersText[2].style.display = headersTextDisplay;
    }
  }
}





// FUNCTION

//Changes project page display from grid to list or vis versa
function displayModeToggle() {
  var a, gradient, div, text;
  var projectList = document.getElementsByClassName("li");
  var previousBox = projectList[previousSelection].getElementsByTagName("a")[0];
  var columnText = document.getElementById("columnHeaderTextContainer");
  var infoBox = document.getElementById("infoBox");

  if (document.getElementById("displayModeInput").checked) {
    //If in list mode

    //Updating local storage
    localStorage.setItem('display', 'list');
    
    //Showing 'name complexity language' text
    columnText.style.display = "block";

    //Fixing allignment issue
    infoBox.style.marginTop = "0px";

    //Looping through every list element, and changing the style
    for (i = 0; i < projectList.length; i++) {
      a = projectList[i].getElementsByTagName("a")[0];
      gradient = projectList[i].getElementsByClassName("gradient")[0];
      div = projectList[i].getElementsByClassName("textContainer")[0];
      img = projectList[i].getElementsByTagName("img")[0];
      text = projectList[i].getElementsByTagName("p");
      langText = projectList[i].getElementsByTagName("em")[0];

      //Styling
      projectList[i].style.width = "100%";
      a.style.width = "100%";
      a.style.height = "40px";
      a.style.margin = "0px";
      a.style.borderStyle = "none";
      a.style.borderRightStyle = "solid";
      a.style.borderLeftStyle = "solid";
      a.style.borderRadius = "0px";
      gradient.style.display = "none";
      div.style.height = "40px";
      div.style.width = "calc(100% - 3px)";
      div.style.borderRadius = "0px";
      div.style.borderStyle = "none";
      div.style.borderBottomStyle = "solid";
      div.style.borderBottomColor = "var(--color-background)";
      div.style.paddingRight = "10px";
      img.style.display = "none";
      langText.style.display = "none";
      if (((1000 < window.innerWidth) && (window.innerWidth <= 1300)) || (window.innerWidth <= 750)) {
        div.style.gridTemplateColumns = "1fr 0px 110px";
        text[1].style.display = "none";
        columnText.getElementsByTagName("p")[1].style.display = "none";
      } else {
        div.style.gridTemplateColumns = "1fr 110px 110px";
        text[1].style.display = "block";
        columnText.getElementsByTagName("p")[1].style.display = "block";
      }
      text[2].style.display = "block";

      //Styling border cases
      if (i == 0){
        a.style.borderTopRightRadius = "10px";
        a.style.borderTopLeftRadius = "10px";
        a.style.borderTopStyle = "solid";
        div.style.height = "38.5px";
        div.style.borderTopRightRadius = "8px";
        div.style.borderTopLeftRadius = "8px";
      }
      if (i == projectList.length - 1){
        div.style.borderBottomStyle = "none";
        a.style.borderBottomRightRadius = "10px";
        a.style.borderBottomLeftRadius = "10px";
        a.style.borderBottomStyle = "solid";
        div.style.height = "38.5px";
        div.style.borderBottomRightRadius = "8px";
        div.style.borderBottomLeftRadius = "8px";
      }
    }

    //Repeating code from selectProject function
    var textContainer = previousBox.getElementsByTagName("div")[0];
    textContainer.style.borderLeftStyle = "solid";
    textContainer.style.paddingRight = "10px";
    textContainer.style.borderLeftWidth = "10px";
    textContainer.style.borderLeftColor = "var(--color-accent)";

  } else {
    //If in grid mode

    //Updating local storage
    localStorage.setItem('display', 'grid');

    //Hiding 'name complexity language' text
    columnText.style.display = "none";

    //Fixing allignment issue
    infoBox.style.marginTop = "10px";

    //Looping through every list element, and changing the style
    for (i = 0; i < projectList.length; i++) {
      a = projectList[i].getElementsByTagName("a")[0];
      gradient = projectList[i].getElementsByClassName("gradient")[0];
      div = projectList[i].getElementsByClassName("textContainer")[0];
      img = projectList[i].getElementsByTagName("img")[0];
      text = projectList[i].getElementsByTagName("p");
      langText = projectList[i].getElementsByTagName("em")[0];

      //Styling
      projectList[i].style.width = "";
      a.style.width = "210px";
      a.style.height = "130px";
      a.style.margin = "10px";
      a.style.borderRadius = "10px";
      a.style.borderStyle = "solid";
      gradient.style.display = "block";
      div.style.height = "55px";
      div.style.width = "207px";
      div.style.borderRadius = "0px";
      div.style.borderBottomRightRadius = "8px";
      div.style.borderStyle = "none";
      div.style.paddingRight = "20px";
      div.style.borderTopStyle = "solid";
      div.style.borderBottomLeftRadius = "8px";
      div.style.gridTemplateColumns = "1fr 0px 0px";
      img.style.display = "block";
      langText.style.display = "inline";
      text[1].style.display = "none";
      text[2].style.display = "none";

      //Styling border cases
      if (i == 0){
        div.style.borderTopRightRadius = "0px";
        div.style.borderTopLeftRadius = "0px";
      }
    }

    //Repeating code from selectProject function
    previousBox.style.borderLeftStyle = "solid";
    previousBox.style.borderLeftWidth = "10px";
    previousBox.style.borderLeftColor = "var(--color-accent)";
    var textContainer = previousBox.getElementsByTagName("div")[0];
    var img = previousBox.getElementsByTagName("img")[0];
    textContainer.style.borderLeftStyle = "none";
    textContainer.style.paddingRight = "10px";
    textContainer.style.width = "199px";
    textContainer.style.borderLeftWidth = "0px";
    textContainer.style.borderBottomLeftRadius = "0px";
    img.style.filter = "grayscale(0%)";

  }

  //Correcting for styling mistakes on hidden data
  searchOrFilter();

}





// FUNCTION

//Selecting project to display in info box
function selectProject(i) {
  const projectData = database[i];
  var projectList = document.getElementsByClassName("li");
  var previousBox = projectList[previousSelection].getElementsByTagName("a")[0];
  var selectedBox = projectList[i].getElementsByTagName("a")[0];
  var infoBox = document.getElementById("infoBox");
  var SMALLinfoBox = document.getElementById("SMALLinfoBox");

  //Updating this for next time
  previousSelection = i;

  //Highlighting selected box
  if (document.getElementById("displayModeInput").checked){
    //If in list mode

    //Removing highlight of previous selection
    var textContainer = previousBox.getElementsByTagName("div")[0];
    textContainer.style.borderLeftStyle = "none";
    textContainer.style.borderLeftWidth = "0px";

    //Highlighting current selection
    textContainer = selectedBox.getElementsByTagName("div")[0];
    textContainer.style.borderLeftStyle = "solid";
    textContainer.style.borderLeftWidth = "10px";
    textContainer.style.borderLeftColor = "var(--color-accent)";

  } else {
    //If in grid mode

    //Removing highlight of previous selection
    var textContainer = previousBox.getElementsByTagName("div")[0];
    var img = previousBox.getElementsByTagName("img")[0];
    textContainer.style.borderBottomLeftRadius = "8px";
    textContainer.style.paddingRight = "20px";
    textContainer.style.width = "207px";
    previousBox.style.borderLeftWidth = "2px";
    previousBox.style.borderLeftColor = "var(--color-borders)";
    img.style.filter = "grayscale(100%)";

    //Highlighting current selection
    img = selectedBox.getElementsByTagName("img")[0];
    textContainer = selectedBox.getElementsByTagName("div")[0];
    textContainer.style.borderBottomLeftRadius = "0px";
    textContainer.style.paddingRight = "10px";
    textContainer.style.width = "199px";
    selectedBox.style.borderLeftStyle = "solid";
    selectedBox.style.borderLeftWidth = "10px";
    selectedBox.style.borderLeftColor = "var(--color-accent)";
    img.style.filter = "grayscale(0%)";

  }

  //Updating info box blurb
  infoBox.getElementsByTagName("p")[0].innerHTML = projectData['blurb'].join('');

  //Updating info box title text
  infoBox.getElementsByTagName("h3")[0].innerHTML = projectData['name'].concat(" <em>[",projectData['language'],"]</em>");
  SMALLinfoBox.getElementsByTagName("p")[0].innerHTML = "<em>Current selection: </em>".concat(projectData['name']);

  //Updating info box gallery
  infoBox.getElementsByTagName("img")[0].src = "Project documents/".concat(projectData['name'],"/thumbnail.webp");
  for (i = 1; i < projectData['imageCount']; i++) {
    infoBox.getElementsByTagName("img")[i].style.display = "block";
    infoBox.getElementsByTagName("img")[i].src = "Project documents/".concat(projectData['name'],"/image ",i,".webp");
  }
  for (i = projectData['imageCount']; i < 6; i++) {
    infoBox.getElementsByTagName("img")[i].style.display = "none";
  }

  //Resetting default view of gallery
  document.getElementById("imageScrollerContainer").scrollLeft = 253;

  //Updating link of more info button
  SMALLinfoBox.getElementsByTagName("a")[0].href = "documentation.php?project=".concat(projectData['name']);
  document.getElementById("moreInfoButton").href = "documentation.php?project=".concat(projectData['name']);
}





// FUNCTION

//Scrolling the info box gallery when hoving over scroll button
async function scrollGallery(direction) {

  gallery = document.getElementById("imageScrollerContainer")
  currentItem = Math.round(gallery.scrollLeft / 247);
  nextItem = currentItem + direction;
  
  for (i = 0; i < 15; i++) {
    gallery.scrollLeft += ((nextItem*247 + 6) - gallery.scrollLeft)*0.4;
    await new Promise(r => setTimeout(r, 5));
  }
  
}




// FUNCTION

//Highlights the project box when hovered over
function highlightBox(i, mouseover) {

  var div = document.getElementsByClassName("textContainer")[i];

  if (window.innerWidth > 530) {
    if (mouseover) {
      div.style.backgroundColor = "var(--color-highlight)";
    } else {
      div.style.backgroundColor = "var(--color-highlightBackground)";
    }
  }
}






// EVENT LISTENER

//Runs when the page loads or refreshes
document.addEventListener('DOMContentLoaded', function() {

  //Loading database from json file and putting into global scope
  loadjsonFile('Javascript/projectDatabase.json').then((jsonFile) => {
    database = jsonFile.data.projects;
  });

  //Selecting first project to get started
  previousSelection = 0;

  //Fixing styling errors
  document.getElementById("imageScrollerContainer").scrollLeft = 253;

  //Updating this incase the window resizes
  previousContentWidth = document.getElementById("content").getBoundingClientRect().width;

  //Checking if user previously had list mode on, if so updating it
  if (localStorage.getItem('display') == 'list'){
    document.getElementById("displayModeInput").checked = true;
  }

  //Putting it into list mode if on mobile
  if (window.innerWidth <= 530) {
    document.getElementById("displayModeInput").checked = true;

    //Changing [name] text
    document.getElementsByClassName("nameText")[0].innerHTML = "Select a project:";
  }
  
  displayModeToggle();

});





// EVENT LISTENER

//Runs when the window resizes
window.addEventListener("resize", function() {

  var currentContentWidth = document.getElementById("content").getBoundingClientRect().width;

  //Checking if content has changed size
  if (previousContentWidth != currentContentWidth) {
    
    //Updating the counter
    previousContentWidth = currentContentWidth;

    //Fixing styling bugs for 530px and above
    if (document.getElementById("displayModeInput").checked) {

      //If in list mode
      if (document.getElementsByClassName("complexityText")[0].style.display == "none"){
        if (!(((1000 < window.innerWidth) && (window.innerWidth < 1300)) || (window.innerWidth < 750))) {
          
          //Showing complexity column
          var projectList = document.getElementsByClassName("li");
          var complexityText = document.getElementsByClassName("complexityText");
          var divs = document.getElementsByClassName("textContainer");

          for (i = 0; i < projectList.length; i++) {
            divs[i].style.gridTemplateColumns = "1fr 110px 110px";
            complexityText[i].style.display = "block";
          }
          complexityText[projectList.length].style.display = "block";
          
        } 
      } else {
        if (((1000 <= window.innerWidth) && (window.innerWidth <= 1300)) || (window.innerWidth <= 750)) {
          
          //Hiding complexity column
          var projectList = document.getElementsByClassName("li");
          var complexityText = document.getElementsByClassName("complexityText");
          var divs = document.getElementsByClassName("textContainer");

          for (i = 0; i < projectList.length; i++) {
            divs[i].style.gridTemplateColumns = "1fr 0px 110px";
            complexityText[i].style.display = "none";
          }
          complexityText[projectList.length].style.display = "none";

        } 
      }
    }

    //Fixing styling bugs for less than 550px (mobile)
    if (window.innerWidth <= 530) {
      //Putting it into list mode
      document.getElementById("displayModeInput").checked = true;
      displayModeToggle();

      //Changing [name] text
      document.getElementsByClassName("nameText")[0].innerHTML = "Select a project:";
    } else {
      //Changing [name] text
      document.getElementsByClassName("nameText")[0].innerHTML = "[name]";
    }
    
  }

  //Fixing gallery scroll position
  document.getElementById("imageScrollerContainer").scrollLeft = 253;

});