var svnUltimate = require("node-svn-ultimate");
const config = {
  username: "username",
  password: "password",
};
async function test(){
  let promise = new Promise((resolve,reject)=>{ 
      svnUltimate.commands.list(
          "svn://172.18.0.1/hello",
          config,
           (err, data)=> {
             resolve(data)
            // console.log("data", data)
            // console.log("errrr", err)
          }
        )
    
  })
  promise.then((res)=>console.log("res",res))
//  let promise = Promise.resolve(svnUltimate.commands.list(
//   "svn://172.18.0.1/hello",
//   config,
//    (err, data)=> {
//     console.log("data", data)
//     console.log("errrr", err)
//   }
// ))
  
//   promise.then((res)=>console.log("res",res)).catch(err => console.log("ee",err))
}
test();
//  function main(path,fileName) {
//   svnUltimate.commands.cat(
//     path +"/"+ fileName,
//     config,
//     function (err, data) {
//       console.log("data", data);
//     }
//   );
// }
// function list() {
//   let path, fileName;
//   svnUltimate.commands.list(
//     "svn://172.18.0.1/hello",
//     config,
//     function (err, data) {
//       path = data.list.$.path;
//       fileName =  data.list.entry.name
//       main(path,fileName)
//     }
//   );
// }
// list()
