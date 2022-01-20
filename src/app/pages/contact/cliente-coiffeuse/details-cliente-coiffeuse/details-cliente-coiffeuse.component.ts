import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-cliente-coiffeuse',
  templateUrl: './details-cliente-coiffeuse.component.html',
  styleUrls: ['./details-cliente-coiffeuse.component.scss'],
})
export class DetailsClienteCoiffeuseComponent implements OnInit {
  test = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  messages: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  users: any = [];
  cid = '';
  constructor(private router: ActivatedRoute, private socket: Socket) {
    this.router.params.subscribe((paramsId) => {
      this.cid = paramsId.cid;
      console.log(this.cid);
    });
  }

  ngOnInit(): void {
    this.getUsers().subscribe((res: any) => {
      const array = res.map((elt: any) => {
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
    });
  }

  getUsers() {
    this.socket.connect();
    this.socket.emit('get-message', {});
    const observable = new Observable((observer) => {
      this.socket.on('getmessage', (data: any) => {
        // console.log(data);
        observer.next(data);
      });
    });
    return observable;
  }

  getAllMessage(clienteid: string) {
    this.getUsers().subscribe((res: any) => {
      this.messages = res.map((elt: any) => {
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
    });
  }
}
