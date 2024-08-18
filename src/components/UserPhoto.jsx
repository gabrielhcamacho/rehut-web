import Image from "next/image"

export default function UserPhoto({size, src, ...rest}){
    return(
        <Image
        src={src ? src : ''}
        width={size}
        height={size}
        alt="imagem do vendedor"
        layout="fixed"
        className="rounded-full border-2 border-gray-dark"
        {...rest}
        />
    )
}