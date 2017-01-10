Ext.define('App.Tab.Principal', {
    extend: 'Ext.tab.Panel',
    xtype: 'tab-principal',
    plain: true,
    initComponent: function () {

        var self = this;

        this.items = [{
                ui: 'blue-tab',
                iconCls: 'x-fa fa-home',
                title: 'Inicio',
                style:'background-image: url(http://www.pensouachou.com/fabio/sistema/trend/resources/img/trend.png);background-repeat: no-repeat;background-position: center;'
            }];

        this.callParent();

    }

});