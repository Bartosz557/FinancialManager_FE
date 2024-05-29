export interface RemindersInterface{
  today: Expense[];
  tomorrow: Expense[];
  nextWeek: Expense[];
}
export interface Expense {
  expenseName: string;
  category: string;
  amount: number;
}

export interface Reminders {
  daysLeft: string;
  expenseName: string;
  category: string;
  amount: number;
}
