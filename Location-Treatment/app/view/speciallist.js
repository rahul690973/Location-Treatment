/**
 * Demonstrates how to create a simple List based on inline data.
 * First we create a simple Contact model with first and last name fields, then we create a Store to contain
 * the data, finally we create the List itself, which gets its data out of the Store
 */

Ext.define('screenshots.view.speciallist', {
    extend: 'Ext.Container',
    requires: ['screenshots.model.special'],
    xtype:'speciallist',
    config: {
        layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        cls: 'demo-list',
        items: [

        {
            width: Ext.os.deviceType == 'Phone' ? null : '100%',
            height: Ext.os.deviceType == 'Phone' ? null : '80%',
            xtype: 'list',
            id:'mainlist',
            onItemDisclosure: function(record, btn, index) {
               // Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
            },
            store: 'special',
            itemTpl: '{SpecialDisease}'
        }
        ]
    }
});
