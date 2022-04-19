import React, { useEffect } from 'react'; 
import { Navbar } from './Navbar';
import { RecurringTransactions } from './RecurringTransactions';
import { RecurringTransactionForm } from './RecurringTransactionForm';
import { useStore } from './store';
import { observer } from 'mobx-react-lite';

const ScheduledTransactions = observer(() => {
  const { schedule } = useStore();

  // schedule.scheduled_transactions won't be re-fetched, it
  // depends on Budget.recurring_transactions
  return (
    <>
     {schedule.scheduled_transactions.map(st => <p>{st.name}</p>)}
    </>
  );
})

const Total = observer(() => {
  const { client } = useStore();

  return <p>Total: {client.recurring_transactions.reduce((a, e) => a + e.amount, 0)}</p>;
});

const App = () => {
  const { client, schedule } = useStore();

  useEffect(() => {
    console.log("Fetching datas");
    client.view_recurring_transactions();
    schedule.view_scheduled_transactions();
  }, [client.recurring_transactions]);
  
  return (
    <div className="App">
      <Navbar />
      <RecurringTransactionForm />
      <RecurringTransactions />
      <Total />

      <p>Scheduled transactions</p>
      <ScheduledTransactions />
    </div>
  );
};

export default App;
