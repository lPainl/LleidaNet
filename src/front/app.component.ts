/*
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

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
      await fetch("api",
        {
          method: 'POST',
          body: JSON.stringify({
            sms: {
              user: "user_credentials",
              password: "pass",
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
*/
