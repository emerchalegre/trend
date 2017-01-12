Ext.define('App.Form.UsuarioFiltro', {
    extend: 'Ext.form.Panel',
    xtype: 'form-usuariofiltro',
    initComponent: function () {

        this.buttonPesquisar = Ext.create('Ext.Button', {
            iconCls: 'x-fa fa-search',
            handler: 'pesquisarUsuario',
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
                                name: 'nomeusuario',
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
