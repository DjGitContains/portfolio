export class Message {
    
    public author : string ="";
    public content : string = "";
     
    
    constructor(author: string, content: string) {
        this.author = author;
        this.content = content;
    }
  }