var Model = function () {
    var _articles = {};

    var notifyController = function () {
        var updateView = new Event("updateView");
        document.body.dispatchEvent(updateView);
    };

    // public methods
    return {
        addArticles: function (articles) {
            _articles = articles;
            notifyController();
        },
        getArticles: function () {
            return _articles;
        }
    };
};






