'use client'
import Script from "next/script";
import { useEffect, useState } from "react";
import { Hero } from "../_components/Hero";

declare global {
  interface Window {
    fnames: string[];
    ftypes: string[];
  }
}

export default function MarketingForm() {
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    if (window) {
      window.fnames = ["EMAIL", "FNAME", "LNAME", "ADDRESS", "PHONE", "BIRTHDAY", "COMPANY"];
      window.ftypes = ["email", "text", "text", "address", "phone", "birthday", "text"];
    }
    setIsClient(true); // Set isClient to true after the first render to avoid hydration mismatch. This is because the `window` object is not available during SSR.
  }, []);

  return (
    <>
      <Hero
        heading="BE IN THE KNOW"
        subheading="Sign up for our newsletter to get tech tips, info about our events, and more."
        bkUrl="/images/faqs-bk.jpeg"
        position="40%"
      />
      {isClient && (
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <section className="flex flex-col items-center lg:gap-[2rem]">
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                  <style type="text/css">
                    #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
                    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                      We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                  </style>
                  <div id="mc_embed_signup">
                    <form 
                      action="https://grammerhub.us19.list-manage.com/subscribe/post?u=b2632c4077230304340a01cc2&amp;id=b550182bd6&amp;f_id=00d4c2e1f0" 
                      method="post" 
                      id="mc-embedded-subscribe-form" 
                      name="mc-embedded-subscribe-form" 
                      class="validate" 
                      target="_blank"
                    >
                      <div id="mc_embed_signup_scroll">
                        <h2>Subscribe</h2>
                        <div class="indicates-required">
                          <span class="asterisk">*</span> 
                          indicates required
                        </div>
                        <div class="mc-field-group">
                          <label for="mce-EMAIL">
                            Email Address 
                            <span class="asterisk">*</span>
                          </label>
                          <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" defaultValue="">
                        </div>
                        <div class="mc-field-group">
                          <label for="mce-FNAME">First Name </label>
                          <input type="text" name="FNAME" class=" text" id="mce-FNAME" defaultValue="">
                        </div>
                        <div class="mc-field-group">
                          <label for="mce-LNAME">Last Name </label>
                          <input type="text" name="LNAME" class=" text" id="mce-LNAME" defaultValue="">
                        </div>
                        <div class="mc-address-group">
                          <div class="mc-field-group">
                            <label for="mce-ADDRESS-addr1">Address </label>
                            <input type="text" maxlength="70" name="ADDRESS[addr1]" id="mce-ADDRESS-addr1" class="" defaultValue="">
                          </div>
                          <div class="mc-field-group">
                            <label for="mce-ADDRESS-addr2">Address Line 2</label>
                            <input type="text" maxlength="70" name="ADDRESS[addr2]" id="mce-ADDRESS-addr2" defaultValue="">
                          </div>
                          <div class="mc-address-fields-group">
                            <div class="mc-field-group">
                              <label for="mce-ADDRESS-city">City</label>
                              <input type="text" maxlength="40" name="ADDRESS[city]" id="mce-ADDRESS-city" class="" defaultValue="">
                            </div>
                            <div class="mc-field-group">
                              <label for="mce-ADDRESS-state">State/Province/Region</label>
                              <input type="text" maxlength="20" name="ADDRESS[state]" id="mce-ADDRESS-state" class="" defaultValue="">
                            </div>
                            <div class="mc-field-group">
                              <label for="mce-ADDRESS-zip">Postal / Zip Code</label>
                              <input type="text" maxlength="10" name="ADDRESS[zip]" id="mce-ADDRESS-zip" class="" defaultValue="">
                            </div>
                          </div>
                        </div>
                        <div class="mc-field-group">
                          <label for="mce-ADDRESS-country">Country</label>
                          <select name="ADDRESS[country]" id="mce-ADDRESS-country" class="">
                            <option defaultValue="Albania">Albania</option>
                            <option defaultValue="Algeria">Algeria</option>
                            <option defaultValue="Andorra">Andorra</option>
                            <option defaultValue="Angola">Angola</option>
                            <option defaultValue="Argentina">Argentina</option>
                            <option defaultValue="Armenia">Armenia</option>
                            <option defaultValue="Australia">Australia</option>
                            <option defaultValue="Austria">Austria</option>
                            <option defaultValue="Azerbaijan">Azerbaijan</option>
                            <option defaultValue="Bahamas">Bahamas</option>
                            <option defaultValue="Bahrain">Bahrain</option>
                            <option defaultValue="Bangladesh">Bangladesh</option>
                            <option defaultValue="Barbados">Barbados</option>
                            <option defaultValue="Belarus">Belarus</option>
                            <option defaultValue="Belgium">Belgium</option>
                            <option defaultValue="Belize">Belize</option>
                            <option defaultValue="Benin">Benin</option>
                            <option defaultValue="Bermuda">Bermuda</option>
                            <option defaultValue="Bhutan">Bhutan</option>
                            <option defaultValue="Bolivia">Bolivia</option>
                            <option defaultValue="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option defaultValue="Botswana">Botswana</option>
                            <option defaultValue="Brazil">Brazil</option>
                            <option defaultValue="Bulgaria">Bulgaria</option>
                            <option defaultValue="Burkina Faso">Burkina Faso</option>
                            <option defaultValue="Burundi">Burundi</option>
                            <option defaultValue="Cambodia">Cambodia</option>
                            <option defaultValue="Cameroon">Cameroon</option>
                            <option defaultValue="Canada">Canada</option>
                            <option defaultValue="Cape Verde">Cape Verde</option>
                            <option defaultValue="Cayman Islands">Cayman Islands</option>
                            <option defaultValue="Central African Republic">Central African Republic</option>
                            <option defaultValue="Chad">Chad</option>
                            <option defaultValue="Chile">Chile</option>
                            <option defaultValue="China">China</option>
                            <option defaultValue="Colombia">Colombia</option>
                            <option defaultValue="Congo">Congo</option>
                            <option defaultValue="Croatia">Croatia</option>
                            <option defaultValue="Cyprus">Cyprus</option>
                            <option defaultValue="Czech Republic">Czech Republic</option>
                            <option defaultValue="Denmark">Denmark</option>
                            <option defaultValue="Djibouti">Djibouti</option>
                            <option defaultValue="Ecuador">Ecuador</option>
                            <option defaultValue="Egypt">Egypt</option>
                            <option defaultValue="El Salvador">El Salvador</option>
                            <option defaultValue="Equatorial Guinea">Equatorial Guinea</option>
                            <option defaultValue="Eritrea">Eritrea</option>
                            <option defaultValue="Estonia">Estonia</option>
                            <option defaultValue="Ethiopia">Ethiopia</option>
                            <option defaultValue="Fiji">Fiji</option>
                            <option defaultValue="Finland">Finland</option>
                            <option defaultValue="France">France</option>
                            <option defaultValue="Gabon">Gabon</option>
                            <option defaultValue="Gambia">Gambia</option>
                            <option defaultValue="Georgia">Georgia</option>
                            <option defaultValue="Germany">Germany</option>
                            <option defaultValue="Ghana">Ghana</option>
                            <option defaultValue="Greece">Greece</option>
                            <option defaultValue="Guam">Guam</option>
                            <option defaultValue="Guinea">Guinea</option>
                            <option defaultValue="Guinea-Bissau">Guinea-Bissau</option>
                            <option defaultValue="Guyana">Guyana</option>
                            <option defaultValue="Honduras">Honduras</option>
                            <option defaultValue="Hong Kong">Hong Kong</option>
                            <option defaultValue="Hungary">Hungary</option>
                            <option defaultValue="Iceland">Iceland</option>
                            <option defaultValue="India">India</option>
                            <option defaultValue="Indonesia">Indonesia</option>
                            <option defaultValue="Ireland">Ireland</option>
                            <option defaultValue="Israel">Israel</option>
                            <option defaultValue="Italy">Italy</option>
                            <option defaultValue="Japan">Japan</option>
                            <option defaultValue="Jordan">Jordan</option>
                            <option defaultValue="Kazakhstan">Kazakhstan</option>
                            <option defaultValue="Kenya">Kenya</option>
                            <option defaultValue="Kuwait">Kuwait</option>
                            <option defaultValue="Kyrgyzstan">Kyrgyzstan</option>
                            <option defaultValue="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option defaultValue="Latvia">Latvia</option>
                            <option defaultValue="Lebanon">Lebanon</option>
                            <option defaultValue="Lesotho">Lesotho</option>
                            <option defaultValue="Liberia">Liberia</option>
                            <option defaultValue="Liechtenstein">Liechtenstein</option>
                            <option defaultValue="Lithuania">Lithuania</option>
                            <option defaultValue="Luxembourg">Luxembourg</option>
                            <option defaultValue="Macedonia">Macedonia</option>
                            <option defaultValue="Madagascar">Madagascar</option>
                            <option defaultValue="Malawi">Malawi</option>
                            <option defaultValue="Malaysia">Malaysia</option>
                            <option defaultValue="Maldives">Maldives</option>
                            <option defaultValue="Mali">Mali</option>
                            <option defaultValue="Malta">Malta</option>
                            <option defaultValue="Mauritania">Mauritania</option>
                            <option defaultValue="Mexico">Mexico</option>
                            <option defaultValue="Moldova">Moldova</option>
                            <option defaultValue="Monaco">Monaco</option>
                            <option defaultValue="Mongolia">Mongolia</option>
                            <option defaultValue="Morocco">Morocco</option>
                            <option defaultValue="Mozambique">Mozambique</option>
                            <option defaultValue="Namibia">Namibia</option>
                            <option defaultValue="Nepal">Nepal</option>
                            <option defaultValue="Netherlands">Netherlands</option>
                            <option defaultValue="Netherlands Antilles">Netherlands Antilles</option>
                            <option defaultValue="New Zealand">New Zealand</option>
                            <option defaultValue="Nicaragua">Nicaragua</option>
                            <option defaultValue="Niger">Niger</option>
                            <option defaultValue="Nigeria">Nigeria</option>
                            <option defaultValue="Norway">Norway</option>
                            <option defaultValue="Oman">Oman</option>
                            <option defaultValue="Pakistan">Pakistan</option>
                            <option defaultValue="Panama">Panama</option>
                            <option defaultValue="Paraguay">Paraguay</option>
                            <option defaultValue="Peru">Peru</option>
                            <option defaultValue="Philippines">Philippines</option>
                            <option defaultValue="Poland">Poland</option>
                            <option defaultValue="Portugal">Portugal</option>
                            <option defaultValue="Qatar">Qatar</option>
                            <option defaultValue="Reunion">Reunion</option>
                            <option defaultValue="Romania">Romania</option>
                            <option defaultValue="Russia">Russia</option>
                            <option defaultValue="Rwanda">Rwanda</option>
                            <option defaultValue="Samoa (Independent)">Samoa (Independent)</option>
                            <option defaultValue="Saudi Arabia">Saudi Arabia</option>
                            <option defaultValue="Senegal">Senegal</option>
                            <option defaultValue="Seychelles">Seychelles</option>
                            <option defaultValue="Sierra Leone">Sierra Leone</option>
                            <option defaultValue="Singapore">Singapore</option>
                            <option defaultValue="Slovakia">Slovakia</option>
                            <option defaultValue="Slovenia">Slovenia</option>
                            <option defaultValue="Somalia">Somalia</option>
                            <option defaultValue="South Africa">South Africa</option>
                            <option defaultValue="South Korea">South Korea</option>
                            <option defaultValue="Spain">Spain</option>
                            <option defaultValue="Sri Lanka">Sri Lanka</option>
                            <option defaultValue="Suriname">Suriname</option>
                            <option defaultValue="Swaziland">Swaziland</option>
                            <option defaultValue="Sweden">Sweden</option>
                            <option defaultValue="Switzerland">Switzerland</option>
                            <option defaultValue="Taiwan">Taiwan</option>
                            <option defaultValue="Tanzania">Tanzania</option>
                            <option defaultValue="Thailand">Thailand</option>
                            <option defaultValue="Togo">Togo</option>
                            <option defaultValue="Tunisia">Tunisia</option>
                            <option defaultValue="Turkiye">Turkiye</option>
                            <option defaultValue="Turkmenistan">Turkmenistan</option>
                            <option defaultValue="Uganda">Uganda</option>
                            <option defaultValue="Ukraine">Ukraine</option>
                            <option defaultValue="United Arab Emirates">United Arab Emirates</option>
                            <option defaultValue="Uruguay">Uruguay</option>
                            <option defaultValue="USA" selected="">USA</option>
                            <option defaultValue="Uzbekistan">Uzbekistan</option>
                            <option defaultValue="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                            <option defaultValue="Venezuela">Venezuela</option>
                            <option defaultValue="Vietnam">Vietnam</option>
                            <option defaultValue="Virgin Islands (British)">Virgin Islands (British)</option>
                            <option defaultValue="Yemen">Yemen</option>
                            <option defaultValue="Zambia">Zambia</option>
                            <option defaultValue="Zimbabwe">Zimbabwe</option>
                            <option defaultValue="Antigua And Barbuda">Antigua And Barbuda</option>
                            <option defaultValue="Anguilla">Anguilla</option>
                            <option defaultValue="American Samoa">American Samoa</option>
                            <option defaultValue="Aruba">Aruba</option>
                            <option defaultValue="Brunei Darussalam">Brunei Darussalam</option>
                            <option defaultValue="Bouvet Island">Bouvet Island</option>
                            <option defaultValue="Cook Islands">Cook Islands</option>
                            <option defaultValue="Christmas Island">Christmas Island</option>
                            <option defaultValue="Dominican Republic">Dominican Republic</option>
                            <option defaultValue="Western Sahara">Western Sahara</option>
                            <option defaultValue="Falkland Islands">Falkland Islands</option>
                            <option defaultValue="Faroe Islands">Faroe Islands</option>
                            <option defaultValue="Grenada">Grenada</option>
                            <option defaultValue="French Guiana">French Guiana</option>
                            <option defaultValue="Gibraltar">Gibraltar</option>
                            <option defaultValue="Greenland">Greenland</option>
                            <option defaultValue="Guadeloupe">Guadeloupe</option>
                            <option defaultValue="Guatemala">Guatemala</option>
                            <option defaultValue="Haiti">Haiti</option>
                            <option defaultValue="Jamaica">Jamaica</option>
                            <option defaultValue="Kiribati">Kiribati</option>
                            <option defaultValue="Comoros">Comoros</option>
                            <option defaultValue="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option defaultValue="Saint Lucia">Saint Lucia</option>
                            <option defaultValue="Marshall Islands">Marshall Islands</option>
                            <option defaultValue="Macau">Macau</option>
                            <option defaultValue="Martinique">Martinique</option>
                            <option defaultValue="Mauritius">Mauritius</option>
                            <option defaultValue="New Caledonia">New Caledonia</option>
                            <option defaultValue="Norfolk Island">Norfolk Island</option>
                            <option defaultValue="Nauru">Nauru</option>
                            <option defaultValue="Niue">Niue</option>
                            <option defaultValue="Papua New Guinea">Papua New Guinea</option>
                            <option defaultValue="Pitcairn">Pitcairn</option>
                            <option defaultValue="Palau">Palau</option>
                            <option defaultValue="Solomon Islands">Solomon Islands</option>
                            <option defaultValue="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                            <option defaultValue="San Marino">San Marino</option>
                            <option defaultValue="Tonga">Tonga</option>
                            <option defaultValue="Timor-Leste">Timor-Leste</option>
                            <option defaultValue="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option defaultValue="Tuvalu">Tuvalu</option>
                            <option defaultValue="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                            <option defaultValue="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                            <option defaultValue="Vanuatu">Vanuatu</option>
                            <option defaultValue="Mayotte">Mayotte</option>
                            <option defaultValue="Myanmar">Myanmar</option>
                            <option defaultValue="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option defaultValue="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                            <option defaultValue="Tajikistan">Tajikistan</option>
                            <option defaultValue="United Kingdom">United Kingdom</option>
                            <option defaultValue="Costa Rica">Costa Rica</option>
                            <option defaultValue="Guernsey">Guernsey</option>
                            <option defaultValue="North Korea">North Korea</option>
                            <option defaultValue="Afghanistan">Afghanistan</option>
                            <option defaultValue="Cote D'Ivoire">Cote D'Ivoire</option>
                            <option defaultValue="Cuba">Cuba</option>
                            <option defaultValue="French Polynesia">French Polynesia</option>
                            <option defaultValue="Iran">Iran</option>
                            <option defaultValue="Iraq">Iraq</option>
                            <option defaultValue="Libya">Libya</option>
                            <option defaultValue="Palestine">Palestine</option>
                            <option defaultValue="Syria">Syria</option>
                            <option defaultValue="Aaland Islands">Aaland Islands</option>
                            <option defaultValue="Turks &amp; Caicos Islands">Turks &amp; Caicos Islands</option>
                            <option defaultValue="Jersey  (Channel Islands)">Jersey  (Channel Islands)</option>
                            <option defaultValue="Dominica">Dominica</option>
                            <option defaultValue="Montenegro">Montenegro</option>
                            <option defaultValue="Sudan">Sudan</option>
                            <option defaultValue="Montserrat">Montserrat</option>
                            <option defaultValue="Curacao">Curacao</option>
                            <option defaultValue="Sint Maarten">Sint Maarten</option>
                            <option defaultValue="South Sudan">South Sudan</option>
                            <option defaultValue="Republic of Kosovo">Republic of Kosovo</option>
                            <option defaultValue="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                            <option defaultValue="Isle of Man">Isle of Man</option>
                            <option defaultValue="Saint Martin">Saint Martin</option>
                            <option defaultValue="Bonaire, Saint Eustatius and Saba">Bonaire, Saint Eustatius and Saba</option>
                            <option defaultValue="Serbia">Serbia</option>
                          </select>
                        </div>
                      </div>
                      <div class="mc-field-group">
                        <label for="mce-PHONE">Phone Number </label>
                        <input type="text" name="PHONE" class="REQ_CSS" id="mce-PHONE" defaultValue="">
                      </div>
                      <div class="mc-field-group size1of2">
                        <label for="mce-BIRTHDAY-month">Birthday </label>
                        <div class="datefield">
                          <span class="subfield monthfield">
                            <input 
                              class="birthday REQ_CSS" 
                              type="text" pattern="[0-9]*" 
                              placeholder="MM" size="2" 
                              maxlength="2" 
                              name="BIRTHDAY[month]" 
                              id="mce-BIRTHDAY-month" 
                              defaultValue=""
                            >
                          </span> 
                          <span class="subfield dayfield">
                            <input 
                              class="birthday 
                              REQ_CSS" 
                              type="text" 
                              pattern="[0-9]*" 
                              placeholder="DD" 
                              size="2" 
                              maxlength="2" 
                              name="BIRTHDAY[day]" 
                              id="mce-BIRTHDAY-day" 
                              defaultValue=""
                            >
                          </span>
                          <span class="small-meta nowrap">( mm / dd )</span>
                        </div>
                      </div>
                      <div id="mce-responses" class="clear foot">
                          <div class="response" id="mce-error-response" style="display: none;"></div>
                          <div class="response" id="mce-success-response" style="display: none;"></div>
                      </div>
                      <div aria-hidden="true" style="position: absolute; left: -5000px;">
                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                        <input type="text" name="b_b2632c4077230304340a01cc2_b550182bd6" tabindex="-1" defaultValue="">
                      </div>
                      <div class="optionalParent">
                        <div class="clear foot">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" defaultValue="Subscribe">
                          <p style="margin: 0px auto;">
                            <a href="http://eepurl.com/i8u_ws" title="Mailchimp - email marketing made easy and fun">
                              <span style="display: inline-block; background-color: transparent; border-radius: 4px;">
                                <img 
                                  class="refferal_badge" 
                                  src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                                  alt="Intuit Mailchimp" 
                                  style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"
                                >
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                  </div>
                  </form>
                </div>
              </div>
              `,
            }}
          />
        </section>
      </div>
      )}
      {/* Load the Mailchimp validation script separately */}
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="lazyOnload"
      />
    </>
  );
}
