;(function() {
    var namespace = function namespace(name) {
        var parts = name.split('.');
        var parent = window || GLOBAL || global;
        var currentPart = '';

        for (var i = 0 ; i < parts.length ; i++) {
            currentPart = parts[i];
            parent[currentPart] = parent[currentPart] || {};
            parent = parent[currentPart]
        }

        return parent;
    }
})()
