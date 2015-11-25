var View = function () {
    var updateView = function (articles) {
        var template = function (templateString, variables) {
            return templateString.replace(/\{\{ (.+?) \}\}/g, function (str, p1) {
                return variables[p1];
            });
        };

        var articlesList = '';
        var html =
            '<li class="article-main-info">' +
            '<img src="{{ img }}"  />' +
            '<h5>{{ title }}</h5>' +
            '<div class="caption">' +
            '<p class="">{{ description }}</p>' +
            '<p>Link: <a href="{{ link }}">{{ link }}</a></p>' +
            '</div>' +
            '</li>';
        for (var key in articles.value.items) {
            if (articles.value.items.hasOwnProperty(key)) {
                var value = articles.value.items[key];
                articlesList += template(html, {
                    title: value.title, img: value.enclosure.url, description: value.description,
                    link: value.link
                });
            }
        }

        document.getElementById('articles-list').innerHTML = articlesList;
        document.getElementById('articles-list').onclick = function (e) {
            var articleMainInfo = e.target;
            if (articleMainInfo.className == 'article-main-info') {
                articleMainInfo.getElementsByClassName('caption')[0].style.display = 'block';
            } else if (articleMainInfo.parentNode.className == 'article-main-info') {
                articleMainInfo.parentNode.getElementsByClassName('caption')[0].style.display = 'block';
            }
        };
    };

    return {
        updateView: function (modelData) {
            // Update view
            updateView(modelData);
        }
    }
};








