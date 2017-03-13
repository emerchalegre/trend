Ext.define('App.Panel.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'tree-menu',
    layout: 'border',
    border: false,
    //collapsible: true,
    listeners: {
        render: 'onToggleNav',
        afterRender:'onToggleConfig'
    },
    items: [{
            title: 'Menu',
            iconCls: 'x-fa fa-codepen',
            region: 'center',
            split: true,
            reference: 'treelistContainer',
            tools: [{
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
                        itemclick: function (a, b, c, d, e, f, g) {
                            if (b.node.data && b.node.data.classe) {
                                var tab = Ext.create(b.node.data.classe);
                                    app.getMainView().tab.add(tab);
                                    app.getMainView().tab.setActiveItem(tab);
                            }
                        }
                    },
                    store: {
                        root: {
                            expanded: true,
                            children: [{
                                    text: 'Projeto',
                                    expanded: false,
                                    iconCls: 'x-fa fa-briefcase',
                                    children: [{
                                            text: 'Cadastro de Programadores',
                                            leaf: true,
                                            classe: 'App.view.Programadores',
                                            iconCls: 'x-fa fa-code'
                                        }, {
                                            text: 'Cadastro de Projeto',
                                            classe: 'App.view.Projeto',
                                            leaf: true,
                                            iconCls: 'x-fa fa-file-text'
                                        },
                                        {
                                            text: 'Cadastro de Sprint',
                                            classe: 'App.view.Sprint',
                                            leaf: true,
                                            iconCls: 'x-fa fa-flash'
                                        },
                                        {
                                            text: 'Acompanha Tarefa',
                                            classe: 'App.view.AcompanhaTarefa',
                                            leaf: true,
                                            iconCls: 'x-fa fa-list-alt'
                                        },
                                        {
                                            text: 'Acompanha Sprint',
                                            //classe: 'App.view.AcompanhaTarefa',
                                            leaf: true,
                                            iconCls: 'x-fa fa-list-ol'
                                        }
                                    ]
                                }, {
                                    text: 'Relatório',
                                    expanded: false,
                                    iconCls: 'x-fa fa-bar-chart',
                                    children: [{
                                            text: 'Projetos',
                                            leaf: true,
                                            iconCls: 'x-fa fa-newspaper-o'
                                        }
                                    ]
                                },{
                                    text: 'Sistema',
                                    expanded: false,
                                    iconCls: 'x-fa fa-gear',
                                    children: [{
                                            text: 'Menu',
                                            leaf: true,
                                            iconCls: 'x-fa fa-list-ol'
                                        }, {
                                            text: 'Usuário',
                                            classe: 'App.view.Usuario',
                                            leaf: true,
                                            iconCls: 'x-fa fa-user-plus'
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    reference: 'treelist',
                    //bind: '{navItems}'
                }
            ]
        }
    ]
});
