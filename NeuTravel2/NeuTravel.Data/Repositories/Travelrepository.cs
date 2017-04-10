using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NeuTravel.Data.Models;
using NeuTravel.Data.Interfaces;
using NeuTravel.Data;
using System.Data.SqlClient;

namespace NeuTravel.Data.Repositories
{

    public class TravelRepository : ITravelRepository
    {
        Entities Context = new Entities();

        public IEnumerable<TravelRequest> GetTravelListingByInitiatorId(int InitiatorId)
        {
            return Context.Travels.Where(c => c.TravelProgress.TravelInitiatedBy == InitiatorId).Select(d => new TravelRequest
            {
                InitiatorName = d.User.UserName,
                InitiatedDate = d.TravelProgress.TravelInitiatedDate,
                TravelId = d.TravelId,
                EmployeeName = d.User1.FirstName + " " + d.User1.LastName,
                TravelFrom = d.TravelDetail.TravelFrom,
                TravelTo = d.TravelDetail.TravelTo,
                StartDate = d.TravelDetail.StartDate,
                EndDate = d.TravelDetail.EndDate,
                ProjectName = d.TravelDetail.Project.ProjectName,
                PurposeOfTravel = d.TravelDetail.Purpose,
                Status = (d.CancelledBy != null) ? "Cancelled" : ((d.TravelProgress.TravellerConfirmationDate != null) ? "Completed" : "In Progress")
            }).ToList();
        }

        public IEnumerable<TravelListing> GetTravelListingByTravellerId(int TravellerId)
        {
            return Context.Travels.Where(c => c.TravelProgress.TravelInitiatedBy == TravellerId).Select(d => new TravelListing
            {
                FirstName = Context.Users.Select(c => c.FirstName).FirstOrDefault(),
                LastName = Context.Users.Select(c => c.LastName).FirstOrDefault(),
                From = d.TravelDetail.TravelFrom,
                To = d.TravelDetail.TravelTo,
                StartDate = d.TravelDetail.StartDate,
                EndDate = d.TravelDetail.EndDate,
                Project = d.TravelDetail.Project.ProjectName,
                Purpose = d.TravelDetail.Purpose,
                Status = (d.CancelledBy != null) ? "Cancelled" : ((d.TravelProgress.TravellerConfirmationDate != null) ? "Completed" : "In Progress")
            }).ToList();
        }

        public void CreateTravelRequest(TravelRequest travelDetails)
        {
            Context.TravelDetails.Add(new TravelDetail
            {
                TravelFrom = travelDetails.TravelFrom,
                TravelTo = travelDetails.TravelTo,
                StartDate = travelDetails.StartDate,
                EndDate = travelDetails.EndDate,
                Purpose = travelDetails.PurposeOfTravel,
                ProjectId = Context.Projects.Where(c => c.ProjectName == travelDetails.ProjectName).Select(c => c.ProjectId).FirstOrDefault(),
            });
            Context.SaveChanges();


            Context.TravelProgresses.Add(new TravelProgress
            {
                TravelInitiatedBy = Context.Users.Where(c => c.UserName == travelDetails.InitiatorName).Select(x => x.UserId).FirstOrDefault(),
                TravelInitiatedDate = travelDetails.InitiatedDate,
            });

            Context.SaveChanges();
            travelDetails.EmployeeName = travelDetails.EmployeeName.Replace(' ', '.');
            Context.Travels.Add(new Travel
            {
                TravellerId = Context.Users.Where(c => c.UserName == travelDetails.EmployeeName).Select(x => x.UserId).FirstOrDefault(),
                TravelDetailsId = Context.TravelDetails.Where(c => c.TravelFrom == travelDetails.TravelFrom && c.StartDate == travelDetails.StartDate).Select(x => x.TravelDetailsId).FirstOrDefault(),
                TravelProgressId = Context.TravelProgresses.Select(z => z.TravelProgressId).FirstOrDefault(),
                IsCancelled = "Initiated",
            });
            Context.SaveChanges();
        }

        public void CancelTravel(int TravelId)
        {
            Travel travel = Context.Travels.Find(TravelId);
            Context.Travels.Remove(travel);
            Context.SaveChanges();
          
        }

        public IEnumerable<string> GetListOfProjects()
        {
            List<string> projectList = new List<string>();
            foreach (var project in Context.Projects)
            {
                projectList.Add(project.ProjectName);
            }
            return projectList;
        }

        public IEnumerable<string> GetListOfUsers()
        {
            List<string> userList = new List<string>();
            foreach (var user in Context.Users)
            {
                var firstName = user.FirstName;
                var LastName = user.LastName;
                var fullName = string.Format(firstName + " " + LastName);
                userList.Add(fullName);
            }
            return userList;
        }
        public IEnumerable<TravelRequest> GetViewDetails(int travelId)
        {
            return Context.Travels.Where(c => c.TravelId == travelId).Select(d => new TravelRequest
            {
                TravelId = travelId,
                InitiatorName = null,
                EmployeeName = d.User1.UserName,
                InitiatedDate = d.TravelProgress.TravelInitiatedDate,
                ProjectName = d.TravelDetail.Project.ProjectName,
                TravelFrom = d.TravelDetail.TravelFrom,
                TravelTo = d.TravelDetail.TravelTo,
                StartDate = d.TravelDetail.StartDate,
                EndDate = d.TravelDetail.EndDate,
                PurposeOfTravel = d.TravelDetail.Purpose,
                Status = (d.CancelledBy != null) ? "Cancelled" : ((d.TravelProgress.TravellerConfirmationDate != null) ? "Completed" : "In Progress")
            });

        }
    }
}