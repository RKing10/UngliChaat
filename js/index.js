function getElement() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            console.log('Response received');
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
}
getElement();