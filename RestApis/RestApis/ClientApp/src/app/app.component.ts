import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    this.http.get('/api/values?val1=lalit&val2=Behera')
    .subscribe(val => console.log(val));
  }
  title = 'ClientApp';
}
