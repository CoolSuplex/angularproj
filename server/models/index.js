var mongoose = require('mongoose');
mongoose.connect("mongodb://bachu:bachu@ds161295.mlab.com:61295/edureka");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username : String,
	password : String,
        usertype: String
});

var User = mongoose.model('users',userSchema);

var candidatesSchema = new Schema({
    username : String,
    usertype: String,
	name : String,
	number : Number,
        address: String
});

var Candidates = mongoose.model('candidates',candidatesSchema);

exports.login = function(req, res) {
    User.findOne({username: req.body.username, password: req.body.password},'username usertype',function(err,docs){
            if(err) { return err; }
            if((docs)){
                res.json(docs);
        };
    });
};
exports.getCandidates = function(req, res) {
    Candidates.find({username: req.body.username},function(err,docs){
            res.json(docs);
    });
};
exports.register = function(req, res) {
    User.findOne({username: req.body.username},'username usertype',function(err,docs){
            if ((err) || (docs === null)){
                User.create({username:req.body.username,password: req.body.password,usertype:"user"}, function(err, docs){
                    res.json(docs);
                });
            }else {
                res.json([{error:"User present"}]);
            }
    });
};

exports.addcandidate = function(req, res) {
    Candidates.create(req.body, function(err, Candidates) {
        console.log(req.body);
        if(err) { console.log(err); }
        return res.json(201, Candidates);
    });
};
exports.getAllcandidates = function(req, res) {
    Candidates.find({},function(err,docs){
            res.json(docs);
    });    
};

exports.editcandidate = function(req, res) {
    Candidates.findByIdAndUpdate(req.body._id,{$set:req.body}, function(err, Candidates) {
        console.log(req.body);
        if(err) { console.log(err); }
        return res.json(201, Candidates);
    });
};
exports.changepassword = function(req, res) {
    User.update({username: req.body.username}, { $set: { password: req.body.password}}, function(err, Candidates) {
        console.log(req.body);
        if(err) { console.log(err); }
        return res.json(201, Candidates);
    });
}
exports.changerole = function(req, res) {
    User.update({username: req.body.username}, { $set: { usertype: req.body.usertype}}, function(err, docs) {
        console.log(req.body);
        if(err) { console.log(err); }
        Candidates.update({username: req.body.username}, { $set: { usertype: req.body.usertype}}, function(err, Candidates) {
            console.log(req.body);
            if(err) { console.log(err); }
            return res.json(201, Candidates);
        });
    });

}

exports.deletecandidate = function(req, res) {
    Candidates.remove(req.body, function(err, docs) {
        if(err) { return handleError(res, err); }
        Candidates.find({},function(err, Candidates){
            if(err) { return handleError(res, err); }
            return res.status(201).json(Candidates);
        });
        
    });
};
