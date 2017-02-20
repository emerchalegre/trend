Ext.define('App.Window.Projeto', {
    extend: 'Ext.window.Window',
    xtype: 'window-projeto',
    title: 'Análise de Requisitos de Negócio',
    iconCls: 'x-fa fa-newspaper-o',
    width: '60%',
    height: '80%',
    closeAction: 'true',
    modal: true,
    constrain: true,
    border: false,
    resizable: false,
    //scrollable: true,
    overflowY: 'scroll',
    bodyPadding: 5,
    initComponent: function () {

        var self = this;

        this.panelProjeto = Ext.create('App.Panel.Projeto', {
            reference: 'card',
        });

        this.items = [
            this.panelProjeto
        ];
        
        this.buttonSalvar = Ext.create('Ext.Button', {
            handler: 'salvar',
            text: 'Salvar',
            iconCls: 'x-fa fa-save',
            scale: 'medium',
            disabled:true
        });

        this.buttonPrev = Ext.create('Ext.Button', {
            itemId: 'card-prev',
            handler: 'showPrevious',
            text: 'Voltar',
            iconCls: 'x-fa fa-chevron-left',
            scale: 'medium',
            disabled: true
        });

        this.buttonNext = Ext.create('Ext.Button', {
            itemId: 'card-next',
            text: 'Próximo',
            iconCls: 'x-fa fa-chevron-right',
            scale: 'medium',
            handler: 'showNext'
        });

        this.buttons = ['->',
            self.buttonPrev,
            self.buttonNext,
            self.buttonSalvar
        ],
                this.callParent();


    }
});


