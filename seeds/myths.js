
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('myths').del()
    .then(function () {
      // Inserts seed entries
      return knex('myths').insert([
          {id:1, region_id:114, title:'Big cat sightings', content:'Big cat sightings have been reported for years across the South Island, particularly in Canterbury. In 1977, Kaiapoi resident Frances Clark reported a close-up sighting of a tiger, but her story was only vindicated once large paw marks and droppings were discovered later at nearby Pines Beach. In 1996, a large black cat, about the size of a labrador, was reportedly seen by a woman mountain biking near Twizel. Two years later, something resembling a mountain lion was spotted near Cromwell, and residents of Mataura described seeing what looked like a bobcat. In 1999, a black panther was spotted in the Mackenzie Country then Banks Peninsula, followed by beasts dubbed the Moeraki mountain lion, the Lindis lion, and the Ashford black cat.', imageLink:'https://i.pinimg.com/originals/7e/45/4a/7e454ae617e2d0f9325f350f797faa7e.jpg' },
          {id:2, region_id:116, title:'Mystery Moose', content:'The hunt for these elusive creatures has continued ever since. Moose were first released in Fiordland in 1910 but werent allowed to be shot until 1923, when it was deemed that there were enough of them available for game. The first photograph was taken that year, but the first licensed kill didnt occur until 1929.', imageLink:'https://www.farmstaysweden.com/wp-content/uploads/2020/02/elk-4819561_1920-1024x682.jpg'},
          {id:3, region_id:115, title:'Giant of Lake Wakatipu', content:'One night, a giant taniwha named Matau stole into the village and kidnapped Manata. He carried her away to his lair in the hills and tied her to him with a magical cord.Manatas father was distraught. He asked the young men of the village to go and save Manata, offering her in marriage to whoever brought her home safely. The young men were afraid, but Matakauri, who loved Manata with all his heart, followed the nor-west wind to the still-young mountains where the giant lived. He found Matau asleep, with Manata lashed next to him.When Matakauri was unable to cut the enchanted cords, Manata begged him to go, fearing that the giant would wake up and kill him. Matakauri refused to leave her; but as Manata began to cry, the love in her tears dissolved her bonds, and they escaped.', imageLink:'https://www.ancient-origins.net/sites/default/files/styles/large/public/massive-footprint.jpg?itok=gGD8NJpC'},
          {id:4, region_id:113, title:'Otter type thing - waitoreke', content:'In New Zealand folklore, the waitoreke is an otter/beaver-like creature. It is usually described as a small otter-like animal that lives in the South Island of New Zealand. There are many theories on the waitorekes true identity, such as it being an otter, beaver or pinniped.', imageLink:'https://cdn.mos.cms.futurecdn.net/YDbkw6hZhSuwKNt3RTVo6E-970-80.jpg.webp'},
          {id:5, region_id:110, title:'Pelous Jack', content:'was a Rissos dolphin that was famous for meeting and escorting ships through a stretch of water in Cook Strait, New Zealand, for 24 years between 1888 and 1912. Pelorus Jack was usually spotted in Admiralty Bay between Cape Francis and Collinet Point, near French Pass, a notoriously dangerous channel used by ships travelling between Wellington and Nelson.', imageLink:'https://uk.whales.org/wp-content/uploads/sites/6/2018/08/rissos-dolphin-oliver-yates-sg-1024x577.jpg'},
          {id:6, region_id:112, title:'Poukai The Eagle', content:'A giant bird that rules the sky and killed several tribes people', imageLink:'https://upload.wikimedia.org/wikipedia/commons/b/be/Giant_Haasts_eagle.jpg'},
          {id:7, region_id:111, title:'Phantom Maori canoe', content:'Sightings of the canoe are often accompanied by the sound of wailing women, representing the laments of the Ngati Apa people as their beloved waka was paddled away.', imageLink:'https://resources.stuff.co.nz/content/dam/images/4/y/m/d/y/7/image.related.StuffLandscapeSixteenByNine.1240x700.20dhy6.png/1589918995454.jpg?format=pjpg&optimize=medium'},
          {id:8, region_id:109, title:'Toot Tunnel', content:'A well-known local story revolves around a murder that occurred during the construction of the Mount Victoria Tunnel. A young woman named Phyllis Avis Symonds was murdered by George Errol Coats, who buried her alive in the fill from the tunnel.', imageLink:'https://www.rnz.co.nz/assets/news/183547/eight_col_Clipboard01.jpg?1548718121'},
          {id:9, region_id:108, title:'Taniwha', content:'the Māori legend of Tutaeporoporo, a ngarara (taniwha) who lived in the Whanganui River before being slain by the warrior Aokehu as he courted Hine-au-Moana. Comments on the use of a tuatara to represent Tutaeporoporo on the Wanganui (Whanganui) Coat of Arms.', imageLink:'https://www.gns.cri.nz/var/ezwebin_site/storage/images/home/our-science/environment-and-materials/groundwater/research-programmes/ka-tu-te-taniwha-ka-ora-te-tangata/ngati-project/61107-1-eng-GB/Ngati-Project_large.jpg'},
          {id:10, region_id:107, title:'Paiupaiarahe', content:'Patupaiarehe are supernatural beings (he iwi atua) in Māori mythology that are described as pale-skinned with fair or red-hair, and usually having the same stature as ordinary people, and they were never tattooed.[1] They can draw mist to themselves, but tend to be nocturnal or active on misty or foggy days as direct sunlight can be fatal to them.[2] They prefer raw food and have an aversion to steam and fire. They were strong, mystical beings which the Māori feared.', imageLink:'https://teara.govt.nz/files/ps-11074-nzp.jpg'},
          {id:11, region_id:106, title:'Pania the Merperson', content:'Pania was a beautiful maiden who lived in the sea on the east coast of the North Island of New Zealand. By daylight she swam about with creatures of her reef world but after sunset would go to a stream that ran into the bay where the city of Napier now exists. She would travel up the stream to an area where she could rest among the flax bushes. Karitoki, the very handsome son of a Māori chief, quenched his thirst every evening at the stream where Pania rested because it had the sweetest water. He was unaware she was observing him for many weeks until one night she whispered a faint spell. It carried on the wind to Karitoki who turned around to see Pania emerge from her hiding place', imageLink:'https://upload.wikimedia.org/wikipedia/commons/2/25/Pania.arp.500pix.jpg'},
          {id:12, region_id:105, title:'The Lizard', content:'author Robyn Gosset refers to a sighting of a Kumi in 1898 by a Maori bushman. Its length was estimated at 1.5 metres. In the first edition of the book, Gosset refers to several more accounts of the lizard which are absent from the second edition. These include an account from captain James Cook, who was told by Maori in Queen Charlotte Sound that huge, arboreal lizards were present in the surrounding bushland, and that they were greatly feared, as well as a sighting from 1875 of a large lizard washed up in a flooded Hokianga river and the discovery of bones possibly from the animal that same year.', imageLink:'/lizard.jpeg'},
          {id:13, region_id:104, title:'Monster in the pond', content:'Rotorua’s public park of Kuirau and its boiling lake is part of a fascinating Maori legend about a Taniwha, a mythological creature from Maori folklore that resembles a monster who dwells in water. Legend has it that in the past, the park’s boiling lake used to be much cooler and had the name of ‘Taokahu’. Tamahika, the son of Tutea who was the first person to set up a home at the spot, had a beautiful wife called Kuirau. One day, when the beautiful maiden was bathing in the lake, a Taniwha grabbed her and dragged her down to his watery lair below the lake.The gods saw the struggle between Kuirau and the Taniwha, and became angry at the audacity of the water monster. They used their powers to make the lake boil so that the Taniwha would be destroyed forever. Unfortunately, this also killed Tamahika’s wife, so from that time the lake and the park surrounding it has been known as Kuirau in her legacy', imageLink:'/moster.jpeg'},
          {id:14, region_id:103, title:'Hairy Beast', content:'In New Zealand folklore, the moehau (also called the maeroero) is a creature said to dwell in the Coromandel-Moehau ranges of New Zealands North Island. Some Māori people suggest that the creature is a descendant of the maero, but another explanation for the moehau is that it was an exaggerated report of an escaped gorilla. However, in 1970, County Councillor J. Reddy told Robyn Gosset that the Hairy Moehau was an exaggeration started from a joke. Also in 1970, Bob Grey told researcher Robyn Gosset that the term Moehau Monster came from a name given to a Yankee steam hauler that was utilized for logging.', imageLink:'/harry-yeti.jpeg'},
          {id:15, region_id:102, title:'Haunted Hospital', content:'Kingseat Hospital was a psychiatric hospital that is considered to be one of New Zealands notorious haunted locations with over one hundred claims of apparitions being reported, as of 2011.It is located in Karaka, New Zealand, south of Auckland and since 2005 has been used as a site for Spookers; and since 2013 a site for Asylum Paintball and Laser Combat; three New Zealand attractions. Spookers is believed to be Australasias only haunted attraction scream park as of 2011,and "the number 1 Haunted Attraction in the Southern Hemisphere". According to stuff.co.nz, Kingseat Hospital is considered one of the most haunted locations in New Zealand', imageLink:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/KingseatHospitalAlternative.jpeg/240px-KingseatHospitalAlternative.jpeg'},
          {id:16, region_id:101, title:'Tree of the dead', content:'Tāne Mahuta, also called God of the Forest, is a giant kauri tree (Agathis australis) in the Waipoua Forest of Northland Region, New Zealand. Its age is unknown but is estimated to be between 1,250 and 2,500 years. It is the largest kauri known to stand today. It is named for the Māori god of forests and of birds (see Tāne).The tree is a remnant of the ancient subtropical rainforest that once grew on the North Auckland Peninsula. Other giant kauri are found nearby, notably Te Matua Ngahere. Tāne Mahuta is the most famous tree in New Zealand, along with Te Matua Ngahere. It was discovered and identified in early January 1924[3] when contractors surveyed the present State Highway 12 route through the forest. In 1928 Nicholas Yakas and other bushmen, who were building the road, also identified the tree.', imageLink:'https://images.theconversation.com/files/229350/original/file-20180725-194158-b7f6m9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}
      
        
        
        
        
        
        
        
        
        
          
        
      ]);
    });
};
