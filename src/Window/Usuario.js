Ext.define('App.Window.Usuario', {
    extend: 'Ext.window.Window',
    xtype: 'window-usuario',
    title: 'Cadastrar Usuário',
    iconCls:'x-fa fa-user-plus',
    width: '50%',
    height:400,
    autoHeight: true,
    layout: 'fit',
    closeAction:'true',
    modal:true,
    constrain:true,
    initComponent: function () {
        
        this.formUsuario = Ext.create('App.Form.Usuario', {
            reference: 'form',
            bodyPadding: 10
        });

        this.items = [
            this.formUsuario
        ];
        
        this.buttons = {
            items: [
                '->',
                {
                    text: 'Confirmar',
                    iconCls: 'x-fa fa-save',
                    handler:'salvarUsuario',
                    scale: 'medium',
                },
                {
                    text: 'Fechar',
                    iconCls: 'x-fa fa-share-square-o',
                    handler:'exitUsuario',
                    scale: 'medium',
                }
            ]
        };


        this.callParent();


    }
});


