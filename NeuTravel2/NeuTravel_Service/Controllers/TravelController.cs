using NeuTravel.Data.Interfaces;
using NeuTravel.Data.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;
using NeuTravel.Data;
using System.Web.Http.Cors;
using System.Web.Http.ModelBinding;
using Newtonsoft.Json;
using System.Globalization;

namespace NeuTravel_Service.Controllers
{
    public class TravelController : ApiController
    {
        private ITravelRepository _travelRepository;
        
        public TravelController(ITravelRepository travelRepository)
        {
            this._travelRepository = travelRepository;
        }

        [Route("api/GetTravelListingByInitiatorId/{InitiatorId}")]
        public IHttpActionResult GetTravelListingByInitiatorId(int InitiatorId)
        {
           // List<TravelListing> travelList = new List<TravelListing>();
            return Ok( _travelRepository.GetTravelListingByInitiatorId(InitiatorId));            
        }

        [Route("api/GetTravelListingByTravellerId/{travellerId}")]
        public IHttpActionResult GetTravelListingByTravellerId(int travellerId)
        {
            return Ok(_travelRepository.GetTravelListingByTravellerId(travellerId));
        }
        
        [HttpPost]
      [EnableCors(origins: "api/CreateRequest/{initiatorName}/{employeeName}/{projectName}/{travelFrom}/{travelTo}/{startDate}/{endDate}/{purposeOfTravel}", headers: "*", methods: "*")]
        [Route("api/CreateRequest/{initiatorName}/{employeeName}/{projectName}/{travelFrom}/{travelTo}/{startDate}/{endDate}/{purposeOfTravel}")]
        public void CreateTravelRequest(string initiatorName, string employeeName, string projectName, string travelFrom, string travelTo, DateTime startDate, DateTime endDate, string purposeOfTravel)
        {
            TravelRequest travelDetail = new TravelRequest
            {
                InitiatedDate = DateTime.Now,
                InitiatorName = initiatorName,
                EmployeeName = employeeName,
                ProjectName = projectName,
                TravelFrom = travelFrom,
                TravelTo = travelTo,
                StartDate = startDate.Date,
                EndDate = endDate.Date,
            PurposeOfTravel = purposeOfTravel
            };
            _travelRepository.CreateTravelRequest(travelDetail);

            }
        
        [HttpPost]
        [Route("api/CancelTravel/{TravelId}")]
        [EnableCors(origins: "api/CancelTravel/{TravelId}",headers: "*", methods: "*")]
        public void CancelTravel(int TravelId)
        {
            _travelRepository.CancelTravel(TravelId);
        }
        
        [Route("api/getUserList")]
        public IHttpActionResult GetUserList()
        {
            return Ok(_travelRepository.GetListOfUsers());
        }

        [Route("api/getProjectList")]
        public IHttpActionResult GetProjectList()
        {
            return Ok(_travelRepository.GetListOfProjects());
        }

        [Route("api/GetListOfCities")]
        public IHttpActionResult GetListOfCities()
        {
            string text = System.IO.File.ReadAllText(@"C:\Users\Harshvardhan.Poddar\Documents\NeuTravel Project\NeuTravel2\AngularProject\src\cities.json.txt");
            List<ListOfCities> cities = JsonConvert.DeserializeObject<List<ListOfCities>>(text);
            List<string> IndianCities = new List<string>();
            foreach (var item in cities)
            {
                IndianCities.Add(item.name);
            }
            return Ok(IndianCities);        }
    }
}
