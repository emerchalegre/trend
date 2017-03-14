Ext.define('App.view.Programadores', {
    extend: 'Ext.panel.Panel',
    requires: ['App.Controller.Programadores'],
    controller: 'programadores',
    layout: 'border',
	ctype:'app.programadores',
    iconCls: 'x-fa fa-code',
    title: 'Cadastro de Programadores',
    border:false,
    initComponent: function () {

        this.closable = true;

        this.form = Ext.create('App.Form.ProgramadoresFiltro', {
            reference: 'formfiltro',
        });

        this.grid = Ext.create('App.Grid.Programadores', {
            reference: 'grid',
            region: 'center'
        });

        this.window = Ext.create('App.Window.Programadores', {
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