Ext.define('App.view.Login', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-login',
    requires: [
      'App.Controller.Login',
      'Ext.form.Panel'
    ],
    controller: 'login',
    bodyStyle:{"background-color":"#28384a"},
    title: 'Trend App - Gerenciamento de Projetos',
    closable: false,
    initComponent: function () {

        this.form = Ext.create('App.Form.Login', {
            reference: 'form',
        });

        this.items = [
            this.form,
        ]

        this.callParent();
    }

});
