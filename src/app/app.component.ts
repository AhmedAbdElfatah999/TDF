import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  topicHasError=true;
  public topics=["Angular", "React" , "Vue"];
  userModel=new User("Ahmed","Ahmed@gmail.com","012443434","Ahmed12345","default",true);
   validateTopic(value){
       if (value==="default") {
           this.topicHasError=true;
       } else {
           this.topicHasError=false;
       }
   }

   onSubmit(){
          console.log(this.userModel);
   }

}
