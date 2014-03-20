
Ext.define('screenshots.view.Doctors_List', {
    extend: 'Ext.Container',
    requires:['screenshots.view.doctor'],
    config: 
    {
        items:
        [ 
            {
                xtype:'toolbar',
                layout:'hbox',
               // cls:'initial_design',
                items:
                    [
                    {   
                docked: 'top',
                xtype: 'toolbar',
                layout:'hbox',
                items:
                [
                    {
                        xtype:'button',
                        iconCls:'arrow_left',
                        flex:1,
                        style:'margin:10px 10px',
                        id:'list_back'
                    },
                    {
                        xtype:'label',
                        html:"<div style='padding:13px 5px;text-align:center'>List</div>",
                        flex:6,
                    },
                    {
                        xtype: 'button',
                        html:'Map',
                        flex:2,
                        id:'map'
                       
                      
                    }              ]
              
            },
                         /*{
                            xtype:'button',
                            iconCls:'arrow_left',
                            id:'clinic_back',
                            flex:50,
                            ui:'plain',
                            style:'height:100%;background:#006699;-webkit-border-radius: 0; border-radius: 0;'
                        },
                        {
                            xtype:'panel',
                            html:'Lists',
                            flex:100,
                            ui:'plain',
                            id:'list',
                            cls:'btn_list',

                            style:'background:#006699;-webkit-border-radius: 0; border-radius: 0;'

                            
                        },
                        {
                            xtype:'panel',
                            height:'40px',
                            flex:0.5,
                            style:'background:white'
                        },
                        {   
                            xtype:'button',
                            html:'Map',
                            flex:100,
                            ui:'plain',
                            cls:'btn_map',
                             style:'background:#006699;-webkit-border-radius: 0; border-radius: 0;',
                             id:'map'
                        }*/
                    ]
            },  
            {
                xtype:'doctor',
               
            },
          

        ]
    }
       
});
