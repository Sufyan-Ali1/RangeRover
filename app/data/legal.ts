export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalDocument {
  title: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  sections: [
    {
      title: "Introduction",
      content: `This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.

Last updated: July 23, 2022`,
    },
    {
      title: "Interpretation and Definitions",
      content: `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Account means a unique account created for You to access our Service or parts of our Service.

Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Range Rover Garage.

Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.

Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

Personal Data is any information that relates to an identified or identifiable individual.

Service refers to the Website.

Website refers to RangeRoverGarage, accessible from https://rangerovergarage.co.uk`,
    },
    {
      title: "Collecting and Using Your Personal Data",
      content: `While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

• Email address
• Name and contact information
• Vehicle information
• Service requirements`,
    },
    {
      title: "Types of Data Collected",
      content: `Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.

Usage Data
Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.`,
    },
    {
      title: "Tracking Technologies and Cookies",
      content: `We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.

We use both Session and Persistent Cookies for the purposes set out below:

• Necessary / Essential Cookies - Session Cookies essential to provide You with services
• Cookies Policy / Notice Acceptance Cookies - Persistent Cookies to identify if users have accepted cookies
• Functionality Cookies - Persistent Cookies to remember Your choices and preferences`,
    },
    {
      title: "Use of Your Personal Data",
      content: `The Company may use Personal Data for the following purposes:

• To provide and maintain our Service, including to monitor the usage of our Service
• To manage Your Account and provide access to different functionalities
• For the performance of a contract for products or services You have purchased
• To contact You by email, telephone calls, SMS, or other equivalent forms
• To provide You with news, special offers and general information
• To manage Your requests
• For business transfers and evaluating mergers or acquisitions
• For other purposes such as data analysis and improving our Service`,
    },
    {
      title: "Sharing Your Information",
      content: `We may share Your personal information in the following situations:

• With Service Providers - to monitor and analyze the use of our Service
• For business transfers - in connection with mergers or acquisitions
• With Affiliates - where we require those affiliates to honor this Privacy Policy
• With business partners - to offer You certain products, services or promotions
• With Your consent - for any other purpose with Your explicit consent`,
    },
    {
      title: "Retention of Your Personal Data",
      content: `The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.

Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or improve the functionality of Our Service.`,
    },
    {
      title: "Transfer of Your Personal Data",
      content: `Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located.

The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.`,
    },
    {
      title: "Security of Your Personal Data",
      content: `The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.`,
    },
    {
      title: "Children's Privacy",
      content: `Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.`,
    },
    {
      title: "Links to Other Websites",
      content: `Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site.

We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.`,
    },
    {
      title: "Changes to this Privacy Policy",
      content: `We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, You can contact us:

By email: sales@rangerovergarage.co.uk
Through our website contact form`,
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms and Conditions",
  sections: [
    {
      title: "Introduction",
      content: `Range Rover Garage delivers top-notch service to keep your vehicle in prime condition. Visit us for expert care and maintain peak performance effortlessly.

TERMS OF BUSINESS / RANGE ROVER GARAGE`,
    },
    {
      title: "Agreement to Terms",
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: "Definitions and Interpretation",
      content: `In these terms unless the context shall require otherwise:

"Company" means the company by whom this form is used and whose name and registered office is detailed overleaf and its successors and assigns.

"Completion" means the date of the Company's notice to the Customer that Work has been completed or the date Goods are supplied.

"Contract" means the contract between the Company and the Customer for the sale or supply of Work and/or Goods.

"Customer" means the person, firm or company at whose request the Work is to be performed or Goods supplied.

"Estimate" means an estimate in writing given by the Company to the Customer.

"Goods" means any goods or replacements to be supplied by the Company under the Contract.

"Work" means any works to be performed on a Vehicle at the Customer's request whether by way of repairs, servicing, fitting, modification or otherwise.`,
    },
    {
      title: "Formation of Contract",
      content: `The Customer's request to the Company to carry out Work or supply Goods is an offer to enter into a contract upon these terms. Acceptance occurs and the Contract is formed upon the first of the following to occur:

• The Company accepting the Customer's duly signed authority to proceed with Work
• The Customer submitting a quote request through the Company website
• The Company accepting the Customer's authorisation via telephone, email or other communication
• The Company commencing the Work
• The Company issuing an acknowledgement of the Order signed and dated

Loss of earnings/Damages of any sort are not covered and Range Rover Garage does not take responsibility in any part of this contract which are excluded from any warranty issued to the customer.

Any vehicles worked on which have outstanding finance will not be covered in any form of liabilities with Range Rover Garage.`,
    },
    {
      title: "Customer's Insurer",
      content: `In the event the Company carries out Work and/or supplies Goods on the authority of the Customer's insurer, the Customer's insurer will be deemed to be the Customer.

Vehicles are left at our premises for work at the customers own risk. Range Rover Garage does not take any responsibility for any form of loss. It is the customer's discretion to ensure they have their vehicle covered whilst being repaired by the company.`,
    },
    {
      title: "Estimates and Quotation",
      content: `Any Estimate is a considered approximation of the likely costs of Work and/or Goods. Estimates do not constitute an offer by the Company and are valid for seven (7) days from the date stated thereon unless otherwise agreed in writing.

If the Customer delivers the Vehicle to the Company for the purposes of an Estimate being prepared and does not either give instructions for carrying out of the Work or collect the Vehicle within seven (7) days, the Company shall be entitled to store the Vehicle and charge the Customer for storage costs.`,
    },
    {
      title: "Price and Variation",
      content: `Prices stated in any Estimate or communicated to the Customer are based on the prices current at the date of the Estimate or communication.

The Company reserves the right to vary the Price by any amount attributable to a change in the Customer's instructions or any variation in cost.

For all works carried out by the company, the customer will be charged at £75 per hour (excluding VAT) unless stated otherwise by the company. This hourly rate applies to all labour costs such as engine removals, dismantling, rebuilding, fitting and any other work required.`,
    },
    {
      title: "Time for Completion",
      content: `Dates and times given for completion of Work and/or delivery of Goods are Approximate/estimates only. In relation to this Condition time is not of the essence.

The Company will use reasonable endeavors to perform Work or supply Goods within the time specified to the Customer. The Company may suspend or delay delivery and shall not be liable for any loss, damage or delay occasioned by failure to deliver on the estimated date.`,
    },
    {
      title: "Completion and Payment",
      content: `Unless otherwise expressly agreed in writing:

• Delivery of Goods shall be at the Company's premises
• Payment of the Price shall be in either Debit card, Bacs Transfer or Cash
• Upon completion of Work, the Customer shall be obliged to pay for Work and Goods supplied
• The Customer will pay all amounts due before the Vehicle may be removed from the Company's premises
• Storage charges will be added to and form part of the Price

Interest will be charged on all sums due at the rate of 2% per annum above the base rate from the date on which payment fell due until payment.`,
    },
    {
      title: "Risk and Retention of Title",
      content: `Goods are at the risk of the Customer as soon as they are delivered by the Company.

Until the Company has received payment in full of all sums owed, legal and beneficial title to the Goods shall remain in the Company.

The Customer's power of possession and use of Retained Goods shall terminate forthwith on notice from the Company if the Company has reasonable doubts as to the ability or willingness of the Customer to pay.`,
    },
    {
      title: "Loss or Damage",
      content: `The customer is strongly advised to remove any items of property not related to the vehicle before delivering it to the company. The Company shall not be liable for loss or damage to any such item remaining in the Vehicle.`,
    },
    {
      title: "Replacement Parts",
      content: `All parts replaced during performance of Work, except those that have to be returned to manufacturers or suppliers under warranty, will be retained by the Company for return to the Customer upon collection of the Vehicle.

If the Customer does not ask to take possession of such replaced parts when collecting the Vehicle, replaced parts shall become the property of the Company.`,
    },
    {
      title: "Cancellation",
      content: `You may withdraw from the contract at any time after the product has been dispatched and you have received our email confirming your order but no later than 14 days after you receive the product.

Sending the notice of cancellation by email ensuring that you quote your name, address and order reference number.

Any items which have physically left the premises for dispatch will be subject to a cancellation fee which includes delivery charges and a restocking fee.`,
    },
    {
      title: "Sub-Contracting",
      content: `The Company shall be entitled to appoint sub-contractors for the performance of its obligations under the Contract.`,
    },
    {
      title: "Health & Safety",
      content: `Upon delivery of a Vehicle to the Company the Customer shall immediately inform the Company of any circumstances or matters known to him which render the Vehicle unsafe or in a hazardous condition.

The Company shall not be liable for any loss or damage suffered by the Customer through the Customer's failure to read and comply with instructions specified in technical notices.`,
    },
    {
      title: "Warranties",
      content: `The Company warrants Work  from defects for a period of six (6) months from Completion or until the Vehicle has covered 6000 miles (whichever occurs sooner).

If the 2000 Miles interim (Running In) service has not been carried out from us after covering this mileage then Warranty will be null and void.

The Company's liability for defective Work and/or Goods is limited to remedying the Work and/or supplying replacement parts and/or Goods.

Warranties do not cover damage arising out of normal deterioration, failure to follow the Company's instructions or improper handling of the Vehicle.

On all Re-Build Engines warranty will be void if vehicle has a tow bar found on it or if vehicle is used for towing. Warranty will be void if vehicle has been remapped or modified in any way.

Any work carried out with vehicles that have a LPG Kit fitted will not be covered in any form of warranty.`,
    },
    {
      title: "Warranty Conditions",
      content: `Warranties are not transferable.

Warranty covers Cylinder Head, Engine Block & Sump only - all ancillaries are excluded.

Vehicle recovery is not included under any circumstances.

Customer must allow Vehicle to idle for a minimum of five (5) minutes before setting off.

Customer must ensure the correct fuel is used for their Vehicle.

Customer must not exceed sixty (60) mph for the first two thousand (2,000) miles.

Customer must ensure Vehicle's engine oil and coolant levels are checked on a daily basis. Any signs of leakage must be reported to the Company immediately.

Customer must ensure the Vehicle has an interim service carried out by Range Rover Garage at two thousand (2,000) miles to validate the remainder of the warranty.

Customer must ensure the Vehicle is serviced every five thousand (5,000) miles or every six (6) months by Range Rover Garage after the interim service.`,
    },
    {
      title: "Force Majeure",
      content: `The Company shall not be liable to the Customer if unable to carry out any provision of the Contract for any reason beyond its control or owing to any inability to procure parts or materials required.

Should such contingency continue for more than one month, either party may cancel the Contract.`,
    },
    {
      title: "Governing Law",
      content: `English Law shall govern construction and operation of the Contract and the Customer agrees to submit to the exclusive jurisdiction of the English Courts.`,
    },
    {
      title: "Service and Repairs Terms",
      content: `In the event of a warranty claim, client must bring vehicle to Range Rover Garage for inspection and analysis.

The warranty does NOT include vehicle hire/lease charges, recovery charges etc.

Any warranty provided is non-transferable.

Damage caused by misuse, neglect and accident will invalidate the warranty.

Range Rover Garage does not cover any component which has been dismantled or tampered with.

Our warranty covers 'normal usage' and DOES NOT cover track/race usage, overloading due to excessive weight, driver misuse (i.e. over revving) and 'over usage'.

Our hourly rate remains at £75+vat in the workshops.

Clients must collect their vehicle within 3 days of completion of work otherwise daily storage charges of £35 per day will apply.`,
    },
    {
      title: "Engine Rebuilds and Reconditioned Engines",
      content: `In the event of an Engine failure a replacement Engine will be supplied.

Replacement or refund will only be given on the production of the original invoice.

Replacement or refund will only be given if the goods are returned in the same condition as they were supplied.

The warranty does NOT COVER any labour costs / charges involved with fitting, removal and / or changing of parts.

The warranty applies to the Bare Engine ONLY unless otherwise stated (i.e., it does not include ancillaries, service parts, etc.).

Engines must be correctly fitted with new cam and auxiliary belts, oil, oil filters, and spark plugs.

All engines are supplied 'bare' (unless otherwise stated). Fitters must be prepared that in certain cases, they may be required to swap over the sump, oil pick-up pipe, timing case cover etc.

Customers have up to 14 days from the transaction date to cancel their order. A 20% handling fee will be applied.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about these Terms and Conditions, please contact us:

By email: sales@rangerovergarage.co.uk
Through our website contact form`,
    },
  ],
};
