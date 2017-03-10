Ext.define('App.Controller.Login', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    init: function () {

        this.form = this.lookupReference('form');

    },
    
    login:function(){
        var self = this;
        
        var login = self.form.getForm().findField('loginusuario').getValue();
        var senha = self.form.getForm().findField('senhausuario').getValue();
        
        if(self.form.isValid()){
            App.Ajax.request('GET', 'login/'+login+','+senha, null, self.form, function (retorno) {
                if(retorno){
                    alert('logouuu');
                }else{
                    alert('nao logou');
                }
            });
        }
    },
});