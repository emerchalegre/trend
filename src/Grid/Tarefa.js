Ext.define('App.Grid.Tarefa', {
    xtype: 'grid-tarefa',
    extend: 'Ext.grid.Panel',
    border:false,
    height:400,
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
                {name: 'datainiciocalculada', type: 'date', dateFormat: 'Y-m-d'},
                {name: 'datafinalcalculada', type: 'date', dateFormat: 'Y-m-d'},
                {name: 'farol', type: 'integer'},
                
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
                    handler: 'atualizarTarefa',
                    iconCls: 'x-fa fa-refresh',
                    tooltip: 'Atualizar'
                },
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
                },
                '->',
                {
                    text: 'Adicionar Tarefa',
                    iconCls: 'x-fa fa-plus',
                    handler:'adicionarTarefa',
                    scale: 'medium',
                },
                {
                    text: 'Calcular Horas',
                    iconCls: 'x-fa fa-calculator',
                    handler:'calcularHoras',
                    scale: 'medium',
                    tooltip:'Cálculo de horas por programador.'
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
                },
                editor: {
                    allowBlank:false,
                    xtype: 'textarea',
                    height: 300,
                    name:'descricaotarefa'
                }
            },
            {
                text: 'Data Início',
                dataIndex: 'datainicio',
                xtype: 'datecolumn', format: 'd/m/Y',
                width:120,
                editor: {
                    xtype: 'datefield'
                }
            },
            {
                text: 'Horário Almoço',
                width:120,
                dataIndex: 'horasalmoco',
                editor: {
                    xtype: 'numberfield',
                    minValue: 1,
                    maxValue: 8
                }
            },
            {
                text: 'Programador',
                dataIndex: 'idprogramador',
                flex:1,
                editor: {
                    xtype: Ext.create('App.Form.Combo.Programadores')
                },
                renderer: function (a, b, c, d, e) {
                    return this.getColumns()[e].getEditor(c, 'nomeprogramador').getDisplayValue();
                }
            },
            {
                text: 'Horas',
                width:120,
                dataIndex: 'horas',
                editor: {
                    xtype: 'numberfield',
                    minValue: 1,
                    maxValue: 8
                }
            },
            {
                text: 'Início',
                width:120,
                dataIndex: 'datainiciocalculada',
                xtype: 'datecolumn', format: 'd/m/Y',
                editor: {
                    xtype: 'datefield',
                    //readOnly:true
                }
            },
            {
                text: 'Fim',
                width:120,
                dataIndex: 'datafinalcalculada',
                xtype: 'datecolumn', format: 'd/m/Y',
                editor: {
                    xtype: 'datefield',
                    //readOnly:true
                }
            },
            {
                width:80,
                text: 'Farol',
                dataIndex: 'farol',
                renderer: 'farol',
                editor: {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 1
                }
            },
            {
                xtype: 'actioncolumn',
                width: 40,
                align: 'center',
                items: [
                    {
                        iconCls: 'x-fa fa-remove',
                        tooltip: 'Excluir',
                        handler: 'excluirTarefa'
                    }
                ]
            }
        ];

        this.callParent();

    }

});

