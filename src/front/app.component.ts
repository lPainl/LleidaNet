import {Component} from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {
  }

  formSmS = this.fb.group({
    phone: ['', [Validators.required, Validators.minLength(10)]],
    text: ['', [Validators.required]]
  });

  async onSubmit() {
    const phone = this.formSmS.get('phone')?.value;
    const text = this.formSmS.get('text')?.value;

    if (phone && text) {
      await fetch("https://api.lleida.net/dtd/sms/v2",
        {
          method: 'POST',
          body: JSON.stringify({
            sms: {
              user: "user1@proves_frontend",
              password: "prova1234",
              dst: {
                num: [encodeURI(phone)
                ]
              },
              txt: text
            }
          })
        })
        .catch((err) => {
          console.log(err)
          return Promise.reject();
        });
    }
  }
}
