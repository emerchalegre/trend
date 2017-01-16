Ext.define('App.Panel.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'tree-menu',
    layout: 'border',
    border: false,
    
    listeners: {
        render: 'onToggleNav',
    },
    
    header: {
        items: [
            {
                //xtype: 'button',
                cls: 'button-tool',
                enableToggle: true,
                iconCls: 'fa fa-bars',
                scale: 'small',
                buttonAlign: 'left',
                toggleHandler: 'onToggleMicro',
                tooltip: 'Comprimir/Expandir'

            }]
    },
    items: [{
            region: 'center',
            split: true,
            reference: 'treelistContainer',
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

                            app.getMainView().tab.add(Ext.create('App.view.Programadores'));
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