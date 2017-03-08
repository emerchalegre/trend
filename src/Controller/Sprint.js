Ext.define('App.Controller.Sprint', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sprint',
    init: function (view) {

        this.formFiltro = this.lookupReference('formFiltro');
        this.formTarefa = this.lookupReference('form');
        this.gridTarefa = this.lookupReference('gridTarefa');
        this.grid       = this.lookupReference('grid');
        this.window     = this.lookupReference('window');
    },
    
    carregarProjeto:function(){
        var self = this;
        
        if(self.formFiltro.isValid()){
            
            var id = self.formFiltro.projeto.getValue();
            var rota = 'sprint/' + id;
            
            App.Ajax.request('GET', rota, null, self.grid, function (retorno) {
                self.grid.store.loadData(retorno);
            });
            
            self.grid.buttonSprint.setDisabled(false);
            
        }else{
            App.MessageBox.showToast('Campos inválidos');
        }
    },
    
    novaSprint:function(){
        var self = this;
        self.window.show();
        
    },
    
    atualizarSprint:function(){
        var self = this;
        var id   = self.formFiltro.projeto.getValue();
        var rota = 'sprint/' + id;
            
        App.Ajax.request('GET', rota, null, self.grid, function (retorno) {
            self.grid.store.loadData(retorno);
        });
    },
   
    adicionarTarefa:function(){
        var self = this;
        self.gridTarefa.store.add({});
    },
    
    calcularHoras:function(){
        var self = this;
        
    },
   
    farol:function(v){
        if (v == 1)
             return '<div style="background-color:red;width:20px;height:20px;border-radius: 100%;"></div>';
         else
             return '<div style="background-color:green;width:20px;height:20px;border-radius: 100%;"></div>';
    },
    
    close:function(){
        var self = this;
        self.formTarefa.getForm().reset();
        self.gridTarefa.store.removeAll();
    },
   
    exitSprint:function(){
        var self = this;
        self.formTarefa.getForm().reset();
        self.gridTarefa.store.removeAll();
        self.window.hide();
    },
    
    excluirSprint:function(grid, rowIndex, colIndex){
        
        var self = this;
        var record = grid.getStore().getAt(rowIndex);
        var rota = 'sprint/' + record.data.idsprint;
        var titulosprint = record.data.titulosprint;

        Ext.MessageBox.confirm('Confirmar', 'Deseja excluir a sprint <b>'+titulosprint+'</b> ?', function (btn) {

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
    
    excluirTarefa:function(grid, rowIndex, colIndex){
        var self          = this;
        var record        = grid.getStore().getAt(rowIndex);
        var idtarefa      = record.get('idtarefa');
        var idsprint      = self.formTarefa.getForm().findField('idsprint').getValue();
        var rota          = 'sprint/tarefa/' + idtarefa;
        var rotasprint    = 'sprint/' + idsprint;
        var titulosprint  = self.formTarefa.getForm().findField('titulosprint').getValue();
        
        /*
         * verifica se esta incluindo ou editando
         * se estiver editando tem que remover do banco
         */
        if(idtarefa){
            Ext.MessageBox.confirm('Confirmar', 'Deseja excluir esta tarefa ?', function (btn) {

                if (btn === 'yes') {
                    /*
                     * se acaso excluir todas as tarefas o script abaixo ira exlcuir tambem a sprint
                     */
                    if(self.gridTarefa.store.data.length === 1){
                
                        Ext.MessageBox.confirm('Confirmar', 'Ao excluir todas as tarefas, automaticamente será exlcuído a sprint <b>'+ titulosprint + '</b><br>Deseja confirmar?', function (btn) {
                            if (btn === 'yes') {
                                App.Ajax.request('DELETE', rotasprint, null, self.gridTarefa, function (retorno) {
                                    if (retorno.success) {
                                        App.MessageBox.success('Removido com sucesso', function () {
                                            self.formTarefa.getForm().reset();
                                            self.gridTarefa.store.remove(record);
                                            self.atualizarSprint();
                                        })
                                    } else {
                                        App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                                    }
                                });
                            }
                        });
                    }else{
                        App.Ajax.request('DELETE', rota, null, self.gridTarefa, function (retorno) {
                            if (retorno.success) {
                                App.MessageBox.success('Removido com sucesso', function () {
                                    self.gridTarefa.store.remove(record);
                                })
                            } else {
                                App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                            }
                        });
                    }

                }
            });
        }else{
            self.gridTarefa.store.remove(record);
        }
        
    },
   
    salvarSprint:function(){
        var self = this;
        var rota;
        var type;
        var gridDados = [];

        $.each(self.gridTarefa.store.getRange(), function(i, obj){

             if(obj.data.datainicio){
                 obj.data.datainicio = obj.data.datainicio.toISOString().substring(0, 10);
             }
             if(obj.data.datainiciocalculada){
                 obj.data.datainiciocalculada = obj.data.datainiciocalculada.toISOString().substring(0, 10);
             }
             if(obj.data.datafinalcalculada){
                 obj.data.datafinalcalculada = obj.data.datafinalcalculada.toISOString().substring(0, 10);
             }

             gridDados.push(obj.data);
         });

        var data = {
            idprojeto: self.formFiltro.projeto.getValue(),
            form: self.formTarefa.getValues(),
            grid: gridDados
        };

        //validar rota de insert/update
         var id = self.formTarefa.getForm().findField('idsprint').getValue();
         if (id === '') {
             rota = 'sprint';
             type = 'POST'
         } else {
             rota = 'sprint/' + id;
             type = 'PATCH';
         }

        if(self.gridTarefa.store.data.length === 0){
             App.MessageBox.warning('É obrigatório inserir ao menos uma tarefa.', function(){});
         }else{
             if(self.formTarefa.isValid()){
                 Ext.MessageBox.confirm('Confirmar', 'Deseja Confirmar?', function (btn) {

                     if (btn === 'yes') {

                        App.Ajax.request(type, rota, data, self.window, function (retorno) {
                            if (retorno.success) {
                                App.MessageBox.success('Dados gravados com sucesso', function () {
                                    self.gridTarefa.store.removeAll();
                                    self.formTarefa.getForm().reset();
                                    self.carregarProjeto();
                                    self.window.hide();
                                })
                            } else {
                                App.MessageBox.error('Ocorreu um erro ao gravar', function () {});
                            }
                        });

                     }
                 });
             }else{
                 App.MessageBox.showToast('Campos inválidos');
             }

         }
    },
    
    editarSprint:function(grid, rowIndex, colIndex){
        
        var self     = this;
        var record   = grid.getStore().getAt(rowIndex);
        var idsprint = record.get('idsprint');
        var rota     = '/sprint/tarefas/' + idsprint;
        
        self.formTarefa.loadRecord(record);
        
        App.Ajax.request('GET', rota, null, self.grid, function (retorno) {
            self.gridTarefa.store.loadData(retorno);
        });
        
        self.window.show();
        
        
    },
   
});