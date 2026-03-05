// Bookmate
import bookmateCard from "../assets/projects/bookmate/bookmate-preview.png"
import bookmateLogin from "../assets/projects/bookmate/login.png"
import bookmateDesktop from "../assets/projects/bookmate/book-list-desktop.png"
import bookmateMobile from "../assets/projects/bookmate/book-list-mobile.png"
import bookmateAdd from "../assets/projects/bookmate/add-book.png"
import bookmateTheme from "../assets/projects/bookmate/theme-toggle.gif"

// Freaky Fashion
import freakyfashionCard from "../assets/projects/freakyfashion/freakyfashion-preview.png"
import freakyfashionShowcase from "../assets/projects/freakyfashion/home-showcase.png"
import freakyfashionProductDetails from "../assets/projects/freakyfashion/product-details.png"
import freakyfashionFavorites from "../assets/projects/freakyfashion/favorites.png"
import freakyfashionCart from "../assets/projects/freakyfashion/cart.png"
import freakyfashionCheckoutMobile from "../assets/projects/freakyfashion/checkout-mobile.png"
import freakyfashionAdminProductList from "../assets/projects/freakyfashion/products-list-admin.png"
import freakyfashionNewCategory from "../assets/projects/freakyfashion/new-category.png"
import freakyfashionAdminProductDetails from "../assets/projects/freakyfashion/product-details-admin.png"

// LevelUp
import levelupCard from "../assets/projects/levelup/levelup-preview.png"
import levelupLogin from "../assets/projects/levelup/login.png"
import levelupHome from "../assets/projects/levelup/home.png"
import levelupHomeMobile from "../assets/projects/levelup/home-mobile.png"
import levelupGameDetails from "../assets/projects/levelup/game-details.png"
import levelupReviews from "../assets/projects/levelup/reviews.png"

// Types
type FeatureSection = {
  title: string
  items: string[]
}

type Member = {
  name: string
  github: string
}

export type Project = {
  slug: string
  title: string
  type: "solo" | "group"

  image: string
  shortDescription: string
  longDescription: string
  tech: string[]
  github: string
  live?: string

  features: FeatureSection[]
  screenshots: {
    src: string
    caption?: string
  }[]

  // optional (only for group projects)
  role?: string
  members?: Member[]
  workflow?: string[]
}


export const projects: Project[] = [
  {
    slug: "bookmate",
    title: "Bookmate",
    type: "solo",

    // preview image
    image: bookmateCard,

    shortDescription: "projects.bookmate.shortDescription",
    longDescription: "projects.bookmate.longDescription",

    tech: ["Angular", "ASP.NET Core", "C#", "TypeScript"],

    github: "https://github.com/Ritsumel/Bookmate",
    live: "https://earnest-vacherin-96975e.netlify.app",

    features: [
      {
        title: "",
        items: [
          "projects.bookmate.features.auth",
          "projects.bookmate.features.jwt",
          "projects.bookmate.features.crud",
          "projects.bookmate.features.api",
          "projects.bookmate.features.theme",
          "projects.bookmate.features.responsive"
        ]
      }
    ],

    screenshots: [
      {
        src: bookmateLogin,
        caption: "projects.bookmate.screenshots.login"
      },
      {
        src: bookmateDesktop,
        caption: "projects.bookmate.screenshots.booksDesktop"
      },
      {
        src: bookmateMobile,
        caption: "projects.bookmate.screenshots.booksMobile"
      },
      {
        src: bookmateAdd,
        caption: "projects.bookmate.screenshots.addQuote"
      },
      {
        src: bookmateTheme,
        caption: "projects.bookmate.screenshots.themeToggle"
      }
    ]
  },

  {
    slug: "freakyfashion",
    title: "Freaky Fashion",
    type: "solo",

    // preview image
    image: freakyfashionCard,

    shortDescription: "projects.freakyfashion.shortDescription",
    longDescription: "projects.freakyfashion.longDescription",

    tech: ["React", "Express", "TypeScript", "SQLite"],

    github: "https://github.com/Ritsumel/FreakyFashion-React.git",

    features: [
      {
        title: "projects.freakyfashion.sections.storefront",
        items: [
          "projects.freakyfashion.features.productListing",
          "projects.freakyfashion.features.search",
          "projects.freakyfashion.features.favorites",
          "projects.freakyfashion.features.cart",
          "projects.freakyfashion.features.responsive"
        ]
      },
      {
        title: "projects.freakyfashion.sections.admin",
        items: [
          "projects.freakyfashion.features.categoryManagement",
          "projects.freakyfashion.features.productCrud",
          "projects.freakyfashion.features.apiCrud"
        ]
      }
    ],

    screenshots: [
      {
        src: freakyfashionShowcase,
        caption: "projects.freakyfashion.screenshots.home"
      },
      {
        src: freakyfashionProductDetails,
        caption: "projects.freakyfashion.screenshots.productDetails"
      },
      {
        src: freakyfashionFavorites,
        caption: "projects.freakyfashion.screenshots.favorites"
      },
      {
        src: freakyfashionCart,
        caption: "projects.freakyfashion.screenshots.cart"
      },
      {
        src: freakyfashionCheckoutMobile,
        caption: "projects.freakyfashion.screenshots.checkout"
      },
      {
        src: freakyfashionAdminProductList,
        caption: "projects.freakyfashion.screenshots.adminProducts"
      },
      {
        src: freakyfashionNewCategory,
        caption: "projects.freakyfashion.screenshots.adminCategory"
      },
      {
        src: freakyfashionAdminProductDetails,
        caption: "projects.freakyfashion.screenshots.adminDetails"
      }
    ]
  },

  {
    slug: "levelup",
    title: "LevelUp",
    type: "group",

    role: "projects.levelup.role",

    members: [
      {
        name: "Martin Johansson",
        github: "https://github.com/mfjohnsson",
      },
      {
        name: "Amir Mashaallahi",
        github: "https://github.com/gudenvill"
      },
      {
        name: "Abdelrahman El Ryan Osman Abdelghafour",
        github: "https://github.com/Dalbonden"
      }
    ],

    // preview image
    image: levelupCard,

    shortDescription: "projects.levelup.shortDescription",
    longDescription: "projects.levelup.longDescription",

    tech: ["Express", "EJS", "SQLite"],

    github: "https://github.com/Ritsumel/LevelUp",

    features: [
      {
        title: "",
        items: [
          "projects.levelup.features.auth",
          "projects.levelup.features.roles",
          "projects.levelup.features.reviews",
          "projects.levelup.features.likes",
          "projects.levelup.features.database",
          "projects.levelup.features.ssr",
          "projects.levelup.features.api",
          "projects.levelup.features.responsive"
        ]
      }
    ],

    workflow: [
      "projects.levelup.workflow.scrum",
      "projects.levelup.workflow.backlog",
      "projects.levelup.workflow.codeReviews",
      "projects.levelup.workflow.git"
    ],

    screenshots: [
      {
        src: levelupLogin,
        caption: "projects.levelup.screenshots.login"
      },
      {
        src: levelupHome,
        caption: "projects.levelup.screenshots.home"
      },
      {
        src: levelupHomeMobile,
        caption: "projects.levelup.screenshots.homeMobile"
      },
      {
        src: levelupGameDetails,
        caption: "projects.levelup.screenshots.gameDetails"
      },
      {
        src: levelupReviews,
        caption: "projects.levelup.screenshots.reviews"
      }
    ]
  }
]