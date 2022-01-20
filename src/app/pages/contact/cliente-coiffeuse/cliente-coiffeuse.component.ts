import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente-coiffeuse',
  templateUrl: './cliente-coiffeuse.component.html',
  styleUrls: ['./cliente-coiffeuse.component.scss'],
})
export class ClienteCoiffeuseComponent implements OnInit {
  tchats = [
    {
      img: 'assets/profil.png',
      message: 'Je voudrais savoir si...',
      time: 'il y a 1j',
      coiffeuse: 'Gloria Stéphanie',
    },
    {
      img: 'assets/profil.png',
      message: 'Ok ça marche, je réserve alors...',
      coiffeuse: 'Linda',
      time: 'il y a 3j',
    },
  ];
  messages: any[] = [];
  constructor(private socket: Socket) {
    this.socket.connect();
    this.joinChat();
  }

  ngOnInit(): void {}

  getUsers() {
    const observable = new Observable((observer) => {
      this.socket.on('getmessage', (data: any) => {
        // console.log(data);
        observer.next(data);
      });
    });
    return observable;
  }

  joinChat() {
    this.socket.connect();
    this.socket.emit('get-message', {});
    this.getUsers().subscribe((data: any) => {
      this.messages = [];
      // data.forEach((elt) => {
      //   if (elt.fromId._id === this.uid && elt.toId._id === this.users.id) {
      //     this.messages.push(elt);
      //   }
      //   if (elt.fromId._id === this.users.id && elt.toId._id === this.uid) {
      //     this.messages.push(elt);
      //   }
      // });
      const array = data.map((elt: any) => {
        var id;
        if (elt.toId.role === 'coiffeuse') {
          id = {
            coiffeuse: elt.toId,
            message: elt.message,
            imageURL: elt.imageURL,
            createdAt: elt.createdAt,
          };
        } else if (elt.fromId.role === 'coiffeuse') {
          id = {
            coiffeuse: elt.fromId,
            message: elt.message,
            imageURL: elt.imageURL,
            createdAt: elt.createdAt,
          };
        }
        return id;
      });

      for (var i = 0; i < array.length; i++) {
        var test = false;
        for (var j = 0; j < this.messages.length; j++) {
          if (this.messages[j]?.coiffeuse._id === array[i]?.coiffeuse?._id) {
            test = true;
            break;
          }
        }
        if (!test) {
          this.messages.push(array[i]);
          console.log(this.messages);
        }
      }

      // console.log(array);
    });
  }
}
