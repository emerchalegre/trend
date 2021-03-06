Ext.define('App.Controller.Usuario', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario',
    init: function () {

        this.formfiltro = this.lookupReference('formfiltro');
        this.form = this.lookupReference('form');
        this.grid = this.lookupReference('grid');
        this.window = this.lookupReference('window');
        this.windowprint = this.lookupReference('windowprint');

    },
    novoUsuario: function () {
        var self = this;
        self.form.getForm().reset();
        self.window.show();

    },
    exitUsuario: function () {
        var self = this;
        self.window.hide();
    },
    editarUsuario: function (grid, rowIndex, colIndex) {
        var self = this;
        var record = grid.getStore().getAt(rowIndex);

        self.form.comboStatus.setValue(record.get('idsituacao'));
        
        self.form.loadRecord(record);
        self.window.show();
    },
    imprimirUsuario: function () {
        var self = this;
        self.windowprint.show();
    },
    pesquisarUsuario:function(){
        var self = this;
        var rota;
        var nome = self.formfiltro.getForm().findField('nomeusuario').getValue();
        
        if(nome === ''){
            rota = 'usuarios';
        }else{
            rota = 'usuarios/'+nome;
        }
        
        App.Ajax.request('GET', rota, null, self.grid, function (retorno) {
            self.grid.store.loadData(retorno);
        });
    },
    limparUsuario:function(){
        var self = this;
        self.formfiltro.getForm().reset();
    },
    atualizarUsuario:function(){
        var self = this;
        self.grid.store.reload();
    },
    salvarUsuario: function () {

        var self = this;
        var data = self.form.getValues();
        var rota;
        var type;

        //validar rota de insert/update
        var id = self.form.getForm().findField('idusuario').getValue();
        if (id === '') {
            rota = 'usuarios';
            type = 'POST'
        } else {
            rota = 'usuarios/' + id;
            type = 'PATCH';
        }

        if (self.form.isValid()) {
            if (self.form.getForm().findField('senhausuario').getValue() != self.form.getForm().findField('confirmarsenhausuario').getValue()) {
                App.MessageBox.warning('As senhas não correspondem', function () {
                    self.form.getForm().findField('confirmarsenhausuario').focus();
                });
            } else {
                Ext.MessageBox.confirm('Confirmar', 'Deseja Confirmar?', function (btn) {

                    if (btn === 'yes') {

                        App.Ajax.request(type, rota, data, this.form, function (retorno) {
                            if (retorno.success) {
                                App.MessageBox.success('Dados gravados com sucesso', function () {
                                    self.window.hide();
                                    self.grid.store.reload();
                                    self.form.getForm().reset();
                                })
                            } else {
                                App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                            }
                        });

                        /*self.form.getForm().submit({
                         url: App.Path + 'usuarios',
                         success: function (form, action) {
                         App.MessageBox.success('Dados gravados com sucesso', function () {
                         self.window.hide();
                         self.grid.store.reload();
                         self.form.getForm().reset();
                         })
                         },
                         failure: function (form, action) {
                         App.MessageBox.error('Ocorreu um erro ao gravar', function(){});
                         }
                         });*/
                    }
                });
            }
        } else {
            App.MessageBox.showToast('Campos inválidos');
        }

    },
    excluirUsuario: function (grid, rowIndex, colIndex) {
        var self = this;
        var record = grid.getStore().getAt(rowIndex);
        var rota = 'usuarios/' + record.data.idusuario;
        var nomeusuario = record.data.nomeusuario;

        Ext.MessageBox.confirm('Confirmar', 'Deseja excluir o usuário <b>'+nomeusuario+'</b> ?', function (btn) {

            if (btn === 'yes') {

                App.Ajax.request('DELETE', rota, null, this.form, function (retorno) {
                    if (retorno.success) {
                        App.MessageBox.success('Dados gravados com sucesso', function () {
                            self.grid.store.reload();
                        })
                    } else {
                        App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                    }
                });

            }
        });
    }
});