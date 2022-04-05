const Footer = () => {
    return (

        <div className="w-screen">
            <footer className="bg-gray-900">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col sm:flex-row">
                        <div className="flex-1">
                            <h3 className="text-white font-semibold text-lg mb-2">
                                About
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas eget nisl id libero tincidunt sodales.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;