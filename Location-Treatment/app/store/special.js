Ext.define("screenshots.store.special", {
    extend: 'Ext.data.Store',
    alias: 'store.List',
    config: {
        model: 'screenshots.model.special',
        sorters: 'firstName',
        grouper: function(record) {
            return record.get('SpecialDisease')[0];
        },
        data: [
        {SpecialDisease:"Acne"},
        {SpecialDisease:"Arthritis"},
        {SpecialDisease:"Achondroplasia"},
        {SpecialDisease:"Acromegaly"},
        {SpecialDisease:"Leukemia"},

          /*  {firstName: '9:00', lastName: 'A.M.'},
            {firstName: '9:30', lastName: 'A.M'},
            {firstName: '10:00', lastName: 'A.M'},
            {firstName: '10:40', lastName: 'A.M.'},
            {firstName: '11:30', lastName: 'A.M'},
            {firstName: '12:00', lastName: 'P.M'},
            {firstName: '1:30', lastName: 'P.M'},
            {firstName: '2:00', lastName: 'P.M'},
            {firstName: '3:30', lastName: 'P.M'},
            {firstName: '4:00', lastName: 'P.M'},
            {firstName: '4:30', lastName: 'P.M'},
            {firstName: '5:00', lastName: 'P.M'},*/
          
           
             ]
    }
});
