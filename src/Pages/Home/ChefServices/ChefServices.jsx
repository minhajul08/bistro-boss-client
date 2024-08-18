import chef from '../../../assets/home/chef-service.jpg'

const ChefServices = () => {
    return (
        <div className='relative '>
            <div >
                <img src={chef} alt="" />
            </div>
            <div className='absolute bottom-32 bg-white   w-[700px] left-72 p-10 text-center'>
                <h1 className='text-black text-4xl mb-1'>Bistro Boss</h1>
                <p className='text-base font-normal'> Chief Services delivers top-tier solutions with efficiency and expertise. We prioritize client satisfaction through innovative strategies, ensuring quality outcomes. Trust us to handle your challenges with professionalism and reliability. </p>
            </div>
        </div>
    );
};

export default ChefServices;