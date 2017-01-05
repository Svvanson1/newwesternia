var slideIndex = 1;
showDivs(slideIndex);

// TODO When User clicks one of the arrows call this
//
// I think I have to fuck with this in producution.html
// <a class="slideshow.js" onclick="plusDivs(-1)">Back&#10094;</a>
// <a class="slideshow.js" onclick="plusDivs(+1)">Next&#10095;</a>
//
//This function also adds and subtracts elements to "slideElement"
function plusDivs(n) {
    showDivs(slideIndex += n);
}

//Displays First Image
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideClass");//Retreieves document "slideClass"
    if (n > x.length) {slideIndex = 1} //If the slideIndex is less than 1 it is set to number of elements (x.length)
    if (n < 1) {slideIndex = x.length}//If the slideIndex is higher than the number of elements (x.length) the slideIndex is 0
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}