Ext.define('App.Form.Combo.Developer', {
    extend:'Ext.form.ComboBox',
    xtype:'combo-devs',
    requires:['App.Store.Developer'],
    store: {
        type: 'devs',
        autoLoad:true
    },
    matchFieldWidth:false,
    queryMode: 'local',
    displayField: 'nomfun',
    valueField: 'numcad'
});