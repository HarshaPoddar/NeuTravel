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
    
    public partial class TravelProgress
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TravelProgress()
        {
            this.Travels = new HashSet<Travel>();
        }
    
        public int TravelProgressId { get; set; }
        public Nullable<int> TravelInitiatedBy { get; set; }
        public DateTime TravelInitiatedDate { get; set; }
        public Nullable<int> AccomodationBookedBy { get; set; }
        public Nullable<DateTime> AccomodationBookedDate { get; set; }
        public Nullable<int> FlightsBookedBy { get; set; }
        public Nullable<DateTime> FlightsBookedDate { get; set; }
        public Nullable<DateTime> TravellerConfirmationDate { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Travel> Travels { get; set; }
        public virtual User User { get; set; }
        public virtual User User1 { get; set; }
        public virtual User User2 { get; set; }
    }
}