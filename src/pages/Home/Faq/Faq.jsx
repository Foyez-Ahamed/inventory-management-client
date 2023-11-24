import SectionHeading from "../../../components/SectionHeading/SectionHeading";

import faq from "../../../assets/Faq/faq.png"

const Faq = () => {
  return (
    <div>

      <div>
        <SectionHeading title={'Frequently Asked Any Questions'} details={'Know something about our shop here ! Your all favorite collection already here! '}></SectionHeading>
      </div>

      <section className="flex flex-col lg:flex-row justify-between gap-6 mt-8">
        <div className="flex-1">
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            How can I add new clothing items to my inventory?
            </div>
            <div className="collapse-content">
              <p>To add new items, log in to your account, navigate to the Product Management section, and select Add New Item. Fill in the required details such as product name, description, category, quantity, and price. You can also upload images for a visual representation.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Can I track the popularity of specific clothing items?
            </div>
            <div className="collapse-content">
              <p>Yes, our system provides detailed sales analytics. You can monitor the popularity of each item by accessing the Sales Tracking section. This will give you insights into which clothing items are trending, helping you make informed inventory decisions.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How do I apply discounts to certain fashion categories?
            </div>
            <div className="collapse-content">
              <p>Easily manage discounts by going to the Discount Management section. Choose the category you want to apply a discount to, set the discount type (percentage or fixed amount), and specify the duration. The system will automatically apply the discount during the specified period.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Can I generate professional invoices for customer purchases?
            </div>
            <div className="collapse-content">
              <p>Absolutely. Invoices are generated automatically for each customer purchase. Simply go to the Invoice Generation section to view and download invoices. Invoices include detailed information such as product names, quantities, prices, discounts, and total amounts.</p>
            </div>
          </div>


          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How can I stay informed about low stock levels?
            </div>
            <div className="collapse-content">
              <p>Our system provides real-time alerts for low stock levels. Navigate to the Inventory Monitoring section to receive notifications when stock quantities fall below a specified threshold. This proactive feature ensures you can replenish inventory in a timely manner.</p>
            </div>
          </div>

        </div>

        <div className="flex-1">
            <img src={faq} alt="faq" />
        </div>
      </section>
    </div>
  );
};

export default Faq;
