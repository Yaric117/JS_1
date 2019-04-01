'use strict'
//chess board (возможно слишком много кода, но зато работает:))


function chessBoard() {
    let table = document.createElement("table");
    table.style.width = '500px';
    table.style.height = '500px';
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    let index = 8;

    function caption() {
        let indexAlfabet = 65;
        for (let i = 0; i < 1; i++) {
            let trCaption = document.createElement("tr");
            trCaption.className = "table-tr";
            let th = document.createElement('th');
            th.innerHTML = 0; //чтобы выдержать отступ

            let thTwo = document.createElement('th');
            thTwo.innerHTML = th.innerHTML;
            thTwo.className = "back";
            trCaption.appendChild(th);
            th.style.opacity = '0'; //тут мы скрываем содержимое отступа

            for (let j = 0; j < 8; j++) {
                let tdCaption = document.createElement("td");
                tdCaption.style.width = '10%';
                tdCaption.className = "caption";
                tdCaption.style.textAlign = 'center';
                tdCaption.innerHTML = String.fromCharCode(indexAlfabet++);
                trCaption.appendChild(tdCaption);
                trCaption.appendChild(thTwo);
            }
            thTwo.style.opacity = '0';
            return table.appendChild(trCaption);
        }
    }
    caption();
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        tr.className = "table-tr";
        th.innerHTML = index--;
        th.className = "number";

        let thTwo = document.createElement('th');
        thTwo.innerHTML = th.innerHTML;
        thTwo.className = "number";
        tr.appendChild(th);
        
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');

            if (i % 2 == j % 2) {
                td.className = "white";
                td.style.background = '#ffffff'


            } else {
                td.className = "black";
                td.style.background = '#000000';

            }
            tr.appendChild(td);
            tr.appendChild(thTwo);
        }
        table.appendChild(tr);
    }
    caption();
    document.body.appendChild(table);

}
chessBoard();