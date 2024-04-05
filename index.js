const sql = require('mssql/msnodesqlv8')
var config = {
  server: '103.148.57.142',
  database: 'BC_Client',
  driver: 'msnodesqlv8',
  user: 'outsource',
  password: 'Os@2022!@#$%^',
  options: {
    trustedConnection: true,
  },
}

sql.connect(config, function (err) {
  if (err) console.log(err)
  var request = new sql.Request()
  request.query('select * from Clients', function (err, records) {
    if (err) console.log(err)
    else console.log(records)
  })
})
