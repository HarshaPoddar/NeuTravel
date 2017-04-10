using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NeuTravel.Data.Models
{
    public class TravelRequest
    {
        public Nullable<int> TravelId { get; set; }
        public string InitiatorName { get; set; }
        public string EmployeeName { get; set; }
        public DateTime InitiatedDate { get; set; }
        public string ProjectName { get; set; }
        public string TravelFrom { get; set; }
        public string TravelTo { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string PurposeOfTravel { get; set; }
        public string Status { get; set; }

    }
}