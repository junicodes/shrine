import { offlineImage } from "@/constants/images";
import React from "react";
import { Image} from "react-native";


const LogoTitle = (props: any) => {
    return <Image className={`w-28 h-9`} source={offlineImage.headerLogo} />;
};
export default LogoTitle;