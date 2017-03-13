Ext.define('App.Grid.Sprint', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-sprint',
    border:false,
    initComponent: function () {

        var self = this;
        
        this.buttonSprint = Ext.create('Ext.Button', {
            text: 'Nova Sprint',
            iconCls: 'x-fa fa-plus',
            scale: 'medium',
            handler: 'novaSprint',
            disabled:true
        });

        this.store = Ext.create('Ext.data.Store', {
            autoLoad: false,
            fields: [
                {name: 'idsprint', type: 'integer'},
                {name: 'idprojeto', type: 'integer'},
                {name: 'titulosprint', type: 'string'},
                {name: 'datasprint', type: 'date', dateFormat: 'Y-m-d'},
            ]
        });

        this.tbar = {
            items: [
                {
                    cls: 'button-tool',
                    handler: 'atualizarSprint',
                    iconCls: 'x-fa fa-refresh',
                    tooltip: 'Atualizar'
                },
                {
                    cls: 'button-tool',
                    handler: 'exportarSprint',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirSprint',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                },
                '->',
                self.buttonSprint

            ]
        };

        this.columns = [
            {
                text: 'Sprint',
                dataIndex: 'titulosprint',
                flex: 1
            },
            {
                text: 'Data Sprint',
                dataIndex: 'datasprint',
                flex: 1,
                sortable: true,
                xtype: 'datecolumn', format: 'd/m/Y',
                filter: {
                    type: 'date'
                }
            },
            {
                xtype: 'actioncolumn',
                width: 120,
                align: 'center',
                items: [
                    {
                        iconCls: 'x-fa fa-edit',
                        tooltip: 'Editar',
                        handler: 'editarSprint'
                    },
                    {
                        xtype: 'splitter'
                    },
                    {
                        iconCls: 'x-fa fa-remove',
                        tooltip: 'Excluir',
                        handler: 'excluirSprint'
                    }
                ]
            }

        ];

        this.callParent();

    }

});