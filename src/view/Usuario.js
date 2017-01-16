Ext.define('App.view.Usuario', {
    extend: 'Ext.panel.Panel',
    requires: ['App.Controller.Usuario'],
    controller: 'usuario',
    layout: 'border',
    iconCls: 'x-fa fa-user',
    title: 'Cadastro de Usuário',
    border:false,
    initComponent: function () {

        this.closable = true;

        this.form = Ext.create('App.Form.UsuarioFiltro', {
            reference: 'formfiltro',
        });

        this.grid = Ext.create('App.Grid.Usuario', {
            reference: 'grid',
            region: 'center'
        });

        this.window = Ext.create('App.Window.Usuario', {
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