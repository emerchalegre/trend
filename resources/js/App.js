App = window.App || {};

App.Path = 'http://localhost:81/';

App.MessageBox = {
    showToast: function (s, title) {
        Ext.toast({
            html: s,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400,
            constrain: true,
            //iconCls: 'x-fa fa-info-circle',
            //title: 'Aviso'
        });
    },
    warning: function (msg, func) {
        Ext.MessageBox.alert({
            title: 'Atenção',
            message: msg,
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.MessageBox.OK,
            constrain: true,
            fn: function () {
                func();
            }
        });
    },
    success: function (msg, func) {
        Ext.MessageBox.alert({
            title: 'Sucesso',
            message: msg,
            icon: 'iconok',
            buttons: Ext.MessageBox.OK,
            constrain: true,
            fn: function () {
                func();
            }
        });
    },
    error: function (msg, func) {
        Ext.MessageBox.alert({
            title: 'Erro',
            message: msg,
            icon: 'iconerror',
            buttons: Ext.MessageBox.OK,
            constrain: true,
            fn: function () {
                func();
            }
        });
    },
    informational: function (msg, func) {
        Ext.MessageBox.alert({
            title: 'Atenção',
            message: msg,
            icon: Ext.MessageBox.INFO,
            buttons: Ext.MessageBox.OK,
            constrain: true,
            fn: function () {
                func();
            }
        });
    }
},

App.Ajax = {
    trial: null,
    request: function (type, url, dados, elementmask, callback) {

        $.ajax({
            type: type,
            async: true,
            url: App.Path + url,
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            scriptCharset: "utf-8",
            beforeSend: function (request) {
                request.setRequestHeader("Trial", App.Ajax.trial);

                if (elementmask) {
                    this.myMask = new Ext.LoadMask(elementmask, {msg: "Aguarde..."});
                    this.myMask.show();
                }
            },
            data: dados,
            success: function (dados) {
                App.Ajax.trial = null;

                if (elementmask) {
                    this.myMask.hide();
                }
                callback(dados);
            },
            error: function (xhr, ajaxOptions, thrownError) {

                App.Ajax.trial = null;

                if (xhr.status == 200) {

                    if (elementmask) {
                        this.myMask.hide();
                    }

                    Ext.MessageBox.show({
                        title: 'Erro',
                        msg: 'Ocorreu um erro ao retornar os dados, contate ao administrador do sistema.',
                        buttons: Ext.MessageBox.OK,
                        icon: 'iconerror',
                        fn: function () {

                        }
                    });
                }

            },
            dataType: 'json'
        });

    },
    setTrial: function (trial) {
        App.Ajax.trial = trial;
    }

};

