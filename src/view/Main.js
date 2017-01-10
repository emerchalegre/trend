Ext.define('App.view.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.Panel.Principal',
        'App.Controller.Menu',
        'App.Panel.Menu'
    ],
    controller: 'menu',
    layout: 'border',
    initComponent: function () {
        
        this.tab = Ext.create('App.Tab.Principal',
                {
                    region: 'center',
                    reference: 'tab'

                });

        this.items = [
            {
                xtype: 'tree-menu',
                region: 'west',
                title: 'Trend',
                iconCls: 'x-fa fa-codepen',
                width: 300
            },
            {
                xtype: 'panel-principal',
                region: 'center',
                //title: 'Trend - Gerenciamento de Projetos',
                //iconCls: 'x-fa fa-trello',
                header: {
                    titleAlign: 'center'
                },
                items: [
                    this.tab
                ]
            },
        ]

        /*this.items = [
         {
         region: 'center',
         xtype: 'panel-principal',
         //title: 'Sistema TCC',
         //iconCls: 'x-fa fa-home',
         items: [
         {
         xtype: 'tree-menu',
         region: 'west',
         //                        iconCls:'x-fa fa-drupal',
         title: 'Trend',
         width: 300
         },
         this.tab
         ]
         }]*/

        this.callParent();
    }

});