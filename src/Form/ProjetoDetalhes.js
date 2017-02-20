Ext.define('App.Form.ProjetoDetalhes', {
    extend: 'Ext.form.Panel',
    xtype: 'form-projeto-detalhes',
    border: false,
    fieldDefaults: {
        labelWidth: 60
    },
    initComponent: function () {

        var self = this;
        
        this.previsaoResolucao      = Ext.create('App.Form.Combo.QuantidadeHoras', {name:'idprevisaoresolucao', fieldLabel:'Previsão de Resolução(homem hora)', allowBlank:false});
        this.previsaoFalhas         = Ext.create('App.Form.Combo.QuantidadeHoras', {name:'idprevisaofalhas', fieldLabel:'Previsão de Falhas e Manutenções Necessárias(hh)'});
        
        this.QtdServicosInternos    = Ext.create('App.Form.Combo.QuantidadeSistemasInternos',{labelWidth:130, listeners:{change:'changeSistemas'}});
        this.QtdServicosExternos    = Ext.create('App.Form.Combo.QuantidadeSistemasExternos',{labelWidth:130});
        this.Sistemas               = Ext.create('App.Form.Combo.Sistemas',{fieldLabel:'Quais?', labelWidth:60});
        this.SistemasMulti          = Ext.create('App.Form.Combo.SistemasMulti',{fieldLabel:'Quais?', labelWidth:60, hidden:true});
        
        this.nivelAbrangencia       = Ext.create('App.Form.Combo.NivelAbrangencia',{labelWidth:130});
        this.Estabilidade           = Ext.create('App.Form.Combo.Estabilidade',{labelWidth:130});
        this.Conhecimento           = Ext.create('App.Form.Combo.Conhecimento',{labelWidth:130});
        
        this.comboClassificacao     = Ext.create('App.Form.Combo.Classificacao');
        this.perguntaPadrao         = Ext.create('App.Form.Combo.PerguntaPadrao', {
            fieldLabel: 'É uma demanda legal?',
            flex:1,
            name:'demandalegal',
            value:0
        });

        this.items = [
            
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    margin: '0 5 0 0',
                    labelWidth:160,
                    width: '100%'
                },
                items: [
                    self.comboClassificacao
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    margin: '0 5 0 0',
                    labelWidth:160,
                },
                items: [
                    
                    this.perguntaPadrao,
                    
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Data p/ entrar em vigor',
                        name: 'datavigor',
                        value: new Date(),
                        flex: 1
                    },
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Tamanho/Nível do Projeto',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    
                    {
                        xtype: 'fieldcontainer',
                        layout: 'fit',
                        defaults: {
                            labelWidth:300,
                            margin: '0 5 0 0'
                        },
                        items: [
                            self.previsaoResolucao,
                            {xtype: 'splitter'},
                            self.previsaoFalhas
                        ]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            self.QtdServicosInternos,
                            self.Sistemas,
                            self.SistemasMulti
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            self.QtdServicosExternos,
                            {
                                xtype:'textfield',
                                name:'sistemasexternos',
                                fieldLabel:'Quais?',
                                flex:1
                            }
                        ]
                    },{
                        xtype: 'fieldcontainer',
                        layout: 'fit',
                        defaults: {
                            labelWidth:250,
                            margin: '0 5 0 0'
                        },
                        items: [
                            self.nivelAbrangencia,
                            {xtype: 'splitter'},
                            self.Estabilidade,
                            {xtype: 'splitter'},
                            self.Conhecimento
                        ]
                    },
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Impacto Financeiro',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                },
                items: [
                    
                    {
                        xtype: 'fieldcontainer',
                        layout: 'fit',
                        defaults: {
                            labelWidth:250,
                            margin: '0 0 5 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                name:'custohomemhorades',
                                fieldLabel:'Custo Homem-hora Desenvolvimento (R$)',
                                flex:1,
                                fieldStyle: 'background-color: #e8e8e8',
                                readOnly:true
                            },
                            {
                                xtype: 'textfield',
                                name:'custohomemhoraman',
                                fieldLabel:'Custo Homem-hora Manutenção (R$)',
                                flex:1,
                                fieldStyle: 'background-color: #e8e8e8',
                                readOnly:true
                            },
                            {
                                xtype: 'textfield',
                                name:'investimentoprevisto',
                                fieldLabel:'Investimento previsto (R$)',
                                flex:1
                            },
                            {
                                xtype: 'textfield',
                                name:'ganhoanual',
                                fieldLabel:'Ganho anual previsto (R$)',
                                flex:1
                            },
                            {
                                xtype: 'textfield',
                                name:'roi',
                                fieldLabel:'<b>ROI</b>',
                                flex:1,
                                fieldStyle: 'background-color: #e8e8e8',
                                readOnly:true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Premissas utilizadas para cálculo do ROI',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textarea',
                                name: 'premissas',
                                flex: 1,
                                tooltip:'aaaa',
                                minHeight:210,
                                value: 'Investimento (anual):\n\
    - Inicial: \n\
    - Ao longo do ano: \n\
\n\
Retorno (ganho anual): \n\
    - Receita: \n\
    - Gastos: \n\
    - Riscos: \n\
\n\
Outras observações:'
                            }
                        ]
                    }
                ]
            },
            
        ]

        this.callParent();

    }
});
