import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getConversationById} from '@logic/chat-store';
import {FetchConversations} from '@logic/actions/chat.action';
import {ChatService} from '@logic/services/chat/chat.service';


@Component({
    selector: 'page-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss']
})

export class ChatPage implements OnInit {

    constructor(private chatService: ChatService, private store: Store<{}>) {
    }

    ngOnInit(): void {
        this.store.dispatch(new FetchConversations());
        this.chatService.listen().subscribe(data => {
            console.log(data);
        });

        this.store.pipe(select(getConversationById('5c729a331d21403bb456d12e'))).subscribe(data => {
            console.log(data);
        });
    }

}
