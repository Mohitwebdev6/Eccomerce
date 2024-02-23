import emptycartimage from '../../assets/emptycartimage.avif' 

export default function Cart(){
    return (
        <div className=" h-full w-full mt-28 flex justify-center items-center">
            <img className=""  src={emptycartimage} alt="cartImage" />
        </div>
    )
}