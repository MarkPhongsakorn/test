import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../services/projects/project.service';
import { CompanyService } from '../services/companies/company.service';
import { RequestService } from '../services/companies/request.service';
import { AddRequestUserComponent } from '../add-request-user/add-request-user.component';

@Component({
  selector: 'app-request-user',
  templateUrl: './request-user.component.html',
  styleUrls: ['./request-user.component.css']
})
export class RequestUserComponent implements OnInit {

  project: any[] = [];
  selectProjectId: string = '';

  projectID: boolean = false;

  comp: any[] = [];
  selectCompId: string = '';

  dataSource: any[] = [];
  displayedColumns: string[] = [
    'req_id',
    'req_problem',
    'req_daily',
    'req_license',
    'req_certificate',
    // 'project_id',
    // 'comp_id',
  ];

  constructor(
    private projectService: ProjectService,
    private compService: CompanyService,
    private req: RequestService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.projectService.readProject().subscribe(data => {
      this.project = data;
    });
    this.compService.getComp().subscribe(data => {
      this.comp = data;
    });
  }

  search() {
    this.req.getReq(this.selectProjectId,this.selectCompId).subscribe((res: any) => {
      this.dataSource = res;

      if (res.status === 'error') {
        this.projectID = true;
      } else {
        this.projectID = false;
      }
    });
  }

  openDialog() {
    this.dialog.open(AddRequestUserComponent);
  }

}
