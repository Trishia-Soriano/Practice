// we find the button in the HTML and name it 'btn'
const btn = document.querySelector('button');

//we create a function that runs every time the button is clicked
btn.addEventListener('click', function() {
    alert('Button was clicked!');
});

    //the 'logic': we chek the current color of the body 
if (document.body.style.backgroundColor === 'lightblue') {

    //if the color is lightblue, we change it to white
    document.body.style.backgroundColor = 'white';
} else {

    //if the color is not lightblue, we change it to lightblue
    document.body.style.backgroundColor = 'lightblue';
};