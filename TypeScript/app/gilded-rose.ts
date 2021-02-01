export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for(let i = 0; i < this.items.length; i++) {
         if(this.items[i].name == 'Aged Brie'){
       this.increaseQualityBrie(this.items[i])
            } else if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.qualityBackstage(this.items[i])
            } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros'){
                this.items[i].quality = 80
            }else{
                this.otherItems(this.items[i]);
                        }
        // }
        //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                 this.items[i].quality = this.items[i].quality - 1
        //             }
        //         }
        //     } else {
        //         if (this.items[i].quality < 50) {
        //             this.items[i].quality = this.items[i].quality + 1
        //             if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].sellIn < 11) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //                 if (this.items[i].sellIn < 6) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //         this.items[i].sellIn = this.items[i].sellIn - 1;
        //     }
        //     if (this.items[i].sellIn < 0) {
        //         if (this.items[i].name != 'Aged Brie') {
        //             if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].quality > 0) {
        //                     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                         this.items[i].quality = this.items[i].quality - 1
        //                     }
        //                 }
        //             } else {
        //                 this.items[i].quality = this.items[i].quality - this.items[i].quality
        //             }
                } return this.items;
            }
            
        

        
    
    increaseQualityBrie(item: Item){
        item.sellIn = item.sellIn-1;
        if(item.quality < 50) {
            item.quality = item.quality + 1
    }
    
}
qualityBackstage(item: Item){
    item.sellIn = item.sellIn-1;
    if(item.sellIn < 11 && item.sellIn>5) {
        if(item.quality < 50){
            item.quality = item.quality + 2
        }else{
            item.quality = 50
        }
    }else if(item.sellIn < 6 && item.sellIn>0) {
        if(item.quality < 50){
            item.quality = item.quality + 3
}else{
    item.quality = 50
}
}else if(item.sellIn<1){
    item.quality = 0;
}else{
    if(item.quality < 50){
    item.quality = item.quality + 1
}else{
    item.quality = 50
}
}
}
otherItems(item: Item){
    item.sellIn = item.sellIn - 1;
    if(item.sellIn < 0){
        if (item.quality > 0) {
        item.quality = item.quality - 2
        }
    }else{                
    item.quality = item.quality - 1;
}
}
}
    
    


//     updateQuality() {

//         for (let i = 0; i < this.items.length; i++) {
//             if(this.items[i].name = 'Aged Brie'){
//                 this.increaseQualityBrie(this.items[i])
//             }else if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
//                 if(this.items[i].quality < 50) {
//                 if (this.items[i].sellIn < 11) {
//                     this.items[i].quality = this.items[i].quality + 2
//                     } else if(this.items[i].sellIn<6){
//                         this.items[i].quality = this.items[i].quality + 3
//                     }
//             }
//         } else if(this.items[i].name == 'Sulfuras, Hand of Ragnaros'){
//             this.items[i].quality = 80
//         } else{
//                 if (this.items[i].quality < 50) {
//                     this.items[i].quality = this.items[i].quality - 1
                    
//                     }
//                 }
               
//             }
//             return this.items;
//         }
//     }

        
    

