Ext.define('App.Controller.Programadores', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.programadores',
    init: function () {

        this.formfiltro = this.lookupReference('formfiltro');
        this.form = this.lookupReference('form');
        this.grid = this.lookupReference('grid');
        this.window = this.lookupReference('window');
        this.windowprint = this.lookupReference('windowprint');

    },
    novoProgramador: function () {
        var self = this;
        self.form.getForm().reset();
        self.window.show();

    },
    exitProgramador: function () {
        var self = this;
        self.window.hide();
    },
    editarProgramador: function (grid, rowIndex, colIndex) {
        var self = this;
        var record = grid.getStore().getAt(rowIndex);

        self.form.getForm().reset();
        self.form.comboStatus.setValue(record.get('idsituacao'));
        self.form.loadRecord(record);
        self.window.show();
    },
    imprimirProgramador: function () {
        var self = this;

        self.windowprint.show();
    },
    limparProgramador: function () {
        var self = this;

        self.formfiltro.getForm().reset();
    },
    atualizarProgramador:function(){
        var self = this;
        self.grid.store.reload();
    },
    pesquisarProgramador:function(){
        var self = this;
        var rota;
        var nome = self.formfiltro.getForm().findField('nomeprogramador').getValue();
        
        if(nome === ''){
            rota = 'programadores';
        }else{
            rota = 'programadores/'+nome;
        }
        
        App.Ajax.request('GET', rota, null, self.grid, function (retorno) {
            self.grid.store.loadData(retorno);
        });
    },
    salvarProgramador: function () {

        var self = this;
        var data = self.form.getValues();
        var rota;
        var type;

        //validar rota de insert/update
        var id = self.form.getForm().findField('idprogramador').getValue();
        if (id === '') {
            rota = 'programadores';
            type = 'POST'
        } else {
            rota = 'programadores/' + id;
            type = 'PATCH';
        }

        if (self.form.isValid()) {

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
                }
            });

        } else {
            App.MessageBox.showToast('Campos inválidos');
        }

    },
    excluirProgramador: function (grid, rowIndex, colIndex) {
        var self = this;
        var record = grid.getStore().getAt(rowIndex);
        var rota = 'programadores/' + record.data.idprogramador;
        var nomeprogramador = record.data.nomeprogramador;

        Ext.MessageBox.confirm('Confirmar', 'Deseja excluir o programador <b>' + nomeprogramador + '</b> ?', function (btn) {

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