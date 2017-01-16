Ext.define('App.Form.Usuario', {
    extend: 'Ext.form.Panel',
    xtype: 'form-usuario',
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
            fieldLabel:'Status',
            queryMode: 'local',
            displayField: 'name',
            name:'idsituacao',
            valueField: 'idsituacao',
            value:1,
            allowBlank:false,
            width:'33%'
        });

        this.items = [
            {
                xtype: 'fieldset',
                title: 'Informações Cadastrais',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'hidden',
                        name: 'idusuario'
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Nome',
                                name: 'nomeusuario',
                                allowBlank:false,
                                flex: 1
                            },
                            {
                                xtype: 'splitter'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Email',
                                name: 'emailusuario',
                                vtype: 'email',
                                flex: 1
                            },
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Informações de Login',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'loginusuario',
                                fieldLabel: 'Login',
                                flex: 1,
                                allowBlank: false
                            }, {
                                xtype: 'textfield',
                                inputType: 'password',
                                name: 'senhausuario',
                                fieldLabel: 'Senha',
                                flex: 1,
                                margin: '0 0 0 6',
                                allowBlank: false
                            },
                            {
                                xtype: 'textfield',
                                inputType: 'password',
                                name: 'confirmarsenhausuario',
                                fieldLabel: 'Confirmar Senha',
                                flex: 1,
                                //labelWidth: 140,
                                margin: '0 0 0 6',
                                allowBlank: false
                            }
                        ]
                    }, {
                        xtype: 'container',
                        layout: 'hbox',
                        margin: '0 0 5 0',
                        items: [self.comboStatus]
                    }]
            },
        ]

        this.callParent();

    }
});
