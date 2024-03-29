import { Component, OnInit } from '@angular/core';
import { ChatBotService } from '../../services/chatbot.service';
import * as $ from 'jquery';
import { Message } from '../../Model/Message';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit{
  userInput: string = "";
  messages:Message[] = [];
  isHide:boolean = false;
  constructor(private chatbotService: ChatBotService){}

  ngOnInit(): void {
    $(document).ready(function(){
      $(".chat_on").click(function(){
          $(".Layout").toggle();
          $(".chat_on").hide(300);
      });
      
         $(".chat_close_icon").click(function(){
          $(".Layout").hide();
             $(".chat_on").show(300);
      });
    });
    this.chatbotService.conversation.subscribe((value)=> { 
          this.messages = this.messages.concat(value);
    });
  } 

  sendMessage() : void{
    if(this.userInput.trim() === '') return; 
    this.chatbotService.getBotAnswer(this.userInput);
    this.userInput = "";
  } 
  
}
