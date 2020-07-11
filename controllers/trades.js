let trades = [];
let struc = {
   "id": 0,
   "type": "",
   "user": {
      "id": "",
      "name": ""
   },
   "symbol": "",
   "shares": 0,
   "price": 0.0,
   "timestamp": ""
}


exports.delete = (req, res, next) => {
  trades = [];
  res.sendStatus(200)
};

exports.add = (req, res, next) => {
  // let obj = {...struc}
  // Object.seal(obj);
  let obj = req.body;
  let result = trades.find((item)=>{
    return item.id === obj.id;
  })
  if(result===undefined){
    trades.push(obj);
    res.sendStatus(201);
  }
  else{
    res.sendStatus(400);
  }
};
