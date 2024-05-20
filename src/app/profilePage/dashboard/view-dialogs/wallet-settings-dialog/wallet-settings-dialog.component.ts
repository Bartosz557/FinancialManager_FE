import {Component, OnInit, Renderer2} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialog} from "../../dialogs/add-expense-dialog/dialog-animations-example-dialog";
import {WalletSettingsDialogService} from "./wallet-settings-dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarExample} from "../../snack-bar-example/snack-bar-example";

@Component({
  selector: 'app-wallet-settings-dialog',
  templateUrl: './wallet-settings-dialog.component.html',
  styleUrls: ['./wallet-settings-dialog.component.css']
})
export class WalletSettingsDialogComponent implements OnInit{
  settlementDate: any = '12.05.2024';
  monthlyLimit: any = 1300;
  monthlyIncome: any = 2500;
  accountBalance: any = 14030;

  constructor(private snackBar: SnackBarExample , private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private renderer: Renderer2, private walletService: WalletSettingsDialogService) {
  }

  ngOnInit() {
    this.dialogRef.updateSize('25%', '57%');
  }
  closeDialog() {
    this.dialogRef.close({ success: true });

  }

  changeDisplayValue(row: string) {
    const elements = document.querySelectorAll('.hiddenito-'+row);

    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const displayValue = computedStyle.getPropertyValue('display');
      if(displayValue==='none')
        this.renderer.setStyle(element, 'display', 'block');
      else
        this.renderer.setStyle(element, 'display', 'none');
    });
  }

  save(row: number){
      this.openSnackBar('error')
    // switch (row){
    //     case 1:
    //       this.sendWalletUpdate(this.settlementDate, 'update-settlement-date')
    //         break
    //     case 2:
    //         this.sendWalletUpdate(this.monthlyLimit,'update-monthly-limit')
    //         break
    //     case 3:
    //         this.sendWalletUpdate(this.monthlyIncome,'update-monthly-income')
    //         break
    //     case 4:
    //         this.sendWalletUpdate(this.accountBalance,'update-account-balance')
    // }
  }

  sendWalletUpdate(value: any,url:any){
      this.walletService.updateWallet(value,url).subscribe(
          (success) => {
              // this.openSnackBar()
              console.log(success)
          },
          (error) => {
              console.log('Error:', error);
          }
      );
  }

    openSnackBar(status: any) {
        this._snackBar.openFromComponent(SnackBarExample, {
            duration: 3000,
        });
        // const snackBarRef = this._snackBar.open('xd', 'action', {
        //     duration: 2000
        // });



    }
}
