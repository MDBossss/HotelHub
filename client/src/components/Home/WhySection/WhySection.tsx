import { BiSupport } from 'react-icons/bi'
import { GiCat } from 'react-icons/gi'
import { MdOutlinePayments } from 'react-icons/md'
import { TbListSearch } from 'react-icons/tb'

const WhySection = () => {
  return (
    <div className="why">
            <div className="top">
                <h1>Why Choose Us</h1>
                <p>The main reason is because our competitors have disgusting sites, but we can't write that here, so the text here will be different.</p>
            </div>
            <div className="bottom">
                <div className="card">
                    <div className="icon">
                        <MdOutlinePayments/>
                    </div>
                    <h2>Payment methods</h2>
                    <p>We have a lot of them, from cryptocurrencies to barter for potatoes</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <TbListSearch/>
                    </div>
                    <h2>Simple search process</h2>
                    <p>We checked it out, even the kid did it, but it was my mom's friend's son</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <BiSupport/>
                    </div>
                    <h2>24/7 Support</h2>
                    <p>Is there something you don't understand? Feel free to call us. Phone number in the footer</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <GiCat/>
                    </div>
                    <h2>We are nice</h2>
                    <p>Fantasy is over, there will be something really convincing here</p>
                </div>
            </div>
        </div>
  )
}

export default WhySection