import { EmailInput, Select } from "../components/custom/formControls";

export default function Footer() {
  const footerLinks = [
    "About Us",
    "Careers",
    "Terms Of Use",
    "Privacy Statement",
    "Give Us Feedback",
    "Partner With Us",
    "Rewards Program",
    "Partners",
    "Legal",
    "Privacy Policy",
    "Customer Service Help",
    "Your Account",
    "Camping Locations",
    "Activities",
    "Hire Equipment",
    "Blogs",
  ];

  const companies = [
    "images/pesa.png",
    "images/discover.png",
    "images/visa.png",
    "images/paypal.png",
    "images/mastercard.png",
  ];
  return (
    <div>
      <div className="bg-white text-black py-16 container px-3 sm:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Need Travelsy Help?</h3>
          <p className="text-[13px]">Got Questions? Call us 24/7!</p>
          <p className="text-[13px]">Call Us: +254 716909 815</p>
          <p className="text-[13px]">
            Email Us:{" "}
            <a href="mailto:info@travelsy.com" className="text-blue-600">
              info@travelsy.com
            </a>
          </p>

          <h4 className="font-semibold mt-4">Contact Info:</h4>
          <p className="text-[13px]">
            2nd Floor, Fedha Plaza, <br /> Westlands, Nairobi, Kenya.
          </p>
          <p className="text-[13px]">
            P.O Box 7231-00300 <br /> Nairobi, Kenya
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          {footerLinks.slice(0, 6).map((link) => (
            <p key={link} className="text-[13px]">{link}</p>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Other Services & Support</h3>
          {footerLinks.slice(6, 12).map((link) => (
            <p key={link} className="text-[13px]">{link}</p>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          {footerLinks.slice(12).map((link) => (
            <p key={link} className="text-[13px]">{link}</p>
          ))}
        </div>

        <div className="flex flex-col items-start w-full col-span-2 sm:col-span-1">
          <h3 className="font-semibold mb-2">Mailing List</h3>
          <p className="mb-2 text-[13px]">
            Sign Up for our mailing lists and get the latest offers and
            promotions straight in your inbox.
          </p>
          <EmailInput />
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#e4e4e4]"></div>
      <div className="container px-3 sm:px-0 mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between py-7 items-start lg:items-center">
        <h2 className="logo">Travelsy</h2>
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 lg:gap-5 items-start md:items-center w-full lg:w-fit justify-between ">
          <div className="flex gap-5 h-fit">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company}
                alt="Company Logo"
                className="object-contain"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Select
              placeholder="English (United States)"
              icon={
                <img
                  src={"/images/usa.png"}
                  alt="US Flag"
                  className="w-full h-full object-contain rounded-full"
                />
              }
              options={[
                { label: "English (United States)", value: "en-US" },
                { label: "French (France)", value: "fr-FR" },
              ]}
            />
            <Select
              placeholder="KES"
              options={[
                { label: "KES", value: "KES" },
                { label: "USD", value: "USD" },
                { label: "EUR", value: "EUR" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#e4e4e4]"></div>
      <div className="flex sm:flex-row text-[13px] flex-col justify-between items-center py-7 container mx-auto px-3 sm:px-0">
        <p>Copyright © 2019 Travelsy Ltd. All rights reserved</p>
        <p>Made in Kenya by Ralak</p>
      </div>
    </div>
  );
}
