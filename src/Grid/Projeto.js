Ext.define('App.Grid.Projeto', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-projeto',
    border:false,
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            autoLoad: true,
            fields: [
                {name: 'idprojeto', type: 'integer'},
                {name: 'titulo', type: 'string'},
                {name: 'situacao', type: 'string'},
                {name: 'dataprojeto', type: 'date', dateFormat: 'Y-m-d'},
            ],
            proxy: {
                type: 'ajax',
                url: App.Path + 'projetos',
                //reader: {type: 'json', root: 'data', totalProperty: 'totalCount'},
                simpleSortMode: true
            },
            remoteSort: true,
            sorters: [{
                    property: 'nomeusuario',
                    direction: 'desc'
                }]
        });

        this.tbar = {
            items: [
                {
                    cls: 'button-tool',
                    handler: 'atualizarProjeto',
                    iconCls: 'x-fa fa-refresh',
                    tooltip: 'Atualizar'
                },
                {
                    cls: 'button-tool',
                    handler: 'exportarProjeto',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirProjeto',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                },
                '->',
                {
                    text: 'Novo',
                    iconCls: 'x-fa fa-plus',
                    scale: 'medium',
                    handler: 'novoProjeto'
                }

            ]
        };

        this.columns = [
            {
                text: 'Projeto',
                dataIndex: 'titulo',
                flex: 1
            },
            {
                text: 'Data Projeto',
                dataIndex: 'dataprojeto',
                flex: 1,
                sortable: true,
                xtype: 'datecolumn', format: 'd/m/Y',
                filter: {
                    type: 'date'
                }
            },
            {
                text: 'Situação',
                dataIndex: 'situacao',
                flex: 1
            },
            {
                xtype: 'actioncolumn',
                width: 120,
                align: 'center',
                items: [
                    {
                        iconCls: 'x-fa fa-edit',
                        tooltip: 'Editar',
                        handler: 'editarProjeto'
                    },
                    {
                        xtype: 'splitter'
                    },
                    {
                        iconCls: 'x-fa fa-remove',
                        tooltip: 'Excluir',
                        handler: 'excluirProjeto'
                    }
                ]
            }

        ];

        this.callParent();

    }

});