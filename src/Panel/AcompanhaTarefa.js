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
    },
    tools: [
        {
            type: 'refresh',
            handler: function () {
                //parent.App.Tab.reloadById(window.idTab, document.location.href);
            }
        },
        {
            type: 'exit',
            handler: function () {
                //parent.App.Tab.reloadById(window.idTab, document.location.href);
            }
        }
    ],
    initComponent: function () {

        var self = this;

        self.gridPlayStop = Ext.create('App.Grid.PlayStop', {
            reference: 'gridplaystop',
        });

        self.formAcompanhaTarefa = Ext.create('App.Form.AcompanhaTarefa', {
            reference: 'formacompanha'
        });

        self.gridAcompanhaTarefa = Ext.create('App.Grid.AcompanhaTarefa', {
            reference: 'gridacompanhaSprint',
        });

        self.gridAcompanhaTarefaSprint = Ext.create('App.Grid.AcompanhaTarefaSprint', {
            reference: 'gridacompanhaTarefas',
        });

        this.items = [
            {
                title: 'Play/Stop',
                iconCls: 'x-fa fa-play',
                flex: 1,
                margin: '0 8 0 0',
                layout: 'fit',
                items: [
                    self.gridPlayStop
                ]
            },
            {
                title: 'Sprint',
                iconCls: 'x-fa fa-bolt',
                reference:'acompanhaTarefaSprint',
                flex: 2,
                items: [
                    self.formAcompanhaTarefa,
                    self.gridAcompanhaTarefa,
                    self.gridAcompanhaTarefaSprint
                ]
            }
        ]

        this.callParent();
    }

});