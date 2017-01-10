Trend = {};

Trend.MessageBox = {
    
    showToast: function (s, title) {
        Ext.toast({
            html: s,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400,
            constrain: true
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
}
