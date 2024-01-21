var haslo = "it camp jest fajny";
haslo = haslo.toUpperCase();

var ukryte_haslo = "";
var skuchy = 0;

for(var i = 0; i < haslo.length; i++) {
    if(haslo.charAt(i) == " ") {
        ukryte_haslo = ukryte_haslo + " ";
    } else {
        ukryte_haslo = ukryte_haslo + "-";
    }
}

var litery = new Array(32);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "R";
litery[23] = "S";
litery[24] = "Ś";
litery[25] = "T";
litery[26] = "U";
litery[27] = "W";
litery[28] = "Y";
litery[29] = "Z";
litery[30] = "Ź";
litery[31] = "Ż";

window.onload = start;

function start() {
    set_password();
    generate_letters();
}

function set_password() {
    document.getElementById("haslo").innerHTML = ukryte_haslo;
}

function generate_letters() {
    var html = "";
    for(var i = 0; i < 32; i++) {
        html = html + '<div onclick="check(' + i + ');" id="l' + i + '">' + litery[i] + '</div>';
        if((i+1) % 8 == 0) {
            html = html + "<br>";
        }
    }
    document.getElementById("litery").innerHTML = html;
}

function check(letter_no) {
    var litera = litery[letter_no];
    var trafienie = false;
    for(var i = 0; i < haslo.length; i++) {
        if(haslo.charAt(i) == litera) {
            ukryte_haslo = ukryte_haslo.substring(0, i) +
                            litera +
                            ukryte_haslo.substring(i+1);
            trafienie = true;
        }
    }

    var letter_id = "l" + letter_no;
    document.getElementById(letter_id).setAttribute("onClick", ";");

    if(!trafienie && skuchy < 9) {
        skuchy++;
        var obrazek = '<img src="img/s' + skuchy + '.jpg">';
        document.getElementById("szubienica").innerHTML = obrazek;
        document.getElementById(letter_id).style.background = "#550000";
        document.getElementById(letter_id).style.color = "#FF0000";
        document.getElementById(letter_id).style.border = "2px solid #FF0000";
    } else {
        document.getElementById(letter_id).style.background = "#005500";
        document.getElementById(letter_id).style.color = "#00FF00";
        document.getElementById(letter_id).style.border = "2px solid #00FF00";
    }

    if(skuchy >= 9) {
        document.getElementById("litery").innerHTML = '<p id="lose">Przegrana !!</p>';
    }

    if(ukryte_haslo == haslo) {
        document.getElementById("litery").innerHTML = '<p id="win">Wygrana !!</p>';
    }

    set_password();
}