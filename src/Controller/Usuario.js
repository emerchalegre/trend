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

        self.form.getForm().reset();
        self.form.comboStatus.setValue(record.get('idsituacao'));
        self.form.loadRecord(record);
        self.window.show();
    },
    imprimirUsuario: function () {
        var self = this;

        self.windowprint.show();
    },
    salvarUsuario: function () {

        var self = this;

        if (self.form.isValid()) {
            if (self.form.getForm().findField('senhausuario').getValue() != self.form.getForm().findField('confirmarsenhausuario').getValue()) {
                self.alertInfo('As senhas não correspondem', function () {
                    self.form.getForm().findField('senhausuario').focus();
                });
            } else {
                Ext.MessageBox.confirm('Confirmar', 'Deseja Confirmar?', function (btn) {

                    if (btn === 'yes') {

                        self.form.getForm().submit({
                            url: 'http://localhost:81/clubes',
                            /*params: {
                             arquivo: self.formfiltro.getForm().findField('arquivo').fileInputEl.dom.files[0]
                             },*/
                            success: function (form, action) {
                                Trend.MessageBox.success('Dados gravados com sucesso', function () {
                                    self.window.hide();
                                    self.grid.store.reload();
                                    self.form.getForm().reset();
                                })
                            },
                            failure: function (form, action) {
                                Trend.MessageBox.error('Ocorreu um erro ao gravar', null);
                            }
                        });

                    }
                });
            }
        } else {
            Trend.MessageBox.showToast('Campos inválidos');
        }

    }
});