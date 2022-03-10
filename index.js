var pg = require('pg');
const config = {
    user: 'superuser',
    database: 'dev',
    password: 'cD4s!NjY:LFva5x',
    port: '5439',
    host: 'redshift-cluster-n8n.cwfwgthmitnm.us-east-1.redshift.amazonaws.com'
};
var client = new pg.Client(config);
async function demo() {
    console.log("inside")
    var data = await client.connect();
  //var items = await client.connect (async function (err) {
    console.log('data',data)
    //if (err) throw err;
    const item = await client.query('SELECT * FROM "customer_data"');
    console.log(item)
    return item;
  //});
  //return items;
}
console.log('demo ---',demo)
demo();