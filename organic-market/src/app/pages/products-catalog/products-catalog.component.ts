import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-catalog',
  standalone: true,
  imports: [NgFor, NgIf, ProductCardComponent],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.css'
})
export class ProductsCatalogComponent {

  @Output() addProductToCart: EventEmitter<IProduct> = new EventEmitter();

  teste: string = 'ABC';

  // addProductToCart(product: IProduct) {
  //   this.addProductToCart.emit(product); // Emitting the product data
  // }

  productsList: IProduct[] = [
    {
      "id": 1,
      "title": "Peanut Butter",
      "brand": "Nature's Best",
      "description": "Nhamy nhamy peanut butter, the best in the market! Perfect for your breakfast!",
      "expirationDate": new Date("2024-08-29"),
      "price": 29.99,
      "totalInStock": 10,
      "totalAddedToCart": 0,
      "imageUrl": "https://supermodel-bestawards.s3.amazonaws.com/resized/sm/entry/gq/hd/sa/iq/BayRd-BothJars-0-1172-0-826.jpg?k=2bed787278",
    },
    {
      "id": 2,
      "title": "Organic Tea",
      "brand": "Nature's Best",
      "description": "Organic tea with a natural special flavor. Made with selected herbs from all over the world.",
      "expirationDate": new Date("2024-08-29"),
      "price": 19.99,
      "totalInStock": 2,
      "totalAddedToCart": 0,
    "imageUrl": "https://m.media-amazon.com/images/I/71JRDF2TX7L._AC_UF350,350_QL80_DpWeblab_.jpg"
    },
    {
      "id": 3,
      "title": "Organic Yogurt",
      "brand": "Hollis Mead",
      "description": "Fresh and creamy yogurt, good for your health! With a touch of honey and fruits.",
      "expirationDate": new Date("2024-08-29"),
      "price": 10.99,
      "totalInStock": 2,
      "totalAddedToCart": 0,
      "imageUrl": "https://www.dukeshill.co.uk/cdn/shop/products/223520_Greek_20Style_20Yoghurt.jpg?v=1690310861",
    },
  {
    "id": 4,
    "title": "Green Tea Cream",
    "brand": "The Body Shop",
    "description": "A special cream with green tea extract, perfect for your skin!",
    "expirationDate": new Date("2024-08-29"),
    "price": 59.99,
    "totalInStock": 20,
    "totalAddedToCart": 0,
    "imageUrl": "https://p16-sign-sg.lemon8cdn.com/tos-alisg-i-0000/f100c372f4124f1a90d08344cc13f676~tplv-sdweummd6v-shrink:640:0:q50.webp?lk3s=66c60501&source=seo_middle_feed_list&x-expires=1744437600&x-signature=LVIROkJkPoKRRlTgBJZb7YDFzMw%3D",
  },
  {
  "id": 5,
  "title": "Beauty kit",
  "brand": "Liz Earle",
  "description": "Face and body creams, recycles and organic! Perfect for the world!",
  "expirationDate": new Date("2024-08-29"),
  "price": 130.99,
  "totalInStock": 20,
  "totalAddedToCart": 0,
  "imageUrl": "https://static.thcdn.com/images/medium/original/widgets/95-en/12/original-SHOT_07_GB_LE_137_Mobile-094212.jpg"
},

 {
"id": 6,
"title": "Skin Paste",
"brand": "Liz Earle",
"description": "Good for your skin, good for your soul!",
"expirationDate": new Date("2024-08-29"),
"price": 20,
"totalInStock": 20,
"totalAddedToCart": 0,
"imageUrl": "https://togetherdesign.co.uk/wp-content/uploads/2022/01/Liz_Earle_001b.jpg",
},
{
  "id": 7,
  "title": "Organic Beer",
  "brand": "Pivní",
  "description": "The best organic beer in the market! Perfect for your happy hour!",
  "expirationDate": new Date("2024-08-29"),
  "price": 30,
  "totalInStock": 20,
  "totalAddedToCart": 0,
  "imageUrl": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/91de3d73536565.5c0d32b06475d.png",
  },
  {
    "id": 8,
    "title": "Beer with flowers",
    "brand": "Nature's Best",
    "description": "For a relaxing moment, a beer with flowers is the best choice. Frash and organic!",
    "expirationDate": new Date("2024-08-29"),
    "price": 25,
    "totalInStock": 20,
    "totalAddedToCart": 0,
    "imageUrl": "https://bpando.org/wp-content/uploads/1-OO-Brewing-Packaging-Lundgren-Lindqvist-BPO.jpg",
    },
    {
      "id": 9,
      "title": "The Rehydrator",
      "brand": "Nosh",
      "description": "Perfect drink to give you energy and rehydrate your body! With a special touch of lemon and ginger.",
      "expirationDate": new Date("2024-08-29"),
      "price": 23.50,
      "totalInStock": 20,
      "totalAddedToCart": 0,
      "imageUrl": "https://m.media-amazon.com/images/I/61dt0-8y1-L._AC_SL1000_.jpg",
      },
  ];
  
  warnAboutAddProductToCart(product: IProduct){
    console.log("Opa, clicou no botão de compra, né filhão?");
    console.log(product);

    this.addProductToCart.emit(product);
  }
}
