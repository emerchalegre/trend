Ext.define('App.Grid.AcompanhaTarefa', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-acompanhatarefa',
    region:'center',
    autoHeight:true,
    border:false,
    height: 150,
    requires: [
        'Ext.ProgressBarWidget',
    ],
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            autoLoad: false,
            fields: [
                {name: 'idsprint', type: 'integer'},
                {name: 'titulosprint', type: 'string'},
                {name: 'datasprint', type: 'date', dateFormat: 'Y-m-d'},
                {name: 'farol', type: 'integer'}
            ]
        });

        this.tbar = {
            items: [
                {
                    cls: 'button-tool',
                    handler: 'exportarUsuario',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirUsuario',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                }

            ]
        };

        this.columns = [
            {
                text: 'Título Sprint',
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
                text: '% Previão',
                xtype: 'widgetcolumn',
                flex: 1,
                dataIndex: 'progress',
                widget: {
                    xtype: 'progressbarwidget',
                    textTpl: [
                        '{percent:number("0")}%'
                    ]
                }
            },
            {
                width: 80,
                text: 'Farol',
                dataIndex: 'farol',
                renderer: 'farol',
                editor: {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 1
                }
            }

        ];

        this.callParent();

    }

});