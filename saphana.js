var hana = require('@sap/hana-client');

var conn = hana.createConnection();
const config ={
    host    : '13b9cc58-a1e8-4dd4-a6bb-38306ef480bd.hana.trial-us10.hanacloud.ondemand.com',
    port    : '443',
    uid     : 'DBADMIN',
    pwd     : 'Summar@2015'
}
 conn.connect(config);
conn.exec( `SELECT DISTINCT SCHEMA_NAME FROM TABLES
WHERE IS_SYSTEM_TABLE = 'FALSE' ORDER BY SCHEMA_NAME;`, function (err, result) {
    console.log("res",result)
    if (err) throw err;
  });
// conn.exec("insert into users values (4, 'Chris', 'Benoyth', 'Chris Benoyth','chris@gmail.com','04/12/1991',26,'554-963-3364','5589 Venus Road','Kullpy','Brads','USA','5566 4444 7413','BRPS5226a','123456','2586 0938 4832 3922','5249 7983 6515 2668','6c60:10f3:fa6:a1de:16d3:3894:34bd:811d');", function (err, affectedRows) {
//     if (err) throw err;
//     console.log('Number of affected rows:', affectedRows);
//   });