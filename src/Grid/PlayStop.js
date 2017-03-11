Ext.define('App.Grid.PlayStop', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-playstop',
    autoHeight:true,
    border:false,
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            autoLoad: true,
            fields: [
                {name: 'idtarefa', type: 'integer'},
                {name: 'descricaotarefa', type: 'string'},
                
            ],
            data:[
                {idtarefa:1, descricaotarefa:'GKO'},
                {idtarefa:1, descricaotarefa:'colocar percentual(barra de porcentagem) de previsão de término '},
                {idtarefa:1, descricaotarefa:'tirar o farol da tarefa e colocar no acampanha sprint(data final - data de hoje = farol)'},
                {idtarefa:1, descricaotarefa:'Tiger'},
                {idtarefa:1, descricaotarefa:'ccg'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
                {idtarefa:1, descricaotarefa:'layout senior'},
            ],
            /*proxy: {
                type: 'ajax',
                url: App.Path + 'usuarios',
                //reader: {type: 'json', root: 'data', totalProperty: 'totalCount'},
                simpleSortMode: true
            },*/
            remoteSort: true,
            sorters: [{
                    property: 'descricaotarefa',
                    direction: 'desc'
                }]
        });

        this.tbar = {
            items: [
                 {
                        xtype: 'textfield',
                        name: 'descricaotarefa',
                        emptyText:'Pesquisar Tarefa',
                        width:'90%',
                        listeners:{
                            change:'pesquisarTarefa'
                        }
                    },
                '->',
                {
                    cls: 'button-tool',
                    handler: 'playStop',
                    iconCls: 'x-fa fa-play',
                    tooltip: 'Play/Stop'
                }
            ]
        };

        this.columns = [
            {
                text: 'Título Tarefa',
                dataIndex: 'descricaotarefa',
                flex: 1,
                renderer: 'tooltipTarefa'
            }

        ];

        this.callParent();

    }

});