import { WebSocket } from "ws";
import { INIT_GAME, MOVE } from "./message";
import { Game } from "./Game";



export class GameManager{
    private game : Game[];
    private pendingUser : WebSocket | null;
    private Users : WebSocket[];
    constructor(){
        this.game = [];
        this.pendingUser = null;
        this.Users = [];
    }
    addUser(socket : WebSocket){
        this.Users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket : WebSocket){
        this.Users = this.Users.filter(Users => Users !== socket)
    }
    private addHandler(socket : WebSocket){
        socket.on("message",(data) => {
            const message = JSON.parse(data.toString());
            if(message.type === INIT_GAME){
                if(this.pendingUser){
                    // start the game
                    const game = new Game(this.pendingUser,socket);
                    this.game.push(game);
                    this.pendingUser = null;
                }else{
                    this.pendingUser = socket;
                }
            }
            if(message.type === MOVE){
                const game = this.game.find(game => game.player1 === socket || game.player2 === socket);
                if(game){
                    game.makeMove(socket,message.payload.move);
                }
            }
        })
    }   
}