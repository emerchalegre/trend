Ext.define('App.Controller.Projeto', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projeto',
    init: function (view) {

        this.formfiltro          = this.lookupReference('formfiltro');
        this.formProjeto         = this.lookupReference('form');
        this.formProjetoDetalhes = this.lookupReference('formDetalhes');
        this.card                = this.lookupReference('card');
        this.grid                = this.lookupReference('grid');
        this.window              = this.lookupReference('window');
        this.windowprint         = this.lookupReference('windowprint');
        this.gridSolicitante     = this.lookupReference('gridSolicitante');
        this.gridRiscos          = this.lookupReference('gridRiscos');
        
    },
    novoProjeto: function () {
        var self = this;
        self.doCardNavigation(-2);
        self.formProjeto.getForm().reset();
        self.formProjetoDetalhes.getForm().reset();
        self.gridSolicitante.store.reload();
        self.gridRiscos.store.reload();
        self.window.show();
    },
    
    editarProjeto:function(grid, rowIndex, colIndex){
        
        var self   = this;
        var record = grid.getStore().getAt(rowIndex);
        var id     = record.get('idprojeto');

        self.formProjeto.loadRecord(record);
        self.formProjetoDetalhes.loadRecord(record);
        
        App.Ajax.request('GET', 'projetos/solicitantes/'+id, null, self.grid, function (retorno) {
            self.gridSolicitante.store.loadData(retorno);
        });
        
        App.Ajax.request('GET', 'projetos/riscos/'+id, null, self.grid, function (retorno) {
            self.gridRiscos.store.loadData(retorno);
        });
        
        self.window.show();
        
    },
    
    excluirProjeto:function(grid, rowIndex, colIndex){
        var self = this;
        var record = grid.getStore().getAt(rowIndex);
        var rota = 'projetos/' + record.data.idprojeto;
        var tituloprojeto = record.data.titulo;

        Ext.MessageBox.confirm('Confirmar', 'Deseja excluir o projeto <b>'+tituloprojeto+'</b> ?', function (btn) {

            if (btn === 'yes') {

                App.Ajax.request('DELETE', rota, null, self.grid, function (retorno) {
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
    },

    salvar:function(){
        var self = this;
        var gridRiscos = [];
        var gridSolicitante = [];
        
        //adicionando registros da grid para enviar no objeto data
        $.each(self.gridRiscos.store.getRange(), function(i, obj){
            gridRiscos.push(obj.data);
        });
        
        $.each(self.gridSolicitante.store.getRange(), function(i, obj){
            if(obj.data.data){
                obj.data.data = obj.data.data.toISOString().substring(0, 10);
            }
            
            gridSolicitante.push(obj.data);
        });
      
        //parametros para envio
        var formProjeto         = self.formProjeto.getValues();
        var formProjetoDetalhes = self.formProjetoDetalhes.getValues();
        var rota;
        var type;
        var data = {
            formProjeto:formProjeto, 
            formProjetoDetalhes:formProjetoDetalhes,
            gridRiscos:gridRiscos,
            gridSolicitante:gridSolicitante
        };
        
        //validar rota de insert/update
        var id = self.formProjeto.getForm().findField('idprojeto').getValue();
        if (id === '') {
            rota = 'projetos';
            type = 'POST'
        } else {
            rota = 'projetos/' + id;
            type = 'PATCH';
        }
        
        if(self.gridSolicitante.store.data.length === 0 || self.gridSolicitante.store.data.items[0].data.nome == ''){
            App.MessageBox.warning('É obrigatório inserir ao menos um solicitante.', function(){});
        }else{
            Ext.MessageBox.confirm('Confirmar', 'Deseja Confirmar?', function (btn) {

                    if (btn === 'yes') {

                        App.Ajax.request(type, rota, data, self.window, function (retorno) {
                            if (retorno.success) {
                                App.MessageBox.success('Dados gravados com sucesso', function () {
                                    self.window.hide();
                                    self.doCardNavigation(-2);
                                    self.grid.store.reload();
                                    self.gridSolicitante.store.reload();
                                    self.gridRiscos.store.reload();
                                    self.formProjeto.getForm().reset();
                                    self.formProjetoDetalhes.getForm().reset();
                                })
                            } else {
                                App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                            }
                        });

                    }
                });
        }
        
    },
    
    adicionarSolicitante:function(){
        var self = this;
        self.gridSolicitante.store.add({});
        self.gridSolicitante.plugins[0].startEdit(self.gridSolicitante.store.count() - 1, 0);
    },
    
    excluirSolicitante:function(grid, rowIndex, colIndex){
        var self          = this;
        var record        = grid.getStore().getAt(rowIndex);
        var idsolicitante = record.get('idsolicitante');
        var rota          = 'projetos/solicitantes/' + idsolicitante;
        var nome          = record.get('nome');;
        
        /*
         * verifica se esta incluindo ou editando
         * se estiver editando tem que remover do banco
         */
        if(idsolicitante){
            Ext.MessageBox.confirm('Confirmar', 'Deseja excluir o solicitante <b>'+nome+'</b> ?', function (btn) {

                if (btn === 'yes') {

                    App.Ajax.request('DELETE', rota, null, self.gridSolicitante, function (retorno) {
                        if (retorno.success) {
                            App.MessageBox.success('Removido com sucesso', function () {
                                self.gridSolicitante.store.remove(record);
                            })
                        } else {
                            App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                        }
                    });

                }
            });
        }else{
            self.gridSolicitante.store.remove(record);
        }
        
    },
    
    excluirTodosSolicitantes:function(){
        var self      = this;
        var idprojeto = self.formProjeto.getForm().findField('idprojeto').getValue();
        var rota      = 'projetos/solicitantes/todos/' + idprojeto;
        
        /*
         * verifica se esta incluindo ou editando
         * se estiver editando tem que remover do banco
         */
        if(idprojeto){
            Ext.MessageBox.confirm('Confirmar', 'Deseja excluir todos os solicitantes ?', function (btn) {

                if (btn === 'yes') {

                    App.Ajax.request('DELETE', rota, {idprojeto:idprojeto}, self.gridSolicitante, function (retorno) {
                        if (retorno.success) {
                            App.MessageBox.success('Removido com sucesso', function () {
                                self.gridSolicitante.store.reload();
                            })
                        } else {
                            App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                        }
                    });

                }
            });
            
            
        }else{
            self.gridSolicitante.store.reload();
        }
        
        
    },
    
    imprimirSolicitante: function () {
        var self = this;
        self.windowprint.show();
    },
    
    limparProjeto:function(){
        var self = this;
        self.formfiltro.getForm().reset();
    },
    
    exportarProjeto:function(){
        var self = this;
    },
    
    pesquisarProjeto:function(){
        var self = this;
        var rota;
        var nome = self.formfiltro.getForm().findField('nomeprojeto').getValue();
        
        if(nome === ''){
            rota = 'projetos';
        }else{
            rota = 'projetos/'+nome;
        }
        
        App.Ajax.request('GET', rota, null, self.grid, function (retorno) {
            self.grid.store.loadData(retorno);
        });
        
    },
    
    atualizarProjeto:function(){
        var self = this;
        self.grid.store.reload();
    },
    
    imprimirProjeto:function () {
        var self = this;
        self.windowprint.show();
    },
    
    changeSistemas:function(){
        var self = this;
        if(self.formProjetoDetalhes.QtdServicosInternos.value === 1){
            self.formProjetoDetalhes.SistemasMulti.setVisible(false);
            self.formProjetoDetalhes.Sistemas.setVisible(true);
        }else{
            self.formProjetoDetalhes.SistemasMulti.setVisible(true);
            self.formProjetoDetalhes.Sistemas.setVisible(false);

        }
    },
    
    showNext: function () {

        this.doCardNavigation(1);
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },
    
    doCardNavigation: function (incr) {

        var self = this;
        var me = this.window.panelProjeto;

        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        
        //validar formulario antes de ir para o proximo formulario
        if (self.formProjeto.isValid() && next === 1 || next === 0) {
            
            l.setActiveItem(next);
            self.window.buttonPrev.setDisabled(next === 0);
            self.window.buttonNext.setDisabled(next === 2);
            self.window.buttonSalvar.setDisabled(true);
            
        } else if(self.formProjetoDetalhes.isValid() && next === 2){
            
            l.setActiveItem(next);
            self.window.buttonPrev.setDisabled(next === 0);
            self.window.buttonNext.setDisabled(next === 2);
            self.window.buttonSalvar.setDisabled(false);
            
        }else{
            App.MessageBox.showToast('Campos inválidos.');
        }

    }
});