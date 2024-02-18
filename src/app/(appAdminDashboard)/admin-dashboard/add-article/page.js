const page = () => {
    return (
        <section>
            <h1 className="text-lg font-semibold">Add Article</h1>
            <div className="border-2 rounded-md p-8 mt-6">
                <div className="grid grid-cols-10">
                    <div className="col-span-3">Image</div>
                    <div className="col-span-7">INput</div>
                </div>
            </div>
        </section>
    );
};

export default page;
