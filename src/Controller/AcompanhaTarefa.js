Ext.define('App.Controller.AcompanhaTarefa', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acompanhatarefa',
    init: function (view) {
        
        this.gridPlayStop         = this.lookupReference('gridplaystop');
        this.formAcompanha        = this.lookupReference('formacompanha');
        this.gridAcompanhaSprint  = this.lookupReference('gridacompanhaSprint');
        this.gridAcompanhaTarefas = this.lookupReference('gridacompanhaTarefas');
        this.panelAcompanha       = this.lookupReference('panel');
        this.panelSprinTarefa     = this.lookupReference('acompanhaTarefaSprint');
    },
    
    playStop:function(){
        var self = this;
        
        if(self.gridPlayStop.getSelectionModel().getSelection().length === 0){
            App.MessageBox.showToast('Selecione uma tarefa.');
        }else{
            
        }
    },
    pesquisarTarefa:function(field, newVal, oldVal){
        var self = this;
        self.gridPlayStop.store.load().filter([{
            id: 'descricaotarefa',
            property: "descricaotarefa",
            value: newVal,
            anyMatch: true
        }]);
    },
    
    farol:function(v){
        if (v == 1)
             return '<div style="background-color:red;width:20px;height:20px;border-radius: 100%;"></div>';
         else
             return '<div style="background-color:green;width:20px;height:20px;border-radius: 100%;"></div>';
    },
    
    tooltipTarefa:function(value, metaData, record, rowIdx, colIdx, store){
        metaData.tdAttr = 'data-qtip="' + value + '"';
        return value;
    },
    
    carregarSprints:function(){
        var self       = this;
        var id         = self.gridPlayStop.getSelectionModel().getSelection()[0].data.idtarefa;
        var rotaSprint = 'acompanha/' + id;
        var rotaTarefa = 'acompanha/tarefas/' + id;
                
        App.Ajax.request('GET', rotaSprint, null, self.panelSprinTarefa, function (retorno) {
            self.gridAcompanhaSprint.store.loadData(retorno);
            self.formAcompanha.getForm().setValues(retorno[0]);
        });
        
        App.Ajax.request('GET', rotaTarefa, null, self.panelSprinTarefa, function (retorno) {
            self.gridAcompanhaTarefas.store.loadData(retorno);
        });
    },
   
    
});