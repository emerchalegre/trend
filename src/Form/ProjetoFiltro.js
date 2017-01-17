Ext.define('App.Form.ProjetoFiltro', {
    extend: 'Ext.form.Panel',
    xtype: 'form-projetofiltro',
    region: 'north',
    autoHeight: true,
    bodyPadding: 10,
    title: 'Cadastro de Projeto',
    iconCls: 'x-fa fa-newspaper-o',
    border:false,
    tools: [
        {
            type: 'refresh',
            handler: function () {
                //parent.App.Tab.reloadById(window.idTab, document.location.href);
            }
        }
    ],
    initComponent: function () {

        this.buttonPesquisar = Ext.create('Ext.Button', {
            iconCls: 'x-fa fa-search',
            handler: 'pesquisarProjeto',
            tooltip: 'Pesquisar'
        });
        
        this.buttonLimpar = Ext.create('Ext.Button', {
            iconCls: 'x-fa fa-eraser',
            handler: 'limparProjeto',
            tooltip: 'Limpar'
        });

        this.items = [
            {
                xtype: 'fieldset',
                title: 'Filtro',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Nome',
                                name: 'nomeprojeto',
                                width: '40%',
                                emptyText: 'Pesquisar por Nome'
                            },
                            {
                                xtype: 'splitter'
                            },
                            this.buttonPesquisar,
                            {
                                xtype: 'splitter'
                            },
                            this.buttonLimpar
                        ]
                    }
                ]
            },
        ]

        this.callParent();

    }
});
