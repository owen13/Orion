import { Component, OnInit } from '@angular/core';

import { ComputerService } from "../services/computer.service";
import { Computer} from "../interfaces/computer";

import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'computer-add-edit',
  templateUrl: './computer-add-edit.component.html',
  styleUrls: ['./computer-add-edit.component.css']
})
export class ComputerAddEditComponent {
  public computerId: number;
  public computer: Computer;
  public partLists;

  public isAddMode = () => {
    return this.computerId == 0;
  }

  constructor(private computerService: ComputerService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.computerId = Number(params.get('id'));
    })
  }

  ngOnInit() {
    this.computerService.getComputerViewModel(this.computerId).subscribe(
      (result: any) => {
        this.computer = result.computer;
        this.partLists = result.partLists;
      },
      error => console.error('error', error)
    )
  }

  public updateComputer = (computer) => {
    this.computerService.updateComputer(computer).subscribe(
      () => {
        this.router.navigate(['computers']);
      },
      error => console.error('error', error)
    )
  }

  public addComputer = (computer) => {
    this.computerService.addComputer(computer).subscribe(
      () => {
        this.router.navigate(['computers']);
      },
      error => console.error('error', error)
    )
  }
}
