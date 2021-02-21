const { response } = require("express");

// Make sure we wait to attach our handlers intil the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE 
    const changeDevouredBtns = document.querySelectorAll('.change-devoured');

    // Set up the event listener for the create button
    if (changeDevouredBtns) {
        changeDevouredBtns.forEach((btn) => {
            console.log('test');
            // Grabs the id of the element that goes by the name, "id".
            const id = e.target.getAttribute('data-id');
            const newDevoured = e.target.getAttribute('data-newDevoured');

            const newDevouredState = {
                devoured: newDevoured,
            };

            fetch(`/api/burger/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json',
                },

                // Serialize the JSON body.
                body: JSON.stringify(newDevouredState),
            }).then((response) => {
                // Check that the response is all good.
                // Reload the page so the user can see the new state of the burger.
                if (response.ok) {
                    console.log(`changed devoured to: ${newDevoured}`);
                    location.reload('/');
                }
            });
        });
    }

    // CREATE
    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            //Grabs the value of the textarea that goes by the name "burgerName"
            const newBurger = {
                burger_name: document.getElementById('burgerName').value.trim(),
                devoured: document.getElementById('devoured').checked,
            }

            // Send POST request to create a new burger.
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // Serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burgerName').value = ' ';

                // Reload the page so the user can see the new burger.
                console.log('Created a new burger!');
                location.reload();
            });
        });
    }
});