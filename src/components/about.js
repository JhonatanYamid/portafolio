import Image from 'next/image';

const About = () => {
    return (
        <div className="flex flex-row flex-wrap-reverse md:flex-nowrap items-center px-16 md:pl-20 md:pr-5 justify-around space-x-5" id='about'>
            <div className='flex flex-col w-full md:w-3/5 text-slate-600 space-y-3'>
                <div>
                    <h3 className='font-bold text-3xl'>Experiencia</h3>
                    <h2 className='font-bold text-6xl text-red-500 pb-3'>+4 Años</h2>
                    <h3 className='font-bold text-xl'>En areas tales como CRM, E-Commerce, Inmobiliarias, Automatización de procesos etc.</h3>
                </div>
                <div className=''>
                    <ul className=' list-disc space-y-2 px-5 font-normal text-slate-500 text-sm leading-6 py-5'>
                        <li>
                            <span>Integró un chatbot utilizando las herramientas suministradas en la plataforma &apos;Meta for Developers&apos;, ofreciendo con esto disponibilidad de atención 24/7, además de un embudo de solicitudes, reduciendo así el trabajo de las áreas de atención</span>
                        </li>
                        <li>
                            <span>Implementó un pasarela de pagos integrada con un sistema de gestión de contenidos para una E-Commerce.</span>
                        </li>
                        <li>
                            <span>Ha creado soluciones para RRSS de empresas, utilizando la plataforma &apos;Meta for Business&apos;</span>
                        </li>
                        <li>
                            <span>Ha diseñado distintos tipos de landing pages, catálogos online y demás soluciones web para empresas, mejorando así la visibilidad y reputación online de las mismas</span>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-left'>
                    <a className="rounded px-5 btn-primary text-xl cursor-pointer" href="https://drive.google.com/file/d/1ImOP699a_sxsmjqCxFQMjImGAoohyRpm/view?usp=sharing/" target="_blank" rel="noopener noreferrer">
                        Descargar CV
                    </a>
                </div>
            </div>
            <div className='w-full md:w-3/5'>
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