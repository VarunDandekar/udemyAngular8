import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  statuses = ["Stable", "Critical", "Finished"];
  submitForm:FormGroup;

  ngOnInit(){
    this.submitForm = new FormGroup({
      'name': new FormControl('', [Validators.required, this.projectNameValidator]),
      'email':new FormControl('', [Validators.required,Validators.email],this.emailValidator),
      'status':new FormControl('Stable')
    })
  }

  projectNameValidator(control:FormControl):{[s:string]:boolean}{
    if(control.value === 'test'){
      return {'wrongName':true}
    }
  }

  emailValidator(control:FormControl):Promise<any>|Observable<any>{
    return new Promise((res)=>{
      setTimeout(()=>{
        if(control.value === 'a@b.c'){
          return res({'wrongEmail':true});
        }
        return res(null);
      }, 2000)
    })
  }

  onSubmit(){
    console.log(this.submitForm);
  }
}
