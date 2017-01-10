Ext.define('App.Controller.Usuario', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario',
    init: function () {

        this.formfiltro  = this.lookupReference('formfiltro');
        this.form        = this.lookupReference('form');
        this.grid        = this.lookupReference('grid');
        this.window      = this.lookupReference('window');
        this.windowprint = this.lookupReference('windowprint');

    },
    novoUsuario: function () {
        var self = this;
        self.window.show();
    },
    exitUsuario: function () {
        var self = this;
        self.window.hide();
    },
    editarUsuario: function(grid, rowIndex, colIndex){
        var self = this;
        var record = grid.getStore().getAt(rowIndex);
        
        self.form.getForm().reset();
        self.form.loadRecord(record);
        self.window.show();
    },
    imprimirUsuario: function(){
        var self = this;
        
        self.windowprint.show();
    },
    salvarUsuario: function () {
        
        var self = this;
        
        if(self.form.isValid()){
            if(self.form.getForm().findField('senhausuario').getValue() != self.form.getForm().findField('confirmarsenhausuario').getValue()){
                self.alertInfo('As senhas não correspondem', function () {
                    self.form.getForm().findField('senhausuario').focus();
                });
            }else{
                Ext.MessageBox.confirm('Confirmar', 'Deseja Confirmar?', this.showResult, this);
            }
        }else{
            this.showToast(Ext.String.format('Campos inválidos.'));
        }
            
    },
    showResult: function (btn, text) {
        var self = this;
        
        if(btn === 'yes'){
            //enviar dados
            self.showToast(Ext.String.format('Dados gravados com sucesso'));
            self.window.hide();
            self.grid.store.reload();
            self.form.getForm().reset();
        }
    },
    showToast: function (s, title) {
        Ext.toast({
            html: s,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400,
            constrain:true
        });
    },
    
    alertInfo: function (msg, func) {
        Ext.MessageBox.alert({
            title: 'Atenção',
            message: msg,
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.MessageBox.OK,
            constrain:true,
            fn: function () {
                func();
            }
        });
    }
});