Ext.define('App.Grid.Programadores', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-programadores',
    border:false,
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            autoLoad: true,
            fields: [
                {name: 'idprogramador', type: 'integer'},
                {name: 'nomeprogramador', type: 'string'},
                {name: 'situacao', type: 'string'},
                {name: 'idsituacao', type: 'integer'},
                {name: 'emailprogramador', type: 'string'},
                {name: 'datacadastro', type: 'date', dateFormat: 'Y-m-d'},
            ],
            proxy: {
                type: 'ajax',
                url: App.Path + 'programadores',
                //reader: {type: 'json', root: 'data', totalProperty: 'totalCount'},
                simpleSortMode: true
            },
            remoteSort: true,
            sorters: [{
                    property: 'nomeprogramador',
                    direction: 'desc'
                }]
        });

        this.tbar = {
            items: [
                {
                    cls: 'button-tool',
                    handler: 'exportarProgramador',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirProgramador',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                },
                '->',
                {
                    text: 'Novo',
                    iconCls: 'x-fa fa-plus',
                    scale: 'medium',
                    handler: 'novoProgramador'
                }

            ]
        };

        this.columns = [
            {
                text: 'Nome',
                dataIndex: 'nomeprogramador',
                flex: 1
            },
            {
                text: 'E-mail',
                dataIndex: 'emailprogramador',
                flex: 1
            },
            {
                text: 'Data Cadastro',
                dataIndex: 'datacadastro',
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
                        handler: 'editarProgramador'
                    },
                    {
                        xtype: 'splitter'
                    },
                    {
                        iconCls: 'x-fa fa-remove',
                        tooltip: 'Excluir',
                        handler: 'excluirProgramador'
                    }
                ]
            }

        ];

        this.callParent();

    }

});