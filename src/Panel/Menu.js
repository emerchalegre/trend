Ext.define('App.Panel.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'tree-menu',
    layout: 'border',
    title: 'Trend - Gerenciamento de Projetos',
    controller: 'menu',
    titleAlign: 'center',
    requires: [
        'App.Panel.Principal'
    ],
    header: {
      titlePosition:1,
      items: [
        {
            xtype: 'button',
            iconCls: 'x-fa fa-codepen',
            enableToggle: true,
            toggleHandler: 'onToggleMicro',

        }
      ]
    },
    items: [
      {
        region: 'west',
        split: true,
        reference: 'treelistContainer',
        width: 300,
        title: 'Menu',
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
                            var panelPrincipal = app.getMainView().treemenu.lookupReference('tab').items.findBy(function (el) {
                                return el.classe == b.node.data.classe;
                            });

                            if (!panelPrincipal) {

                                panelPrincipal = Ext.create(b.node.data.classe, {
                                    classe: b.node.data.classe
                                });

                                app.getMainView().treemenu.lookupReference('tab').add(panelPrincipal);
                            }
                            ;

                            app.getMainView().treemenu.lookupReference('tab').setActiveItem(panelPrincipal)
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
                                    }, {
                                        text: 'Cadastro de Sprint',
                                        classe: 'App.view.Sprint',
                                        leaf: true,
                                        iconCls: 'x-fa fa-flash'
                                    },
                                    {
                                        text: 'Acompanha',
                                        iconCls: 'x-fa fa-external-link',
                                        children: [
                                            {
                                                text: 'Tarefa',
                                                classe: 'App.view.AcompanhaTarefa',
                                                leaf: true,
                                                iconCls: 'x-fa fa-list-alt'
                                            }, {
                                                text: 'Acompanha Sprint',
                                                //classe: 'App.view.AcompanhaTarefa',
                                                leaf: true,
                                                iconCls: 'x-fa fa-list-ol'
                                            }
                                        ]
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
                            }, {
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
      },
      {
          xtype: 'panel-principal',
          region: 'center',
          items: [
            Ext.create('App.Tab.Principal',
                    {
                        region: 'center',
                        reference: 'tab'
                    })
          ]
      }
    ]
});
