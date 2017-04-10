using NeuTravel.Data.Models;
using System.Collections.Generic;

namespace NeuTravel.Data.Interfaces
{
    public interface ITravelRepository
    {
        IEnumerable<TravelRequest> GetTravelListingByInitiatorId(int InitiatorId);
        IEnumerable<TravelListing> GetTravelListingByTravellerId(int TravellerId);
        void CreateTravelRequest(TravelRequest travelDetails);
        void CancelTravel(int TravelId);
        IEnumerable<string> GetListOfProjects();
        IEnumerable<string> GetListOfUsers();
    }
}
