import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user_profile : any

  constructor(
    public dialogRef: MatDialogRef<UserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.getUserDetails()
  }

  getUserDetails(){
    this.userService.getUserById(this.data.user_id).subscribe((res:any)=>{
      console.log(res);
      this.user_profile = res.picture

    })

  }

}
