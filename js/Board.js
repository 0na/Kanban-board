var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
    'X-Client-Id': 'X-Client-Id',
    'X-Auth-Token': 'X-Auth-Token'
};




var board = {
    name: 'Tablica Kanban',
    addColumn: function (column) {
        this.element.appendChild(column.element);
        initSortable(column.id); //About this feature we will tell later
    },
    element: document.querySelector('#board .column-container')
};

document.querySelector('#board .create-column').addEventListener('click', function () {
    var name = prompt('Enter a column name');
    var data = new FormData();
    data.append('name', name);
    if (!name) {
        return;
    };

    fetch(prefix + baseUrl + '/column', {
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (resp) {
            var column = new Column(response.id, columnName);
            board.createColumn(column);
        });
});

function initSortable(id) {
    var el = document.getElementById(id);
    var sortable = Sortable.create(el, {
        group: 'kanban',
        sort: true
    });
}