//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NeuTravel.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Travel
    {
        public int TravelId { get; set; }
        public int TravellerId { get; set; }
        public int TravelDetailsId { get; set; }
        public int StatusId { get; set; }
        public int TravelProgressId { get; set; }
        public string IsCancelled { get; set; }
        public Nullable<DateTime> CancelledDate { get; set; }
        public Nullable<int> CancelledBy { get; set; }
        public Nullable<DateTime> LastModifiedDate { get; set; }
        public Nullable<int> LastModifiedBy { get; set; }
    
        public virtual User User { get; set; }
        public virtual TravelProgress TravelProgress { get; set; }
        public virtual TravelDetail TravelDetail { get; set; }
        public virtual User User1 { get; set; }
    }
}
