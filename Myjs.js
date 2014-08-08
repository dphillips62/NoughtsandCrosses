// Noughts and Crosses
// copyright Stephen Chapman, 17th November 2007, 28th May 2010
// http://javascript.about.com
// you may copy this code but please keep the copyright notice as well
(function() {
    var turn=0;
    var pos = [];
    function start() {document.getElementById('ox').innerHTML = '<button id="ox1"><\/button><button id="ox2"><\/button><button id="ox3"><\/button><button id="ox4" class="brox"><\/button><button id="ox5"><\/button><button id="ox6"><\/button><button id="ox7" class="brox"><\/button><button id="ox8"><\/button><button id="ox9"><\/button>';
        for (var i=1; i<10; i++) {
            ox[i] = document.getElementById('ox'+i);
            ox[i].i = i;
            ox[i].onclick=function() {
                setit(this.i);
            }
        }
        beginit();
    }
    function beginit() {
        turn = 0;pos = ['',' ',' ',' ',' ',' ',' ',' ',' ',' '];
        for (var i=1; i<10; i++) document.getElementById('ox'+i).innerHTML= '';
    }
    function setit(idb) {
        var val = document.getElementById('ox'+idb).innerHTML;
        if (val == '') {
            turn++;
            if (turn%2 == 1) {
                document.getElementById('ox'+idb).innerHTML = ' X ';
                pos[idb] = 'X';
            }
            if ((winner = win()) != ' ') {
                alert(winner + ' wins');
                beginit(); return;
            }
            if (turn == 9) {
                alert('draw');beginit(); return;
            }
            var cptr = check2();
            document.getElementById('ox'+cptr).innerHTML = ' O ';
            pos[cptr] = 'O';
            turn++;
            if ((winner = win()) != ' ') {
                alert(winner + ' wins');
                beginit();
                return;
            }
        }
    }
    function check2() {
        if (check(2,3,1) || check(4,7,1) || check(5,9,1)) return 1;
        if (check(1,3,2) || check(5,8,2)) return 2;
        if (check(1,2,3) || check(7,5,3) || check(6,9,3)) return 3;
        if ((check(1,7,4) && !check(7,9,8)) || check(5,6,4)) return 4;
        if (check(1,9,5) || check(2,8,5) || check(3,7,5) || check(4,6,5)) return 5;
        if (check(4,5,6) || (check(3,9,6) && !check(7,9,8))) return 6;
        if (check(1,4,7) || check(3,5,7) || check(8,9,7)) return 7;
        if (check(7,9,8) || check(2,5,8)) return 8;
        if (check(1,5,9) || check(3,6,9) || check(7,8,9)) return 9;
        if (check(1,9,2) || check(3,7,2)) return 2;
        if (check(1,9,4) || check(3,7,4)) return 4;
        if (pos[5] == ' ') return 5;
        if (pos[1] == ' ') return 1;
        if (pos[3] == ' ') return 3;
        if (pos[7] == ' ') return 7;
        if (pos[9] == ' ') return 9;
        if (pos[8] == ' ') return 8;
        if (pos[6] == ' ' && pos[6] == ' ') return 6;
        if (pos[4] == ' ') return 4;
        return 2;
    }
    function check(x,y,z) {
        return (pos[x] == 'X' && pos[y] == 'X' && pos[z] == ' ') || (pos[x] == 'O' && pos[y] == 'O' && pos[z] == ' ') ;
    }
    function match(a,b,c) {
        if (pos[a] == 'X' && pos[a] == pos[b] && pos[b] == pos[c]) return 'X';
        if (pos[a] == 'O' && pos[a] == pos[b] && pos[b] == pos[c]) return 'O';
        return ' ';
    }
    function win() {
        if (match(1,2,3) == 'X' || match(4,5,6) == 'X' || match(7,8,9) == 'X' || match(1,4,7) == 'X' || match(2,5,8) == 'X' || match(3,6,9) == 'X' || match(1,5,9) == 'X' || match(3,5,7) == 'X') return('X');
        if (match(1,2,3) == 'O' || match(4,5,6) == 'O' || match(7,8,9) == 'O' || match(1,4,7) == 'O' || match(2,5,8) == 'O' || match(3,6,9) == 'O' || match(1,5,9) == 'O' || match(3,5,7) == 'O') return('O');
        return ' ';
    }
    start();
})()