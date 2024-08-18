

const SectionTitle = ({heading, subHeading}) => {
    
    return (
        <div className="text-center mx-auto w-3/12  my-5 ">
            <p className="text-[#D99904]"> ---{subHeading}--- </p>
            <h3 className="text-3xl border-y-4 my-3 py-3"> {heading} </h3>
        </div>
    );
};

export default SectionTitle;