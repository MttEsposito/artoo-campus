module.exports = () => {
  function query(req, res) {
    console.log(req.timeRequest);
    res.status(200).send([{name:'ascia',description:'ascia a due mani'}]);
  }
function save(req,res){
  res.status(201).send();
}  
//public api
  return {
    query: query,
    save:save,
  };
}