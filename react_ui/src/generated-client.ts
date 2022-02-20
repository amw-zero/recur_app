



export interface RecurringTransaction { id: number;amount: number;name: String }

export interface CreateRecurringTransaction { amount: number;name: String }

export class Budget {
  constructor(config: (a: Budget) => void) {
  config(this) }

recurring_transactions: RecurringTransaction[]=[];
async create_recurring_transaction(rtc: CreateRecurringTransaction) {
  let resp = await fetch("http://localhost:3000/recurring_transactions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rtc) });
this.recurring_transactions.push(await resp.json());
;
 }

async delete_recurring_transaction(rt: RecurringTransaction) {
  fetch("http://localhost:3000/recurring_transactions/" + rt.id, { method: "DELETE", headers: { "Content-Type": "application/json" } });
this.recurring_transactions = this.recurring_transactions.filter((data) => {
 return data.id !== rt.id });
;
 }

async update_recurring_transaction(rt: RecurringTransaction) {
  ;
;
 }

async view_recurring_transactions() {
  let data = await fetch("http://localhost:3000/recurring_transactions", { method: "GET", headers: { "Content-Type": "application/json" } });
this.recurring_transactions = await data.json();
;
 }


}

