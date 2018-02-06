// Zmienne do komunikacji z serwerem
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2755',
  'X-Auth-Token': '09a04a11c21e6d2526c9705cfe596105'
};

// Naglówki do kazdego zapytania
$.ajaxSetup({
	headers: myHeaders
});

 // funkcję odpytującą serwer o zasób tablicy.
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',


    success: function(response) {
      console.log(response);
      setupColumns(response.columns);
    }
});


// Tworzenie kolumn
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

// Karty w kolumnie
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}


// OGÓLNA FUNKCJA
function randomString() {
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
	var str = '', i;
	for (i = 0; i < 10; i++) {
	  str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}
