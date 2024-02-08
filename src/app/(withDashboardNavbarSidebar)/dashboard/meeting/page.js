import Meetings from "./Components/Meetings";

const Meeting = () => {
    return (
        <section className="px-4">
            <div className="grid grid-cols-7 h-[89vh]">
                <div className="col-span-2 border-2 rounded-lg p-6 h-full ">
                    <Meetings />
                </div>
                <div className="col-span-5"></div>
            </div>
        </section>
    );
};

export default Meeting;
