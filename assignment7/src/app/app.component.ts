import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  submitted = false;
  forbiddenProjName = 'Test';

  submittedProjectData = {
    'projectName': '',
    'email': '',
    'projectStatus':''
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null,
          [Validators.required,
            this.forbiddenProjectName.bind(this)],
          this.asyncForbiddenProjectName.bind(this)),
        'projectStatus': new FormControl(''),
      }),
      'email': new FormControl(null,[Validators.required, Validators.email]),
    })
    this.projectForm.statusChanges.subscribe(
      (status)=> console.log(status)
    );
  }

  onSubmit(){
    console.log(this.projectForm);

    this.submittedProjectData.projectName = this.projectForm.value.projectData.projectName;
    this.submittedProjectData.email = this.projectForm.value.email;
    this.submittedProjectData.projectStatus = this.projectForm.value.projectData.projectStatus;

    this.submitted = true;
    this.projectForm.reset();
  }

  forbiddenProjectName(control: FormControl):{[s:string]:boolean}{
    if (this.forbiddenProjName === control.value) {
      return {'invalidProjName':true};
    }
    return null;
  }

  asyncForbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve,reject)=>{
        setTimeout(() => {
          if (this.forbiddenProjName === (control.value)) {
            resolve({'projectNameIsForbidden':true})
          } else {
            resolve(null);
          }
        }, 1500);
      });
    return promise;
  }
}
