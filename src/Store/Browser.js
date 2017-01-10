Ext.define('App.Store.Browser', {
    extend: 'Ext.data.Store',
    alias: 'store.browsers',

    //                   IE    Firefox  Chrome   Safari
    fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],

    constructor: function (config) {
        config = config || {};

        config.data = [
            { month: '19/09', data1: 20, data2: 21, data3: 35, data4: 4, other: 4 },
            { month: '20/09', data1: 20, data2: 22, data3: 36, data4: 5, other: 2 },
            { month: '21/09', data1: 19, data2: 18, data3: 37, data4: 4, other: 4 },
            { month: '22/09', data1: 18, data2: 18, data3: 38, data4: 5, other: 3 },
            { month: '23/09', data1: 18, data2: 19, data3: 39, data4: 4, other: 4 },
            { month: '24/09', data1: 17, data2: 17, data3: 42, data4: 4, other: 3 },
            { month: '25/09', data1: 16, data2: 16, data3: 43, data4: 4, other: 3 },
            { month: '26/09', data1: 16, data2: 16, data3: 44, data4: 4, other: 3 },
            { month: '27/09', data1: 16, data2: 13, data3: 44, data4: 4, other: 4 },
            { month: '28/09', data1: 10, data2: 11, data3: 45, data4: 4, other: 3 },
            { month: '29/09', data1: 4, data2: 5, data3: 46, data4: 4, other: 4 },
            { month: '30/09', data1: 0, data2: 0, data3: 47, data4: 4, other: 3 }
        ];

        this.callParent([config]);
    }

});