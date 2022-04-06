import Image from 'next/image';

const About = () => {
    return (
        <div className="flex flex-row  items-center px-16 justify-around space-x-5">

            <div className='flex flex-col w-2/5 text-slate-600 space-y-10'>
                <div>
                    <h3 className='font-bold text-3xl'>Resumen</h3>
                    <h2 className='font-bold text-6xl text-red-500'>Sobre mí</h2>
                </div>

                <p className='font-semibold leading-10 text-lg text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam veritatis voluptas, distinctio maiores ut delectus aperiam fuga sint eius itaque dignissimos voluptatum soluta repellendus dolorum repellat! Animi, ullam ducimus?</p>
                <div className='flex justify-left'>
                    <a className="rounded px-5 btn-primary text-xl">
                        Descargar CV
                    </a>
                </div>
            </div>
            <div className='w-3/5'>
                <img
                    src="/images/jhonatan-2.png"
                    className='w-auto'
                    alt="logotipo"
                />
            </div>

        </div>
    );
}

export default About;