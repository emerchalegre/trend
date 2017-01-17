Ext.define('App.Panel.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'tree-menu',
    layout: 'border',
    border: false,
    //collapsible: true,
    listeners: {
        render: 'onToggleNav',
    },
    
    items: [{
            title: 'Menu',
            iconCls: 'x-fa fa-codepen',
            region: 'center',
            split: true,
            reference: 'treelistContainer',
            tools: [
                {
                    iconCls: 'fa fa-bars',
                    cls: 'button-tool',
                    tooltip: 'Comprimir/Expandir',
                    handler: 'onToggleMicro',
                }
            ],
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            scrollable: 'y',
            items: [{
                    style: 'padding-top:20px',
                    xtype: 'treelist',
                    listeners: {
                        itemclick: function (sender, info, eOpts) {

                            app.getMainView().tab.add(Ext.create('App.view.Projeto'));
                        }
                    },
                    store: {
                        root: {
                            expanded: true,
                            children: [
                                {
                                    text: 'Projeto',
                                    expanded: false,
                                    iconCls: 'x-fa fa-briefcase',
                                    children: [
                                        {
                                            text: 'Cadastro de Programadores',
                                            leaf: true,
                                            iconCls: 'x-fa fa-code'
                                        },
                                        {
                                            text: 'Cadastro de Projeto',
                                            leaf: true,
                                            iconCls: 'x-fa fa-file-text'
                                        }
                                    ]
                                },
                                {
                                    text: 'Sistema',
                                    expanded: false,
                                    iconCls: 'x-fa fa-gear',
                                    children: [
                                        {
                                            text: 'Menu',
                                            leaf: true,
                                            iconCls: 'x-fa fa-list-ol'
                                        },
                                        {
                                            text: 'Usuário',
                                            leaf: true,
                                            iconCls: 'x-fa fa-user-plus'
                                        }]
                                }
                            ]
                        }
                    },
                    reference: 'treelist',
                    //bind: '{navItems}'
                }]
        }]
});