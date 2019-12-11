import React from 'react';
import ShowMoreText from 'react-show-more-text';
// import { Button, Modal} from 'react-bootstrap';
import './aboutus.scss';

const AboutUs = () => {
  return (
    <div className="burgain-outbox">
      <div className="img1"> 
        <img src={require('../imgages/aboutus1.png')} alt="aboutus1" /> 
      </div>
      <div className="img1"> 
        <img src={require('../imgages/aboutus2.png')} alt="aboutus2" /> 
      </div>
      <div className="texts" >
        <div className="about">
          <h3>ABOUT</h3>
          <p>Buying and selling something when you are a student can be hard. 
            That’s why we created BURGAIN - 
            a marketplace for BU community when buyers and sellers are verified 
            and you can safely meet on BU campus. Easy, fast and convenient!</p>
        </div>
        <div className="faq">
          <h3>FAQ</h3>
          <ShowMoreText>
            <p>Can I buy or sell something if I’m not BU student?
            <br/>- We are sorry! You must be BU student in order to do this. 
              Meanwhile we do our best to expand our service to other universities. 
              Please, check us again later!</p>

            <p>Is BURGAIN really free?
            <br/>Yes, BURGAIN is absolutely free to all BU students. 
              Buying, selling, comparing, contacting others is available to you at no charge! 
              We want you to save big money!</p>

            <p>When you’ll be open for other universities, too?
            <br/>We’re working on it! Hopefully, it will be in no time!</p>
          </ShowMoreText>
        </div>

        <div className="term">
          <h3>Terms and Conditions</h3>
          <ShowMoreText lines={8}>
            <p>Welcome to BURGAIN service! Please read these Terms of Service (the “Agreement”) carefully. 
              Your use of the BURGAIN website constitutes your consent to this Agreement.
            <br/>This Agreement is between you and BURGAIN concerning your use of or access to the BURGAIN website. 
              BURGAIN is referred to in this Agreement as “Company” or “we” or “us”, or “Site”. 
              Finally, this Agreement refers to Site, together with any materials and and services available therein, as the “Service.” 
            <br/>Please note that this Agreement hereby incorporates by reference any additional terms and conditions we post through the Service or otherwise make available to you.
            <br/>BY USING THE SERVICE, YOU AFFIRM THAT YOU ARE LEGALLY A BOSTON UNIVERSITY STUDENT.
            <br/>THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION PROVISION THAT, 
              AS FURTHER SET FORTH IN SECTION 19 BELOW, REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, 
              RATHER THAN JURY TRIALS OR ANY OTHER COURT PROCEEDINGS, OR CLASS ACTIONS OF ANY KIND</p>

            <p>1. Information Submitted Through the Service</p>
            <p>Your submission of information through the Service is governed by Company’s Privacy Policy. 
              You represent and warrant that any information you provide in connection with the Service, 
              including Listings and other Submissions (each, as defined below), is and will remain accurate and complete, 
              and that you will maintain and update such information as needed.</p>
            <p>2. Community Guidelines.</p>

            <p>You agree that you will comply with all of our Community Guidelines, as updated by us from time to time. 
              The Community Guidelines contain, among other things, our list of prohibited products, prohibited services and our rules of conduct.</p>
            
            <p>3. Registration; User Names and Passwords.</p>
            <p>You must provide your own @bu.edu email address for registration. 
              Failing to do so will prevent you from using our services. 
              You may need to register to use all or part of the Service. 
              We may reject, or require that you change, any user name, password or other information that you provide to us in registering. 
              Your user name and password are your account credentials and must be kept confidential. 
              You are responsible for any and all activity on any account you register using your account credentials. 
              You must immediately notify us if you believe that your account credentials have been compromised. 
              If you register using a social media network, you authorize us to access, use, disclose and retain, in accordance with our Privacy Policy, 
              the information that we receive from the social media network in connection with your registration.</p>
            <p>4. Listings.</p>
            <p>The Service includes a forum where users may post and browse listings for goods, , 
              real estate and services (each a “Listing”). Such Listings are provided by users, and not by us. 
              WE DO NOT SELL, RENT OR OTHERWISE MAKE AVAILABLE ANY GOODS, REAL ESTATE OR SERVICES. 
              WE ARE NOT RESPONSIBLE OR LIABLE FOR ANY SUCH LISTINGS, FOR ANY TRANSACTIONS LISTINGS (EXCEPT AS SET FORTH IN THIS AGREEMENT) 
              AND SUCH LISTINGS DO NOT CONSTITUTE AN OFFER FROM THE COMPANY. PLEASE USE CAUTION AND COMMON SENSE WHEN BUYING, SELLING, 
              LEASING, HIRING OR OTHERWISE PARTICIPATING IN ANY TRANSACTION REGARDING A LISTING, OR MAKING OR RECEIVING 
              PAYMENT FOR ANY LISTING.
              <br/>The availability or promotion of a Listing through the Service does not imply our endorsement of the Listing or the provider. 
                We make no representations whatsoever about any Listings, or any users. 
                Information about and the availability of any Listing are subject to change at any time without notice. 
                You must ascertain and obey all applicable laws regarding the marketing, promotion, sale, purchase, delivery, 
                receipt, possession and use of the subject of any Listing. We reserve the right to remove any Listing for any reason.
              <br/>You represent and warrant that you have the necessary authority and permissions to post any Listing,to enter into any transaction or 
              to make any transfer relating to a Listing, including, if you are not of legal age to do so, by obtaining proper parental or guardian consent. 
              The legal age is 18 in most states.
            </p>

            <p>5. Submissions.</p>
            <p>You may submit information that could be used to personally identify you through Listings, 
            the creation of profile pages, submissions in forums, connection via a social network, message boards, 
            chat, comments, or various other interactive channels of the Service(each, a “Submission”). 
            You are responsible for any Submission you make. We have no control over and are not responsible for any 
            use or misuse (including any distribution) by any third party of your Submissions.</p>

            <p>6. License.</p>

            <p>You retain ownership of your Submissions but for each Submission you make you hereby grant to us a worldwide, 
              royalty-free, fully paid-up, non-exclusive, perpetual, irrevocable, transferable and fully sublicensable 
              (through multiple tiers) license, without additional consideration to you or any third party, to reproduce, distribute, 
              perform and display (publicly or otherwise), create derivative works of, adapt, modify and otherwise use, analyze and exploit each Submission, 
              in any format or media now known or hereafter developed, and for any purpose (including promotional purposes, such as testimonials).
              <br/>In addition, if you provide to us any ideas, proposals, suggestions or other materials (“Feedback”), whether related to the Service or otherwise, 
              such Feedback will be deemed a Submission, and you hereby acknowledge and agree that such Feedback is not confidential and that your provision of 
              such Feedback is gratuitous, unsolicited and made without restriction, and does not create any obligation whatsoever by us.
              <br/>You represent and warrant that you have all right and title necessary to grant the licenses granted in this section, 
              and that your Submissions, and your provision thereof through and in connection with the Service, are complete and accurate, 
              and are not fraudulent, tortious or otherwise in violation of any applicable law or any right of any third party. 
              You further irrevocably waive any “moral rights” or other rights with respect to attribution of authorship or integrity of materials 
              regarding each Submission that you may have under any applicable law under any legal theory.</p>

            <p>7. Monitoring.</p>

            <p>We may (but have no obligation to) monitor (either directly or using software), evaluate, 
              alter or remove Submissions before or after they appear on the Service, or analyze your access 
              to or use of the Service. Subject to our Privacy Policy, you agree that we may disclose any and 
              all information regarding your access to and use of the Service to anyone for any reason or 
              purpose.</p>

            <p>8. Featured Listings and Subscriptions.</p>

            <p>We may provide certain enhanced features (such as the featuring your Listing in the feed) for a fee (“Fees”) 
              in connection with the Service (“Paid Services”). All Fees are set out and described in the App and are 
              denominated in U.S. dollars and are exclusive of any applicable taxes. Payments are processed through the Google Play 
              or iTunes app store from which you originally downloaded the App. You may access the applicable “in-app” purchase rules 
              and policies directly from the app stores. All billing and refund inquiries must be directed to the applicable app store. 
              Delivery of the Paid Services is provided immediately upon purchase.
              <br/>Certain of the Paid Services may be offered on a subscription basis with auto-renewing payments 
              (“Subscription Services”). The billing period for each type of subscription service will be as specified in the 
              App or Site at the time of purchase. You can manage your subscriptions from your account in the Google Play or iTunes app store. 
              To cancel any Subscription Service, you must submit your cancellation through the applicable app store. You must cancel a Subscription 
              Service before the start of the next billing period in order to avoid charges for the next billing period’s fees. 
              Following any cancellation, you will continue to have access to the Subscription Services through the end of 
              your current billing period and then the Subscription Service will terminate automatically. 
              If you delete the app or the account on which the subscription was applied, the subscription will be fully consumed, 
              even if it is time-dependent and the billing period has not elapsed.
              <br/>We reserve the right to modify the Fees from time to time in our sole discretion. 
              Any changes in the Fees will apply to the next billing period. Except as provided above, or as otherwise expressly agreed upon by us, 
              all sales of Paid Services (including any Subscription Services) are final and there are no refunds. 
              There are no refunds or credits for partially used Subscription Services periods.</p>

            <p>9. Payments Through BURGAIN.</p>

            <p>Where available, a buyer and seller may pay with and accept credit cards and other electronic payment methods 
              (each an “Electronic Payment Method”) through the Service. Use of an Electronic Payment Method is subject 
              to the terms and conditions of such third party providers (such as Apple through ApplePay). 
              BURGAIN, in its sole discretion, may from time to time impose limits on your ability to make and/or 
              receive payments through the BURGAIN Payments. Additionally, third parties may impose their own limits and limitations 
              on a seller’s use of the BURGAIN Payments.
              <br/> All purchases made using BURGAIN Payments are made directly between the buyer and the seller 
              when they complete their purchase and sale transaction, pursuant to the terms they determine. 
              We are not a party to purchase and sale transactions completed using BURGAIN Payments, and disclaims any and all 
              responsibility to facilitate such transactions, except to provide an interface through which you can provide your.
              <br/>Electronic Payment Method to a third party to process on behalf of the seller. 
              By releasing payment to the seller, the buyer confirms that they are in possession of the item, have inspected it, 
              and that the item is acceptable. You agree to pay the service fees (“Service Fees”) described in the FAQs for the sales transactions 
              you make using BURGAIN Payments. The Service Fees include Electronic Payment Method processing fees to BURGAIN’s payment processor and 
              service fees to BURGAIN. We reserve the right to change the Service Fees from time to time.
              <br/>We are not liable for funds held within a seller''s account, should they not provide us with payout information 
              (or provide us with incorrect payment information). We are not responsible for an incorrect payout that results in a successful, 
              irretrievable payout to a third party as the result of your providing incorrect information.
              <br/>Upon completion of a sale in which the buyer uses BURGAIN Payments, 
              if you have not previously set up an account with the payments provider, then you must do so in accordance with their 
              specified requirements. Your right and/or ability to receive sales proceeds via BURGAIN Payments may be revoked, disabled or 
              limited if the purchase or sale violates this Agreement. It is your responsibility to determine what, if any, taxes apply to each 
              transaction you complete via the Service, including, for example, sales, use, value added, and similar taxes. 
              It is also your responsibility to withhold, collect, report and remit the correct taxes to the appropriate 
              tax authorities. We are not responsible for withholding, collecting, reporting, or remitting any sales, use, value added, 
              or similar tax arising from any transaction you complete via the Service.
              <br/>Offers may be canceled by us for any reason prior to a buyer releasing their payment to a seller. 
              We cannot provide protection or support for payments released to a seller before the buyer has possession of the item. 
              Any decision made by BURGAIN in regards to resolving a dispute is final and binding.</p>

            <p>10. Your Limited Rights.</p>

            <p>The App is licensed (not sold) to end users. Subject to your compliance with this Agreement, 
              and solely for so long as you are permitted by Company to use the App, we hereby permit you, on a limited, 
              non-exclusive, revocable, non-transferable, non-sublicensable basis, to install and use the App on a mobile device 
              that you own or control, solely for your use. If you fail to comply with any of the terms or conditions of this Agreement, 
              (i) you must immediately cease using the App, (ii) you must remove (that is, uninstall and delete) the App from your mobile 
              device and (iii) you are prohibited from using the App on any mobile device until such time as we grant you explicit 
              permission to use the App again. Please note that if you do not accept the system permissions that the App requires 
              from time to time, you may not be able to use the App or certain of its functionalities. You are responsible for obtaining, 
              maintaining and paying for all hardware and all telecommunications and other services needed to use the Service.
              <br/> In addition, subject to your compliance with this Agreement, and solely for so long as you are permitted by 
              Company to use the Site, you may view one (1) copy of any portion of the Site to which we provide you access under this 
              Agreement, on any single device, solely for your personal, non-commercial use.</p>

            <p>11. Company’s Proprietary Rights.</p>

            <p>We own the Service, which is protected by proprietary rights and laws. Our trade names, trademarks and service marks 
              include BURGAIN and any associated logos. All trade names, trademarks, service marks and logos on the Service not owned by 
              us are the property of their respective owners. You may not use our trade names, trademarks, service marks or logos in connection with 
              any product or service that is not ours, or in any manner that is likely to cause confusion. Nothing contained on the 
              Service should be construed as granting any right to use any trade names, trademarks, service marks or logos without 
              the express prior written consent of the owner.</p>

            <p>12. Third Party Materials.</p>

            <p>Though your use of the Service, you may have access to certain information, products, services and other materials made available 
              by third parties, including Listings and other Submissions (“Third Party Materials”), or allow for the routing or transmission of such 
              Third Party Materials.
              <br/>We do not control or endorse, and are not responsible for, any Third Party Materials and make no representations or warranties about them. 
              We may not monitor Third Party Materials, and we may block or disable access to any Third Party Materials through the Service at any time. 
              The availability of any Third Party Materials through the Service does not imply our endorsement of, or our affiliation with, any provider of Third Party Materials.
              <br/>YOU USE THIRD PARTY MATERIALS AT YOUR OWN RISK AND IS SUBJECT TO ANY ADDITIONAL TERMS OR POLICIES APPLICABLE TO SUCH THIRD PARTY MATERIALS (SUCH AS TERMS OF SERVICE 
              OR PRIVACY POLICIES OF THE PROVIDERS OF SUCH THIRD PARTY MATERIALS).</p>

            <p>13. Promotions.</p>

            <p>Any sweepstakes, contests, raffles, surveys, games or similar promotions (collectively, “Promotions”) made available through the Service may be governed by rules that are separate 
              from this Agreement. If you participate in any Promotions, please review the applicable rules. If the rules for a Promotion conflict with this Agreement, 
              the Promotion rules will govern.</p>

            <p>14. Disclaimer of Warranties.</p>

            <p>TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW: 
              (A) THE SERVICE AND ANY THIRD PARTY MATERIALS ARE MADE AVAILABLE TO YOU BY US ON AN “AS IS,” “WHERE IS” AND “WHERE AVAILABLE” BASIS, WITHOUT ANY WARRANTIES BY COMPANY OF ANY KIND, 
              WHETHER EXPRESS, IMPLIED OR STATUTORY; AND (B) COMPANY DISCLAIMS ALL WARRANTIES WITH RESPECT TO THE SERVICE AND ANY LISTINGS AND THIRD PARTY MATERIALS, 
              INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND TITLE. ALL DISCLAIMERS OF ANY KIND 
              (INCLUDING IN THIS SECTION AND ELSEWHERE IN THIS AGREEMENT) ARE MADE FOR THE BENEFIT OF BOTH COMPANY AND ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, DIRECTORS, OFFICERS, EMPLOYEES, 
              AFFILIATES, AGENTS, REPRESENTATIVES, LICENSORS, SUPPLIERS AND SERVICE PROVIDERS (COLLECTIVELY, THE “AFFILIATED ENTITIES”), AND THEIR RESPECTIVE SUCCESSORS AND ASSIGNS.
              <br/>We do not guarantee that the Service is or will remain available updated, complete, correct, secure, or that access to the Service will be uninterrupted. 
              The Service may include inaccuracies, errors, and materials that violate or conflict with this Agreement. Additionally, 
              third parties may make unauthorized alterations to the Service. If you become aware of any such alteration, contact us at info@burgain.com with a description of such alteration 
              and its location on the Service.</p>

            <p>15. Limitation of Liability.</p>
            <p>TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW: 
              (A) COMPANY WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES OF ANY KIND, UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), 
              STRICT LIABILITY OR OTHER THEORY, INCLUDING DAMAGES FOR LOSS OF PROFITS, USE OR DATA, LOSS OF OTHER INTANGIBLES, LOSS OF SECURITY OF SUBMISSIONS (INCLUDING UNAUTHORIZED INTERCEPTION BY THIRD PARTIES OF ANY SUBMISSIONS), 
              EVEN IF ADVISED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES; 
              (B) WITHOUT LIMITING THE FOREGOING, COMPANY WILL NOT BE LIABLE FOR DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE OR FROM ANY LISTINGS OR TRANSACTIONS 
              OR TRANSFERS RELATING TO LISTINGS, OR FROM ANY THIRD PARTY MATERIALS, INCLUDING FROM ANY DISPUTE WITH ANY OTHER USER OF THE SERVICE; (C) YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION 
              WITH THE SERVICE OR ANY THIRD PARTY MATERIALS IS TO STOP USING THE SERVICE; AND (D) THE MAXIMUM AGGREGATE LIABILITY OF COMPANY FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) 
              OR OTHERWISE, SHALL BE THE GREATER OF (I) THE TOTAL AMOUNT, IF ANY, PAID BY YOU TO COMPANY TO USE THE SERVICE, AND (II) TWENTY-FIVE U.S. DOLLARS ($25.00). ALL LIMITATIONS OF LIABILITY OF ANY KIND 
              (INCLUDING IN THIS SECTION AND ELSEWHERE IN THIS AGREEMENT) ARE MADE FOR THE BENEFIT OF BOTH COMPANY AND THE AFFILIATED ENTITIES, AND THEIR RESPECTIVE SUCCESSORS AND ASSIGNS.</p>

            <p>16. Indemnity.</p>
            <p>To the fullest extent permitted under applicable law, you agree to defend, indemnify and hold harmless Company and the Affiliated Entities, and their respective successors and assigns, 
              from and against all claims, liabilities, damages, judgments, awards, losses, costs, expenses and fees (including attorneys’ fees) arising out of or relating to 
              (a) your use of, or activities in connection with, the Service (including all Submissions); (b) any Listings, transactions or transfers relating to Listings, or disputes with other users of the Service; and 
              (c) any violation or alleged violation of this Agreement by you.</p>

            <p>17. Termination.</p>
            <p>This Agreement is effective until terminated. The company may terminate or suspend your use of the Service at any time and without prior notice, for any or no reason. Upon any such termination or suspension, your right to use the Service will immediately cease, and Company may take technical and/or other measures to block your access to the Service. Sections [2–3, 9, 12–13 and 15–24] shall survive any expiration or termination of this Agreement.</p>

            <p>18. Governing Law; Arbitration.</p>
            <p>The terms of this Agreement are governed by the laws of the United States (including federal arbitration law) and the State of New York, without regard to its principles of conflicts of law, and regardless of your location. EXCEPT FOR DISPUTES THAT QUALIFY FOR SMALL CLAIMS COURT, ALL DISPUTES ARISING OUT OF OR RELATED TO THIS AGREEMENT OR ANY ASPECT OF THE RELATIONSHIP BETWEEN YOU AND COMPANY, WHETHER BASED IN CONTRACT, TORT, STATUTE, FRAUD, MISREPRESENTATION OR ANY OTHER LEGAL THEORY, WILL BE RESOLVED THROUGH FINAL AND BINDING ARBITRATION BEFORE A NEUTRAL ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY AND YOU AGREE THAT COMPANY AND YOU ARE EACH WAIVING THE RIGHT TO TRIAL BY A JURY. EXCEPT AS PROVIDED BELOW REGARDING THE CLASS ACTION WAIVER, SUCH DISPUTES INCLUDE, WITHOUT LIMITATION, DISPUTES ARISING OUT OF OR RELATING TO INTERPRETATION OR APPLICATION OF THIS ARBITRATION PROVISION, INCLUDING THE ENFORCEABILITY, REVOCABILITY OR VALIDITY OF THE ARBITRATION PROVISION OR ANY PORTION OF THE ARBITRATION PROVISION. ALL SUCH MATTERS SHALL BE DECIDED BY AN ARBITRATOR AND NOT BY A COURT OR JUDGE. HOWEVER, AS SET FORTH BELOW, THE PRECEDING ARBITRATION REQUIREMENT SHALL NOT APPLY TO DISPUTES TO THE EXTENT RELATING TO THE INTERPRETATION OR APPLICATION OF THE CLASS ACTION WAIVER BELOW, INCLUDING ITS ENFORCEABILITY, REVOCABILITY OR VALIDITY.
              <br/>YOU AGREE THAT ANY ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED AND YOU ARE AGREEING TO GIVE UP THE ABILITY TO PARTICIPATE IN A CLASS ACTION. Notwithstanding anything to the contrary in this Section or any other provision of this Agreement or in the American Arbitration Association’s Consumer Arbitration Rules, disputes regarding the enforceability, revocability or validity of the foregoing class action waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. In any case in which (1) the dispute is filed as a class, collective, or representative action, and (2) there is a final judicial determination that all or part of such class action waiver is unenforceable, then the class, collective, and/or representative action, to that extent, must be litigated in a civil court of competent jurisdiction, but the portion of such class action waiver that is enforceable shall be enforced in arbitration.
              <br/>The arbitration will be administered by the American Arbitration Association under its Consumer Arbitration Rules, as amended by this Agreement. The Consumer Arbitration Rules are available online https://www.adr.org/consumer. The arbitrator will conduct hearings, if any, by teleconference or videoconference, rather than by personal appearances, unless the arbitrator determines upon request by you or by us that an in-person hearing is appropriate. Any in-person appearances will be held at a location which is reasonably convenient to both parties with due consideration of their ability to travel and other pertinent circumstances. If the parties are unable to agree on a location, such determination should be made by the AAA or by the arbitrator. The arbitrator’s decision will follow the terms of this Agreement and will be final and binding. The arbitrator will have authority to award temporary, interim or permanent injunctive relief or relief providing for specific performance of this Agreement, but only to the extent necessary to provide relief warranted by the individual claim before the arbitrator. The award rendered by the arbitrator may be confirmed and enforced in any court having jurisdiction thereof. Notwithstanding any of the foregoing, nothing in this Agreement will preclude you from bringing issues to the attention of federal, state or local agencies and, if the law allows, they can seek relief against us for you.</p>

            <p>19. Information or Complaints.</p>
            <p>If you have a question or complaint regarding the Service, please send an e-mail to info@burgain.com. You may also contact us by writing to P.O Box 924, New York, NY 10014, or by calling us at 347-433-8912. Please note that e-mail communications will not necessarily be secure; accordingly, you should not include credit card information or other sensitive information in your e-mail correspondence with us. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.</p>
            
            <p>20. Copyright Infringement Claims.</p>
            <p>The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides a process for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that materials available on the Service infringe your copyright, you (or your agent) may send the Company a written notice by mail, e-mail or fax, requesting that the Company remove or block access to such material. If you believe in good faith that someone has wrongly filed a notice of copyright infringement against you, the DMCA permits you to send to Company a counter-notice. Notices and counter-notices must meet the statutory requirements imposed of the DMCA. We suggest that you consult your legal advisor before filing a DMCA notice or counter-notice.</p>

            <p>21. Export Controls.</p>
            <p>You are responsible for complying with United States export controls and for any violation of such controls, including any United States embargoes or other federal rules and regulations restricting exports. You represent, warrant and covenant that you are not (a) located in, or a resident or a national of, any country subject to a U.S. government embargo or other restriction, or that has been designated by the U.S. government as a “terrorist supporting” country; or (b) on any of the U.S. government lists of restricted end users.</p>

            <p>22. Jurisdictional Issues.</p>
            <p>The Service is controlled or operated (or both) from the United States, and is not intended to be subject Company to any non-U.S. jurisdiction or law. The Service may not be appropriate or available for use in some non-U.S. jurisdictions. We may limit the Service’s availability at any time, in whole or in part, to any person, geographic area or jurisdiction that we choose.</p>

            <p>23. Changes.</p>
            <p>We may change this Agreement from time to time by notifying you of such changes by any reasonable means, including by posting a revised Agreement through the Service. Any such changes will not apply to any dispute between you and us arising prior to the date on which we posted the revised Agreement incorporating such changes, or otherwise notified you of such changes.
            <br/>Your use of the Service following any changes to this Agreement will constitute your acceptance of such changes. The “Last Updated” legend above indicates when this Agreement was last changed. We may, at any time and without liability, modify or discontinue all or part of the Service; charge, modify or waive any fees required to use the Service; or offer opportunities to some or all Service users.</p>

            <p>24. Miscellaneous.</p>
            <p>his Agreement does not, and shall not be construed to, create any partnership, joint venture, employer-employee, agency or franchisor-franchisee relationship between you and Company. If any provision of this Agreement is found to be unlawful, void or for any reason unenforceable, that provision will be deemed severable from this Agreement and will not affect the validity and enforceability of any remaining provision. You may not assign, transfer or sublicense any or all of your rights or obligations under this Agreement without our express prior written consent. We may assign, transfer or sublicense any or all of our rights or obligations under this Agreement without restriction. No waiver by either party of any breach or default under this Agreement will be deemed to be a waiver of any preceding or subsequent breach or default. Any heading, caption or section title contained herein is for convenience only, and in no way defines or explains any section or provision. All terms defined in the singular shall have the same meanings when used in the plural, where appropriate and unless otherwise specified. Any use of the term “including” or variations thereof in this Agreement shall be construed as if followed by the phrase “without limitation.” This Agreement, including any terms and conditions incorporated herein, is the entire agreement between you and Company relating to the subject matter hereof, and supersedes any and all prior or contemporaneous written or oral agreements or understandings between you and Company relating to such subject matter. Notices to you (including notices of changes to this Agreement) may be made via posting to the Service or by e-mail (including in each case via links), or by regular mail. Without limitation, a printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. The company will not be responsible for any failure to fulfill any obligation due to any cause beyond its control.</p>

            <p>25. Apple-Specific Terms.</p>
            <p>In addition to your agreement with the foregoing terms and conditions, and notwithstanding anything to the contrary herein, the following provisions apply with respect to your use of any version of the App compatible with the iOS operating system of Apple Inc. (“Apple”). Apple is not a party to this Agreement and does not own and is not responsible for the App. Apple is not providing any warranty for the App except, if applicable, to refund the purchase price for it. Apple is not responsible for maintenance or other support services for the App and shall not be responsible for any other claims, losses, liabilities, damages, costs or expenses with respect to the App, including any third-party product liability claims, claims that the App fails to conform to any applicable legal or regulatory requirement, claims arising under consumer protection or similar legislation, and claims with respect to intellectual property infringement. Any inquiries or complaints relating to the use of the App, including those pertaining to intellectual property rights, must be directed to Company in accordance with the “Information or Complaints” section above. The license you have been granted herein is limited to a non-transferable license to use the App on an Apple-branded product that runs Apple’s iOS operating system and is owned or controlled by you, or as otherwise permitted by the Usage Rules set forth in Apple’s App Store Terms of Service. In addition, you must comply with the terms of any third-party agreement applicable to you when using the App, such as your wireless data service agreement. Apple and Apple’s subsidiaries are third-party beneficiaries of this Agreement and, upon your acceptance of the terms and conditions of this Agreement, will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary thereof; notwithstanding the foregoing, Company’s right to enter into, rescind or terminate any variation, waiver or settlement under this Agreement is not subject to the consent of any third party.</p>
          </ShowMoreText>
        </div>
      </div>
      <div className="img2"> 
        <img src={require('../imgages/aboutus3.png')} alt="aboutus3" /> 
      </div>
    </div>
  )
}

export default AboutUs;

