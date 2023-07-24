import {RiStarFill,RiStarHalfSFill, RiStarLine} from 'react-icons/ri';
import {Adidas_ZK_0,Adidas_ZK_1,Adidas_ZK_2,Adidas_ZK_3,Adidas_ZK_4,
        Air_Jordan_0,Air_Jordan_1,Air_Jordan_2,Air_Jordan_3,Air_Jordan_4,
        Highlight_Hammer_0,Highlight_Hammer_1,Highlight_Hammer_2,Highlight_Hammer_3,Highlight_Hammer_4,
        KING_ULTIMATE_0,KING_ULTIMATE_1,KING_ULTIMATE_2,KING_ULTIMATE_3,KING_ULTIMATE_4,
        Nike_Phantom_0,Nike_Phantom_1,Nike_Phantom_2,Nike_Phantom_3,Nike_Phantom_4,
        Nike_Superfly_0, Nike_Superfly_1,Nike_Superfly_2,Nike_Superfly_3,Nike_Superfly_4,
        Nike_Vapor_0,Nike_Vapor_1,Nike_Vapor_2,Nike_Vapor_3,Nike_Vapor_4,
        AUDAZO_0,AUDAZO_1,AUDAZO_2,AUDAZO_3,AUDAZO_4,
        Spotlight_Gradient_0,Spotlight_Gradient_1,Spotlight_Gradient_2,Spotlight_Gradient_3,Spotlight_Gradient_4,
        Boys_Leadoff_0,Boys_Leadoff_1,Boys_Leadoff_2,Boys_Leadoff_3,Boys_Leadoff_4,
        Nike_Alpha_0,Nike_Alpha_1,Nike_Alpha_2,Nike_Alpha_3,Nike_Alpha_4,
        Mizuno_0,Mizuno_1,Mizuno_2,Mizuno_3,Mizuno_4,
        Future_Play_0,Future_Play_1,Future_Play_2,Future_Play_3,Future_Play_4,
        Vapor_Edge_0,Vapor_Edge_1,Vapor_Edge_2,Vapor_Edge_3,Vapor_Edge_4,
        Nike_Jr_0,Nike_Jr_1,Nike_Jr_2,Nike_Jr_3,Nike_Jr_4,
        Blur_Smoke_0,Blur_Smoke_1,Blur_Smoke_2,Blur_Smoke_3,Blur_Smoke_4,
      
        } from '../index'

const logoStar = <RiStarFill   color='000' className='star' />
const logoHalf = <RiStarHalfSFill  color='000'  className='star'/>
const logoEmpty = <RiStarLine color='hsl(227deg 12% 62%)' className='star' />


const dataBS = [
    {
        id:"1",
        imageprev0:KING_ULTIMATE_0,
        imageprev1:KING_ULTIMATE_1,
        imageprev2:KING_ULTIMATE_2,
        imageprev3:KING_ULTIMATE_3,
        imageprev4:KING_ULTIMATE_4,
        image:KING_ULTIMATE_0,
        name:"KING ULTIMATE FGAG Football Boots",
        star:[logoStar,logoStar,logoStar,logoStar,logoHalf],
        review:"25",
        price:"78670",
        oldprice:"",
        year:"2022",
        delivery: "600",

    }
    ,{
        id:"2",
        imageprev0:Nike_Superfly_0,
        imageprev1:Nike_Superfly_1,
        imageprev2:Nike_Superfly_2,
        imageprev3:Nike_Superfly_3,
        imageprev4:Nike_Superfly_4,
        image:Nike_Superfly_0,
        name:"Nike Mercurial Superfly 8 FG",
        star:[logoStar,logoStar,logoStar,logoStar,logoStar],
        review:"76",
        price:"66200",
        oldprice:"132400",
        delivery: "600",

        year:"2023"

    },{
        id:"3",
        imageprev0:Adidas_ZK_0,
        imageprev1:Adidas_ZK_1,
        imageprev2:Adidas_ZK_2,
        imageprev3:Adidas_ZK_3,
        imageprev4:Adidas_ZK_4,
        image:Adidas_ZK_0,
        name:"Adidas ZK 1K Boost",
        type:"Running Shoes",
        star:[logoStar,logoStar,logoStar,logoHalf, logoEmpty],
        review:"13",
        price:"40000",
        oldprice:"",
        delivery: "600",
        year:"2022"

    },{  
        id:"4",
        imageprev0:Nike_Vapor_0,
        imageprev1:Nike_Vapor_1,
        imageprev2:Nike_Vapor_2,
        imageprev3:Nike_Vapor_3,
        imageprev4:Nike_Vapor_4,
        image:Nike_Vapor_0,
        name:"Nike Mercurial Vapor 14 Elitye",
        type:"All-Ground Cleats",
        star:[logoStar,logoStar,logoStar,logoEmpty, logoEmpty],
        review:"8",
        price:"122400",
        oldprice:"",
        delivery: "600",
        year:"2021"

    }
]

const dataNA = [
    {
        id:"5",
        imageprev0:Highlight_Hammer_0,
        imageprev1:Highlight_Hammer_1,
        imageprev2:Highlight_Hammer_2,
        imageprev3:Highlight_Hammer_3,
        imageprev4:Highlight_Hammer_4,
        image:Highlight_Hammer_0,
        name:"Men's UA Highlight Hammer",
        type:"All-Ground Cleats",
        price:"86200",
        delivery: "600",
        year:"2023"

    },{
        id:"6",
        imageprev0:Air_Jordan_0,
        imageprev1:Air_Jordan_1,
        imageprev2:Air_Jordan_2,
        imageprev3:Air_Jordan_3,
        imageprev4:Air_Jordan_4,
        image:Air_Jordan_0,
        name:"Air Jordan XXXV Luka",
        type:"Indoor Court",
        price:"66200",
        delivery: "600",
        year:"2021"

    },{
        id:"7",
        imageprev0:Nike_Phantom_0,
        imageprev1:Nike_Phantom_1,
        imageprev2:Nike_Phantom_2,
        imageprev3:Nike_Phantom_3,
        imageprev4:Nike_Phantom_4,
        image:Nike_Phantom_0,
        name:"Nike Phantom GT2 Club IC",
        type:"Running Shoes",
        price:"40000",
        delivery: "600",
        year:"2021"

    },{
        id:"8",
        imageprev0:AUDAZO_0,
        imageprev1:AUDAZO_1,
        imageprev2:AUDAZO_2,
        imageprev3:AUDAZO_3,
        imageprev4:AUDAZO_4,
        image:AUDAZO_0,
        name:"New Balance AUDAZO V5+ CONTROL JNR",
        type:"Kid's Shoes",
        price:"25856",
        delivery: "600",
        year:"2022"

    },{
        id:"9",
        imageprev0:Spotlight_Gradient_0,
        imageprev1:Spotlight_Gradient_1,
        imageprev2:Spotlight_Gradient_2,
        imageprev3:Spotlight_Gradient_3,
        imageprev4:Spotlight_Gradient_4,
        image:Spotlight_Gradient_0,
        name:"Men's UA Spotlight Lux MC LE Gradient",
        type:"Cleats",
        price:"40000",
        delivery: "600",
        year:"2023"

    },{
        id:"10",
        imageprev0:Boys_Leadoff_0,
        imageprev1:Boys_Leadoff_1,
        imageprev2:Boys_Leadoff_2,
        imageprev3:Boys_Leadoff_3,
        imageprev4:Boys_Leadoff_4,
        image:Boys_Leadoff_0,
        name:"Boys UA Leadoff Low RM Jr",
        type:"Indoor Court Shoes",
        price:"16200",
        delivery: "600",
        year:"2022"

    },{
        id:"11",
        imageprev0:Nike_Alpha_0,
        imageprev1:Nike_Alpha_1,
        imageprev2:Nike_Alpha_2,
        imageprev3:Nike_Alpha_3,
        imageprev4:Nike_Alpha_4,
        image:Nike_Alpha_0,
        name:"Nike Alpha Menace Pro 3",
        type:"Women's Cleats",
        price:"58800",
        delivery: "600",
        year:"2023"
    },{
        id:"12",
        imageprev0:Mizuno_0,
        imageprev1:Mizuno_1,
        imageprev2:Mizuno_2,
        imageprev3:Mizuno_3,
        imageprev4:Mizuno_4,
        image:Mizuno_0,
        name:"Mizuno Morelia Neo III Beta Elite football boots",
        type:"Firm-Ground Shoes",
        price:"121300",
        delivery: "600",
        year:"2023"
    },{
        id:"13",
        imageprev0:Future_Play_0,
        imageprev1:Future_Play_1,
        imageprev2:Future_Play_2,
        imageprev3:Future_Play_3,
        imageprev4:Future_Play_4,
        image:Future_Play_0,
        name:"FUTURE Play FGAG Football Boots Youth",
        type:"Cleats",
        price:"40000",
        delivery: "600",
        year:"2023"

    },{
        id:"14",
        imageprev0:Vapor_Edge_0,
        imageprev1:Vapor_Edge_1,
        imageprev2:Vapor_Edge_2,
        imageprev3:Vapor_Edge_3,
        imageprev4:Vapor_Edge_4,
        image:Vapor_Edge_0,
        name:"Nike Vapor Edge Elite 360",
        type:"Indoor Court Shoes",
        price:"16200",
        delivery: "600",
        year:"2022"

    },{
        id:"15",
  
        imageprev0:Nike_Jr_0,
        imageprev1:Nike_Jr_1,
        imageprev2:Nike_Jr_2,
        imageprev3:Nike_Jr_3,
        imageprev4:Nike_Jr_4,
        image:Nike_Jr_0,
        name:"Nike Jr Mercurial Superfly 8 Academy IC",
        type:"Women's Cleats",
        price:"58800",
        delivery: "600",
        year:"2023"
    },{
        id:"16",
        imageprev0:Blur_Smoke_0,
        imageprev1:Blur_Smoke_1,
        imageprev2:Blur_Smoke_2,
        imageprev3:Blur_Smoke_3,
        imageprev4:Blur_Smoke_4,
        image:Blur_Smoke_0,
        name:"Men's UA Blur Smoke 2-0 MC",
        type:"Firm-Ground Shoes",
        price:"121300",
        delivery: "600",
        year:"2023"
    }
]

export  {dataBS, dataNA}
