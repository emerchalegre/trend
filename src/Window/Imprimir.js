Ext.define('App.Window.Imprimir', {
    extend: 'Ext.window.Window',
    xtype: 'window-imprimir',
    title: 'Imprimir',
    iconCls:'x-fa fa-print',
    width: '80%',
    height:'80%',
    autoHeight: true,
    layout: 'fit',
    closeAction:'true',
    modal:true,
    constrain:true,
    initComponent: function () {
        var self = this;
        
        this.items = [
            
        ];
        
        this.buttons = {
            items: [
                '->',
                {
                    text: 'Fechar',
                    iconCls: 'x-fa fa-share-square-o',
                    handler: function(){
                        self.hide();
                    },
                    scale: 'medium'
                }
            ]
        };


        this.callParent();


    }
});


