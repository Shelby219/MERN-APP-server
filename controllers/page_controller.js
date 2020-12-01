function home(req, res) {
    
    res.send("This is Home");
    res.json(req.user);
}




module.exports = {
    home
}