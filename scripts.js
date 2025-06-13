const colors = [
    "#ff0000", "#ffe500", "#78ff00", "#00ffd0", "#db00ff",
    "#001fff", "#ff00c6", "#8200ff"
];

let itemNumber = 0;

//Creates a new list item
function createNewListItem() {
    itemNumber++;
    let listItem = document.createElement('li');
    let listItemText = document.createTextNode("This is list item " + itemNumber);
    listItem.className = "buttonList";
    listItem.appendChild(listItemText);
    document.body.appendChild(listItem);
}

//Generates a random number between 1 and 6
function randomColor() {
    return Math.ceil(Math.random() * 6);
}

document.addEventListener("DOMContentLoaded", function () {
    //Create a div with class name of "header-container"
    let headerContainer = document.createElement('div');
    headerContainer.className = "header-container";
    /*
        //Create an h1 with the text "This is an h1" and append it to the div
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode("This is an h1");
        h1.appendChild(h1Text);
        headerContainer.appendChild(h1);
    
        //Create an h2 and append it to the div
        let h2 = document.createElement('h2');
        let h2Text = document.createTextNode("This is an h2");
        h2.appendChild(h2Text);
        headerContainer.appendChild(h2);
    
    */
    // Create h1 through h6 with the text of "This is an h*"
    for (let i = 1; i < 7; i++) {
        let h = document.createElement('h' + i);
        let hText = document.createTextNode("This is an h" + i);
        h.appendChild(hText);
        h.className = "h" + i;
        h.id = "hRad";
        headerContainer.appendChild(h);
    }

    //Append the div to the dody
    document.body.appendChild(headerContainer);
})

//Header changes color when double clicked
document.addEventListener("dblclick", function (event) {
    const dblClickedElement = event.target;
    if (dblClickedElement.id == "hRad") {
        dblClickedElement.style.color = colors[randomColor() - 1];
    } else if (dblClickedElement.className == "buttonList") {
        dblClickedElement.remove();
    }
})

//Creates a new list item when button is clicked
document.addEventListener("click", function (event) {
    const clickedHeader = event.target;
    if (clickedHeader.className == "addNewListItem") {
        createNewListItem();
    }
})

//When an item list is clicked the color it's change
document.addEventListener("click", function (event) {
    const clickedList = event.target;
    if (clickedList.className == "buttonList") {
        clickedList.style.color = colors[randomColor() - 1];
    }
})