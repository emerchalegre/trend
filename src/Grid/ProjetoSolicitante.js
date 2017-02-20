Ext.define('App.Grid.ProjetoSolicitante', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-projetoSolicitante',
    border:false,
    iconCls:'x-fa fa-users',
    title:'Equipe Solicitante',
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
                {name: 'nome', type: 'string'},
                {name: 'responsabilidade', type: 'string'},
                {name: 'contato', type: 'integer'},
                {name: 'data', type: 'date', dateFormat: 'Y-m-d'},
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
                    text:'Adicionar Solicitante',
                    iconCls: 'x-fa fa-plus',
                    scale: 'medium',
                    handler: 'adicionarSolicitante'
                }
            ]
        };

        this.columns = [
            {
                text: 'Envolvido/Área',
                dataIndex: 'nome',
                flex: 1,
                tooltip:'Usuário envolvido no processo e responsável por fornecer alguma informação nessa etapa.',
                editor: {
                    xtype: 'textfield',
                    allowBlank:false
                }
            },
            {
                text: 'Responsabilidade',
                dataIndex: 'responsabilidade',
                flex: 1,
                tooltip:'Informação pela qual o envolvido se compromete em fornecer com qualidade.',
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                text: 'Data',
                dataIndex: 'data',
                flex: 1,
                sortable: true,
                tooltip:'Data do fornecimento da informação.',
                xtype: 'datecolumn', format: 'd/m/Y',
                filter: {
                    type: 'date'
                },
                editor: {
                    xtype: 'datefield'
                }
            },
            {
                text: 'Contato',
                dataIndex: 'contato',
                flex: 1,
                tooltip:'Contato do envolvido.',
                editor: {
                    xtype: 'numberfield',
                    //selectOnFocus:true,
                    //enableKeyEvents: true
                }
            },
            {
                xtype: 'actioncolumn',
                width: 120,
                align: 'center',
                items: [
                    {
                        iconCls: 'x-fa fa-remove',
                        tooltip: 'Excluir',
                        handler: 'excluirSolicitante'
                    }
                ]
            }

        ];

        this.callParent();

    }

});