function draw_big_ttt(ctx){
    ctx.lineWidth = 8;
    ctx.strokeStyle = "grey";

    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 900);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(600, 0);
    ctx.lineTo(600, 900);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(900, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 600);
    ctx.lineTo(900, 600);
    ctx.stroke();
}

function draw_little_ttt(ctx){

    ctx.lineWidth = 5;
    ctx.strokeStyle = "grey";

    ctx.beginPath();
    ctx.moveTo(105, 15);
    ctx.lineTo(105, 285);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(195, 15);
    ctx.lineTo(195, 285);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, 105);
    ctx.lineTo(285, 105);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, 195);
    ctx.lineTo(285, 195);
    ctx.stroke();

    ///////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(405, 15);
    ctx.lineTo(405, 285);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(495, 15);
    ctx.lineTo(495, 285);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315, 105);
    ctx.lineTo(585, 105);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315, 195);
    ctx.lineTo(585, 195);
    ctx.stroke();

    ///////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(705, 15);
    ctx.lineTo(705, 285);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(795, 15);
    ctx.lineTo(795, 285);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(615, 105);
    ctx.lineTo(885, 105);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(615, 195);
    ctx.lineTo(885, 195);
    ctx.stroke();

    ///////////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(105, 315);
    ctx.lineTo(105, 585);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(195, 315);
    ctx.lineTo(195, 585);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, 405);
    ctx.lineTo(285, 405);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, 495);
    ctx.lineTo(285, 495);
    ctx.stroke();

    ///////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(405, 315);
    ctx.lineTo(405, 585);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(495, 315);
    ctx.lineTo(495, 585);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315, 405);
    ctx.lineTo(585, 405);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315, 495);
    ctx.lineTo(585, 495);
    ctx.stroke();

    ///////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(705, 315);
    ctx.lineTo(705, 585);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(795, 315);
    ctx.lineTo(795, 585);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(615, 405);
    ctx.lineTo(885, 405);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(615, 495);
    ctx.lineTo(885, 495);
    ctx.stroke();

    ///////////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(105, 615);
    ctx.lineTo(105, 885);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(195, 615);
    ctx.lineTo(195, 885);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, 705);
    ctx.lineTo(285, 705);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, 795);
    ctx.lineTo(285, 795);
    ctx.stroke();

    ///////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(405, 615);
    ctx.lineTo(405, 885);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(495, 615);
    ctx.lineTo(495, 885);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315, 705);
    ctx.lineTo(585, 705);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315, 795);
    ctx.lineTo(585, 795);
    ctx.stroke();

    ///////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(705, 615);
    ctx.lineTo(705, 885);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(795, 615);
    ctx.lineTo(795, 885);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(615, 705);
    ctx.lineTo(885, 705);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(615, 795);
    ctx.lineTo(885, 795);
    ctx.stroke();
}

function draw_help(ctx){

    var indent = 60;

    ctx.lineWidth = 5;
    ctx.strokeStyle = "grey";

    ctx.beginPath();
    ctx.moveTo(indent + 1200, 50);
    ctx.lineTo(indent + 1200, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1300, 50);
    ctx.lineTo(indent + 1300, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1100, 150);
    ctx.lineTo(indent + 1400, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1100, 250);
    ctx.lineTo(indent + 1400, 250);
    ctx.stroke();

    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "lightgrey";
    ctx.textAlign = "center";

    ctx.fillText("A", indent + 1150, 120);
    ctx.fillText("B", indent + 1250, 120);
    ctx.fillText("C", indent + 1350, 120);

    ctx.fillText("D", indent + 1150, 220);
    ctx.fillText("E", indent + 1250, 220);
    ctx.fillText("F", indent + 1350, 220);

    ctx.fillText("G", indent + 1150, 320);
    ctx.fillText("H", indent + 1250, 320);
    ctx.fillText("I", indent + 1350, 320);

    //////////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(indent + 1250, 380);
    ctx.lineTo(indent + 1150, 480);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1250, 380);
    ctx.lineTo(indent + 1350, 480);
    ctx.stroke();

    //////////////////////////////////////

    ctx.beginPath();
    ctx.moveTo(indent + 1200, 510);
    ctx.lineTo(indent + 1200, 810);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1300, 510);
    ctx.lineTo(indent + 1300, 810);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1100, 610);
    ctx.lineTo(indent + 1400, 610);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(indent + 1100, 710);
    ctx.lineTo(indent + 1400, 710);
    ctx.stroke();

    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "lightgrey";
    ctx.textAlign = "center";

    ctx.fillText("1", indent + 1150, 580);
    ctx.fillText("2", indent + 1250, 580);
    ctx.fillText("3", indent + 1350, 580);

    ctx.fillText("4", indent + 1150, 680);
    ctx.fillText("5", indent + 1250, 680);
    ctx.fillText("6", indent + 1350, 680);

    ctx.fillText("7", indent + 1150, 780);
    ctx.fillText("8", indent + 1250, 780);
    ctx.fillText("9", indent + 1350, 780);
}

function mark_next_big_field(number, ctx, color){
    ctx.lineWidth = 8;
    ctx.strokeStyle = color;
    switch(number){
        case 1:
            ctx.beginPath();
            ctx.moveTo(4, 8);
            ctx.lineTo(296, 8);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(8, 4);
            ctx.lineTo(8, 296);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(292, 296);
            ctx.lineTo(292, 4);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(4, 292);
            ctx.lineTo(296, 292);
            ctx.stroke();
            break;
        case 2:
            ctx.beginPath();
            ctx.moveTo(304, 8);
            ctx.lineTo(596, 8);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(308, 4);
            ctx.lineTo(308, 296);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(592, 296);
            ctx.lineTo(592, 4);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(304, 292);
            ctx.lineTo(596, 292);
            ctx.stroke();
            break;
        case 3:
            ctx.beginPath();
            ctx.moveTo(604, 8);
            ctx.lineTo(896, 8);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(608, 4);
            ctx.lineTo(608, 296);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(892, 296);
            ctx.lineTo(892, 4);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(604, 292);
            ctx.lineTo(896, 292);
            ctx.stroke();
            break;
        case 4:
            ctx.beginPath();
            ctx.moveTo(4, 308);
            ctx.lineTo(296, 308);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(8, 304);
            ctx.lineTo(8, 596);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(292, 596);
            ctx.lineTo(292, 304);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(4, 592);
            ctx.lineTo(296, 592);
            ctx.stroke();
            break;
        case 5:
            ctx.beginPath();
            ctx.moveTo(304, 308);
            ctx.lineTo(596, 308);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(308, 304);
            ctx.lineTo(308, 596);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(592, 596);
            ctx.lineTo(592, 304);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(304, 592);
            ctx.lineTo(596, 592);
            ctx.stroke();
            break;
        case 6:
            ctx.beginPath();
            ctx.moveTo(604, 308);
            ctx.lineTo(896, 308);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(608, 304);
            ctx.lineTo(608, 596);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(892, 596);
            ctx.lineTo(892, 304);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(604, 592);
            ctx.lineTo(896, 592);
            ctx.stroke();
            break;
        case 7:
            ctx.beginPath();
            ctx.moveTo(4, 608);
            ctx.lineTo(296, 608);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(8, 604);
            ctx.lineTo(8, 896);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(292, 896);
            ctx.lineTo(292, 604);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(4, 892);
            ctx.lineTo(296, 892);
            ctx.stroke();
            break;
        case 8:
            ctx.beginPath();
            ctx.moveTo(304, 608);
            ctx.lineTo(596, 608);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(308, 604);
            ctx.lineTo(308, 896);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(592, 896);
            ctx.lineTo(592, 604);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(304, 892);
            ctx.lineTo(596, 892);
            ctx.stroke();
            break;
        case 9:
            ctx.beginPath();
            ctx.moveTo(604, 608);
            ctx.lineTo(896, 608);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(608, 604);
            ctx.lineTo(608, 896);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(892, 896);
            ctx.lineTo(892, 604);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(604, 892);
            ctx.lineTo(896, 892);
            ctx.stroke();
            break;
        default:
            break;
    }
}

function init_array(){
    // 0 bedeutet niemand
    // 1 bedeutet 1. Spieler (Kreuz)
    // 2 bedeutet 2. Spieler (Kreis)
    var array = [[0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0]];
    return array;
}

function init_forbidden_array(){
    // false, wenn Zug möglich ist
    // true, wenn dort nicht gesetzt werden darf
    var array = [[false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false],
                 [false, false, false, false, false, false, false, false, false]];
    return array;
}

function init_inverse_forbidden_array(field){
    // false, wenn Zug möglich ist
    // true, wenn dort nicht gesetzt werden darf
    var array = [[true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true],
                 [true, true, true, true, true, true, true, true, true]];
    for(var i = 0; i<9; i++){
        array[field][i] = false;
    }
    return array;
}

function draw_kreis(ctx, x, y){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#f09494';
    ctx.stroke();
}

function draw_kreuz(ctx, x, y){
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#94c5f0';
    
    ctx.beginPath();
    ctx.moveTo(x-20, y-20);
    ctx.lineTo(x+20, y+20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x-20, y+20);
    ctx.lineTo(x+20, y-20);
    ctx.stroke();
}

function draw_figures(ctx, array){
    // Array mit Poistionen, wo Kreis, Kreuz hinkommen
    var positions = [[[60,60],  [150,60], [240,60], [60,150], [150,150],[240,150],[60,240], [150,240],[240,240]],
                     [[360,60], [450,60], [540,60], [360,150],[450,150],[540,150],[360,240],[450,240],[540,240]],
                     [[660,60], [750,60], [840,60], [660,150],[750,150],[840,150],[660,240],[750,240],[840,240]],
                     [[60,360], [150,360],[240,360],[60,450], [150,450],[240,450],[60,540], [150,540],[240,540]],
                     [[360,360],[450,360],[540,360],[360,450],[450,450],[540,450],[360,540],[450,540],[540,540]],
                     [[660,360],[750,360],[840,360],[660,450],[750,450],[840,450],[660,540],[750,540],[840,540]],
                     [[60,660], [150,660],[240,660],[60,750], [150,750],[240,750],[60,840], [150,840],[240,840]],
                     [[360,660],[450,660],[540,660],[360,750],[450,750],[540,750],[360,840],[450,840],[540,840]],
                     [[660,660],[750,660],[840,660],[660,750],[750,750],[840,750],[660,840],[750,840],[840,840]]]

    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++){
            if(array[i][j] == 1){
                draw_kreuz(ctx, positions[i][j][0], positions[i][j][1]);
            } else if(array[i][j] == 2){
                draw_kreis(ctx, positions[i][j][0], positions[i][j][1]);
            }
        }
    }
}

function overlay_won_fields(ctx, big_ttt_array){
    var positions = [[4,4],[304,4],[604,4],[4,304],[304,304],[604, 304],[4,604],[304,604],[604,604]]
    for(var i = 0; i<9; i++){
        if(big_ttt_array[i] != 0){
            ctx.lineWidth = 0;
            if(big_ttt_array[i] == 1){
                ctx.globalAlpha = 0.2;
                ctx.fillStyle = "#94c5f0"
            } else {
                ctx.globalAlpha = 0.2;
                ctx.fillStyle = "#f09494"
            }
            ctx.beginPath();
            ctx.fillRect(positions[i][0], positions[i][1], 292, 292);
            ctx.stroke();
        }
    }
}

function check_if_valid(temp_forbidden, always_forbidden, position){
    var letters = {"A" : 1, "B" : 2, "C" : 3, "D" : 4, "E" : 5, "F" : 6, "G" : 7, "H" : 8, "I" : 9}
    var first = letters[position.charAt(0)];
    var second = parseInt(position.charAt(1));
    if(first == undefined || first == NaN || first == null ||
       second == undefined || second == NaN || second == null){
        return false;
    } else {
        if(!temp_forbidden[first-1][second-1] && !always_forbidden[first-1][second-1]){
            return true;
        } else {
            return false;
        }
    }
}

function check_if_field_won(array, first){
    var curr_field = first-1;
    if(array[curr_field][0] == array[curr_field][1] &&
       array[curr_field][1] == array[curr_field][2] &&
       array[curr_field][0] != 0){
        return array[curr_field][0]
    }
    else if(array[curr_field][3] == array[curr_field][4] &&
            array[curr_field][4] == array[curr_field][5] &&
            array[curr_field][3] != 0){
        return array[curr_field][3]
    }
    else if(array[curr_field][6] == array[curr_field][7] &&
            array[curr_field][7] == array[curr_field][8] &&
            array[curr_field][6] != 0){
        return array[curr_field][6]
    }
    else if(array[curr_field][0] == array[curr_field][3] &&
            array[curr_field][3] == array[curr_field][6] &&
            array[curr_field][0] != 0){
        return array[curr_field][0]
    }
    else if(array[curr_field][1] == array[curr_field][4] &&
            array[curr_field][4] == array[curr_field][7] &&
            array[curr_field][1] != 0){
        return array[curr_field][1]
    }
    else if(array[curr_field][2] == array[curr_field][5] &&
            array[curr_field][5] == array[curr_field][8] &&
            array[curr_field][2] != 0){
        return array[curr_field][2]
    }
    else if(array[curr_field][0] == array[curr_field][4] &&
            array[curr_field][4] == array[curr_field][8] &&
            array[curr_field][0] != 0){
        return array[curr_field][0]
    }
    else if(array[curr_field][2] == array[curr_field][4] &&
            array[curr_field][4] == array[curr_field][6] &&
            array[curr_field][2] != 0){
        return array[curr_field][2]
    } else {
        return 0;
    }
}

function check_if_won(array){
    if(array[0] == array[1] &&
        array[1] == array[2] &&
        array[0] != 0){
         return array[0]
     }
     else if(array[3] == array[4] &&
             array[4] == array[5] &&
             array[3] != 0){
         return array[3]
     }
     else if(array[6] == array[7] &&
             array[7] == array[8] &&
             array[6] != 0){
         return array[6]
     }
     else if(array[0] == array[3] &&
             array[3] == array[6] &&
             array[0] != 0){
         return array[0]
     }
     else if(array[1] == array[4] &&
             array[4] == array[7] &&
             array[1] != 0){
         return array[1]
     }
     else if(array[2] == array[5] &&
             array[5] == array[8] &&
             array[2] != 0){
         return array[2]
     }
     else if(array[0] == array[4] &&
             array[4] == array[8] &&
             array[0] != 0){
         return array[0]
     }
     else if(array[2] == array[4] &&
             array[4] == array[6] &&
             array[2] != 0){
         return array[2]
     } else {
         return 0;
     }
}

function get_all_possible_big_fields(array, big_ttt_array){
    var array_2 = [true, true, true, true, true, true, true, true, true];
    for(var i = 0; i<9; i++){
        if(big_ttt_array[i] != 0){
            array_2[i] = false;
        }
        var temp_bool = true;
        for(var j = 0; j<9; j++){
            if(array[i][j] == 0){
                temp_bool = false;
            }
        }
        if(temp_bool){
            array_2[i] = false;
        }
    }
    return array_2;
}

function next_field_full(nextField, array){
    var temp_bool = true;
    for(var i = 0; i<9; i++){
        if(array[nextField-1][i] == 0){
            temp_bool = false;
        }
    }
    return temp_bool;
}

async function draw_curr_player(ctx, currPlayer, client, message, canvas, color){
    ctx.font = "55px Comic Sans MS";
    ctx.fillStyle = "lightgrey";
    ctx.textAlign = "center";
    var player = client.users.cache.find(user => user.id === currPlayer).username;
    var first_half = "Als nächstes ist ";
    var second_half = " am Zug!";
    var second_line = "(\"aufgeben\" zum Aufgeben schreiben)";

    console.log(ctx.measureText(first_half).width);
    ctx.fillText(first_half, 10+ (ctx.measureText(first_half).width/2), 1000);

    ctx.fillStyle = color;
    ctx.fillText(player, 10 + ctx.measureText(first_half).width + ctx.measureText(player).width/2, 1000);

    ctx.fillStyle = "lightgrey";
    ctx.fillText(second_half, 10 + ctx.measureText(first_half).width + ctx.measureText(player).width + ctx.measureText(second_half).width/2, 1000);

    ctx.fillText(second_line, 10 + ctx.measureText(second_line).width/2, 1070);
}

function draw_won(ctx, currPlayer, client, message, canvas, color){
    ctx.font = "55px Comic Sans MS";
    ctx.fillStyle = "lightgrey";
    ctx.textAlign = "center";
    var player = client.users.cache.find(user => user.id === currPlayer).username;
    var first_half = " hat gewonnen!!!";

    ctx.fillStyle = color;
    ctx.fillText(player, 10 + ctx.measureText(player).width/2, 1000);

    ctx.fillStyle = "lightgrey";
    ctx.fillText(first_half, 10 + ctx.measureText(player).width + ctx.measureText(first_half).width/2, 1000);
}

function draw_wrong(ctx){
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "#f9df66";
    ctx.textAlign = "center";

    ctx.fillText("Deine Eingabe", 60 + 1250, 900);
    ctx.fillText("war falsch", 60 + 1250, 970);
    ctx.fillText("Schreibe z.B. A1", 60 + 1250, 1040);
}

//////////////////////////////
//// exportieren /////////////
//////////////////////////////

module.exports = {
    "draw_big_ttt": (ctx) => {
        draw_big_ttt(ctx);
    },
    "draw_little_ttt": (ctx) => {
        draw_little_ttt(ctx);
    },
    "draw_help": (ctx) => {
        draw_help(ctx);
    },
    "mark_next_big_field": (number, ctx, color) => {
        mark_next_big_field(number, ctx, color);
    },
    "init_array": () => {
        var array = init_array();
        return array;
    },
    "init_forbidden_array": () => {
        var array = init_forbidden_array();
        return array;
    },
    "init_inverse_forbidden_array": (field) => {
        var array = init_inverse_forbidden_array(field);
        return array;
    },
    "draw_figures": (ctx, array) => {
        draw_figures(ctx, array);
    },
    "overlay_won_fields": (ctx, big_ttt_array) => {
        overlay_won_fields(ctx, big_ttt_array);
    },
    "check_if_valid": (temp_forbidden, always_forbidden, position) => {
        var right = check_if_valid(temp_forbidden, always_forbidden, position);
        return right;
    },
    "check_if_field_won": (array, first) => {
        var field = check_if_field_won(array, first);
        return field;
    },
    "check_if_won": (big_ttt_array) => {
        var field = check_if_won(big_ttt_array);
        return field;
    },
    "get_all_possible_big_fields" : (array, big_ttt_array) => {
        var array = get_all_possible_big_fields(array, big_ttt_array);
        return array;
    },
    "next_field_full" : (nextField, array) => {
        var boolean = next_field_full(nextField, array);
        return boolean;
    },
    "draw_curr_player" : (ctx, currPlayer, client, message, canvas, color) => {
        draw_curr_player(ctx, currPlayer, client, message, canvas, color);
    },
    "draw_won" : (ctx, currPlayer, client, message, canvas, color) => {
        draw_won(ctx, currPlayer, client, message, canvas, color);
    },
    "draw_wrong" : (ctx) => {
        draw_wrong(ctx);
    }
}