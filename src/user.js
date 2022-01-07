const mysql = require ("mysql");
const Promise= require ("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "user",
  };

  const selectAllUser = async()=>{
      const connection =mysql.createConnection(dbinfo);
  

  await connection.connectAsync();

  let sql=`SELECT * FROM user1 `
const list = await connection.queryAsync(sql);

await connection.endAsync();
return list;

};

const addUser=async(user)=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql= ` INSERT INTO user1 (records) VALUES(?)`;
    connection.queryAsync (sql,[user.records]);

    console.log("record added")

   await connection.endAsync();

};

module.exports=(selectAllUser,addUser);

