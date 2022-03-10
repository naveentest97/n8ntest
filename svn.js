var Client = require('svn-spawn');

async function main(){
    var client =await new Client({
        cwd: '/home/aximsoft/Desktop/naveen/projects/learing/hello',
        username: 'userna', // optional if authentication not required or is already saved
        password: 'password', // optional if authentication not required or is already saved
        noAuthCache: true, // optional, if true, username does not become the logged in user on the machine
    });
  await  client.getInfo(function(err, data) {
        console.log('Repository url is %s', data.repository);
    });
    await  client.getLog(function(err, data) {
        console.log('getLog  is', data);
    });
}

main();

