Ext.define('App.Controller.Login', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: [
        'App.security.Firewall'
    ],
    init: function () {

        this.form = this.lookupReference('form');

    },

    onLoginClick: function(){

        var data = this.getView().down('form').getValues();

        App.security.Firewall.login(data.loginusuario, data.senhausuario).then(function() {
            this.getView().destroy();
            Ext.create({
                xtype: 'app-main'
            });
        }.bind(this), function(data) {
            Ext.Msg.alert('Error', data.message || 'An error occurred while logging in.');
        });
    },
});
