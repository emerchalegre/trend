Ext.define('App.Grid.ProjetoRiscos', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-projetoRiscos',
    border: false,
    iconCls: 'x-fa fa-sort-amount-asc',
    title: 'Riscos de Negócio',
    initComponent: function () {

        var self = this;

        this.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
            }];

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            fields: [
                {name: 'descricao', type: 'string'},
                {name: 'probabilidade', type: 'string'},
                {name: 'impacto', type: 'string'},
                {name: 'risco', type: 'string'},
                {name: 'contramedida', type: 'string'},
            ],
            data: [
                {descricao: 'Descrição do Risco <b>Escopo</b>', probabilidade: '', impacto: '', risco: '', contramedida:''},
                {descricao: 'Descrição do Risco <b>Investimento</b>', probabilidade: '', impacto: '', risco: '', contramedida:''},
                {descricao: 'Descrição do Risco <b>Ganho</b>', probabilidade: '', impacto: '', risco: '', contramedida:''},
                {descricao: 'Descrição do Risco <b>Prazo</b>', probabilidade: '', impacto: '', risco: '', contramedida:''},
                {descricao: 'Descrição do Risco <b>Outros</b>', probabilidade: '', impacto: '', risco: '', contramedida:''},
            ]
        });

        this.tbar = {
            items: [
                {
                    cls: 'button-tool',
                    handler: 'exportarSolicitante',
                    iconCls: 'x-fa fa-file-excel-o',
                    tooltip: 'Exportar'
                },
                {
                    cls: 'button-tool',
                    handler: 'imprimirSolicitante',
                    iconCls: 'x-fa fa-print',
                    tooltip: 'Imprimir'
                },
                {
                    cls: 'button-tool',
                    handler: 'removerTodos',
                    iconCls: 'x-fa fa-trash-o',
                    tooltip: 'Remover Todos'
                },
                '->',
                {
                    //text: 'Novo',
                    text: 'Adicionar',
                    iconCls: 'x-fa fa-plus',
                    scale: 'medium',
                    handler: 'adicionarSolicitante'
                }
            ]
        };

        this.columns = [
            {
                text: 'Descrição',
                dataIndex: 'descricao',
                width:220,
            },
            {
                text: 'Probabilidade',
                dataIndex: 'probabilidade',
                flex: 1,
            },
            {
                text: 'Impacto',
                dataIndex: 'impacto',
                flex: 1,
            },
            {
                text: 'Risco',
                dataIndex: 'risco',
                flex: 1,
            },
            {
                text: 'Contramedida',
                dataIndex: 'contramedida',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }

        ];

        this.callParent();

    }

});