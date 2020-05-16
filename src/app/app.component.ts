import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'; 
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'; 
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  constructor(private http: HttpClient,private _compiler: Compiler) {  
  }
  public data: any = []; 
public showDetails: boolean = false;
displayedColumns: string[] = ['id', 'name', 'url'];
  dataSource: MatTableDataSource<PeriodicElement> ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  ngOnInit() {
    
  }
  /*ngAfterViewInit(): void {  
    this.loadData();  
  } */
  
  private LoadDatas(): void {  
      this.loadData();  
  }
  private loadData(): void {  
    let self = this;  
    this.http.get("https://aimtell.com/files/sites.json")  
      .subscribe((res: Response) => {  
          
        //self.data = res; 
        console.log(res);
        this.showDetails=true;
        if(res.hasOwnProperty("sites"))
        {
            //alert("TEST");
            this.data=res["sites"];            
        }
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
        //dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        
      });  
  }
}

/* Static data */ 
export interface PeriodicElement {
  id:number;
  name: string;
  url: string;
  
}
