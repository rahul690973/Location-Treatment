Ext.define("screenshots.store.normal_disease_list", {
    extend: 'Ext.data.Store',
    alias: 'store.List',
    config: {
        model: 'screenshots.model.normal_disease_list',
        sorters: 'firstName',
        grouper: function(record) {
            return record.get('DiseaseName')[0];
        },
        data: [
              {DiseaseName:'Typhoid'},
              {DiseaseName:'Malaria'},

         ]
    }
});
