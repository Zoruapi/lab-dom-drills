DOM Drills

    Objective

        The objective of this assignment is to practice the basics of vanilla JavaScript
        DOM manipulation. DOM manipulation takes time and practice to fully grasp, go
        throgh the following tasks to practice.

    Tasks
        1. Create an index.html file, styles.css file, and a script.js file.
        2. Link the styles to ndex.html and link the scrpits in the HEAD of the index.html,
           not in the body.
        3. In the scripts.js file, using DOM manipulation, create a div with a class named
           "header-container".
        4. Create a h1 element, then create a text node with the text "This is an h1".
           Append the text to the h1 then append the h1 to the div, then append the div
           to the body. Does it show up? If you put the script tag in the head of your
           html, then no, it did not show up. Thats what i wanted. Lets hop to google and
           search hint: "DOM content Loaded"
        5. With the h1 now appearing on the page, lets practice creating multiple elements
           and having them appear. Create a h2 element, give it the text "This is a h2"
           and append it to the same div the h1 one is.
        6. Repeat the following task for h3's through h6's.
        7. Give each heading element a class name that represents what type of heading it is.
           If it is an h1, the class should be "h1".
        8. Go to styles.css and style each different heading element with a different color.
           Target the elements by class name.
        9. Create and array of 8 colors, add an event listener that changes the color of a
           heading to a random color from the array when it is double clicked.
        10. Add a button in the index.html, give this button text that says "Click to add new
            list item", give the button a clase name of your choosing.
        11. In the scripts.js file, write a function that inserts a list item, have the first
            item say "This is list item 1" and any subsequent list item should have the
            number incremented by 1.
        12. Create an event listener that calls th new list item function every time the
            button is clicked.
        13. Using the same random color function created above, apply an event listener that
            when a list item is clicked once, it changes the color of the font to one of
            the 8 ranodm colors.
        14. Create a function that if a list item is double clicked it removes the list item
            from the DOM.