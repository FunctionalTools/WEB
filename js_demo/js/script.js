alert('Hello, World!');
function askQuestion(){
    var p = prompt('What is your name?');
    if(p != null){
        document.getElementById('output').innerHTML = 'Hello, ' + p + '!';
    }
}