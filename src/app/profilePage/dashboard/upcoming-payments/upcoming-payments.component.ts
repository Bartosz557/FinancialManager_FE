import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Transaction} from "../../wallet-history/history-interface";
import {UpcomingPaymentsInterface} from "./upcoming-payments.interface";
import {UpcomingPaymentsService} from "./upcoming-payments.service";

@Component({
  selector: 'app-upcoming-payments',
  templateUrl: './upcoming-payments.component.html',
  styleUrls: ['./upcoming-payments.component.css']
})
export class UpcomingPaymentsComponent implements OnInit{
  displayedColumns: string[] = ['date', 'amount', 'name', 'reminder', 'options'];
  dataSource: MatTableDataSource<UpcomingPaymentsInterface> =  new MatTableDataSource([{
    date: new Date('1111-11-11'),
    amount: 0,
    name: '',
    reminder: '',
  }])

  constructor(private upcomingPaymentsService: UpcomingPaymentsService) {
  }
  reminders = [
    { value: "do_not_remind", displayText: "No reminder" },
    { value: "one_reminder", displayText: "Remind the same day" },
    { value: "two_reminders", displayText: "Remind the same day & day before" },
    { value: "three_reminders", displayText: "Remind the same day & day and week before" }

  ];
  ngOnInit() {
    this.upcomingPaymentsService.getPaymentsData().subscribe(
      (response: UpcomingPaymentsInterface[]) => {
        for(let element of response) {
          for (let item of this.reminders) {
            if (item.value === element.reminder)
              element.reminder = item.displayText;
          }
        }
        response.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.dataSource = new MatTableDataSource(response);
      }
    )
  }


  edit(row:any) {

  }

  delete(row:any) {

  }
}
