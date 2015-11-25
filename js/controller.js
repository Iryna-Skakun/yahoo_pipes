var Controller = function (view, model) {
    var _view = view,
        _model = model;
//Updating model with new articles
    var updateModel = function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    var updateModelData = JSON.parse(xmlhttp.responseText);
                    _model.addArticles(updateModelData);

                } else {
                    console.log('Connection error');
                }
            }
        }
        xmlhttp.open("GET", 'http://real.pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json', true);
        xmlhttp.send();
    };
    updateModel();
//Updating view with new model data
    document.body.addEventListener('updateView', function () {
        var modelData = _model.getArticles();
        _view.updateView(modelData);
    });

    return {
        // public functions
    };
};








