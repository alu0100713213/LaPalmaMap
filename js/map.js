$(document).ready(function () {

var rsr = Raphael('map', '800', '800');
var regions = [];

var Capa_x0020_1 = rsr.set();
Capa_x0020_1.attr({'id': 'Capa_x0020_1','name': 'Capa_x0020_1'});
var _1107000968144 = rsr.set();
var elpaso = rsr.path("M312 361c3,-3 18,-8 27,-1 8,7 3,7 10,12 5,3 8,2 15,7 -5,16 -6,7 -19,10 2,7 4,11 7,18 4,12 1,8 10,16 12,12 14,106 21,135 68,0 45,9 49,-38 3,-36 -10,-30 1,-46 4,-7 0,4 5,-8 14,-32 22,-64 13,-100 -3,-14 -5,-26 -12,-36 -29,-46 1,-12 0,-70 0,-21 -4,-20 -16,-32 -30,-28 -35,-17 -59,6 -11,11 -24,52 -30,61 -4,8 -17,22 -18,30 -1,13 5,4 1,20l-5 16z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'elpaso');
var villa_garafia = rsr.path("M230 145c10,26 33,45 61,49 20,3 18,20 32,25 14,5 14,-12 41,3 7,-4 17,-15 25,-17 10,-2 11,4 18,-3 4,-5 -1,-5 -1,-27 0,-21 17,-39 20,-61l3 -22c-20,4 -11,2 -24,-4 -22,-10 -53,-2 -67,-33 0,-1 0,-2 -1,-2 -13,7 -4,-1 -16,10 -4,3 -6,7 -14,9 -31,7 -14,0 -33,19 -13,13 -11,0 -23,24 -6,11 -12,22 -21,30z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'villa_garafia');
var villamazo = rsr.path("M439 494c3,16 -2,38 1,47 2,11 9,10 2,23 -5,11 -1,-5 -6,10 -1,5 -1,13 -1,18 17,3 48,14 57,24 11,-21 4,-32 42,-64 21,-18 6,-15 15,-39 10,-23 1,-36 7,-50 6,-12 14,-27 -12,-28 -19,-1 -82,37 -88,46 -11,14 -1,5 -17,13z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'villamazo');
var tijarafe = rsr.path("M217 237c4,26 11,5 16,34 2,12 3,8 7,17 4,9 2,11 5,22 3,12 10,26 12,38 1,4 1,9 2,11l16 24c23,-20 15,-20 25,-28 6,-4 11,-1 11,-14 0,-9 -5,-9 0,-23 4,-11 16,-20 20,-34 6,-18 13,-23 17,-38l-73 -12c-10,-4 -7,-11 -25,-4 -15,6 -13,5 -33,7z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'tijarafe');
var fuencaliente = rsr.path("M370 567c5,15 8,26 12,43 5,20 -2,32 1,50 2,9 6,11 8,18 4,17 -13,16 25,42 7,5 -1,3 10,7 15,-7 21,-37 28,-55 12,-31 11,0 33,-51 -15,-10 -39,-19 -58,-25l1 -31c-17,-2 -45,-2 -60,2z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'fuencaliente');
var santacruz = rsr.path("M433 306c3,8 12,24 20,26 17,7 18,5 34,14 14,8 19,12 31,-1 7,-8 17,-16 30,-2 9,-17 2,-19 16,-37 -9,-19 -16,-32 -38,-39 -9,-3 -9,0 -16,-2 -23,-7 -12,-20 -44,-6l-20 -12c0,40 3,30 -13,59z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'santacruz');
var barlovento = rsr.path("M437 90l-3 27c0,0 0,1 0,1 -8,26 -22,35 -22,67 0,8 1,5 6,11l-7 13c4,3 3,3 9,6l38 -43c8,-16 -2,-6 15,-15 18,-10 -4,-10 34,-19 17,-5 21,-14 34,-22 -1,-4 -9,-27 -11,-32 -8,-2 -15,-2 -23,-3 -30,-7 10,0 -70,9z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'barlovento');
var sanandres = rsr.path("M426 220c5,9 8,6 15,16 16,-4 12,-4 30,-3 18,1 13,-1 26,-6 16,-5 15,3 25,-7 6,-7 6,-11 16,-16 10,-5 13,-3 19,-13 9,-16 5,-15 3,-19 -5,-12 -1,-16 -4,-29 0,-2 -4,-8 -5,-10 0,-1 -3,-5 -3,-5 -2,-3 -3,-4 -4,-5 -13,7 -17,17 -34,21 -38,9 -12,6 -34,19 -9,5 -37,46 -50,57z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'sanandres');
var llanosaridane = rsr.path("M312 398c6,43 9,1 17,44 4,17 7,35 10,52 -2,2 -1,1 -4,3 0,1 -1,1 -1,2l-5 3c9,8 4,7 8,16 9,17 3,-8 21,33 8,19 17,11 16,-5 0,-3 -2,-13 -3,-16 -3,-15 -2,-19 -1,-34 0,-11 -3,-19 -6,-29 -3,-14 -1,-22 -3,-35 -12,-9 -9,-4 -15,-20 -4,-12 -7,-15 -11,-23 5,-6 5,-4 12,-9 -9,-6 -13,-30 -33,-10 -13,-3 -4,-4 -13,-6 -9,14 -4,7 -5,18 -2,16 -21,12 16,16z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'llanosaridane');
var puntallana = rsr.path("M451 239c12,18 20,6 30,7 9,0 55,18 68,26 13,8 9,13 21,27 8,-5 20,-13 23,-19 3,-5 2,-9 5,-16 2,-4 7,-8 9,-12 -21,-17 -4,-20 -20,-32 -16,-11 -9,-4 -21,-33 -8,20 -2,12 -21,21 -17,9 -13,14 -23,21 -8,6 -7,2 -17,4 -9,1 -9,3 -16,6 -11,5 -23,0 -38,0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'puntallana');
var breñaalta = rsr.path("M451 450c33,2 36,-14 48,-27 7,-8 17,-11 24,-17 11,-12 -5,-5 18,-22 1,-29 -11,-6 -2,-41 -17,1 -8,3 -20,11 -26,19 -34,-11 -67,-14 10,53 17,59 -1,110z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'breñaalta');
var puntagorda = rsr.path("M200 169c-2,68 -1,37 11,62 8,-1 11,-1 19,-2 22,-2 22,-14 39,-7 10,4 -2,4 16,7 13,3 28,5 42,7 18,3 25,5 31,-10 -29,-14 -20,20 -54,-15 -10,-9 -4,-8 -20,-10 -35,-5 -52,-47 -62,-49 -8,-1 -5,3 -22,17z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'puntagorda');
var tazacorte = rsr.path("M332 492c-10,-81 -18,-62 -23,-74 -8,-18 6,-13 -20,-15 13,34 29,46 25,74 0,2 -9,15 18,15z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'tazacorte');
var breñabaja = rsr.path("M484 452c11,-4 23,-12 33,-17 19,-11 19,-5 39,-6 -3,-10 -1,-13 -2,-20 -3,-14 -9,-4 -5,-23 -11,11 -7,1 -16,17 -11,19 -17,9 -33,31 -7,11 -10,7 -16,18z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_o');
_1107000968144.attr({'id': '_1107000968144','parent': 'Capa_x0020_1','name': '_1107000968144'});

regions.push(breñabaja);
regions.push(tazacorte);
regions.push(breñaalta);
regions.push(puntagorda);
regions.push(elpaso);
regions.push(villa_garafia);
regions.push(villamazo);
regions.push(tijarafe);
regions.push(fuencaliente);
regions.push(santacruz);
regions.push(barlovento);
regions.push(sanandres);
regions.push(llanosaridane);
regions.push(puntallana);

for (var i = 0; i < regions.length; i++) {
	regions[i].mouseover(function(e)
	{
		this.node.style.opacity = 0.7;
	});
	regions[i].mouseout(function(e)
	{
		this.node.style.opacity = 1;
	});
}

});


