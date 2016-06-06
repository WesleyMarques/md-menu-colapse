(function() {
    'use strict';

    angular.module('mdDropMenu',[])
        .directive('mdDropMenu', function() {
            return {
                restrict: "EA",
                scope: true,
                link: function(scope, element, attr) {
                    // code goes here ...
                }
            };
        });
})();