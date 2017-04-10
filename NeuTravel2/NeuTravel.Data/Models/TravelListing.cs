using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NeuTravel.Data.Models
{
    public class TravelListing
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Project { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Purpose { get; set; }
        public string Status { get; set; }
    }
}