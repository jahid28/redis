const {Redis}=require("ioredis")
// const client =new Redis()
const client =new Redis("rediss://default:1de4664b451e4c8eb63253bb9c978882@eu1-pleasing-catfish-40656.upstash.io:40656")
// rediss://default:14b7bcdbd91b4676a69f25f6d049d1d3@apn1-apt-polliwog-33920.upstash.io:33920
module.exports=client
