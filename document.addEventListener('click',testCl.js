document.addEventListener('click',testClic);

function testClic() {
    alert('clic effectué');
}


document.addEventListener('click', function() { alert('second clic effectué'); });