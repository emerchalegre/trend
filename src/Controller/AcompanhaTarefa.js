Ext.define('App.Controller.AcompanhaTarefa', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acompanhatarefa',
    init: function (view) {
        
        this.gridPlayStop = this.lookupReference('gridplaystop');
    },
    
    playStop:function(){
        var self = this;
        console.log(self.gridPlayStop);
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
    
    tooltipTarefa:function(value, metaData, record, rowIdx, colIdx, store){
        metaData.tdAttr = 'data-qtip="' + value + '"';
        return value;
    },
   
    
});