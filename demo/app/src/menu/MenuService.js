(function() {
    'use strict';

    angular.module('menu')
        .service('menuService', ['$q', MenuService]);

    /**
     * Menu DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadMenu: Function}}
     * @constructor
     */
    function MenuService($q) {
        var menuItems = [{
            name: 'Mesas',
            icon: 'view_module',
            sref: '.tables',
            subMenu: [{

            }]
        }, {
            name: 'Funcionários',
            icon: 'person',
            sref: '.employee',
            subMenu: [{

            }]
        }, {
            name: 'Gerenciamento de Itens',
            icon: 'markunread_mailbox',
            sref: '.employee',
            subMenu: [{
                name: 'Gerenciamento de Categoria',
                icon: 'markunread_mailbox',
                sref: '.employee'
            },
            {
                name: 'Gerenciamento de Categoria',
                icon: 'markunread_mailbox',
                sref: '.employee'
            },
            {
                name: 'Gerenciamento de Categoria',
                icon: 'markunread_mailbox',
                sref: '.employee'
            }]
        }, {
            name: 'Produto',
            icon: 'room_service',
            sref: '.products',
            subMenu: [{

            }]
        }, {
            name: 'Profile',
            icon: 'library_books',
            sref: '.profile',
            subMenu: [{

            }]
        }];
        // Promise-based API
        return {
            loadMenu: function() {
                // Simulate async nature of real remote calls
                return $q.when(menuItems);
            }
        };
    }

})();
