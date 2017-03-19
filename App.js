Ext.application({
    name: 'Application',
    //autoCreateViewport: 'App.view.Login',
    views: [
      'App.view.Login',
      'App.view.Main'
    ],
    requires: [
        'App.security.Firewall'
    ],
    paths: {
        App: 'src',
        'Ext.chart': 'lib/extjs/packages/charts/src/chart',
        'Ext.draw': 'lib/extjs/packages/charts/src/draw',
        'Ext.ux': 'lib/extjs/packages/ux/classic/src'
    },
    launch: function (App) {

        var loggedIn = localStorage.getItem('trend_app');
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'app-login'
        });

        app = Application.getApplication();
    }
});
