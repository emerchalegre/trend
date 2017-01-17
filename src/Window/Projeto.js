Ext.define('App.Window.Projeto', {
    extend: 'Ext.window.Window',
    xtype: 'window-projeto',
    title: 'Cadastrar Projeto',
    iconCls:'x-fa fa-newspaper-o',
    width: '60%',
    height:400,
    layout: 'fit',
    closeAction:'true',
    modal:true,
    constrain:true,
    border:false,
    initComponent: function () {
        
        this.panelProjeto = Ext.create('App.Panel.Projeto', {
            reference: 'panel',
            bodyPadding: 10
        });

        this.items = [
            this.panelProjeto
        ];
        
        this.callParent();


    }
});


