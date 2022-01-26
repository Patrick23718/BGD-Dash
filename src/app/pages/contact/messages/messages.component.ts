import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  cid: string = '61c2e031953e570ce44eb130';

  test = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  messages: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  users: any = [];

  allmessages: any[] = [];
  constructor(
    private router: ActivatedRoute,
    private socket: Socket,
    private localstorage: LocalstorageService
  ) {
    // this.router.params.subscribe((paramsId) => {
    //   this.cid = paramsId.cid;
    //   console.log(this.cid);
    const test = this.localstorage.get('utilisateur');
    if (test !== null) {
      this.cid = JSON.parse(test).id;
      console.log(JSON.parse(test));
    }

    this.getUsers().subscribe((res: any) => {
      this.allmessages = res;
      this.teste(res);
    });
    // });
  }

  ngOnInit(): void {
    // this.getUsers().subscribe((res: any) => {
    // });
  }

  teste(teste: any) {
    this.allmessages = teste;
    console.log(this.allmessages);
    const array = this.allmessages.reverse().map((elt: any) => {
      var id;
      if (elt.toId._id === this.cid) {
        id = {
          _id: elt._id,
          coiffeuse: elt.toId,
          cliente: elt.fromId,
          createdAt: elt.createdAt,
          imageURL: elt.imageURL,
          isRead: elt.isRead,
          message: elt.message,
        };
      } else if (elt.fromId._id === this.cid) {
        id = {
          _id: elt._id,
          cliente: elt.toId,
          coiffeuse: elt.fromId,
          createdAt: elt.createdAt,
          imageURL: elt.imageURL,
          isRead: elt.isRead,
          message: elt.message,
        };
      }
      return id;
    });
    console.log(array);

    for (var i = 0; i < array.length; i++) {
      var test = false;
      for (var j = 0; j < this.users.length; j++) {
        if (this.users[j]?.cliente._id === array[i]?.cliente?._id) {
          test = true;
          break;
        }
      }
      if (!test) {
        this.users.push(array[i]);
        console.log(this.users);
      }
    }
    this.allmessages = this.allmessages.reverse();
  }

  getUsers() {
    this.socket.connect();
    this.socket.emit('get-message', {});
    const observable = new Observable((observer) => {
      this.socket.on('getmessage', (data: any) => {
        console.log(data);
        // this.allmessages = data;
        observer.next(data);
      });
    });
    return observable;
  }

  getAllMessage(clienteid: string) {
    var test = [];
    for (var i = this.allmessages.length - 1; (i = 0); i++) {
      test.push(this.allmessages[i]);
    }

    this.messages = this.allmessages.map((elt: any) => {
      var id;
      if (elt.toId._id === this.cid && elt.fromId._id === clienteid) {
        id = elt;
        // {
        //   _id: elt._id,
        //   coiffeuse: elt.toId,
        //   cliente: elt.fromId,
        //   createdAt: elt.createdAt,
        //   imageURL: elt.imageURL,
        //   isRead: elt.isRead,
        //   message: elt.message,
        //   sender:
        // };
      } else if (elt.fromId._id === this.cid && elt.toId._id === clienteid) {
        id = elt;
        // {
        //   _id: elt._id,
        //   cliente: elt.toId,
        //   coiffeuse: elt.fromId,
        //   createdAt: elt.createdAt,
        //   imageURL: elt.imageURL,
        //   isRead: elt.isRead,
        //   message: elt.message,
        // };
      }
      return id;
    });
    console.log(this.messages);
  }
}
