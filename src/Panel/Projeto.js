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
        
        this.formProjetoDetalhes = Ext.create('App.Form.ProjetoDetalhes', {
            reference: 'formDetalhes',
        });

        this.panelProjeto = Ext.create('Ext.panel.Panel', {
            layout: 'fit',
            border: false,
            items: [
                self.formProjeto
            ]
        });
        
        this.panelProjetoDetalhes = Ext.create('Ext.panel.Panel', {
            layout: 'fit',
            border: false,
            items: [
                self.formProjetoDetalhes
            ]
        });

        this.items = [
            {
                id: 'card-0',
                items: [
                    self.panelProjeto
                ]
            },
            {
                id: 'card-1',
                items: [
                    self.panelProjetoDetalhes
                ]
            },
            {
                id: 'card-2',
                html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
            }
        ];

        this.callParent();
    }
});