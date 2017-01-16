Ext.define('App.Form.ProgramadoresFiltro', {
    extend: 'Ext.form.Panel',
    xtype: 'form-programadorfiltro',
    region: 'north',
    autoHeight: true,
    bodyPadding: 10,
    title: 'Cadastro de Programadores',
    iconCls: 'x-fa fa-code',
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
            handler: 'pesquisarProgramador',
            tooltip: 'Pesquisar'
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
                                name: 'nomeprogramador',
                                width: '40%',
                                emptyText: 'Pesquisar por Nome'
                            },
                            {
                                xtype: 'splitter'
                            },
                            this.buttonPesquisar
                        ]
                    }
                ]
            },
        ]

        this.callParent();

    }
});