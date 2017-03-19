Ext.define('App.Form.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    title: 'Login - Trend App',
    iconCls: 'x-fa fa-user',
    frame: true,
    width: 380,
    height:250,
    bodyPadding: 10,
    style:'margin-top: 10%;margin-left: 35%;margin-right: 40%;',
    initComponent: function () {

        this.defaults = {
            anchor: '100%',
            labelWidth: 80
        };

        this.items = [
            {
                xtype:'textfield',
                allowBlank: false,
                fieldLabel: 'Login',
                name: 'loginusuario',
                emptyText: 'Login'
            }, {
                xtype:'textfield',
                allowBlank: false,
                fieldLabel: 'Senha',
                name: 'senhausuario',
                emptyText: 'Senha',
                inputType: 'password'
            }],

        this.buttons = [
            {
                text: 'Login',
                iconCls: 'x-fa fa-share',
                handler:'onLoginClick',
                scale: 'medium',
            }
        ],

        this.callParent();
    }
});
