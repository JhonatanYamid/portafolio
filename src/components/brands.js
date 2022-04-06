import Image from 'next/image';
import BrandItem from './brandItem';

const Brands = () => {
    return (
        <div className="flex flex-col items-center justify-center text-3xl font-bold text-slate-600 px-5">
            <h2>Empresas con las que he trabajado</h2>
            <div className="flex flex-row items-center justify-center space-x-10 pt-10">
                <BrandItem />
                <BrandItem />
                <BrandItem />
            </div>
        </div>
    );
}

export default Brands;