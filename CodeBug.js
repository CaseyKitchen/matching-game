function getRand(min, max) {
    return Math.floor((Math.random()*(max-min)))+min;
}
var numberOfFaces = 5;

var newCount = 0;

function wrapper() {
    newCount = generateFaces(newCount);
    //(myCount ++); //=1
    if(newCount == 3)
    {
        window.location.href='Popup.html'; return false;
    }
}

function generateFaces(myCount) {
    myCount++;
    var theRightSide = document.getElementById("rightSide");
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    var theBody = document.getElementsByTagName("body")[0];
    var theLeftSide = document.getElementById("leftSide");
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    for (var i = 0 ; i < numberOfFaces ; i++) {
        var theImg = document.createElement("img");
        theImg.src = "http://emojipedia-us.s3.amazonaws.com/cache/eb/ee/ebeed1027109319e804af2efaa3e5c67.png";
        theImg.style.top = getRand(0, 400)+'px';
        theImg.style.left = getRand(0, 400)+'px';
        theLeftSide.appendChild(theImg);
    }
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
    theLeftSide.lastChild.onclick = function nextLevel(event){
        event.stopPropagation();
        numberOfFaces += 5;
        //generateFaces(myCount);
        wrapper();
    };
    return myCount;
}
