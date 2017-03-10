Ext.define('App.view.Login', {
    extend: 'Ext.panel.Panel',
    requires: ['App.Controller.Login'],
    controller: 'login',
    bodyStyle:{"background-color":"#28384a"}, 
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