function expand(rt: RecurringTransaction) {
  new ScheduledTransaction(rt.name);

}

function filter(ids: number[]) {
  new Filter(ids);

}

function defineEndpoints(app, db) {
  app.post("/recurring_transactions", (req, res) => {
 let data = req.body;
db.serialize(() => {
 db.run("INSERT INTO recurring_transactions (amount, name) VALUES (?, ?)", [data.amount, data.name]);
db.get("SELECT last_insert_rowid()", (err, row) => {
 res.send({ amount: data.amount, name: data.name, id: row["last_insert_rowid()"] }) });
 });
 });
app.delete("/recurring_transactions/:id", (req, res) => {
 db.run("DELETE FROM recurring_transactions WHERE id = ?", [req.params.id]);
res.send({  });
 });
app.put("/recurring_transactions/:id", (req, res) => {
 res.send({  }) });
app.get("/recurring_transactions", (req, res) => {
 db.all("SELECT * FROM recurring_transactions", (_, rows) => {
 res.send(rows);
 }) });
app.get("/scheduled_transactions", (req, res) => {
 db.all("SELECT * FROM recurring_transactions", (_, rts) => {
 let scheduled_transactions = rts.map(expand);
res.send(scheduled_transactions);
 }) });

}