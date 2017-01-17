Ext.define('App.Panel.Projeto', {
    extend: 'Ext.panel.Panel',
    xtype: 'panel-projeto',
    bodyPadding: 15,
    layout: 'card',
    autoHeight: true,
    requires: ['App.Model.Projeto'],
    viewModel: {
        type: 'projetomodel'
    },
    defaults: {
        border: false,
        defaultFocus: 'textfield:not([value]):focusable:not([disabled])',
        defaultButton: 'nextbutton'
    },
    items: [

        {
            xtype: 'form',
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Meta',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [

                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    emptyText: 'Objeto (O que será feito?)',
                                    name: '',
                                    allowBlank: false,
                                    flex: 1
                                },
                                {
                                    xtype: 'splitter'
                                },
                                {
                                    xtype: 'textfield',
                                    emptyText: 'Objetivo (Para que será feito?)',
                                    name: '',
                                    vtype: 'email',
                                    flex: 1
                                },
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    emptyText: 'Indicador',
                                    name: '',
                                    allowBlank: false,
                                    flex: 1
                                },
                                {
                                    xtype: 'splitter'
                                },
                                {
                                    xtype: 'textfield',
                                    emptyText: 'Data de início planejada',
                                    name: '',
                                    vtype: 'email',
                                    flex: 1
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            xtype: 'form',
            defaultType: 'textfield',
            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                anchor: '100%'
            },
            items: [
                {
                    emptyText: 'First Name'
                },
                {
                    emptyText: 'Last Name'
                },
                {
                    emptyText: 'Company'
                }
            ]
        },
        {
            xtype: 'form',
            defaultType: 'textfield',
            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                anchor: '100%'
            },
            items: [
                {
                    emptyText: 'Phone number'
                },
                {
                    emptyText: 'Address'
                },
                {
                    emptyText: 'City'
                },
                {
                    emptyText: 'Postal Code / Zip Code'
                }
            ]
        },
        {
            xtype: 'form',
            items: [
                {
                    html: '<h2>Thank You</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>'
                }
            ]
        }
    ],

    initComponent: function () {

        this.tbar = {
            reference: 'progress',
            //defaultButtonUI: 'wizard-' + this.colorScheme,
            cls: 'wizardprogressbar',
            defaults: {
                disabled: true,
                iconAlign: 'top'
            },
            layout: {
                pack: 'center'
            },
            items: [
                {
                    step: 0,
                    iconCls: 'fa fa-info',
                    pressed: true,
                    enableToggle: true,
                    text: 'Account'
                },
                {
                    step: 1,
                    iconCls: 'fa fa-user',
                    enableToggle: true,
                    text: 'Profile'
                },
                {
                    step: 2,
                    iconCls: 'fa fa-home',
                    enableToggle: true,
                    text: 'Address'
                },
                {
                    step: 3,
                    iconCls: 'fa fa-heart',
                    enableToggle: true,
                    text: 'Finish'
                }
            ]
        };

        this.bbar = {
            reference: 'navigation-toolbar',
            margin: 8,
            border: false,
            items: [
                '->',
                {
                    //ui: this.colorScheme,
                    text: 'Voltar',
                    iconCls: 'x-fa fa-chevron-left',
                    scale: 'medium',
                    formBind: true,
                    bind: {
                        disabled: '{atBeginning}'
                    },
                    listeners: {
                        click: 'onPreviousClick'
                    }
                },
                {

                    //ui: this.colorScheme,
                    text: 'Próximo',
                    iconCls: 'x-fa fa-chevron-right',
                    scale: 'medium',
                    formBind: true,
                    reference: 'nextbutton',
                    bind: {
                        disabled: '{atEnd}'
                    },
                    listeners: {
                        click: 'onNextClick'
                    }
                }
            ]
        };

        this.callParent();
    }
});
