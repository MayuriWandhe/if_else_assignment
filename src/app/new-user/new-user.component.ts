import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UserProfileComponent } from '../user-profile/user-profile.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  displayedColumns: string[] = ['profile', 'name', 'progress'];
  dataSource : MatTableDataSource<any> = new MatTableDataSource;

  userList : any

  constructor(
    private userService : UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getUserList().subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res)
      console.log(res);
      this.userList = res
    })
  }

  openDialog(id:any): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      data: {user_id: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
