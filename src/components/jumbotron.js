import Image from 'next/image';

const Jumbotron = () => {
    return (
        <div
            className="flex flex-row w-full items-center pr-5"
        >
            <div className='w-full flex justify-center'>
                <img
                    src="/images/foto1.png"
                    className='w-auto h-[80vh]'
                    alt="logotipo"
                />
            </div>
            <div className='flex flex-col items-end space-y-3 font-bold pr-20'>
                <h2 className='text-5xl text-slate-600 pb-5'>Hola! soy</h2>
                <h1 className="text-8xl text-red-500 flex">
                    <p>JHONATAN</p>
                    <svg version="1.0"
                        className='w-6 pt-2' viewBox="0 0 277.000000 768.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
                            fill="#ef4444" stroke="none">
                            <path d="M1125 7544 c-267 -21 -445 -83 -555 -194 -67 -67 -103 -133 -132
    -237 -19 -73 -21 -109 -26 -530 l-4 -453 1032 0 1031 0 -4 458 c-4 497 -6 519
    -64 640 -39 80 -140 179 -227 220 -75 36 -173 64 -288 82 -70 11 -661 22 -763
    14z m780 -563 c28 -6 70 -21 94 -34 62 -31 81 -73 88 -192 l6 -95 -647 0 -646
    0 0 89 c0 49 5 102 11 118 26 70 92 105 229 122 102 13 801 6 865 -8z"/>
                            <path d="M410 5595 l0 -265 1030 0 1030 0 0 265 0 265 -1030 0 -1030 0 0 -265z" />
                            <path d="M410 4700 l0 -380 23 -5 c12 -2 281 -50 597 -106 316 -55 582 -103
    590 -106 23 -9 -2 -14 -627 -124 l-583 -103 0 -383 0 -383 1030 0 1030 0 0
    250 0 250 -767 0 c-421 0 -763 3 -759 7 3 4 347 70 764 148 l757 141 3 192 c1
    106 0 192 -2 192 -10 0 -1512 281 -1521 284 -5 3 335 5 758 5 l767 1 0 250 0
    250 -1030 0 -1030 0 0 -380z"/>
                            <path d="M1455 2766 c-545 -133 -1002 -246 -1018 -249 l-27 -7 0 -335 0 -335
    22 -5 c13 -3 475 -116 1028 -250 552 -135 1005 -245 1007 -245 2 0 3 127 3
    283 l0 283 -157 23 c-87 12 -168 25 -180 28 -23 5 -23 6 -23 218 0 202 1 213
    19 218 11 3 92 15 180 28 l161 23 0 283 c0 220 -3 283 -12 282 -7 -1 -458
    -110 -1003 -243z m255 -592 c0 -143 0 -144 -22 -144 -13 0 -209 32 -437 70
    -362 61 -452 79 -415 80 5 1 200 34 434 74 234 40 428 71 433 69 4 -2 7 -69 7
    -149z"/>
                            <path d="M410 1267 l0 -292 360 -100 c198 -55 360 -102 360 -105 0 -4 -161
    -51 -357 -106 l-358 -100 -3 -282 -2 -282 27 0 c16 0 295 113 622 250 l595
    250 408 0 408 0 0 265 0 265 -398 0 -398 0 -585 246 c-321 135 -605 254 -631
    265 l-48 19 0 -293z"/>
                        </g>
                    </svg>
                </h1>
                <div className='text-2xl italic font-semibold text-slate-400 mb-5 flex flex-col items-end border-4 border-transparent border-r-slate-400 border-y-none  pr-2 mr-5'>
                    <h4>Diseñador y Desarrollador Web</h4>
                    <h4>en crecimiento</h4>
                </div>

                <div className='flex flex-row space-x-2 mr-5'>
                    <button className='rrss'>f</button>
                    <button className='rrss'>i</button>
                    <button className='rrss'>g</button>
                </div>
            </div>


        </div>
    );
}

export default Jumbotron;