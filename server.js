const client = require("./db");
const express = require("express");
const app = express();

const generateMockData = (count) => {
  const mockData = [];
  for (let i = 1; i <= count; i++) {
    mockData.push({
      id: i,
    });
  }
  return mockData;
};

// client.set("name","jk")

app.get("/", async (req, res) => {
    const rr=req.body
  const redisData = await client.get("val");
  if (redisData) {
    console.log("hit");
    return res.json(JSON.parse(redisData));
  }

  console.log("miss");

  // const result=await fetch("https://jsonplaceholder.typicode.com/posts")
  // const data= await result.json()
  const data = generateMockData(10000);
  await client.set("val", JSON.stringify(data));
  await client.expire("val", 10);
  res.json(data);
});

// async function init(){
//     await client.set("name","jahid khan")
//     await client.lpush("msgs","nice to meet you")
//     await client.rpush("msgs","bye")
//     await client.rpop("msgs")
//     await client.expire("name",5)
//     await client.del("num")
//     const res=await client.get("name")
//     console.log(res)
// }
// init()

app.listen(9000, () => {
  console.log("done");
});
