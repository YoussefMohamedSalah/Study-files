// .createElement() to create new elements
// .appendChild() to add a child element to a parent element as its last child
// .textContent() to create a text content
// .insertAdjacentHTML() to put HTML text anywhere around an element



// .insertAdjacentHTML('where', htmlTextToAdd);
// beforebegin – inserts the HTML text as a previous sibling
// afterbegin – inserts the HTML text as the first child
// beforeend – inserts the HTML text as the last child
// afterend – inserts the HTML text as a following sibling
/*

<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->

*/

// .style.<prop>
// .cssText
// .setAttribute()
// .className
// .classList
// style.cssText

// selecting the wanted item from the DOM
const textContainer = document.querySelector('.para-container');

// making a new element <p>  
const textToBeAdded = document.createElement('p');

// giving the new made element Attribute of class <p class='object'></p>
textToBeAdded.setAttribute('class', 'object');

// adding the content to the newly made element <p class='object'> Object 2</p>
textToBeAdded.textContent = 'Object 2';

// inserting the newly made element to the DOM 
// textContainer.appendChild(textToBeAdded); // removeChild();

// new function to add elements onClik();
function addObject(){
    textContainer.appendChild(textToBeAdded);
};

// new function to remove elements onClik();
function dellObject(){
    textContainer.removeChild(textToBeAdded);
};










// textToBeAdded.textContainer.removeChild(textToBeAdded);
// const textToBeAdded = '<p class="object"> object 2 </p>';

// textContainer.insertAdjacentHTML('beforeend', textToBeAdded);
// textContainer.appendChild(textToBeAdded);
// textContainer.removeChild(textToBeAdded);
// textToBeAdded.textContainer.removeChild(textToBeAdded);





// function(clickToAdd){
//     textContainer.insertAdjacentHTML('beforeend', textToBeAdded);
//     console.log('buttonClicked');
// }
// function(clickToDel){
//     textContainer.insertAdjacentHTML('beforeend', textToBeAdded);
//     console.log('buttonClicked');
// }