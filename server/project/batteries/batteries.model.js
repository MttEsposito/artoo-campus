var mongoose= require('mongoose');
var Schema=mongoose.Schema;
var bttSchema=new Schema({
    capacity: String,
    nCells: String,
    voltage: String,
    cRate: Number,
    cd: String,
    resitence: String,
});
var battery = mongoose.model('Battery',bttSchema);
