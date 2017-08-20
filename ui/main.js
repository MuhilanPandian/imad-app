// Counter code
var button = document.getElementById("counter");

button.onclick = function () {
 
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in variable
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) { 
                // Take some action
                if (request.status === 200) {
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
            }
            // Not done yet
        };
        
        // Make the request
        request.open('GET','http://muhilanpandian97.imad.hasura-app.io/counter',true);
        request.send(null);
};

// Submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in variable
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) { 
                // Take some action
                if (request.status === 200) {
                // Capture the list of names and render it as the list
                var names request.resposeText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i< names.length; i++) {
                list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
                }
            }
            // Not done yet
        };
        
        // Make the request
        request.open('GET','http://muhilanpandian97.imad.hasura-app.io/sbmit-name?name=' + name,true);
        request.send(null);
    
};