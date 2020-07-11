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
    trades.sort(function(a, b) {
      let keyA = a.id;
      let keyB = b.id;
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    res.sendStatus(201);
  }
  else{
    res.sendStatus(400);
  }
};

exports.list = (req, res, next) => {
  res.send(trades);
};



exports.findUser = (req, res, next) => {
  console.log(trades);
  let userID = parseInt(req.params['userID']);
  let result = trades.filter((item)=>{
    return item.user.id === userID;
  })
  if(result.length===0){
    res.sendStatus(404);
  }
  else{

    res.send(result);
  }
};

exports.findStock = (req, res, next) => {
  let stockSymbol = req.params['stockSymbol'];
  let result = trades.filter((item)=>{
    return item.symbol === stockSymbol;
  })
  if(result.length===0){
    res.sendStatus(404);
  }
  else{
    res.send(result);
  }
};


exports.findUserStock = (req, res, next) => {
  let userID = parseInt(req.params['userID']); 
  let stockSymbol = req.params['stockSymbol'];

  let result = trades.filter((item)=>{
    return (item.user.id === userID) && (item.symbol === stockSymbol);
  })
  if(result.length===0){
    res.sendStatus(404);
  }
  else{
    res.send(result);
  }
};