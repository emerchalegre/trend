Ext.define('App.Panel.Projeto', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.layout.container.Card'],
    xtype: 'panel-projeto',
    layout: 'card',
    bodyPadding: 15,
    defaults: {
        border: false
    },
    initComponent: function () {

        var self = this;
        
        this.formProjeto = Ext.create('App.Form.Projeto', {
            reference: 'form',
        });

        this.panel = Ext.create('Ext.panel.Panel', {
            layout:'fit',
            border:false,
            items:[
                self.formProjeto
            ]
        });
        
        /*this.buttonSalvar = Ext.create('Ext.Button', {
            text:'Salvar',
            iconCls: 'x-fa fa-save',
            scale: 'medium'
        });*/

        this.buttons = ['->',
            {
                itemId: 'card-prev',
                handler: 'showPrevious',
                text: 'Voltar',
                iconCls: 'x-fa fa-chevron-left',
                scale: 'medium',
                disabled: true
            },
            {
                itemId: 'card-next',
                text: 'Próximo',
                iconCls: 'x-fa fa-chevron-right',
                scale: 'medium',
                handler: 'showNext'
            }
        ],
                this.items = [
                    {
                        id: 'card-0',
                        items:[
                            self.panel
                        ]
                    },
                    {
                        id: 'card-1',
                        html: '<p>Step 2 of 3</p><p>Almost there.  Please click the "Next" button to continue...</p>'
                    },
                    {
                        id: 'card-2',
                        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
                    }
                ];

        this.callParent();
    }
});