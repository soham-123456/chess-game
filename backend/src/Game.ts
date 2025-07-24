import { WebSocket, WebSocketServer } from "ws";
import { Chess } from 'chess.js'
import { GAME_OVER, INIT_GAME, MOVE } from "./message";

export class Game {
    public player1: WebSocket;
    public player2: WebSocket;
    private board: Chess;
    private startTime: Date;
    private movecount = 0;
    constructor(player1: WebSocket, player2: WebSocket) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload :{
                color : "white"
            }
        }));
        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload :{
                color : "black"
            }
        }));    
    }
    makeMove(socket: WebSocket, move: {
        from: string;
        to: string
    }) {
        // validate the type of move
        // validation here
        // is it this user move
        // is the move valid
        if (this.movecount % 2 === 0 && socket !== this.player1) {
            return;
        }
        if (this.movecount % 2 === 1 && socket !== this.player2) {
            return;
        }
        try {
            this.board.move(move);
        } catch (e) {
            return;
        }
        //update the board
        //push the move
        // all the move take care via library
        // check if game is over or not
        if (this.board.isGameOver()) {
            // send this to both the parties
            this.player1.emit(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "black" : "white"
                }
            }));
            this.player2.emit(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "black" : "white"
                }
            }))
            return;
        }
        if (this.movecount % 2 === 0) {
            this.player2.send(JSON.stringify({
                type: MOVE,
                payload: move
            }))
        } else {
            this.player1.send(JSON.stringify({
                type: MOVE,
                payload: move
            }))
        }
        // send the update board to the both player
        this.movecount++;
    }
}