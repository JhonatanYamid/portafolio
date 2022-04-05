import Image from 'next/image';

const About = () => {
    return (
        <div className="flex flex-row  items-center pr-5 pl-10 justify-around">
            
            <div className='flex flex-col w-2/5 text-slate-600'>
               <h3 className='font-bold text-3xl'>Resumen</h3>
               <h2 className='font-bold text-6xl text-red-500 pb-7'>Sobre mí</h2>
               <p className='font-semibold leading-10 text-lg text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam veritatis voluptas, distinctio maiores ut delectus aperiam fuga sint eius itaque dignissimos voluptatum soluta repellendus dolorum repellat! Animi, ullam ducimus?</p>
            </div>
            <div className=''>
                <img
                    src="/images/foto2.png"
                    className='w-auto h-[80vh]'
                    alt="logotipo"
                />
            </div>

        </div>
    );
}

export default About;