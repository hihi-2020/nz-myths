
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('regions').del()
    .then(function () {
      // Inserts seed entries
      return knex('regions').insert([
        { id: 101, name:'Northland' },
      { id: 102, name:'Auckland' },
      { id: 103, name:'Waikato' },
      { id: 104, name:'Bay of Plenty' },
      { id: 105, name:'Gisborne' },
      { id: 106, name:'Hawkes Bay' },
      { id: 107, name:'Manawatu-Wanganui' },
      { id: 108, name:'Taranaki' },
      { id: 109, name:'Wellington' },
      { id: 110, name:'Nelson' },
      { id: 111, name:'Marlborough' },
      { id: 112, name:'Tasman' },
      { id: 113, name:'West Coast' },
      { id: 114, name:'Canterbury' },
      { id: 115, name:'Otago' },
      { id: 116, name:'Southland' },



      ]);
    });
};
