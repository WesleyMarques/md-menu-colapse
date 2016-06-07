(function() {
    'use strict';

    angular.module('mdMenu', [])
        .directive('mdMenuColapse', function() {
            return {
                restrict: 'EA',
                scope: true,
                transclude: true,
                templateUrl: 'md-menu-colapse.html',
                link: function(scope, element, attr) {
                    // code goes here ...
                }
            };
        });
})();
