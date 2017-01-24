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
        
    },
    novoProjeto: function () {
        var self = this;
        self.window.show();
    },

    showNext: function () {

        this.doCardNavigation(1);
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },
    
    salvar:function(){
        var self = this;
        
        if(self.gridSolicitante.store.data.length === 0 || self.gridSolicitante.store.data.items[0].data.nome == ''){
            App.MessageBox.warning('É obrigatório inserir ao menos um solicitante.', function(){});
        }else{
            alert('salvar');
        }
        
    },
    
    adicionarSolicitante:function(){
        var self = this;
        self.gridSolicitante.store.add({});
        self.gridSolicitante.plugins[0].startEdit(self.gridSolicitante.store.count() - 1, 0);
    },
    
    excluirSolicitante:function(grid, rowIndex, colIndex){
        var self = this;
        var record = grid.getStore().getAt(rowIndex);
        self.gridSolicitante.store.remove(record);
    },
    
    imprimirSolicitante: function () {
        var self = this;
        self.windowprint.show();
    },
    
    removerTodos:function(){
        var self = this;
        self.gridSolicitante.store.reload();
    },
    
    doCardNavigation: function (incr) {

        var self = this;
        var me = this.window.panelProjeto;

        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        
        l.setActiveItem(next);
        self.window.buttonPrev.setDisabled(next === 0);
        self.window.buttonNext.setDisabled(next === 2);

        // validar formulario antes de ir para o proximo formulario
        /*if (self.formProjeto.isValid() && next === 1 || next === 0) {
            
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
        }*/

        

    }
});