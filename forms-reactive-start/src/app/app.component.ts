import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ['Varun','Omkar'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  getHobbies() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }
  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenName(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsernames.includes(control.value)){
      return {'nameIsForbidden':true};
    }
  }
}
