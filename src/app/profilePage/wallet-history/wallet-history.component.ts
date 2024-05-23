import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Transaction} from "./history-interface";
import {MatTableDataSource} from "@angular/material/table";
import {WalletHistoryService} from "./wallet-history.service";
import {Monthly} from "./monthly.interface";

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WalletHistoryComponent implements OnInit{

  constructor( private walletHistoryService: WalletHistoryService) {}

  ngOnInit() {
    this.walletHistoryService.getTransHistoryData().subscribe(
        (response: Transaction[]) => {
          this.transDataSource = new MatTableDataSource(response);
        }
    )
    this.walletHistoryService.getMonthHistoryData().subscribe(
      (response: Monthly[]) => {
        this.monthDataSource = new MatTableDataSource(response);
      }
    )

  }

  // data: any;
  displayedColumns: string[] = ['date', 'transaction-type', 'amount', 'category', 'name', 'options'];
  transDataSource: MatTableDataSource<Transaction> =  new MatTableDataSource([{
    date: new Date('1111-11-11'),
    transactionType: '',
    amount: 0,
    category: '',
    name: ''
  }])
  monthHistoryColumns: string[] = ['date', 'amount', 'balance', 'savings', 'residualFunds'];
  monthDataSource: MatTableDataSource<Monthly> = new MatTableDataSource([{
    date: '',
    amount: 0,
    balance: 0,
    savings: 0,
    residualFunds: 0
  }])

  applyFilter(event: Event, historyTab: number) {
    console.log("hello")
    const filterValue = (event.target as HTMLInputElement).value;
    if(historyTab===1)
      this.transDataSource.filter = filterValue.trim().toLowerCase();
    else
      this.monthDataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(row:any) {

  }

  delete(row:any) {

  }
}
