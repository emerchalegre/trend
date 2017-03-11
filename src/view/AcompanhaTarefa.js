Ext.define('App.view.AcompanhaTarefa', {
    extend: 'Ext.panel.Panel',
    requires: ['App.Controller.AcompanhaTarefa'],
    controller: 'acompanhatarefa',
    layout: 'fit',
    iconCls: 'x-fa fa-list-alt',
    title: 'Acompanha Tarefa',
    border:false,
    initComponent: function () {

        this.closable = true;

        this.panel = Ext.create('App.Panel.AcompanhaTarefa', {
            reference: 'panel',
        });

        this.items = [
            this.panel
        ]

        this.callParent();
    }

});