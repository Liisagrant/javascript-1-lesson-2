// We code it together

// 1. Select heading h2
const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2
const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with id #list using querySelector
const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementById
const listGetElementById = document.getElementById("list");
console.dir(listGetElementById);

// 5. Select single li
const listItem = document.querySelector("li");
console.log(listItem);
// 6.
//  a. Select Multiple li's
const listitems = document.querySelectorAll("li");
console.log(listitems)
//  b. Loop on the list items
for (let i = 0; i < listitems.length; i++) {
    console.log(listitems[i].innerText);
}

// 7.
    // a. select h1 element
const heading1 = document.querySelector("h1");
console.log(heading1);
    // b. Change the color of that h1 to be purple
heading1.style.color = "green";
    // c. Change the border to be 1px solid green
heading1.style.border = "solid 6px red";
    // d. Change background colour to be light gray
heading1.style.backgroundColor = "lightgray";
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )
heading1.style.padding = "1em";

// 1. i want to select a div element 
const myDiv = document.querySelector("div");
console.log(myDiv);
// 2. see if it has any class name
console.log(myDiv);
// 3. add a class to this div element
myDiv.classList.add("container");
// 4. see if it has a class name now
console.log()
// 5. add another class to the div
myDiv.classList.add("second-class");
console.log(myDiv);
// so in total i have two class names on the div
myDiv.style.border = "1px solid yellow"
myDiv.innerText = "hello I am happy";

// 1. select the h1 and change the innerText
heading1.innerText = "Hello Lisa"

// 2.loop through al the li element and change the innerText value to be changed
const allTheLisItems = document.querySelectorAll("li");
for (let i = 0; i <allTheLisItems.length; i++ ) {
    allTheLisItems[i].innerText = allTheLisItems[i].innerText + " Change";
}

// 3.change the innerHTML of the h1 to be updated using innerHTML
heading1.innerHTML = "Lisa Grant update";
heading2.innerHTML = "space is wowowowow"


// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>
const someContainer = document.querySelector("div");
someContainer.innerHTML = `<p>
<b>Bold text </b> not bold text
</p>`;

// 5. select the ul
const list3 = document.querySelector("ul");
console.log(list3);
//  a. get the existing HTML inside the ul element and assign it to a variable
const existingHTML = list3.innerHTML;
//  a. create the new li HTML
const newHTMLLi = `<li>Hello I am a new item hamster</li>`
//  b. set the uls new HTML to the existing HTML plus the new HTML
list3.innerHTML = existingHTML + newHTMLLi;

