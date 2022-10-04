var firstItem = document.getElementById('one');
var showTextContent = firstItem.innerText;
var msg = '<p>textContent:' + showTextContent + '</p>';
    msg += '<p>innerText:' + showInnerText + '</p>';
var el = document.getElementById('scripResults');
firstItem.textContent = 'sourdough bread';