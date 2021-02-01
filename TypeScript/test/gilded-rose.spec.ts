import { expect, should } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('fixme');
    // });

    it('master test', function(){
        const items = [
            new Item("+5 Dexterity Vest", 10, 20), 
            new Item("Aged Brie", 2, 0), 
            new Item("Elixir of the Mongoose", 5, 7), 
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), 
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            // this conjured item does not work properly yet
            new Item("Conjured Mana Cake", 3, 6)]

            const gildedRose = new GildedRose(items);
//Act
            const updatedItems = gildedRose.updateQuality();
        //Assert
//        updatedItems.should.deep.include

expect(updatedItems).to.deep.include.members([ new Item("Aged Brie", 1, 1),
new Item("+5 Dexterity Vest", 9, 19), 
new Item("Elixir of the Mongoose", 4, 6), 
new Item("Sulfuras, Hand of Ragnaros", 0, 80), 
new Item("Sulfuras, Hand of Ragnaros", -1, 80),
 new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
 new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50)
])
    });

    // it('backstage ticket', (){

    // })

});
