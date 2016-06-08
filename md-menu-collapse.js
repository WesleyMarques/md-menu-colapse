(function() {
    'use strict';

    angular.module('mdMenu', [])
        .controller('MenuCollapseController', ['$scope', function($scope){
            var self = this;
            self.activeMenu = 0;
            self.getSubItems = function(){
                console.log(JSON.parse($scope.subItems));
                return JSON.parse($scope.subItems)
            }
        }])
        .directive('mdMenuCollapse', function(){
            return{
                restrict: 'E',
                controller: 'MenuCollapseController as menuCtrl',
                transclude: true,
                template: '<div ng-transclude></div>'
            };
        })
        .directive('mdMenuCollapseItem', function() {
            return {
                restrict: 'E',
                scope: {
                    subItems: '=subItems'
                },
                require: '^mdMenuCollapse',
                replace: 'true',
                transclude: true,
                templateUrl: '../../md-menu-collapse.html',
                link: function bind(scope, element, attr) {
                    var divItems = document.getElementsByClassName("subMenu");
                    
                    if(scope.subItems.length > 0 && !!scope.subItems[0].name){
                                                
                    }else{
                        divItems[divItems.length-1].removeChild(divItems[divItems.length-1].childNodes[1]);
                    }
                }
            };
        });
})();
