Ext.define('App.Panel.Principal', {
    xtype: 'panel-principal',
    extend: 'Ext.panel.Panel',
    initComponent: function () {

        this.layout = 'border';

        /*this.tools = [
            {
                cls: 'button-tool',
                iconCls: 'fa fa-bars',
                menu: {
                    items: [
                        {
                            text: 'Item 1',
                            handler: function () {

                            }
                        }, {
                            text: 'Item 2',
                            handler: function () {

                            }
                        }
                    ]
                }
            }
        ];*/


        this.callParent();

    }
})
