Ext.define('App.Form.AcompanhaTarefa', {
    extend: 'Ext.form.Panel',
    xtype: 'form-acompanhatarefa',
    region: 'north',
    autoHeight: true,
    border: false,
    bodyPadding: 10,
    bodyStyle:'text-align: center;',
    initComponent: function () {

        this.items = [
            
            {
               xtype: 'label', 
               text: '',
               iconCls:'x-fa fa-hourglass-1',
               name:'titulo',
               style:'font-size: 20px;color: #919191;font-weight: 600'
            },
            /*{
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
                                readOnly: true
                            }
                        ]
                    }
                ]
            },*/
        ]

        this.callParent();

    }
});
