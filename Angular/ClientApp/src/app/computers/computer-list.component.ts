import { Component, OnInit } from '@angular/core';
import {ComputerService} from "../services/computer.service";
import { Computer} from "../interfaces/computer";

@Component({
  selector: 'computers',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent {
  public computers: Computer[];

  constructor(private computerService: ComputerService) {

  }

  ngOnInit() {
    this.computerService.getAllComputers().subscribe(
      (result: any) => {
        this.computers = result;
      },
      error => console.error('error', error)
    )
  }

  public deleteComputer = (computerId: number) => {
    if(confirm("Are you sure to delete Computer:" + computerId)) {
      this.computerService.deleteComputer(computerId).subscribe(
        () => {
          const deletedComputerIndex = this.computers.map(e => e.id).indexOf(computerId); // TODO: Maybe pass index in?
          this.computers.splice(deletedComputerIndex, 1);
        },
        error => console.error('error', error)
      )
    }
  }
}
