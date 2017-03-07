Ext.define('App.Form.Sprint', {
    extend: 'Ext.form.Panel',
    xtype: 'form-sprintfiltro',
    bodyPadding: 10,
    autoHeight: true,
    border:false,
    initComponent: function () {
        
        var self = this;
        
        this.items = [
            {
                xtype: 'fieldset',
                title: 'Sprint',
                layout: 'anchor',
                defaults: {
                    anchor: '60%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            {
                                xtype:'hidden',
                                name:'idsprint'
                            },
                            {
                                xtype:'textfield',
                                name:'titulosprint',
                                fieldLabel:'Título da Sprint',
                                flex:2,
                                allowBlank:false
                            },
                            {
                                xtype: 'splitter'
                            },
                            {
                                xtype:'datefield',
                                name:'datasprint',
                                fieldLabel:'Data da Sprint',
                                flex:1,
                                allowBlank:false
                            }
                        ]
                    }
                ]
            },
        ]

        this.callParent();

    }
});
