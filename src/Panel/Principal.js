Ext.define('App.Panel.Principal', {
    xtype: 'panel-principal',
    extend: 'Ext.panel.Panel',
    initComponent: function () {

        this.layout = 'border';

        this.tools = [
            {
                type:'search'
            }
        ]

        this.callParent();

    }
})