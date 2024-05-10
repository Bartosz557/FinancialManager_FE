import {Component, OnInit} from '@angular/core';
import {Transaction} from "./history-interface";
import {MatTableDataSource} from "@angular/material/table";
import {WalletHistoryService} from "./wallet-history.service";

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.css']
})
export class WalletHistoryComponent implements OnInit{

  constructor( private walletHistoryService: WalletHistoryService) {}

  ngOnInit() {
    this.walletHistoryService.getTransHistoryData().subscribe(
        (response: Transaction[]) => {
          this.transDataSource = new MatTableDataSource(response);
        }
    )
  }

  // data: any;
  displayedColumns: string[] = ['date', 'transaction-type', 'amount', 'category', 'name', 'options'];
  transDataSource: MatTableDataSource<Transaction> =  new MatTableDataSource([{
    date: new Date('0000-00-00'),
    transactionType: '',
    amount: 0, category: '',
    name: ''
  }]
  )
  applyFilter(event: Event) {
    console.log("hello")
    const filterValue = (event.target as HTMLInputElement).value;
    this.transDataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(row:any) {

  }

  delete(row:any) {

  }
}
