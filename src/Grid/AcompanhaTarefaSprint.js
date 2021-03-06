Ext.define('App.Grid.AcompanhaTarefaSprint', {
    xtype: 'grid-acompanhatarefasprint',
    extend: 'Ext.grid.Panel',
    title: 'Tarefas',
    iconCls: 'x-fa fa-hourglass-1',
    autoScroll: true,
    autoHeight: true,
    border: false,
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            autoLoad: false,
            fields: [
                {name: 'idtarefa', type: 'integer'},
                {name: 'detalhe', type: 'string'},
                {name: 'datainicio', type: 'date', dateFormat: 'Y-m-d'},
                {name: 'horasalmoco', type: 'integer'},
                {name: 'idprogramador', type: 'integer'},
                {name: 'horas', type: 'integer'},
                {name: 'nomeprogramador', type: 'string'},
                {name: 'datainiciocalculada', type: 'date', dateFormat: 'Y-m-d'},
                {name: 'datafinalcalculada', type: 'date', dateFormat: 'Y-m-d'}

            ]
        });

        this.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            {
                ptype: 'rowexpander',
                rowBodyTpl: new Ext.XTemplate(
                        '<p><b>Descrição</b>: {[this.breakLine(values.detalhe)]}</p>',
                        {
                            disableFormats: true,
                            breakLine: function (descricao) {
                                return '<br>' + descricao.replace(/\n/g, "<br>");
                            }
                        }
                )
            }
        ];

        this.viewConfig = {
            stripeRows: true,
            markDirty: false,
            plugins: {
                ptype: 'gridviewdragdrop',
                dragText: 'Arraste para alterar a posição da tarefa'
            }
        };

        this.tbar = {
            items: [

                {
                    cls: 'button-tool',
                    handler: 'exportarTarefa',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirTarefa',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                }
            ]
        };

        this.columns = [
            {
                text: 'Tarefa',
                dataIndex: 'detalhe',
                flex: 1,
                renderer: function (a, b, c, d) {
                    return 'Tarefa ' + (d + 1);
                }
            },
            {
                text: 'Programador',
                dataIndex: 'idprogramador',
                flex: 1,
                dataIndex:'nomeprogramador'
            },
            {
                text: 'Horas',
                width: 120,
                dataIndex: 'horas'
            },
            {
                text: 'Início',
                width: 120,
                dataIndex: 'datainiciocalculada',
                xtype: 'datecolumn', format: 'd/m/Y'
            },
            {
                text: 'Fim',
                width: 120,
                dataIndex: 'datafinalcalculada',
                xtype: 'datecolumn', format: 'd/m/Y'
            }
        ];

        this.callParent();

    }

});

