Ext.define('App.Window.Programadores', {
    extend: 'Ext.window.Window',
    xtype: 'window-programador',
    title: 'Cadastrar Programador',
    iconCls:'x-fa fa-code',
    width: '40%',
    height:330,
    autoHeight: true,
    layout: 'fit',
    closeAction:'true',
    modal:true,
    constrain:true,
    initComponent: function () {
        
        this.formProgramador = Ext.create('App.Form.Programadores', {
            reference: 'form',
            bodyPadding: 10
        });

        this.items = [
            this.formProgramador
        ];
        
        this.buttons = {
            items: [
                '->',
                {
                    text: 'Confirmar',
                    iconCls: 'x-fa fa-save',
                    handler:'salvarProgramador',
                    scale: 'medium',
                },
                {
                    text: 'Fechar',
                    iconCls: 'x-fa fa-share-square-o',
                    handler:'exitProgramador',
                    scale: 'medium',
                }
            ]
        };


        this.callParent();


    }
});


