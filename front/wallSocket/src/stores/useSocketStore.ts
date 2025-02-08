import { defineStore } from "pinia";
import { io, Socket } from "Socket.io-client";

export const useSocketStore = defineStore("socket", {
    state: () => ({
        socket: null as Socket | null,
    }),

    actions: {
        connect() {
            this.socket = io("http://localhost:9100"); // URL de mon serveur

            this.socket.on("connect", () => {
                console.log("connected");
                // this.socket.emit('emit', data)
            });
        },
        sender(event: string, data: any ){
            if (!this.socket) return;
            this.socket.emit(event, data)
        }
     }

});