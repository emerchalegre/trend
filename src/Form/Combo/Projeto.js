Ext.define('App.Form.Combo.Projeto', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-projeto',
    fieldLabel: 'Projeto',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idprojeto',
    forceSelection: true,
    allowBlank: false,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idprojeto', 'titulo'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'comboprojeto',
            reader: {type: 'json'}
        }
    }),
    triggers: {
        remove: {
            cls: 'x-form-clear-trigger',
            handler: function () {
                this.setValue('');
            }
        }
    },
    queryMode: 'local',
    displayField: 'titulo',
    valueField: 'idprojeto'
});