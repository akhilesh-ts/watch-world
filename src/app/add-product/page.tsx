import AddForm from "@/component/AddForm";

const AddProductPage = () => {
  return (
    <div className="px-4 md:px-12 bg-[#F8F9FA] pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl  max-w-xl mx-auto">
        Add product page
      </h2>
      <AddForm/>
    </div>
  );
};

export default AddProductPage;
