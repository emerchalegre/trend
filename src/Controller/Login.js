Ext.define('App.Controller.Login', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    init: function () {

        this.form = this.lookupReference('form');

    },
    
    login:function(){
        var self = this;
        var dados = self.form.getValues();
        
        if(self.form.isValid()){
            App.Ajax.request('POST', 'login', dados, self.form, function (retorno) {
                if(retorno){
                    alert('logouuu');
                }else{
                    alert('nao logou');
                }
            });
        }
    },
});