var fs = require('fs');

exports.html = {
    getContent: function (file) {
        var file = fs.readFileSync(file, {encoding: 'utf8'}),
        er = /<article id="content" class="content">([\s\S]*?)<\/article><!-- #content -->/gm,
        content = er.exec(file);

        return content[1].replace(/[\n\t]|\s{2,}/g, "");
    }
};