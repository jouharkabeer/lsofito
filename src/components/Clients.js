import lumber from '../images/clients/Lumberworld.svg'
import midas from '../images/clients/midas.svg'
import kea from '../images/clients/KEAcolor.png'
const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const imagesy = {
    height: '100px'
}

const Clients = () => {
    return (
        <div className="mt-8 ">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-lsofito-blue uppercase font-bold">Our Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-400'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-lsofito-blue">Some of our clients.</h2>
                    </div>

                <div className="p-12" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                          <a href='https://keablr.in/'><img src={kea} alt="client" style={imagesy}/></a> 
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                           <a href='https://lumberworldllc.com/'> <img src={lumber} alt="client" style={imagesy}/>  </a>                          
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                        <a href="https://midasgroups.co.in/"  ><img src={midas} alt="client" style={imagesy}/>  </a>                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;