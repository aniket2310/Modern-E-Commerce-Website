import { computed, inject } from "@angular/core";
import { Product } from "./models/product";
import {patchState, signalMethod, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {produce} from "immer";
import { Toaster } from "./services/toaster";
import { CartItems } from "./models/cart";


export type EcommerceState ={
    products: Product[];
    category:string;
    wishlistItems:Product[];
    cartItems:CartItems[];
}

export const EcommerceStore = signalStore(
  {
    providedIn:'root'
  },  
  withState({
        products:[{
    id: "p001",
    name: "Steelbird Air Helmet",
    description: "Full-face lightweight helmet with advanced ventilation and anti-scratch visor.",
    price: 3499,
    imageUrl: "assets/images/Steelbird_Air_Helmet.png",
    rating: 4.5,
    reviewCount: 1200,
    instock: true,
    category: "Helmets"
  },
  {
    id: "p002",
    name: "SMK Titan Carbon Helmet",
    description: "Carbon fiber shell, premium cushioning, and double D-ring lock system.",
    price: 6999,
    imageUrl: "assets/images/SMK_Titan_Carbon_Helmet.png",
    rating: 4.7,
    reviewCount: 950,
    instock: false,
    category: "Helmets"
  },
  {
    id: "p003",
    name: "Axor Apex Venomous Helmet",
    description: "Sport touring helmet with sun visor and aerodynamic design.",
    price: 5299,
    imageUrl: "assets/images/Axor_Apex_Venomous_Helmet.jpg",
    rating: 4.3,
    reviewCount: 870,
    instock: true,
    category: "Helmets"
  },
  {
    id: "p004",
    name: "Rynox Storm Evo Jacket",
    description: "All-weather riding jacket with CE Level 2 armor on shoulders and elbows.",
    price: 7999,
    imageUrl: "assets/images/Rynox_Storm_Evo_Jacket.jpg",
    rating: 4.6,
    reviewCount: 800,
    instock: true,
    category: "Jackets"
  },
  {
    id: "p005",
    name: "Royal Enfield Windfarer Jacket",
    description: "Mesh riding jacket with premium fit and removable armor.",
    price: 5499,
    imageUrl: "assets/images/Royal_Enfield_Windfarer_Jacket.jpg",
    rating: 4.4,
    reviewCount: 600,
    instock: true,
    category: "Jackets"
  },
  {
    id: "p006",
    name: "Rynox Air GT Gloves",
    description: "City riding gloves with TPU knuckle protectors and breathable fabric.",
    price: 1499,
    imageUrl: "assets/images/Rynox_Air_GT_Gloves.jpg",
    rating: 4.2,
    reviewCount: 500,
    instock: true,
    category: "Gloves"
  },
  {
    id: "p007",
    name: "Royal Enfield Rambler Gloves",
    description: "Touring gloves with reinforced palms and comfortable fit.",
    price: 1999,
    imageUrl: "assets/images/Royal_Enfield_Rambler_Gloves.jpg",
    rating: 4.3,
    reviewCount: 430,
    instock: false,
    category: "Gloves"
  },
  {
    id: "p008",
    name: "LS2 Riding Boots",
    description: "Reinforced ankle boots with anti-slip sole and comfortable padding.",
    price: 5499,
    imageUrl: "assets/images/LS2_Riding_Boots.jpg",
    rating: 4.1,
    reviewCount: 320,
    instock: true,
    category: "Boots"
  },
  {
    id: "p009",
    name: "Raida Discover Riding Boots",
    description: "High-ankle riding boots with waterproof construction and gear-shift pad.",
    price: 4299,
    imageUrl: "assets/images/Raida_Discover_Riding_Boots.png",
    rating: 4.4,
    reviewCount: 210,
    instock: true,
    category: "Boots"
  },
  {
    id: "p010",
    name: "Motul 7100 4T Oil (1L)",
    description: "Fully synthetic engine oil suitable for premium motorcycles.",
    price: 999,
    imageUrl: "assets/images/Motul_7100_4T_Oil.webp",
    rating: 4.8,
    reviewCount: 1500,
    instock: true,
    category: "Maintenance"
  },
  {
    id: "p011",
    name: "GoPro Hero 10 Camera",
    description: "5.3K video recording with Hypersmooth 4.0 and waterproof design.",
    price: 42999,
    imageUrl: "assets/images/GoPro_Hero_10_Camera.jpg",
    rating: 4.9,
    reviewCount: 5000,
    instock: true,
    category: "Electronics"
  },
  {
    id: "p012",
    name: "Cardo Freecom 2+",
    description: "Bluetooth intercom for rider-to-rider and rider-to-pillion communication.",
    price: 14999,
    imageUrl: "assets/images/Cardo_Freecom_2+.jpg",
    rating: 4.7,
    reviewCount: 850,
    instock: false,
    category: "Electronics"
  },
  {
    id: "p013",
    name: "Yamaha Magnetic Tank Bag",
    description: "12L magnetic tank bag with mobile holder and waterproof cover.",
    price: 2499,
    imageUrl: "assets/images/Yamaha_Magnetic_Tank_Bag.jpg",
    rating: 4.4,
    reviewCount: 420,
    instock: true,
    category: "Luggage"
  },
  {
    id: "p014",
    name: "ViaTerra Claw Tail Bag",
    description: "Classic 72L tail bag suitable for long touring and high durability.",
    price: 4999,
    imageUrl: "assets/images/ViaTerra_Claw_Tail_Bag.jpg",
    rating: 4.6,
    reviewCount: 650,
    instock: true,
    category: "Luggage"
  },
  {
    id: "p015",
    name: "AXOR Knee & Shin Guards",
    description: "Shock-resistant knee guards suitable for off-road rides.",
    price: 1999,
    imageUrl: "assets/images/AXOR_Knee_&_Shin_Guards.jpg",
    rating: 4.3,
    reviewCount: 300,
    instock: true,
    category: "Guards"
  },
  {
    id: "p016",
    name: "Raida Chest Protector",
    description: "Lightweight chest armor with adjustable straps.",
    price: 1799,
    imageUrl: "assets/images/Raida_Chest_Protector.jpg",
    rating: 4.1,
    reviewCount: 180,
    instock: false,
    category: "Guards"
  },
  {
    id: "p017",
    name: "Mototech Rain Pants",
    description: "Waterproof and breathable rain pants for heavy touring.",
    price: 1299,
    imageUrl: "assets/images/Mototech_Rain_Pants.jpg",
    rating: 4.2,
    reviewCount: 250,
    instock: true,
    category: "Rain Gear"
  },
  {
    id: "p018",
    name: "Raida Rain Jacket",
    description: "Lightweight rain jacket with water-resistant zippers.",
    price: 1199,
    imageUrl: "assets/images/Raida_Rain_Jacket.jpg",
    rating: 4.0,
    reviewCount: 190,
    instock: true,
    category: "Rain Gear"
  },
  {
    id: "p019",
    name: "Bosch Horn Set",
    description: "High-performance dual horn kit suitable for all motorcycles.",
    price: 899,
    imageUrl: "assets/images/Bosch_Horn_Set.jpg",
    rating: 4.5,
    reviewCount: 330,
    instock: true,
    category: "Accessories"
  },
  {
    id: "p020",
    name: "Osram Night Racer 110 Headlight",
    description: "Powerful halogen headlight bulb offering 110% more brightness.",
    price: 999,
    imageUrl: "assets/images/Osram_Night_Racer_Headlight.jpg",
    rating: 4.4,
    reviewCount: 210,
    instock: true,
    category: "Accessories"
  }
],      
        category: 'all',
        wishlistItems:[],
        cartItems:[],
        
    }as EcommerceState),

   withComputed((store) => ({
    filteredProducts: computed(() => {
      if (store.category() === "all") return store.products();
      const filterCategory = store.category().toLowerCase();
      return store.products().filter((p) => p.category.toLowerCase() === filterCategory);
    }),
    wishlistCount: computed(() => store.wishlistItems().length),
cartCount: computed(() =>
  store.cartItems().reduce((sum, item) => sum + item.quantity, 0)
)
  })),

  // methods — inject services here and use store signals
  withMethods((store) => {
    const toaster = inject(Toaster);

    return {
      setCategory: signalMethod<string>((category: string) => {
        patchState(store, { category });
      }),

      addToWishlist: (product: Product) => {
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });

        patchState(store, { wishlistItems: updatedWishlistItems });
        toaster.success("Product added to wishlist");
      },

      removeFromWishlist: (product: Product) => {
        patchState(store, {
          wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id)
        });
        toaster.success("Product removed from wishlist");
      },

      clearWishlist: () => {
        patchState(store, { wishlistItems: [] });
      },

      addToCart: (product: Product, quantity = 1) => {
        const existingItemIndex = store.cartItems().findIndex((i) => i.product.id === product.id);

        const updatedCartItems = produce(store.cartItems(), (draft) => {
          if (existingItemIndex !== -1) {
            draft[existingItemIndex].quantity += quantity;
            return;
          }
          draft.push({ product, quantity });
        });

        patchState(store, { cartItems: updatedCartItems });
        toaster.success(existingItemIndex !== -1 ? "Product added again" : "Product added to cart");
      },
      setItemQuantity(params:{productId:string, quantity:number}){
        const index = store.cartItems().findIndex(c => c.product.id === params.productId);
        const updated = produce(store.cartItems(),(draft) =>{
          draft[index].quantity = params.quantity
        });
        patchState(store,{cartItems:updated});
      },
      addAllWishlistToCart: () => {
        const updatedCartItems = produce(store.cartItems(), (draft) =>{
          store.wishlistItems().forEach(p =>{
            if(!draft.find(c => c.product.id === p.id)){
              draft.push({product: p, quantity: 1})
            }
          })
        })
        patchState(store,{cartItems: updatedCartItems,wishlistItems:[]})
      },

      moveToWishlist:(product: Product) => {
        const updatedCartItems = store.cartItems().filter((p => p.product.id !== product.id));
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) =>{
          if(!draft.find(p => p.id === product.id)){
            draft.push(product)
          }
        })
        patchState(store,{cartItems: updatedCartItems,wishlistItems: updatedWishlistItems})
      },
      removeFromCart: (product : Product) => {
        patchState(store,{cartItems:store.cartItems().filter((c) => c.product.id !== product.id)})
      }
    };
  })
);