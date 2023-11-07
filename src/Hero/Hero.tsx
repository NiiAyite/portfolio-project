import Walmart from '/assets/Logos/Walmart.svg'
import JP_Morgan from '/assets/Logos/JP Morgan.svg'
import Visa from '/assets/Logos/Visa.svg'
import Tinder from '/assets/Logos/Tinder.svg'
import Samsung from '/assets/Logos/Samsung.svg'
import Verizon from '/assets/Logos/Verizon.svg'


export const Hero = () => {
    return (
        <header className="mx-5 sm:mx-10 md:mx-20 my-24">
            <h1 className="prata text-4xl sm:text-5xl md:text-7xl mb-4 leading-10">
                Helping companies build <br /> better, scalable software.
            </h1>
            <p className="inter text-zinc-300 md:w-[50rem]">Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.</p>

            <div className="sponsors flex flex-wrap justify-between items-center mt-20">
                <img src={ Walmart } alt='Walmart' />
                <img src={ JP_Morgan } alt='JP Morgan' className='md:ml-0 sm:ml-10' />
                <img src={ Visa } alt='Visa' className='md:ml-0 sm:ml-10' />
                <img src={ Tinder } alt='Tinder' className='md:ml-0 sm:ml-10' />
                <img src={ Samsung } alt='Samsung' className='md:m-0 ml-10 mt-5' />
                <img src={ Verizon } alt='Verizon' className='md:m-0 ml-10 mt-5' />
            </div>
        </header>
    )
}

