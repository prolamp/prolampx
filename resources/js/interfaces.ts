// import React, {ReactNode} from "react";
// import {number} from "yup";

// export interface ButtonProps {
//     label: string;
//     type: any;
//     isLoading: boolean;
//     color?: any;
//     disabled?: boolean;
//     variant?: any;
//     styleClass?: string;
//     labelStyle?: string;
//     icon?: any;
//     iconAfter?: boolean;
//     handleButtonClick?: any;
// }

// export interface CardProps {
//     id: number;
//     heading: string;
//     meta: cardMeta[];
//     applicatants: string;
// }

import React from "react";
import {SxProps, Theme} from "@mui/system";

export interface handleCloseMenuProps {
    handleCloseNavMenu: () => void;
}
export interface MainSectionProps {
    backgroundImage?: string;
    backgroundColor?: string;
    fullSection?: boolean;
    children: React.ReactNode;
    sx?:SxProps<Theme>,
    className?: string;
    id?: string;
    overlayColor?: string;
}

export interface CustomSwiperSliderProps {
    autoplay?: boolean;
    pagination?: boolean;
    navigation?: boolean;
    loop?: boolean;
    slidesPerView?: number;
    breakpoints?: Record<number, { slidesPerView: number }>;
    children: React.ReactNode;
    className?: string;
}
// export interface MediaCardProps{
//     media:{
//         imageUrl?:string;
//         videoUrl?:string;
//         title?:string;
//     };
//     picture?:boolean;
//     video?:boolean;
// }


// export interface FaqProps {
//     id: number;
//     question: string;
//     answer: string;
//     created_at: string;
//     updated_at: string;
// }
