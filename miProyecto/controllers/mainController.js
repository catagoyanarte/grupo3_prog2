module.exports = {
  home: function(req, res) {
    res.render('index');
  },
  searchResults: function(req, res) {
    res.render('searchResults');
  }
};