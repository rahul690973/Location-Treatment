Ext.define('screenshots.view.Disease_Information', {
    extend: 'Ext.Carousel',
   
    xtype: 'disease_information',
    config:
        {
            
             items : [
                        {
                            xtype:'panel',
                            docked:'bottom',
                            layout:'hbox',
                            items:
                            [
                                {
                                    flex:1
                                },
                                {
                                    xtype:'button',
                                    ui:'action',
                                    text:'Find Doctors',
                                    flex:10,
                                    id:'find'
                                },
                                {
                                    flex:1
                                },
                                {
                                    xtype:'button',
                                    ui:'action',
                                    text:'Discuss',
                                    flex:10,
                                    id:'discuss'
                                },
                                {
                                    flex:1
                                }
                            ]
                        },
                          {
                            xtype:'panel',
                            style:'background:white',
                            items:
                            [
                                {
                                    xtype:'titlebar',
                                    title:'About'
                                }
                            ],

                            html:'<div  class="disease_info"><ul ><li class="disease_info_li">The disease has received various names, such as gastric fever, abdominal typhus, infantile remittant fever, slow fever, nervous fever and pythogenic fever.</li><li class="disease_info_li"> The name typhoid means "resembling typhus" and comes from the neuropsychiatric symptoms common to typhoid and typhus.</li> <li class="disease_info_li">Despite this similarity of their names, typhoid fever and typhus are distinct diseases and are caused by different species of bacteria.</li></ul></div>'
                          },
                          {
                            xtype:'panel',
                            style:'background:white',
                            items:
                            [
                                {
                                    xtype:'titlebar',
                                    title:'Symptoms'
                                }
                            ],

                            html:'<div  class="disease_info"><ul><li class="disease_info_li">The disease has received various names.</li><li class="disease_info_li"> Names such as gastric fever, abdominal typhus.</li><li class="disease_info_li"> infantile remittant fever, slow fever, nervous fever and pythogenic fever.</li><li class="disease_info_li"> The name typhoid means "resembling typhus" and comes from the neuropsychiatric</li><li> symptoms common to typhoid and typhus.</li> <li class="disease_info_li">Despite this similarity of their names, typhoid fever and typhus are distinct diseases and are caused by different species of bacteria.</li></ul></div>'

                          },
                          {
                            xtype:'panel',
                            style:'background:white',
                            html:'<div  class="disease_info"><ul ><li class="disease_info_li">The disease has received various names.</li><li class="disease_info_li"> Names such as gastric fever, abdominal typhus.</li><li class="disease_info_li"> infantile remittant fever, slow fever, nervous fever</li><li class="disease_info_li"> Pythogenic fever and its alarming effects on human body are rescuable.</li><li class="disease_info_li"> The name typhoid means "resembling typhoid.</li> <li class="disease_info_li">Despite this similarity of their names, typhoid fever and typhus are distinct diseases </li></ul></div>',
                            items:
                            [
                                {
                                    xtype:'titlebar',
                                    title:'Treatment'
                                }
                            ]
                        }
                    
                      ]
            
        }
        
    
    
});