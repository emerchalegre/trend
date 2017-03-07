Ext.define('App.Form.SprintFiltro', {
    extend: 'Ext.form.Panel',
    xtype: 'form-sprintfiltro',
    region: 'north',
    autoHeight: true,
    bodyPadding: 10,
    title: 'Cadastro de Sprint',
    iconCls: 'x-fa fa-flash',
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
        
        var self = this;
        
        this.projeto = Ext.create('App.Form.Combo.Projeto', {fieldLabel: 'Título', allowBlank:false});

        this.buttonCarregar = Ext.create('Ext.Button', {
            iconCls: 'x-fa fa-rotate-right',
            handler: 'carregarProjeto',
            text:'Carregar Projeto',
        });
        
        this.items = [
            {
                xtype: 'fieldset',
                title: 'Projeto',
                layout: 'anchor',
                defaults: {
                    anchor: '60%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            self.projeto,
                            {
                                xtype: 'splitter'
                            },
                            self.buttonCarregar,
                            
                        ]
                    }
                ]
            },
        ]

        this.callParent();

    }
});
