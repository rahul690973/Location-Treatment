/**
 * Demonstrates how to create a simple List based on inline data.
 * First we create a simple Contact model with first and last name fields, then we create a Store to contain
 * the data, finally we create the List itself, which gets its data out of the Store
 */

Ext.define('screenshots.view.doctor', {
    extend: 'Ext.Container',
    xtype:'doctor',
    config: 
    {
        xtype:'panel',
        width:'100%',
        height:'100%',
        style:'font-size:14px;padding-top:4px',
        items:
        [
           {
            style:'border:1px solid black;margin:5px;height:140px   ',
             items:
            [
            {
            layout:'hbox',
            items:
                [

                    {
                        xtype:'panel',
                        layout:'vbox',
                        style:'margin-top:10px',
                        flex:4,
                        items:
                        [
                            {
                                xtype:'panel',
                                style:'padding:5px',
                                html:'<img width="100%;height:120px"  src="resources/images/download.jpg"/>',
                                flex:1
                            },
                           
                        ]
                    },
                    {
                        flex:7,
                        style:'margin-left:7px;',
                        items:
                        [
                            {
                                xtype:'panel',
                                style:'height:50px;width:100%;',
                                layout:'hbox',
                                items:
                                [
                                    {
                                        xtype:'panel',
                                        html:'<div style="position:relative;top:15px;font-weight:bold;font-size:16px">Dr. Shruti Jain</div>',
                                        flex:4
                                    },
                                    {
                                        flex:2.5,
                                        xtype:'button',
                                        ui:'plain',
                                        style:"position:relative;left:-1px;top:15px;background:url('resources/images/appoint.png');background-repeat:no-repeat;width:70px;height:60px",
                                        id:'appoint'
                                        //html:'<div style="position:relative;"><img width="70px" height="60px" src="resources/images/appoint.png"/></div>',
                                    }
                                ]
                               // html:'<div style="font-weight:bold;margin-bottom:10px;padding-top:5px;font-size:16px"><p style="position:relative;top:25px">Dr Shruti Jain</p><img src="resources/images/appoint.png" width="80px" height="50px" style="float:right"/></div>'
                            },
                           
                             {
                                xtype:'panel',
                                html:'<div >12yrs Experience</div>'
                            },
                             {
                                xtype:'panel',
                                layout:'hbox',
                                items:
                                [
                                {
                                xtype:'panel',
                                html:'<div>INR 300</div>'
                                },
                                {

                                }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
            xtype:'panel',
            layout:'hbox',
            style:'margin-top:10px;height:50px;',

            items:
                [
                    {
                        xtype:'button',
                        flex:4,
                        text:'Reviews',
                        ui:'plain',
                        id:'reviewclick',
                        style:'margin-top:22px;margin-left:0px',
                       
                    },
                    {
                        xtype:'panel',
                        style:'margin-top:22px',
                        html:'<div><img width="60px" height="15px" src="resources/images/icons/reviews.png"/></div>',
                        flex:5
                    },
                    {
                        flex:1
                    },

                    {
                        xtype:'button',
                        id:'timings',
                        flex:2,
                        ui:'plain',
                        style:'height:50px;background:url("resources/images/icons/timings.png");background-repeat:no-repeat'
                    },
                    {
                        xtype:'button',
                        
                        flex:2,
                        ui:'plain',
                        style:'position:relative;top:4px;left:4px;height:50px;background:url("resources/images/icons/place.png");background-repeat:no-repeat'
                    },
                     {style:"background:white;padding:10px",
                        xtype:'button',
                        id:'call',
                        flex:2,
                        ui:'plain',
                        style:'height:50px;background:url("resources/images/icons/dial.png");background-repeat:no-repeat'
                    }


                ]
           }
            ]
           },
         {
            style:'border:1px solid black;margin:5px;height:140px   ',
             items:
            [
            {
            layout:'hbox',
            items:
                [

                    {
                        xtype:'panel',
                        layout:'vbox',
                        style:'margin-top:10px',
                        flex:4,
                        items:
                        [
                            {
                                xtype:'panel',
                                style:'padding:5px',
                                html:'<img width="100%;height:120px"  src="resources/images/download.jpg"/>',
                                flex:1
                            },
                           
                        ]
                    },
                    {
                        flex:7,
                        style:'margin-left:7px;',
                        items:
                        [
                            {
                                xtype:'panel',
                                style:'height:50px;width:100%;',
                                layout:'hbox',
                                items:
                                [
                                    {
                                        xtype:'panel',
                                        html:'<div style="position:relative;top:15px;font-weight:bold;font-size:16px">Dr. Shruti Jain</div>',
                                        flex:4
                                    },
                                    {
                                        flex:2.5,
                                        xtype:'button',
                                        ui:'plain',
                                        style:"position:relative;left:-1px;top:15px;background:url('resources/images/appoint.png');background-repeat:no-repeat;width:70px;height:60px",
                                        id:'appoint'
                                        //html:'<div style="position:relative;"><img width="70px" height="60px" src="resources/images/appoint.png"/></div>',
                                    }
                                ]
                               // html:'<div style="font-weight:bold;margin-bottom:10px;padding-top:5px;font-size:16px"><p style="position:relative;top:25px">Dr Shruti Jain</p><img src="resources/images/appoint.png" width="80px" height="50px" style="float:right"/></div>'
                            },
                           
                             {
                                xtype:'panel',
                                html:'<div >12yrs Experience</div>'
                            },
                             {
                                xtype:'panel',
                                layout:'hbox',
                                items:
                                [
                                {
                                xtype:'panel',
                                html:'<div>INR 300</div>'
                                },
                                {

                                }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
            xtype:'panel',
            layout:'hbox',
            style:'margin-top:10px;height:50px;',

            items:
                [
                    {
                        xtype:'label',
                        flex:4,
                        html:'Reviews',
                        style:'margin-top:22px;margin-left:4px'
                        
                    },
                    {
                        xtype:'panel',
                        style:'margin-top:22px',
                        html:'<div><img width="60px" height="15px" src="resources/images/icons/reviews.png"/></div>',
                        flex:5
                    },
                    {
                        flex:1
                    },

                    {
                        xtype:'button',
                        id:'timings',
                        flex:2,
                        ui:'plain',
                        style:'height:50px;background:url("resources/images/icons/timings.png");background-repeat:no-repeat'
                    },
                    {
                        xtype:'button',
                        
                        flex:2,
                        ui:'plain',
                        style:'position:relative;top:4px;left:4px;height:50px;background:url("resources/images/icons/place.png");background-repeat:no-repeat'
                    },
                     {style:"background:white;padding:10px",
                        xtype:'button',
                        id:'call',
                        flex:2,
                        ui:'plain',
                        style:'height:50px;background:url("resources/images/icons/dial.png");background-repeat:no-repeat'
                    }


                ]
           }
            ]
           },
           {
            style:'border:1px solid black;margin:5px;height:140px   ',
             items:
            [
            {
            layout:'hbox',
            items:
                [

                    {
                        xtype:'panel',
                        layout:'vbox',
                        style:'margin-top:10px',
                        flex:4,
                        items:
                        [
                            {
                                xtype:'panel',
                                style:'padding:5px',
                                html:'<img width="100%;height:120px"  src="resources/images/download.jpg"/>',
                                flex:1
                            },
                           
                        ]
                    },
                    {
                        flex:7,
                        style:'margin-left:7px;',
                        items:
                        [
                            {
                                xtype:'panel',
                                style:'height:50px;width:100%;',
                                layout:'hbox',
                                items:
                                [
                                    {
                                        xtype:'panel',
                                        html:'<div style="position:relative;top:15px;font-weight:bold;font-size:16px">Dr. Shruti Jain</div>',
                                        flex:4
                                    },
                                    {
                                        flex:2.5,
                                        xtype:'button',
                                        ui:'plain',
                                        style:"position:relative;left:-1px;top:15px;background:url('resources/images/appoint.png');background-repeat:no-repeat;width:70px;height:60px",
                                        id:'appoint'
                                        //html:'<div style="position:relative;"><img width="70px" height="60px" src="resources/images/appoint.png"/></div>',
                                    }
                                ]
                               // html:'<div style="font-weight:bold;margin-bottom:10px;padding-top:5px;font-size:16px"><p style="position:relative;top:25px">Dr Shruti Jain</p><img src="resources/images/appoint.png" width="80px" height="50px" style="float:right"/></div>'
                            },
                           
                             {
                                xtype:'panel',
                                html:'<div >12yrs Experience</div>'
                            },
                             {
                                xtype:'panel',
                                layout:'hbox',
                                items:
                                [
                                {
                                xtype:'panel',
                                html:'<div>INR 300</div>'
                                },
                                {

                                }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
            xtype:'panel',
            layout:'hbox',
            style:'margin-top:10px;height:50px;',

            items:
                [
                    {
                        xtype:'label',
                        flex:4,
                        html:'Reviews',
                        style:'margin-top:22px;margin-left:4px'
                        
                    },
                    {
                        xtype:'panel',
                        style:'margin-top:22px',
                        html:'<div><img width="60px" height="15px" src="resources/images/icons/reviews.png"/></div>',
                        flex:5
                    },
                    {
                        flex:1
                    },

                    {
                        xtype:'button',
                        id:'timings',
                        flex:2,
                        ui:'plain',
                        style:'height:50px;background:url("resources/images/icons/timings.png");background-repeat:no-repeat'
                    },
                    {
                        xtype:'button',
                        
                        flex:2,
                        ui:'plain',
                        style:'position:relative;top:4px;left:4px;height:50px;background:url("resources/images/icons/place.png");background-repeat:no-repeat'
                    },
                     {style:"background:white;padding:10px",
                        xtype:'button',
                        id:'call',
                        flex:2,
                        ui:'plain',
                        style:'height:50px;background:url("resources/images/icons/dial.png");background-repeat:no-repeat'
                    }


                ]
           }
            ]
           },
             
        ]
    }
});
