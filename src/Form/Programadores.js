Ext.define('App.Form.Programadores', {
    extend: 'Ext.form.Panel',
    xtype: 'form-programador',
    border:false,
    fieldDefaults: {
        labelWidth: 60
    },
    initComponent: function () {

        var self = this;

        this.storeComboStatus = Ext.create('Ext.data.Store', {
            fields: ['idsituacao', 'name'],
            data: [
                {"idsituacao": "1", "name": "Ativo"},
                {"idsituacao": "0", "name": "Inativo"}
            ]
        });

        this.comboStatus = Ext.create('Ext.form.ComboBox', {
            store: self.storeComboStatus,
            fieldLabel: 'Status',
            queryMode: 'local',
            displayField: 'name',
            name: 'idsituacao',
            valueField: 'idsituacao',
            value: 1,
            allowBlank: false
        });

        this.items = [
            {
                xtype: 'fieldset',
                title: 'Informações Cadastrais',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype:'hidden',
                        name:'idprogramador'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Nome',
                        name: 'nomeprogramador',
                        allowBlank: false,
                        fieldStyle: {
                            textTransform: "uppercase"
                        },
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'emailprogramador',
                        vtype: 'email',
                        flex: 1
                    },
                    self.comboStatus
                ]
            }

        ]

        this.callParent();

    }
});
