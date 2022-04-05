const BrandItem = () => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4 shadow-xl">
            <div className="shrink-0">
                <img className="h-12 w-12" src="/images/whatsapp.png" alt="hola" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">Empresa gramde</div>
                <p className="text-slate-500 text-sm">Empresa grande</p>
            </div>
        </div>
    );
}

export default BrandItem;