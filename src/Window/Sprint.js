Ext.define('App.Window.Sprint', {
    extend: 'Ext.window.Window',
    xtype: 'window-sprint',
    title: 'Adicionar Tarefas a Sprint',
    iconCls: 'x-fa fa-hourglass-1',
    width: '80%',
    height: '80%',
    closeAction: 'true',
    modal: true,
    constrain: true,
    resizable: false,
    bodyPadding: 5,
    layout:'fit',
    
    initComponent: function () {

        var self = this;
        
        this.form = Ext.create('App.Form.Sprint', {reference:'form'});
        this.gridTarefa = Ext.create('App.Grid.Tarefa', {reference:'gridTarefa', region:'center'});
        
        this.panel = Ext.create('Ext.panel.Panel', {
            border: false,
            items: [
                self.form,
                self.gridTarefa
            ]
        });
        
        this.items = [
            this.panel
        ];
            
        this.buttons = {
            items: [
                '->',
                {
                    text: 'Confirmar',
                    iconCls: 'x-fa fa-save',
                    handler:'salvarSprint',
                    scale: 'medium',
                },
                {
                    text: 'Fechar',
                    iconCls: 'x-fa fa-share-square-o',
                    handler:'exitSprint',
                    scale: 'medium',
                }
            ]
        };
        
        this.listeners = {
            close:'close'
        } 
        this.callParent();


    }
});


