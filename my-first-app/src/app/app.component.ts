import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: 'app-server',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // styles: [`
  //  h3{
    //  color: dodgerblue;
    //}
  //`]
})
export class AppComponent {
  showSecret = false;
  log: Array<any>=[];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
