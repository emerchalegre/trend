Ext.define('App.Grid.Usuario', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-usuario',
    initComponent: function () {

        var self = this;

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            autoLoad: true,
            fields: [
                {name: 'idusuario', type: 'integer'},
                {name: 'nomeusuario', type: 'string'},
                {name: 'situacao', type: 'string'},
                {name: 'emailusuario', type: 'string'},
                {name: 'loginusuario', type: 'string'},
                {name: 'senhausuario', type: 'string'},
                {name: 'confirmarsenhausuario', type: 'string'},
                {name: 'datacadastro', type: 'date', dateFormat: 'Y-m-d'},
            ],
            data: [
                {
                    idusuario: '1',
                    nomeusuario: 'Fabio Gomes',
                    situacao: 'Ativo',
                    datacadastro: '2016-09-01'
                },
                {
                    idusuario: '2',
                    nomeusuario: 'Renan',
                    situacao: 'Ativo',
                    datacadastro: '2016-09-01'
                },
                {
                    idusuario: '3',
                    nomeusuario: 'José',
                    situacao: 'Ativo',
                    datacadastro: '2016-09-01'
                },
                {
                    idusuario: '4',
                    nomeusuario: 'Marcos Jeronimex',
                    situacao: 'Ativo',
                    datacadastro: '2016-09-01'
                }
            ]
                    /*proxy: {
                     type: 'ajax',
                     //url: 'http://www.gazin.com.br/admin/FreteGKOParametrizacao/getParam',
                     //reader: {type: 'json', root: 'data', totalProperty: 'totalCount'},
                     simpleSortMode: true
                     },*/
                    //remoteSort: true,
                    /*sorters: [{
                     property: 'idromaneio',
                     direction: 'desc'
                     }]*/
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
                },
                '->',
                {
                    text: 'Novo',
                    iconCls: 'x-fa fa-plus',
                    scale: 'medium',
                    handler: 'novoUsuario'
                }

            ]
        };

        this.columns = [

            {
                text: 'Nome',
                dataIndex: 'nomeusuario',
                flex: 1
            },
            {
                text: 'Data',
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
                        handler: 'editarUsuario'
                    },
                    {
                        xtype: 'splitter'
                    },
                    {
                        iconCls: 'x-fa fa-remove',
                        tooltip: 'Excluir',
                        handler: 'excluirUsuario'
                    }
                ]
            }

        ];

        this.listeners = {
            rowclick: 'loadForm',
            afterLayout: 'loadFormParam'
        };

        this.callParent();

    }

});