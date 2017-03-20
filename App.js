Ext.application({
    name: 'Application',
    views: [
      'App.view.Login',
      'App.view.Main'
    ],
    paths: {
        App: 'src',
        'Ext.chart': 'lib/extjs/packages/charts/src/chart',
        'Ext.draw': 'lib/extjs/packages/charts/src/draw',
        'Ext.ux': 'lib/extjs/packages/ux/classic/src'
    },
    launch: function (App) {
        app = Application.getApplication();
        var loggedIn = localStorage.getItem('trend_app');
        this.setMainView(loggedIn?'App.view.Main':'App.view.Login');
    }
});
