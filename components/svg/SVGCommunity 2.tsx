import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"
import { View } from "react-native"
import { useColorScheme } from "@/hooks/useColorScheme"
import { Colors } from "@/constants/Colors"

const SVGCommunity = (props: any) => {
    const colorScheme = useColorScheme();
    
    return (
        <View style={{backgroundColor: Colors[colorScheme ?? 'light'].svg}} 
            className={`p-3 rounded-full mb-4 border-t border-r ${props.focused ? 'border-[#761022]' : "border-gray-200"}`}>
            <Svg
            // @ts-ignore:
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill={props.fill}
            style={[{ marginBottom: -3, borderRadius: 5 }]}
            preserveAspectRatio="xMinYMin slice"
            viewBox="0 0 100 25"
            {...props}
        >
            <Path
                fill={props.fill}
                fillRule="evenodd"
                d="M13.5 13.146h.134l.299.001c2.282.015 7.496.246 7.496 3.78 0 3.512-5.033 3.74-7.46 3.756h-.9c-2.283-.015-7.499-.245-7.499-3.776 0-3.515 5.216-3.745 7.498-3.76h.433Zm0 1.773c-2.808 0-6.157.345-6.157 1.988 0 1.606 3.15 1.982 5.9 2.003h.258c2.808 0 6.155-.343 6.155-1.983 0-1.659-3.347-2.008-6.155-2.008Zm9.402-2.252c2.864.429 3.465 1.774 3.465 2.827 0 .643-.253 1.817-1.943 2.46a.887.887 0 0 1-.631-1.657c.801-.304.801-.641.801-.803 0-.518-.658-.88-1.956-1.073a.889.889 0 0 1-.746-1.01.892.892 0 0 1 1.01-.744Zm-17.794.744a.889.889 0 0 1-.746 1.01c-1.298.194-1.956.555-1.956 1.073 0 .162 0 .498.802.804a.886.886 0 1 1-.631 1.657C.886 17.31.633 16.135.633 15.494c0-1.052.601-2.398 3.466-2.827a.892.892 0 0 1 1.009.744ZM13.5.837c2.978 0 5.4 2.423 5.4 5.4 0 2.978-2.422 5.401-5.4 5.401h-.032a5.343 5.343 0 0 1-3.805-1.59A5.341 5.341 0 0 1 8.1 6.233a5.405 5.405 0 0 1 5.4-5.397Zm0 1.773c-2 0-3.627 1.628-3.627 3.627a3.585 3.585 0 0 0 1.047 2.56 3.589 3.589 0 0 0 2.55 1.068l.03.886v-.886c2 0 3.627-1.626 3.627-3.628 0-2-1.627-3.627-3.627-3.627Zm7.315-.615a4.268 4.268 0 0 1 3.587 4.227 4.305 4.305 0 0 1-3.688 4.236.887.887 0 0 1-.245-1.756 2.521 2.521 0 0 0 2.16-2.483 2.5 2.5 0 0 0-2.102-2.475.887.887 0 0 1 .288-1.75Zm-13.612.73a.887.887 0 0 1-.73 1.019A2.501 2.501 0 0 0 4.37 6.222a2.52 2.52 0 0 0 2.158 2.48.886.886 0 1 1-.245 1.756 4.304 4.304 0 0 1-3.686-4.234c0-2.11 1.51-3.888 3.587-4.23a.882.882 0 0 1 1.019.731Z"
                clipRule="evenodd"
            />
        </Svg>
        </View>
    )
}
const Memo = memo(SVGCommunity)
export default Memo
