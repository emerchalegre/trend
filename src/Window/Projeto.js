Ext.define('App.Window.Projeto', {
    extend: 'Ext.window.Window',
    xtype: 'window-projeto',
    title: 'Cadastrar Projeto',
    iconCls:'x-fa fa-newspaper-o',
    width: '40%',
    height:500,
    layout: 'fit',
    closeAction:'true',
    modal:true,
    constrain:true,
    border:false,
    initComponent: function () {
        
        this.panelProjeto = Ext.create('App.Panel.Projeto', {
            reference: 'card',
        });

        this.items = [
            this.panelProjeto
        ];
        
        this.callParent();


    }
});


