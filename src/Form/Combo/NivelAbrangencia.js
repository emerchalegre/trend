Ext.define('App.Form.Combo.NivelAbrangencia', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-nivel',
    fieldLabel: 'Nível de Abrangência',
    listConfig: {loadMask: true},
    anyMatch: true,
    name: 'idnivel',
    flex:1,
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idnivel', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'abrangencia',
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
    displayField: 'descricao',
    valueField: 'idnivel'
});