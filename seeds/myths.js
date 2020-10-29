exports.seed = function (knex) {
  return knex('myths').insert([
    {id:1, region_id:114, title:'Big cat sightings', content:'big cat story', imageLink:'https://i.pinimg.com/originals/7e/45/4a/7e454ae617e2d0f9325f350f797faa7e.jpg' },
    {id:2, region_id:116, title:'Mystery Moose', content:'Moose story', imageLink:'https://www.farmstaysweden.com/wp-content/uploads/2020/02/elk-4819561_1920-1024x682.jpg'},
    {id:3, region_id:115, title:'Gaint of Lake Wakatipu', content:'Gaint story', imageLink:'https://www.ancient-origins.net/sites/default/files/styles/large/public/massive-footprint.jpg?itok=gGD8NJpC'},
    {id:4, region_id:113, title:'Goblin of Mitchells Gully Gold Mine', content:'Goblin story', imageLink:'https://www.ancient-origins.net/sites/default/files/styles/large/public/massive-footprint.jpg?itok=gGD8NJpC'},
    {id:5, region_id:112, title:'phantom Maori canoe', content:'phantom Maori canoe story', imageLink:'https://resources.stuff.co.nz/content/dam/images/4/y/m/d/y/7/image.related.StuffLandscapeSixteenByNine.1240x700.20dhy6.png/1589918995454.jpg?format=pjpg&optimize=medium'},
    {id:6, region_id:111, title:'phantom Maori canoe', content:'phantom Maori canoe story', imageLink:'https://resources.stuff.co.nz/content/dam/images/4/y/m/d/y/7/image.related.StuffLandscapeSixteenByNine.1240x700.20dhy6.png/1589918995454.jpg?format=pjpg&optimize=medium'},
    {id:7, region_id:110, title:'phantom Maori canoe', content:'phantom Maori canoe story', imageLink:'https://resources.stuff.co.nz/content/dam/images/4/y/m/d/y/7/image.related.StuffLandscapeSixteenByNine.1240x700.20dhy6.png/1589918995454.jpg?format=pjpg&optimize=medium'},
  ])
}
