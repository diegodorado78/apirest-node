const fs = require('fs')//file system, permite acceder al sistema de archivos
const saveToDatabase=(DB)=>{
 fs.writeFileSync("./db.json",JSON.stringify(DB,null,2),{
encoding:'utf8',

 })
}
module.exports={saveToDatabase}