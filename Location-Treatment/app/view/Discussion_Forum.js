
Ext.define('screenshots.view.Discussion_Forum', {
    extend: 'Ext.Container',
    config: 
    {
        xtype:'panel',
       
       //sss cls:'initial_design',
        items:
        [
            {
                xtype:'titlebar',
                docked:'top',
                html:'<div class="discussion_forum_titlebar"><span>Discussion</span><img src="resources/images/edit.png" style="float:right;margin-right:20px;padding-bottom:7px;margin-bottom:8px" width="40px" height="40px"/></div>'
            },
            {
                xtype:'textfield',
                placeHolder:'Search Thread',
                cls:'searchfield'
                
            },
            {
                xtype:'panel',
                cls:'content',
                items:
                [
                    {
            layout:'hbox',
            cls:'hbox',   
            items:
                [
                    {
                        flex:3,
                        xtype:'panel',
                        html:'<div><img height="80px" width="80px" src="resources/images/patient.jpg"/></div>'
                    },
                    {
                        flex:8,
                        layout:'vbox',
                        items:
                            [
                                
                                {
                                    xtype:'panel',
                                    html:'<div class="thread_name">Thread Name Here</div>',
                                    flex:2,
                                },
                                {
                                    xtype:'panel',

                                    html:'<div class="image_view"><img class="image" src="resources/images/views.png"/>1500</div>',
                                    flex:2,
                                },
                                {
                                    flex:2,
                                    xtype:'panel',
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                                xtype:'panel',
                                                html:'Authors Name',
                                                style:'font-size:16px',
                                                cls:'author_name',
                                                flex:4
                                            },
                                            {
                                                xtype:'panel',
                                                style:'font-size:14px',
                                                cls:'date',
                                                html:'<div >Nov 23 2014</div>',
                                                flex:3
                                            }

                                        ]
                                },
                                {
                                    flex:1
                                }
                            ]
                    },
                ]
           },
                                {
            layout:'hbox',
            cls:'hbox',   
            items:
                [
                    {
                        flex:3,
                        xtype:'panel',
                        html:'<div><img height="80px" width="80px" src="resources/images/patient.jpg"/></div>'
                    },
                    {
                        flex:8,
                        layout:'vbox',
                        items:
                            [
                                
                                {
                                    xtype:'panel',
                                    html:'<div class="thread_name">Thread Name Here</div>',
                                    flex:2,
                                },
                                {
                                    xtype:'panel',

                                    html:'<div class="image_view"><img class="image" src="resources/images/views.png"/>1500</div>',
                                    flex:2,
                                },
                                {
                                    flex:2,
                                    xtype:'panel',
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                                xtype:'panel',
                                                html:'Authors Name',
                                                style:'font-size:16px',
                                                cls:'author_name',
                                                flex:4
                                            },
                                            {
                                                xtype:'panel',
                                                style:'font-size:14px',
                                                cls:'date',
                                                html:'<div >Nov 23 2014</div>',
                                                flex:3
                                            }

                                        ]
                                },
                                {
                                    flex:1
                                }
                            ]
                    },
                ]
           },


                    {
            layout:'hbox',
            cls:'hbox',   
            items:
                [
                    {
                        flex:3,
                        xtype:'panel',
                        html:'<div><img height="80px" width="80px" src="resources/images/patient.jpg"/></div>'
                    },
                    {
                        flex:8,
                        layout:'vbox',
                        items:
                            [
                                
                                {
                                    xtype:'panel',
                                    html:'<div class="thread_name">Thread Name Here</div>',
                                    flex:2,
                                },
                                {
                                    xtype:'panel',

                                    html:'<div class="image_view"><img class="image" src="resources/images/views.png"/>1500</div>',
                                    flex:2,
                                },
                                {
                                    flex:2,
                                    xtype:'panel',
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                                xtype:'panel',
                                                html:'Authors Name',
                                                style:'font-size:16px',
                                                cls:'author_name',
                                                flex:4
                                            },
                                            {
                                                xtype:'panel',
                                                style:'font-size:14px',
                                                cls:'date',
                                                html:'<div >Nov 23 2014</div>',
                                                flex:3
                                            }

                                        ]
                                },
                                {
                                    flex:1
                                }
                            ]
                    },
                ]
           },


                    {
            layout:'hbox',
            cls:'hbox',   
            items:
                [
                    {
                        flex:3,
                        xtype:'panel',
                        html:'<div><img height="80px" width="80px" src="resources/images/patient.jpg"/></div>'
                    },
                    {
                        flex:8,
                        layout:'vbox',
                        items:
                            [
                                
                                {
                                    xtype:'panel',
                                    html:'<div class="thread_name">Thread Name Here</div>',
                                    flex:2,
                                },
                                {
                                    xtype:'panel',

                                    html:'<div class="image_view"><img class="image" src="resources/images/views.png"/>1500</div>',
                                    flex:2,
                                },
                                {
                                    flex:2,
                                    xtype:'panel',
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                                xtype:'panel',
                                                html:'Authors Name',
                                                style:'font-size:16px',
                                                cls:'author_name',
                                                flex:4
                                            },
                                            {
                                                xtype:'panel',
                                                style:'font-size:14px',
                                                cls:'date',
                                                html:'<div >Nov 23 2014</div>',
                                                flex:3
                                            }

                                        ]
                                },
                                {
                                    flex:1
                                }
                            ]
                    },
                ]
           },




                ]
                },
            
           
        ]
    }
});
