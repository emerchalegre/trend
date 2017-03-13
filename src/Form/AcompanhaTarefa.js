Ext.define('App.Form.AcompanhaTarefa', {
    extend: 'Ext.form.Panel',
    xtype: 'form-acompanhatarefa',
    region: 'north',
    autoHeight: true,
    border:false,
    bodyPadding: 10,
    initComponent: function () {

        this.items = [
            {
                xtype: 'fieldset',
                title: 'Projeto',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Projeto',
                                name: 'titulo',
                                width: '100%',
                                readOnly:true
                            }
                        ]
                    }
                ]
            },
        ]

        this.callParent();

    }
});
