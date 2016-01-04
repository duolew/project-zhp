var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello1 World</h1>';
app.appendChild(sub());
document.body.appendChild(app);