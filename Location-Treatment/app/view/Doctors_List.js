
Ext.define('screenshots.view.Doctors_List', {
    extend: 'Ext.Container',
    requires:['screenshots.view.doctor'],
    config: 
    {
        items:
        [ 
            {
                layout:'hbox',
                cls:'initial_design',
                items:
                    [
                        {
                            xtype:'button',
                            html:'List',
                            flex:1,
                            ui:'plain',
                            id:'list',
                            cls:'btn_list',
                            
                        },
                        {   
                            xtype:'button',
                            html:'Map',
                            flex:1,
                            ui:'plain',
                            cls:'btn_map',
                             
                             id:'map'
                        }
                    ]
            },  
            {
                xtype:'doctor',
               
            },
          

        ]
    }
       
});
