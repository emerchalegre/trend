Ext.define('App.Grid.PlayStop', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-playstop',
    autoHeight: true,
    border: false,
    listeners: {
        rowclick: 'carregarSprints',
    },
    
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            autoLoad: true,
            fields: [
                {name: 'idtarefa', type: 'integer'},
                {name: 'descricaotarefa', type: 'string'},
            ],
            proxy: {
                type: 'ajax',
                url: App.Path + 'tarefas',
                //reader: {type: 'json', root: 'data', totalProperty: 'totalCount'},
                simpleSortMode: true
            },
            remoteSort: true,
            sorters: [{
                    property: 'descricaotarefa',
                    direction: 'desc'
                }]
        });

        this.buttonPlay = Ext.create('Ext.Button', {
            cls: 'button-tool',
            handler: 'playStop',
            iconCls: 'x-fa fa-play',
            tooltip: 'Play',
            scale: 'large',
        });

        this.buttonStop = Ext.create('Ext.Button', {
            cls: 'button-tool',
            handler: 'playStop',
            iconCls: 'x-fa fa-stop',
            tooltip: 'Stop',
            scale: 'large',
            hidden: true
        });

        this.tbar = {
            items: [
                {
                    xtype: 'textfield',
                    name: 'descricaotarefa',
                    emptyText: 'Pesquisar Tarefa',
                    width: '90%',
                    listeners: {
                        change: 'pesquisarTarefa'
                    }
                },
                '->',
                self.buttonPlay,
                self.buttonStop
            ]
        };
        this.bbar = {
            items: [
                '->',
                {
                    cls: 'button-tool',
                    handler: 'atualizarPlayStop',
                    iconCls: 'x-fa fa-refresh',
                    tooltip: 'Atualizar'
                },
                {
                    cls: 'button-tool',
                    handler: 'exportarPlayStop',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirPlayStop',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                },
            ]
        }

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