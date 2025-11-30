import { computed, inject } from "@angular/core";
import { Product } from "./models/product";
import {patchState, signalMethod, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {produce} from "immer";
import { Toaster } from "./services/toaster";
import { CartItems } from "./models/cart";
import { MatDialog } from "@angular/material/dialog";
import { SignInDailog } from "./components/sign-in-dailog/sign-in-dailog";
import { SignInParams, SignUpParams, User } from "./models/user";
import { Router } from "@angular/router";
import { Order } from "./models/order";
import {withStorageSync} from "@angular-architects/ngrx-toolkit";
import { AddReviewParams, UserReview } from "./models/user-review";


export type EcommerceState ={
    products: Product[];
    category:string;
    wishlistItems:Product[];
    cartItems:CartItems[];
    user: User | undefined;
    loading : boolean;
    selectedProductId: string | undefined;
    writeReview:boolean;
    
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
    category: "Helmets",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p001",
    userName: "Aniket Bodhe",
    userImageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
    title: "Solid helmet for highway rides",
    comment: "Very comfortable at 100+ kmph, visor is clear and vents work nicely.",
    reviewDate: new Date("2024-10-01")
  },
  {
    id: crypto.randomUUID(),
    productId: "p001",
    userName: "Rahul Verma",
    userImageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    title: "Good helmet for the price",
    comment: "Padding is nice and feels premium, but the visor fogs slightly in winter.",
    reviewDate: new Date("2024-11-15")
  },
  {
    id: crypto.randomUUID(),
    productId: "p001",
    userName: "Nikhil Sharma",
    userImageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 3,
    title: "Solid helmet for highway rides",
    comment: "Very comfortable at 100+ kmph, visor is clear and vents work nicely.",
    reviewDate: new Date("2024-10-01")
  },
  {
    id: crypto.randomUUID(),
    productId: "p001",
    userName: "Happy Singh",
    userImageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    title: "Good helmet for the price",
    comment: "Padding is nice and feels premium, but the visor fogs slightly in winter.",
    reviewDate: new Date("2024-11-15")
  }
]

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
    category: "Helmets",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p002",
    userName: "Vikas Pawar",
    userImageUrl: "https://randomuser.me/api/portraits/men/88.jpg",
    rating: 5,
    title: "Premium quality helmet",
    comment: "Feels super lightweight. Locking mechanism is solid.",
    reviewDate: new Date("2024-09-12")
  },
  {
    id: crypto.randomUUID(),
    productId: "p002",
    userName: "Abhay Singh",
    userImageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    title: "Good, but expensive",
    comment: "Comfort level is top notch but could have included a tinted visor.",
    reviewDate: new Date("2024-11-02")
  }
]

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
    category: "Helmets",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p003",
    userName: "Sanjay Kumar",
    userImageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
    title: "Stylish and comfortable",
    comment: "Good airflow, amazing graphics, fits tight initially.",
    reviewDate: new Date("2024-08-22")
  },
  {
    id: crypto.randomUUID(),
    productId: "p003",
    userName: "Akash Mehta",
    userImageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    title: "Value for money",
    comment: "Took it on long rides, barely any wind noise. Highly recommended.",
    reviewDate: new Date("2024-10-10")
  }
]

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
    category: "Jackets",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p004",
    userName: "Pranav Sharma",
    userImageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 5,
    title: "Super protective jacket",
    comment: "Armor feels solid and fits perfectly. Best for touring.",
    reviewDate: new Date("2024-12-01")
  },
  {
    id: crypto.randomUUID(),
    productId: "p004",
    userName: "Harshit Patel",
    userImageUrl: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 4,
    title: "Good quality",
    comment: "Little heavy but protection is very good. Worth buying.",
    reviewDate: new Date("2024-11-08")
  }
]

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
    category: "Jackets",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p005",
    userName: "Manoj Kumar",
    userImageUrl: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 4,
    title: "Nice summer jacket",
    comment: "Ventilation is great for city rides, armor is basic but fine.",
    reviewDate: new Date("2024-10-14")
  },
  {
    id: crypto.randomUUID(),
    productId: "p005",
    userName: "Rohit Sharma",
    userImageUrl: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 5,
    title: "Looks awesome",
    comment: "Fit and finishing is amazing. Love riding in it.",
    reviewDate: new Date("2024-07-21")
  }
]

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
    category: "Gloves",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p006",
    userName: "Sumit Raj",
    userImageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4,
    title: "Comfortable gloves",
    comment: "Breathable and fits well. Padding could be softer.",
    reviewDate: new Date("2024-09-05")
  },
  {
    id: crypto.randomUUID(),
    productId: "p006",
    userName: "Mayur Jadhav",
    userImageUrl: "https://randomuser.me/api/portraits/men/49.jpg",
    rating: 5,
    title: "Perfect for city rides",
    comment: "Grip and protection both are perfect.",
    reviewDate: new Date("2024-11-19")
  }
]

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
    category: "Gloves",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p007",
    userName: "Tejas Mehta",
    userImageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    title: "Stylish and rugged",
    comment: "Feels solid but takes time to break in.",
    reviewDate: new Date("2024-10-30")
  },
  {
    id: crypto.randomUUID(),
    productId: "p007",
    userName: "Rohan Desai",
    userImageUrl: "https://randomuser.me/api/portraits/men/98.jpg",
    rating: 5,
    title: "Love the finish",
    comment: "Comfortable for long rides. Great leather quality.",
    reviewDate: new Date("2024-09-15")
  }
]

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
    category: "Boots",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p008",
    userName: "Deepak Kumar",
    userImageUrl: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    title: "Very durable boots",
    comment: "Feels safe and stable. Great grip even in rain.",
    reviewDate: new Date("2024-07-25")
  },
  {
    id: crypto.randomUUID(),
    productId: "p008",
    userName: "Vishal Patil",
    userImageUrl: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 4,
    title: "Good for touring",
    comment: "Hard to walk in for long, but excellent on bike.",
    reviewDate: new Date("2024-11-10")
  }
]
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
    category: "Boots",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p009",
    userName: "Ashwin K",
    userImageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4,
    title: "Sturdy and reliable",
    comment: "Good build quality, insole could be softer.",
    reviewDate: new Date("2024-10-02")
  },
  {
    id: crypto.randomUUID(),
    productId: "p009",
    userName: "Pratik Shah",
    userImageUrl: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    title: "Worth every rupee",
    comment: "Waterproofing works great. Comfortable while shifting gears.",
    reviewDate: new Date("2024-11-27")
  }
]

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
    category: "Maintenance",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p010",
    userName: "Shivam Chauhan",
    userImageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    title: "Engine feels smooth",
    comment: "Reduced vibrations instantly. Best oil for performance bikes.",
    reviewDate: new Date("2024-08-11")
  },
  {
    id: crypto.randomUUID(),
    productId: "p010",
    userName: "Rider X",
    userImageUrl: "https://randomuser.me/api/portraits/men/74.jpg",
    rating: 4,
    title: "Good but expensive",
    comment: "Quality is excellent, price is slightly high.",
    reviewDate: new Date("2024-12-03")
  }
]

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
    category: "Electronics",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p011",
    userName: "Aman Gupta",
    userImageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5,
    title: "Best action camera",
    comment: "HyperSmooth is unreal. Quality is crystal clear.",
    reviewDate: new Date("2024-11-01")
  },
  {
    id: crypto.randomUUID(),
    productId: "p011",
    userName: "Harsh Singh",
    userImageUrl: "https://randomuser.me/api/portraits/men/90.jpg",
    rating: 4,
    title: "Battery life could be better",
    comment: "Amazing output but heats slightly during 5K recording.",
    reviewDate: new Date("2024-09-20")
  }
]

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
    category: "Electronics",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p012",
    userName: "Sahil Jain",
    userImageUrl: "https://randomuser.me/api/portraits/men/93.jpg",
    rating: 5,
    title: "Clear audio",
    comment: "Intercom range is great. Clear communication even at 90 kmph.",
    reviewDate: new Date("2024-10-18")
  },
  {
    id: crypto.randomUUID(),
    productId: "p012",
    userName: "Aisha Malik",
    userImageUrl: "https://randomuser.me/api/portraits/women/41.jpg",
    rating: 4,
    title: "Good features",
    comment: "Build quality is great but battery takes long to charge.",
    reviewDate: new Date("2024-11-25")
  }
]

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
    category: "Luggage",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p013",
    userName: "Vikrant More",
    userImageUrl: "https://randomuser.me/api/portraits/men/57.jpg",
    rating: 5,
    title: "Useful touring bag",
    comment: "Magnets hold perfectly even at high speeds.",
    reviewDate: new Date("2024-09-28")
  },
  {
    id: crypto.randomUUID(),
    productId: "p013",
    userName: "Ashutosh Rao",
    userImageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    rating: 4,
    title: "Good storage",
    comment: "Could use better rain protection, but overall handy.",
    reviewDate: new Date("2024-11-06")
  }
]

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
    category: "Luggage",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p014",
    userName: "Krishna Rao",
    userImageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    title: "Amazing for long rides",
    comment: "Holds a TON of stuff. Stitching feels premium.",
    reviewDate: new Date("2024-10-29")
  },
  {
    id: crypto.randomUUID(),
    productId: "p014",
    userName: "Neha Sharma",
    userImageUrl: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    title: "Good but bulky",
    comment: "Very useful but makes the bike look wide.",
    reviewDate: new Date("2024-12-14")
  }
]

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
    category: "Guards",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p015",
    userName: "Rohit Kumar",
    userImageUrl: "https://randomuser.me/api/portraits/men/73.jpg",
    rating: 5,
    title: "Super protective",
    comment: "Saved me during a slip. Very impressed!",
    reviewDate: new Date("2024-09-10")
  },
  {
    id: crypto.randomUUID(),
    productId: "p015",
    userName: "Dinesh Yadav",
    userImageUrl: "https://randomuser.me/api/portraits/men/81.jpg",
    rating: 4,
    title: "Comfortable but warm",
    comment: "Protection is excellent but gets warm during summer.",
    reviewDate: new Date("2024-11-22")
  }
]

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
    category: "Guards",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p016",
    userName: "Ajay Singh",
    userImageUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    rating: 4,
    title: "Light and sturdy",
    comment: "Comfortable for long rides. Good chest protection.",
    reviewDate: new Date("2024-08-05")
  },
  {
    id: crypto.randomUUID(),
    productId: "p016",
    userName: "Pooja Patel",
    userImageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
    title: "Perfect fit",
    comment: "Super lightweight and doesn't feel bulky.",
    reviewDate: new Date("2024-11-14")
  }
]

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
    category: "Rain Gear",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p017",
    userName: "Hemant Sharma",
    userImageUrl: "https://randomuser.me/api/portraits/men/69.jpg",
    rating: 5,
    title: "Waterproof as promised",
    comment: "Tested in heavy rain and stayed completely dry.",
    reviewDate: new Date("2024-07-19")
  },
  {
    id: crypto.randomUUID(),
    productId: "p017",
    userName: "Sunny Gill",
    userImageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    title: "Good quality",
    comment: "Slides slightly while riding but totally waterproof.",
    reviewDate: new Date("2024-11-09")
  }
]

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
    category: "Rain Gear",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p018",
    userName: "Harshit Jain",
    userImageUrl: "https://randomuser.me/api/portraits/men/100.jpg",
    rating: 5,
    title: "Works perfectly",
    comment: "Kept me dry in heavy rain. Super lightweight.",
    reviewDate: new Date("2024-10-19")
  },
  {
    id: crypto.randomUUID(),
    productId: "p018",
    userName: "Sameer Shaikh",
    userImageUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4,
    title: "Good budget rain jacket",
    comment: "Waterproof but material feels a bit thin.",
    reviewDate: new Date("2024-09-23")
  }
]

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
    category: "Accessories",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p019",
    userName: "Kunal Shah",
    userImageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
    rating: 5,
    title: "Super loud and clear",
    comment: "Perfect for highway riding. Very effective tone.",
    reviewDate: new Date("2024-11-07")
  },
  {
    id: crypto.randomUUID(),
    productId: "p019",
    userName: "Tarun S",
    userImageUrl: "https://randomuser.me/api/portraits/men/26.jpg",
    rating: 4,
    title: "Good quality",
    comment: "Installation was little tricky but performance is great.",
    reviewDate: new Date("2024-08-30")
  }
]

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
    category: "Accessories",
    reviews: [
  {
    id: crypto.randomUUID(),
    productId: "p020",
    userName: "Ravi K",
    userImageUrl: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 5,
    title: "Very bright",
    comment: "Visibility improved a lot during night highway rides.",
    reviewDate: new Date("2024-07-14")
  },
  {
    id: crypto.randomUUID(),
    productId: "p020",
    userName: "Sameer Patel",
    userImageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 4,
    title: "Good upgrade",
    comment: "Much better than stock bulb but heats slightly.",
    reviewDate: new Date("2024-11-18")
  }
]

  }
],      
        category: 'all',
        wishlistItems:[],
        cartItems:[],
        user:undefined,
        loading:false,
        selectedProductId:undefined,
        writeReview:false
        
    }as EcommerceState),

   withComputed((store) => ({
    filteredProducts: computed(() => {
      if (store.category() === "all") return store.products();
      const filterCategory = store.category().toLowerCase();
      return store.products().filter((p) => p.category.toLowerCase() === filterCategory);
    }),
    wishlistCount: computed(() => store.wishlistItems().length),
    cartCount: computed(() =>
    store.cartItems().reduce((sum, item) => sum + item.quantity, 0)),
    selectedProduct: computed(() => {
    const id = store.selectedProductId();
    if (!id) return undefined;
    return store.products().find(p => p.id === id);
  })
  })),
  

  withStorageSync({
    key: 'modern-store',
    select: ({ wishlistItems, cartItems, user }) => ({ wishlistItems, cartItems, user }),
  }),

  // methods — inject services here and use store signals
  withMethods((store) => {
    const toaster = inject(Toaster);
    const Matdailog = inject(MatDialog);
    const router = inject(Router);

    return {
      setCategory: signalMethod<string>((category: string) => {
        patchState(store, { category });
      }),

      setProductId: signalMethod<string>((productId: string) => {
        patchState(store, { selectedProductId: productId });
      }),

      addToWishlist: (product: Product) => {
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });

        patchState(store, { wishlistItems: updatedWishlistItems });
        toaster.success('Product added to wishlist');
      },

      removeFromWishlist: (product: Product) => {
        patchState(store, {
          wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id),
        });
        toaster.success('Product removed from wishlist');
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
        toaster.success(existingItemIndex !== -1 ? 'Product added again' : 'Product added to cart');
      },
      setItemQuantity(params: { productId: string; quantity: number }) {
        const index = store.cartItems().findIndex((c) => c.product.id === params.productId);
        const updated = produce(store.cartItems(), (draft) => {
          draft[index].quantity = params.quantity;
        });
        patchState(store, { cartItems: updated });
      },
      addAllWishlistToCart: () => {
        const updatedCartItems = produce(store.cartItems(), (draft) => {
          store.wishlistItems().forEach((p) => {
            if (!draft.find((c) => c.product.id === p.id)) {
              draft.push({ product: p, quantity: 1 });
            }
          });
        });
        patchState(store, { cartItems: updatedCartItems, wishlistItems: [] });
      },

      moveToWishlist: (product: Product) => {
        const updatedCartItems = store.cartItems().filter((p) => p.product.id !== product.id);
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { cartItems: updatedCartItems, wishlistItems: updatedWishlistItems });
      },
      removeFromCart: (product: Product) => {
        patchState(store, {
          cartItems: store.cartItems().filter((c) => c.product.id !== product.id),
        });
      },
      proceedToCheckout: () => {
        if (!store.user()) {
          Matdailog.open(SignInDailog, {
            disableClose: true,
            data: {
              checkout: true,
            },
          });
          return;
        }
        router.navigate(['checkout']);
      },
      placeOrder: async () => {
        patchState(store, { loading: true });

        const user = store.user();

        if (!user) {
          toaster.error('Please login before placing order');
          patchState(store, { loading: false });
          return;
        }

        const order: Order = {
          id: crypto.randomUUID(),
          userId: user.id,
          total: Math.round(
            store.cartItems().reduce((acc, item) => acc + item.quantity * item.product.price, 0)
          ),
          items: store.cartItems(),
          paymentStatus: 'success',
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));

        patchState(store, { loading: false, cartItems: [] });
        router.navigate(['order-success']);
      },
      signIn: ({ email, password, checkout, dailogId }: SignInParams) => {
        patchState(store, {
          user: {
            id: '1',
            email,
            name: 'John Doe',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });
        const dailog = Matdailog.getDialogById(dailogId)?.close();
        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signUp: ({ email, password, name, checkout, dailogId }: SignUpParams) => {
        patchState(store, {
          user: {
            id: '1',
            email,
            name: 'John Doe',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });
        const dailog = Matdailog.getDialogById(dailogId)?.close();
        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signOut: () => {
        patchState(store, { user: undefined });
      },
      showWriteReview: () => {
        patchState(store, { writeReview: true });
      },
      hideWriteReview: () => {
        patchState(store, { writeReview: false });
      },
      addReview: async ({ title, comment, rating }: AddReviewParams) => {
        patchState(store, { loading: true });
        const product = store.products().find((p) => p.id === store.selectedProductId());
        if (!product) {
          patchState(store, { loading: false });
          return;
        }

        const review: UserReview = {
          id: crypto.randomUUID(),
          productId: product.id,
          userName: store.user()?.name || '',
          userImageUrl: store.user()?.imageUrl || '',
          rating,
          title,
          comment,
          reviewDate: new Date(),
        };

        const updatedProducts = produce(store.products(), (draft) => {
          const index = draft.findIndex((p) => p.id === product.id);
          draft[index].reviews.push(review);
          draft[index].rating =
            Math.round(
              (draft[index].reviews.reduce((acc, r) => acc + r.rating, 0) /
                draft[index].reviews.length) *
                10
            ) / 10;
          draft[index].reviewCount = draft[index].reviews.length;
        });
        
      await new Promise((resolve) => setTimeout(resolve, 1000));

      patchState(store,{loading:false,products:updatedProducts,writeReview:false});
      toaster.success("Review Added Successfully");

      },
    };
  })
);