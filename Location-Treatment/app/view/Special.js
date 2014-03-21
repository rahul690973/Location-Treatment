/**
 * Demonstrates how to create a simple List based on inline data.
 * First we create a simple Contact model with first and last name fields, then we create a Store to contain
 * the data, finally we create the List itself, which gets its data out of the Store
 */

Ext.define('screenshots.view.Special', {
    extend: 'Ext.Container',
   
    config: {
        items: 
        [
            {
                xtype:'textfield',
                placeHolder:'Search',
                style:'border:2px solid #006699;margin-top:5px'
            },
            {
                xtype:'speciallist',
                style:'width:100%;height:100%;position:relative;top:-30px'
            },
            {
                xtype:'titlebar',
                title:'Search a Doc',
                docked:'top'
            },
            {
                xtype:'button',
                docked:'bottom',
                iconCls:'arrow_left',
                text:'Common Disease',
                ui:'action',
                id:'normal'
            }
            
        ]
    }
});
