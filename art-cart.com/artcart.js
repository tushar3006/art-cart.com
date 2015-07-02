(function(){
var artcart=angular.module('artcart',[]);

var paintings=[{
name:'Starry Night',
price:100,
canView:true,
painter:"Vincent van Gogh",
painterdesc:"Vincent Willem van Gogh (Dutch 30 March 1853,29 July 1890) was a major Post-Impressionist painter. He was a Dutch artist whose work had a far-reaching influence on 20th-century art. His output includes portraits, self portraits, landscapes, and still lifes of cypresses, wheat fields and sunflowers. Van Gogh drew as a child but did not paint until his late twenties; he completed many of his best-known works during the last two years of his life. In just over a decade, he produced more than 2,100 artworks, including 860 oil paintings and more than 1,300 watercolors, drawings, sketches and prints",
images:[{thumb:'starry-thumb.jpg'},{full:'picasso-full.jpg',canView:false}],
desc:"Painted by Vincent van Gogh just months before his tragic suicide, The Starry Night is perhaps his greatest masterpiece. In the work, van Gogh portrays a nameless European village amidst a dark wilderness, complete with dampened lights. Some buildings manage to emit just enough light to be noticed, but others, including notably the church, are dark and unwelcoming. ",
reviews:[
{stars:5,
description:"Shows the essence of classical art",
author:"xyz@gmail.com",
createdOn:06142014
},{stars:3,
description:"Shows the essence of classical art",
author:"xyz@gmail.com",
createdOn:06142014
}]
},
{
name:'kiss',
price:200,
canView:true,
painter:"picasso",
painterdesc:"Pablo Ruiz y Picasso, also known as Pablo Picasso  25 October 1881, 8 April 1973), was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. As one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture,[3][4] the co-invention of collage, and for the wide variety of styles that he helped develop and explore",
images:[{thumb:'kiss-thumb.jpg'},{full:'kiss-full.jpg',canView:false}],
desc:"The realism of the tender or violent scenes of kissing couples, usually portrayed without a decor, shows how much importance sexual love had for the artist. This Kiss from 1969 shows two heads joined by a single line occupying the entire pictorial space. Picasso does not hesitate to deform the faces in order to bring them closer together: 'Of the two, he makes but one, to express the intimate fusion that takes place during the act of kissing.' The noses mould themselves into a mutual contour; the mouths bite each other; the woman's eyes, both of which are visible even though she is shown in profile, have moved up her forehead, which is tilted back. "
,reviews:[
{stars:3,
description:"one of the best paintings of picasso",
author:"abc@gmail.com",
createdOn:06142014
}]
},
{
name:'weeping woman',
price:200,
canView:true,
desc:"The Weeping Woman series is regarded as a thematic continuation of the tragedy depicted in Picasso's epic painting Guernica. In focusing on the image of a woman crying, the artist was no longer painting the effects of the Spanish Civil War directly, but rather referring to a singular universal image of suffering.",
painter:" Pablo Picasso",
painterdesc:"Pablo Ruiz y Picasso, also known as Pablo Picasso  25 October 1881, 8 April 1973), was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. As one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture,[3][4] the co-invention of collage, and for the wide variety of styles that he helped develop and explore",
images:[{thumb:'ww-thumb.jpg'},{full:'ww-full.jpg',canView:false}],
reviews:[
{stars:4,
description:"one of the best paintings of picasso",
author:"abc@gmail.com",
createdOn:06142014
}]},
{
name:'Mona Lisa',
price:200,
canView:true,
desc:"Valued in excess of $1 billion, the Mona Lisa, perhaps the greatest treasure of Renaissance art, is one of many masterpieces of High Renaissance painting housed in the Louvre. The painting is known to Italians as La Gioconda, the French call her La Joconde. The work is arguably the finest ever example of portrait art, and one of the greatest Renaissance paintings of the 15th and 16th centuries.",
painter:"Leonardo Da Vinci",
painterdesc:"Leonardo di ser Piero da Vinci, more commonly Leonardo da Vinci, (Italian: [leoˈnardo da ˈvintʃi] ( listen); 15 April 1452 – 2 May 1519) was an Italian polymath. He was a painter, sculptor, architect, scientist, musician, mathematician, engineer, inventor, anatomist, geologist, astronomer, cartographer, botanist, historian and writer.",
images:[{thumb:'mona-thumb.jpg'},{full:'ww-full.jpg',canView:false}],
reviews:[
{stars:4,
description:"one of the best paintings of Da vinci",
author:"abc@gmail.com",
createdOn:1291410000009
}]}


];


artcart.controller("display",function(){
this.products=paintings;

});

artcart.controller("panelcontroller",function(){
this.tab=1;
this.selectTab=function(setTab){this.tab=setTab;};
this.isSelected=function(check){return this.tab===check;};
})

artcart.controller("ReviewController",function(){
this.review={};
this.addReview=function(product){
this.review.createdOn=Date.now();
product.reviews.push(this.review);
this.review={};
};
})


})();