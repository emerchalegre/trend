Ext.define('App.view.Sprint', {
    extend: 'Ext.panel.Panel',
    requires: ['App.Controller.Sprint'],
    controller: 'sprint',
    layout: 'border',
    iconCls: 'x-fa fa-flash',
    title: 'Cadastro de Sprint',
    border:false,
    initComponent: function () {

        this.closable = true;

        this.form = Ext.create('App.Form.SprintFiltro', {
            reference: 'formFiltro',
        });

        this.grid = Ext.create('App.Grid.Sprint', {
            reference: 'grid',
            region: 'center'
        });
        
        this.window = Ext.create('App.Window.Sprint', {
            reference: 'window'
        });

        this.items = [
            this.form, this.grid, this.window
        ]

        this.callParent();
    }

});