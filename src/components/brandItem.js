const BrandItem = ({ image }) => {
    return (
        <div className="p-3 bg-white rounded-xl flex items-center justify-center space-x-4 shadow-xl mx-4 h-14">
            <img className="h-full w-auto" src={'/images/logos/' + image} alt="logo" />
        </div>
    );
}

export default BrandItem;