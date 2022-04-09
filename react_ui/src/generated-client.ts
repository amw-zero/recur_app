export interface RecurringTransaction { id: number;amount: number;name: string }

export interface CreateRecurringTransaction { amount: number;name: string }

export class Budget {
  constructor(config: (a: Budget) => void) {
  config(this) }

recurring_transactions: RecurringTransaction[] = [];
async create_recurring_transaction(rtc: CreateRecurringTransaction) {
  let resp = await fetch("http://localhost:3000/recurring_transactions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rtc) });
this.recurring_transactions.push(await resp.json());
 }

async delete_recurring_transaction(rt: RecurringTransaction) {
  fetch("http://localhost:3000/recurring_transactions/" + rt.id, { method: "DELETE", headers: { "Content-Type": "application/json" } });
this.recurring_transactions = this.recurring_transactions.filter((data) => {
 return data.id !== rt.id });
 }

async update_recurring_transaction(rt: RecurringTransaction) {
  ;
 }

async view_recurring_transactions() {
  let data = await fetch("http://localhost:3000/recurring_transactions", { method: "GET", headers: { "Content-Type": "application/json" } });
this.recurring_transactions = await data.json();
 }


}

export interface ScheduledTransaction { name: string }

export interface Filter { ids: number[] }

export class Schedule {
  constructor(config: (a: Schedule) => void) {
  config(this) }

scheduled_transactions: ScheduledTransaction[] = [];
async view_scheduled_transactions() {
  let data = await fetch("http://localhost:3000/scheduled_transactions", { method: "GET", headers: { "Content-Type": "application/json" } });
this.scheduled_transactions = await data.json();
 }


}