Ext.define('App.view.Projeto', {
    extend: 'Ext.panel.Panel',
    requires: ['App.Controller.Projeto'],
    controller: 'projeto',
    layout: 'border',
    iconCls: 'x-fa fa-newspaper-o',
    title: 'Cadastro de Projeto',
    border:false,
    initComponent: function () {

        this.closable = true;

        this.form = Ext.create('App.Form.ProjetoFiltro', {
            reference: 'formfiltro',
        });

        this.grid = Ext.create('App.Grid.Projeto', {
            reference: 'grid',
            region: 'center'
        });

        this.window = Ext.create('App.Window.Projeto', {
            reference: 'window'
        });

        this.windowprint = Ext.create('App.Window.Imprimir', {
            reference: 'windowprint'
        });

        this.items = [
            this.form, this.grid, this.window, this.windowprint
        ]

        this.callParent();
    }

});