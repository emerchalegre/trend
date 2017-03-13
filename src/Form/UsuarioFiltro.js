Ext.define('App.Form.UsuarioFiltro', {
    extend: 'Ext.form.Panel',
    xtype: 'form-usuariofiltro',
    region: 'north',
    autoHeight: true,
    bodyPadding: 10,
    title: 'Cadastro de Usuário',
    iconCls: 'x-fa fa-user',
    border:false,
    tools: [
        {
            type: 'refresh',
            handler: function () {
                //parent.App.Tab.reloadById(window.idTab, document.location.href);
            }
        },
        {
            type: 'exit',
            handler: function () {
                //parent.App.Tab.reloadById(window.idTab, document.location.href);
            }
        }
    ],
    initComponent: function () {

        this.buttonPesquisar = Ext.create('Ext.Button', {
            iconCls: 'x-fa fa-search',
            handler: 'pesquisarUsuario',
            tooltip: 'Pesquisar'
        });
        
        this.buttonLimpar = Ext.create('Ext.Button', {
            iconCls: 'x-fa fa-eraser',
            handler: 'limparUsuario',
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
                                name: 'nomeusuario',
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
