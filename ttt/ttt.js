const { init_inverse_forbidden_array, init_forbidden_array } = require("./ttt_lib.js");
const ttt = require("./ttt_lib.js");
const config = require('../config.json')

function init_game(){
    var array = ttt.init_array();
    var temp_forbidden = ttt.init_forbidden_array();
    var always_forbidden = ttt.init_forbidden_array();
    var big_ttt_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    return [array, temp_forbidden, always_forbidden, big_ttt_array];
}

async function print_canvas(message, Discord, array, big_ttt_array, nextField, nextPlayer, currPlayer, client, wrong_input, won){
    const canvas = require("canvas");
    const { createCanvas, loadImage } = require('canvas');
    const can = canvas.createCanvas(1500, 1130); //1500, 1050
    const ctx = can.getContext("2d");

    ttt.draw_big_ttt(ctx);
    ttt.draw_little_ttt(ctx);
    ttt.draw_help(ctx);
    if(currPlayer == message.author.id){
        var color = "#94c5f0";
    } else {
        var color = "#f09494";
    }
    if(!won){
        ttt.draw_curr_player(ctx, currPlayer, client, message, canvas, color);
    } else {
        ttt.draw_won(ctx, currPlayer, client, message, canvas, color);
    }
    if(wrong_input){
        ttt.draw_wrong(ctx);
    }
    var array_possible = ttt.get_all_possible_big_fields(array, big_ttt_array);
    if(nextPlayer == message.author.id){
        if(big_ttt_array[nextField-1] != 0 ||
           ttt.next_field_full(nextField, array)){
            for(var i = 0; i<9; i++){
                if(array_possible[i]){
                    ttt.mark_next_big_field(i+1, ctx, "#f09494")
                }
            }
        } else {
            ttt.mark_next_big_field(nextField, ctx, "#f09494");
        }
    }
    else {
        if(big_ttt_array[nextField-1] != 0 ||
            ttt.next_field_full(nextField, array)){
            for(var i = 0; i<9; i++){
                if(array_possible[i]){
                    ttt.mark_next_big_field(i+1, ctx, "#94c5f0")
                }
            }
        } else {
            ttt.mark_next_big_field(nextField, ctx, "#94c5f0");
        }
    }
    ttt.draw_figures(ctx, array);
    ttt.overlay_won_fields(ctx, big_ttt_array);

    const attachement = new Discord.MessageAttachment(can.toBuffer(), "image.png");
    message.channel.send(attachement);
}

async function play_rounds(message, Discord, array, temp_forbidden, always_forbidden, big_ttt_array, nextField, curr_player, next_player, client, wrong_input){
    print_canvas(message, Discord, array, big_ttt_array, nextField, next_player, curr_player, client, wrong_input, false);
    wrong_input = false;
    
    message.channel.awaitMessages(n => n.author.id === curr_player, { max: 1, time: 300000 }).then(kords => {
        cords = kords.first().content;
        var letters = {"A" : 1, "B" : 2, "C" : 3, "D" : 4, "E" : 5, "F" : 6, "G" : 7, "H" : 8, "I" : 9}
        var first = letters[cords.charAt(0)];
        var second = parseInt(cords.charAt(1));
        console.log(temp_forbidden);
        console.log(always_forbidden);
        if(ttt.check_if_valid(temp_forbidden, always_forbidden, cords)){
            nextField = second;
            if(curr_player == message.author.id){
                array[first-1][second-1] = 1;
            } else {
                array[first-1][second-1] = 2;
            }
            always_forbidden[first-1][second-1] = true;

            temp_forbidden = init_inverse_forbidden_array(second-1);

            // überprüft, ob jemand irgendein Feld gewonnen hat
            var field_won = ttt.check_if_field_won(array, first);
            if(field_won != 0){
                big_ttt_array[first-1] = field_won;
                for(var i = 0; i<9; i++){
                    always_forbidden[first-1][i] = true;
                }
            }

            // wenn das nächste Feld gewonnen wurde, dann temp_forbidden komplett auf false setzen
            console.log(big_ttt_array);
            if(big_ttt_array[second-1] != 0){
                nextField = 0;
                temp_forbidden = init_forbidden_array();
            }

            var control = true;
            for(var i = 0; i<9; i++){
                if(array[second-1][i] == 0){
                    control = false;
                }
            }
            if(control){
                nextField = 0;
                temp_forbidden = init_forbidden_array();
            }

            var won = ttt.check_if_won(big_ttt_array);
            if(won != 0){
                nextField = 0;
                print_canvas(message, Discord, array, big_ttt_array, nextField, next_player, curr_player, client, wrong_input, true);
            } else {
                message.channel.bulkDelete(2);
                play_rounds(message, Discord, array, temp_forbidden, always_forbidden, big_ttt_array, nextField, next_player, curr_player, client, wrong_input);
            }

        } else {
            if(config.ttt.exit.includes(cords)){
                message.channel.send("<@" + curr_player + "> hat aufgegeben");
            } else {
                message.channel.bulkDelete(2);
                wrong_input = true;
                play_rounds(message, Discord, array, temp_forbidden, always_forbidden, big_ttt_array, nextField, curr_player, next_player, client, wrong_input);
            }
        }
    })
}

function play_game(message, Discord, client){
    var wrong_input = false;
    var all_arrays = init_game();
    message.reply("Schreibe mit Hilfe von @, mit wem du spielen möchtest", true);
    message.channel.awaitMessages(n => n.author.id === message.author.id, { max: 1, time: 120000 }).then(second_player => {
        second_id = second_player.first().mentions.users.first().id;
        first_id = message.author.id;
        play_rounds(message, Discord, all_arrays[0], all_arrays[1], all_arrays[2], all_arrays[3], 0, first_id, second_id, client, wrong_input);
    })
}

module.exports = {
    "play_game": (message, Discord, client) => {
       play_game(message, Discord, client);
    }
}