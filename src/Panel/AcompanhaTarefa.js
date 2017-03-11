Ext.define('App.Panel.AcompanhaTarefa', {
    extend: 'Ext.panel.Panel',
    title: 'Acompanha Tarefa',
    iconCls: 'x-fa fa-list-alt',
    xtype: 'layout-horizontal-box',
    bodyPadding: 5,
    requires: [
        'Ext.layout.container.HBox'
    ],
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true,
        bodyPadding: 10
    },
    initComponent: function () {
        
        var self = this;
        
        self.gridPlayStop = Ext.create('App.Grid.PlayStop',{
            reference: 'gridplaystop',
        });

        this.items = [
            {
                title: 'Play/Stop',
                iconCls: 'x-fa fa-play',
                flex: 1,
                margin: '0 8 0 0',
                layout:'fit',
                items:[
                    self.gridPlayStop
                ]
            },
            {
                title: 'Sprint',
                iconCls: 'x-fa fa-bolt',
                flex: 2,
                html: 'flex : 2'
            }
        ]

        this.callParent();
    }

});