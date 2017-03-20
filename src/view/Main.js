Ext.define('App.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'App.Panel.Principal',
        'App.Controller.Menu',
        'App.Panel.Menu'
    ],
    controller: 'menu',
    layout: 'border',
    plugins: 'viewport',
    initComponent: function () {

        this.treemenu = Ext.create('App.Panel.Menu', {
          region: 'center',
          reference: 'tree-menu'
        })

        this.items = [this.treemenu]

        this.callParent();
    }

});
