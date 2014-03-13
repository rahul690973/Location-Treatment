/**
 * Demonstrates how to create a simple List based on inline data.
 * First we create a simple Contact model with first and last name fields, then we create a Store to contain
 * the data, finally we create the List itself, which gets its data out of the Store
 */

Ext.define('screenshots.view.doctorlist', {
    extend: 'Ext.Container',
    requires:['screenshots.view.doctor'],
    config: 
    {
        items:
        [ 
            {
                layout:'hbox',
                style:'background:#006699;height:40px;color:white;',
                items:
                    [
                        {
                            xtype:'button',
                            html:'List',
                            flex:1,
                            ui:'plain',
                            id:'list',
                            style:'height:40px;border-right:2px solid grey;color:white;border-bottom:4px solid blue;padding:10px 30px'
                        },
                        {   
                            xtype:'button',
                            html:'Map',
                            flex:1,
                            ui:'plain',
                             style:'height:40px;padding:10px 30px;color:white',
                             id:'map'
                        }
                    ]
            },  
            {
                xtype:'doctor',
               // style:'height:200px;'
            },
            {
                xtype:'doctor',
                style:'height:200px,margin-top:200px'
            },
            {
                xtype:'doctor'
            },
            {
                xtype:'doctor'
            }
           

        ]
    }
       
});
