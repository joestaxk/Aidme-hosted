import React from "react";
import "./Service.css";
import Pic from "../../assets/Services.png";
import Pref from "../../assets/prefer.png";
import Shop from "../../assets/shopping.png";
import Personal from "../../assets/personal.png";
import Handy from "../../assets/Handy.png";
import Clean from "../../assets/cleaning.png";
import Moving from "../../assets/moving.png";
import Office from "../../assets/office.png";
import Furniture from "../../assets/furniture.png";
import Party from "../../assets/party.png";
import Holiday from "../../assets/holiday.png";
import Yard from "../../assets/yard.png";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="service">
      <div className="service-img"></div>
      <section>
        <h3>Friendly assistance from a trusted Errander.</h3>
      </section>
      <div className="xl">
        <div>
          <img src={Pref} alt="img" />
          <h5>Preferred services</h5>
          <p>Let our helpful Erranders take care of your to-do list.</p>
          <span>Grocery shopping and delivery</span>
          <span>Dry cleaning and laundry pickup and delivery</span>
          <span>Prescription pickup and delivery</span>
          <span>Pet Food and supply delivery</span>
          <span>Mail and package pickup and delivery</span>
          <span>House cleaning and organization</span>
          <span>Meal preparation and delivery</span>
          <span>Personal shopping and styilng</span>
          <span>Home maintenance and repair</span>
          <span>Even planning and coordination</span>
          <span>Personal assistance tasks</span>
          <span>Office organization and management</span>
          <span>Online and order delivery</span>
          <span>Personal errand running</span>
          <span>Personal shopping for gifts</span>
          <span>Gift wrapping and delivery</span>
          <span>Get a quote for any home or office services</span>
          <span>Personal shopping and styling</span>
          <span>Personal chef services</span>
          <span>Personalized meal delivery services</span>
      
        </div>
        <div>
          <img src={Shop} alt="img" />
          <h5>Shopping + Delivery</h5>
          <p>Get anything from groceries to furniture.</p>
          <span>Delivery services</span>
          <span>Grocery shopping and delivery</span>
          <span>Running your Errands</span>
          <span>Christmas Tree delivery</span>
          <span>Wait in Line</span>
          <span>Delivery Big piece of Furniture</span>
          <span>Drop off Donations</span>
          <span>Contactless Delivery</span>
          <span>Pet Food Delivery</span>
          <span>Baby Food Delivery</span>
          <span>Return Items</span>
          <span>Wait for Delivery</span>
          <span>BreakFast Delivery</span>
          <span>Coffee Delivery</span>
        </div>
        <div>
          <img src={Personal} alt="img" />
          <h5>Personal Assistant</h5>
          <p>
            Hire a Errander to be your personal assistant on an hourly or
            long-term basis to assist you with errands.
          </p>
          <span>Personal Assistant</span>
          <span>Running your Errands</span>
          <span>Wait in Line</span>
          <span>Organization</span>
          <span>Organization Home</span>
          <span>Closet organization services</span>
          <span>Research</span>
          <span>Interior Design Service</span>
          <span>Virtual Assistance</span>
          <span>Dog Walking</span>
        </div>
        <div>
          <img src={Handy} alt="img" />
          <h5>Handy Man / Woman</h5>
          <p>Hire an errander for help around the house.</p>
          <span>Home Repairs</span>
          <span>Furniture Assembly TV Mounting</span>
          <span>Ceiling Fan Installation</span>
          <span>Smart Home Installation</span>
          <span>Heavy Lifting</span>
          <span>Install Air Conditioner</span>
          <span>Painting</span>
          <span>Plumbing</span>
          <span>Shelf Mounting</span>
          <span>Home Maintenance</span>
          <span>Hanging Curtains & Installing Blinds</span>
          <span>Drywall Repair Service</span>
          <span>Baby Proofing</span>
          <span>Yard Work Services</span>
          <span>Light Installation</span>
          <span>Electrical Help</span>
          <span>Carpentry Services</span>
          <span>Hang Pictures</span>
          <span>Mounting</span>
          <span>Cabinet Installation</span>
          <span>Wallpapering Service</span>
          <span>Fence Installation & Repair Services</span>
          <span>Deck Restoration Services</span>
          <span>Doorbell Installation</span>
          <span>Home Theater Installing</span>
        </div>
        <div>
          <img src={Clean} alt="img" />
          <h5>Cleaning</h5>
          <p>Erranders will make your home neat and sparkle.</p>
          <span>House Cleaning Services</span>
          <span>Deep Cleaning</span>
          <span>Disinfecting Services</span>
          <span>Move In Cleaning</span>
          <span>Move Out Cleaning</span>
          <span>Vacation Rental Cleaning</span>
          <span>Window Cleaning</span>
          <span>Carpet Cleaning Service</span>
          <span>Garage Cleaning</span>
          <span>One Time Cleaning Services</span>
          <span>Car Washing</span>
          <span>Laundry Help</span>
          <span>Pressure Washing</span>
          <span>Spring Cleaning</span>
        </div>
        <div>
          <img src={Moving} alt="img" />
          <h5>Moving service</h5>
          <p>
            From the heavy lifting to unpacking and organizing make your move
            with Aidme.
          </p>
          <span>Help Moving</span>
          <span>Packing Services & Help</span>
          <span>Unpacking Services</span>
          <span>Heavy Lifting</span>
          <span>Local Movers</span>
          <span>Junk Pickup</span>
          <span>Furniture Movers</span>
          <span>One Item Movers</span>
          <span>Storage Unit Moving</span>
          <span>Couch Removal</span>
          <span>Mattress Pick-Up & Removal</span>
          <span>Furniture Removal</span>
          <span>Pool Table Movers</span>
          <span>Appliance Removal</span>
          <span>Heavy Furniture Moving</span>
          <span>Rearrange Furniture</span>
          <span>Full Service Help Moving</span>
          <span>In-Home Furniture Move</span>
        </div>
        <div>
          <img src={Office} alt="img" />
          <h5>Office Services</h5>
          <p>Hire a Errander to help around the office!</p>
          <span>Office Cleaning</span>
          <span>Office Tech Setup</span>
          <span>Office Movers</span>
          <span>Office Supply & Snack Delivery</span>
          <span>Office Furniture Assembly</span>
          <span>Office Setup & Organization</span>
          <span>Office Administration</span>
          <span>Office Interior Design</span>
          <span>Moving Office Furniture</span>
          <span>Office Mounting Service</span>
        </div>
        <div>
          <img src={Holiday} alt="img" />
          <h5>Holiday</h5>
          <p>Erranders will make your holiday stress free for you.</p>
          <span>Gift Wrapping Services Hang Christmas Lights</span>
          <span>Christmas Tree Delivery</span>
          <span>Holiday Decorating</span>
          <span>Party Cleaning</span>
          <span>Holiday Tree Decorators</span>
          <span>Toy Assembly Service</span>
          <span>Wait in Line</span>
          <span>Christmas Tree Removal</span>
        </div>
        <div>
          <img src={Yard} alt="img" />
          <h5>Yard work Services</h5>
          <p>Hire a Errander to assist with yardwork & landscaping!</p>
          <span>Gardening Services</span>
          <span>Weed Removal</span>
          <span>Lawn Care Services</span>
          <span>Lawn Mowing Services</span>
          <span>Landscaping Services</span>
          <span>Gutter Cleaning</span>
          <span>Tree Trimming Service</span>
          <span>Vacation Plant Watering</span>
          <span>Patio Cleaning</span>
          <span>Hot Tub Cleaning</span>
          <span>Fence Installation & Repair Services</span>
          <span>Deck Restoration Services</span>
          <span>Patio Furniture Assembly</span>
          <span>Fence Staining</span>
          <span>Mulching Services</span>
          <span>Lawn Fertilizer Service</span>
          <span>Hedge Trimming Service</span>
          <span>Outdoor Party Setup</span>
          <span>Urban Gardening Service</span>
          <span>Leaf Raking & Removal</span>
          <span>Produce Gardening</span>
          <span>Hose Installation</span>
          <span>Shed Maintenance</span>
          <span>Pressure Washing</span>
        </div>
        <div>
          <img src={Party} alt="img" />
          <h5>Parties + Events</h5>
          <p>We'll assist in ensuring the success of your party.</p>
          <span>Bar tending Help Cooking & Serving Food</span>
          <span>Shop For & Install Decorations</span>
          <span>Entertain Guests .</span>
          <span>Event Help & Wait Staff</span>
          <span>Event Decorating</span>
          <span>Event Staffing</span>
          <span>Birthday and Party Planning</span>
          <span>Event Marketing</span>
          <span>Research</span>
          <span>
            Assisting with the cleanup and breakdown of the event space.
          </span>
          <span>Helping to create, plan and execute the event from A-Z</span>
          <span>Managing registration and ticketing for the event.</span>
          <span>Coordinating transportation and parking for guests</span>
          <span>
            Handling any issues or problems that may arise during the event
          </span>
        </div>

        <div>
          <img src={Furniture} alt="img" />
          <h5>Furniture Assembly</h5>
          <p>Furniture assemblers assistant</p>
          <span>Furniture Assembly</span>
          <span>Patio Furniture Assembly</span>
          <span>Desk Assembly</span>
          <span>Dresser Assembly</span>
          <span>Bed Assembly</span>
          <span>Bookshelf Assembly</span>
          <span>Couch Assembly</span>
          <span>Chair Assembly</span>
          <span>Wardrobe Assembly</span>
          <span>Table Assembly</span>
          <span>Disassemble furniture</span>
        </div>
      </div>
    </div>
  );
}

export default Service;
