Ext.define('App.Form.Projeto', {
    extend: 'Ext.form.Panel',
    xtype: 'form-projeto',
    border: false,
    fieldDefaults: {
        labelWidth: 60
    },
    initComponent: function () {

        var self = this;
        
        this.previsaoResolucao = Ext.create('App.Form.Combo.QuantidadeHoras', {name:'previsaoresolucao', fieldLabel:'Previsão de Resolução(homem hora)'});
        this.previsaoFalhas = Ext.create('App.Form.Combo.QuantidadeHoras', {name:'previsaofalhas', fieldLabel:'Previsão de Falhas e Manutenções Necessárias(hh)'});
        
        this.QtdServicosInternos = Ext.create('App.Form.Combo.QuantidadeSistemasInternos',{labelWidth:130});
        this.QtdServicosExternos = Ext.create('App.Form.Combo.QuantidadeSistemasExternos',{labelWidth:130});
        this.Sistemas = Ext.create('App.Form.Combo.Sistemas',{fieldLabel:'Quais?', labelWidth:60});
        
        this.comboClassificacao = Ext.create('App.Form.Combo.Classificacao');
        this.perguntaPadrao = Ext.create('App.Form.Combo.PerguntaPadrao', {
            fieldLabel: 'É uma demanda legal?',
            name:'demandalegal',
            value:0
        });

        this.items = [
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    margin: '0 5 0 0'
                },
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'N°',
                        labelWidth: 60,
                        name: 'numero',
                        flex: 1
                    },
                    {
                        xtype: 'datefield',
                        labelWidth: 60,
                        fieldLabel: 'Data',
                        name: 'dataprojeto',
                        value: new Date(),
                        flex: 1
                    },
                ]
            }, {
                xtype: 'fieldset',
                title: 'Informações Principais',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'hidden',
                        name: 'idprojeto'
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Título',
                                name: 'titulo',
                                allowBlank: false,
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Autor Documento (T.I)',
                                name: 'autordocumento',
                                allowBlank: false,
                                flex: 1
                            }
                        ]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Negócio',
                                name: 'negocio',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Solicitante',
                                name: 'solicitante',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Processo',
                                name: 'processo',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Centro de Custo',
                                name: 'centrodecusto',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Alinhamento Estratégico',
                                name: 'alinhamentoestrategico',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Contrato Solicitante',
                                name: 'contratosolicitante',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Objetivo do Documento',
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
                                emptyText: 'Objetivo',
                                name: 'objetivo',
                                value: 'Este documento tem por objetivo transformar o entendimento das necessidades do solicitante em critérios de avaliações de projetos, considerando seu tamanho, retorno financeiro e riscos.',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Entendimento da Solicitação',
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
                                emptyText: 'Descreva a solicitação',
                                name: 'entendimentodasolicitacao',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Cenário Atual',
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
                                emptyText: 'Descreva o cenário atual do processo',
                                name: 'cenarioatual',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Solução Proposta',
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
                                emptyText: 'Descreva a solução proposta para o processo.',
                                name: 'solucaoproposta',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    margin: '0 5 0 0',
                    labelWidth:150,
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
                    labelWidth:150,
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
                            labelWidth:250,
                            margin: '0 5 0 0'
                        },
                        items: [
                            self.previsaoResolucao,
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
                            self.Sistemas
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Processo',
                                name: 'processo',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Centro de Custo',
                                name: 'centrodecusto',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Alinhamento Estratégico',
                                name: 'alinhamentoestrategico',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Contrato Solicitante',
                                name: 'contratosolicitante',
                                flex: 1
                            }
                        ]
                    }
                ]
            }
            
        ]

        this.callParent();

    }
});
